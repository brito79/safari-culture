/**
 * List all databases in your MySQL RDS instance
 * This helps you find the correct database name to add to your secret
 * 
 * Usage: node list-databases.js
 */

const mysql = require('mysql2/promise');
const { SecretsManagerClient, GetSecretValueCommand } = require('@aws-sdk/client-secrets-manager');

async function listDatabases() {
  console.log('🔍 Discovering MySQL Databases\n');
  console.log('='.repeat(50));
  
  try {
    // Load environment variables
    require('dotenv').config({ path: '.env.local' });
    
    // Fetch secret
    console.log('\n✅ Step 1: Fetching credentials from AWS Secrets Manager...');
    const region = process.env.AWS_REGION || 'us-east-1';
    const secretName = process.env.DB_SECRET_NAME || 'wilderness-namibia-db';
    
    const client = new SecretsManagerClient({ region });
    const command = new GetSecretValueCommand({
      SecretId: secretName,
      VersionStage: 'AWSCURRENT',
    });
    
    const response = await client.send(command);
    const config = JSON.parse(response.SecretString);
    
    console.log('✓ Credentials retrieved');
    console.log(`✓ Connecting to: ${config.host}`);
    
    // Connect to MySQL (without specifying a database)
    console.log('\n✅ Step 2: Connecting to MySQL server...');
    const connection = await mysql.createConnection({
      host: config.host,
      user: config.username,
      password: config.password,
      port: config.port || 3306,
    });
    
    console.log('✓ Connected successfully!');
    
    // List all databases
    console.log('\n✅ Step 3: Listing all databases...\n');
    const [databases] = await connection.execute('SHOW DATABASES');
    
    console.log('📊 Available Databases:');
    console.log('─'.repeat(50));
    
    const systemDatabases = ['information_schema', 'mysql', 'performance_schema', 'sys'];
    const userDatabases = databases.filter(db => !systemDatabases.includes(db.Database));
    
    if (userDatabases.length > 0) {
      console.log('\n🎯 Your Databases (use one of these):');
      userDatabases.forEach(db => {
        console.log(`   • ${db.Database}`);
      });
      
      console.log('\n💡 Recommended Action:');
      console.log('   Update your AWS secret with one of the database names above.');
      console.log('   Add this field to your secret:');
      console.log(`   "database": "${userDatabases[0].Database}"`);
    } else {
      console.log('\n⚠️  No user databases found!');
      console.log('   You need to create a database first.');
      console.log('\n   To create a database, run:');
      console.log('   CREATE DATABASE wilderness_namibia;');
    }
    
    console.log('\n📋 All Databases (including system):');
    databases.forEach(db => {
      const isSystem = systemDatabases.includes(db.Database);
      console.log(`   ${isSystem ? '(system)' : '        '} ${db.Database}`);
    });
    
    await connection.end();
    console.log('\n' + '='.repeat(50));
    console.log('✅ Done!');
    
  } catch (error) {
    console.error('\n✗ Error:', error.message);
    
    if (error.code === 'ETIMEDOUT') {
      console.log('\n🔧 Troubleshooting ETIMEDOUT:');
      console.log('   1. Check RDS security group allows your IP on port 3306');
      console.log('   2. Ensure RDS is publicly accessible');
      console.log('   3. Verify your internet connection');
    } else if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      console.log('\n🔧 Troubleshooting Access Denied:');
      console.log('   1. Check username and password in AWS Secrets Manager');
      console.log('   2. Verify the user has proper permissions');
    }
    
    console.log('\n' + '='.repeat(50));
  }
}

listDatabases().catch(console.error);
