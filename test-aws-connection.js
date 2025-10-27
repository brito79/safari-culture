/**
 * AWS Connection Diagnostic Script
 * Run this to test your AWS credentials and Secrets Manager access
 * 
 * Usage: node test-aws-connection.js
 */

const { SecretsManagerClient, GetSecretValueCommand } = require('@aws-sdk/client-secrets-manager');

async function testAWSConnection() {
  console.log('🔍 AWS Connection Diagnostic Tool\n');
  console.log('='.repeat(50));
  
  // Step 1: Check environment variables
  console.log('\n✅ Step 1: Checking Environment Variables...');
  console.log('AWS_ACCESS_KEY_ID:', process.env.AWS_ACCESS_KEY_ID ? '✓ Set (hidden)' : '✗ Not set');
  console.log('AWS_SECRET_ACCESS_KEY:', process.env.AWS_SECRET_ACCESS_KEY ? '✓ Set (hidden)' : '✗ Not set');
  console.log('AWS_REGION:', process.env.AWS_REGION || 'Not set (will use default: us-east-1)');
  console.log('DB_SECRET_NAME:', process.env.DB_SECRET_NAME || 'Not set (will use default: wilderness-namibia-db)');
  
  if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
    console.log('\n⚠️  WARNING: AWS credentials not found in environment variables!');
    console.log('   The SDK will try to use AWS CLI credentials from ~/.aws/credentials');
  }
  
  // Step 2: Test Secrets Manager client creation
  console.log('\n✅ Step 2: Creating Secrets Manager Client...');
  try {
    const region = process.env.AWS_REGION || 'us-east-1';
    const client = new SecretsManagerClient({ region });
    console.log(`✓ Client created for region: ${region}`);
  } catch (error) {
    console.error('✗ Failed to create client:', error.message);
    return;
  }
  
  // Step 3: Try to fetch the secret
  console.log('\n✅ Step 3: Attempting to Fetch Secret...');
  const secretName = process.env.DB_SECRET_NAME || 'wilderness-namibia-db';
  const region = process.env.AWS_REGION || 'us-east-1';
  
  console.log(`Secret Name: ${secretName}`);
  console.log(`Region: ${region}`);
  
  try {
    const client = new SecretsManagerClient({ region });
    const command = new GetSecretValueCommand({
      SecretId: secretName,
      VersionStage: 'AWSCURRENT',
    });
    
    console.log('\nSending request to AWS Secrets Manager...');
    const response = await client.send(command);
    
    if (!response.SecretString) {
      console.error('✗ Secret retrieved but SecretString is empty');
      return;
    }
    
    console.log('✓ Secret retrieved successfully!\n');
    
    // Step 4: Parse and validate secret format
    console.log('✅ Step 4: Validating Secret Format...');
    try {
      const config = JSON.parse(response.SecretString);
      
      console.log('Secret contains:');
      console.log('  - host:', config.host ? '✓' : '✗ MISSING (REQUIRED)');
      console.log('  - username:', config.username ? '✓' : '✗ MISSING (REQUIRED)');
      console.log('  - password:', config.password ? '✓ (hidden)' : '✗ MISSING (REQUIRED)');
      console.log('  - database:', config.database ? '✓' : '⚠️  NOT SET (OPTIONAL but recommended)');
      console.log('  - port:', config.port || '3306 (default)');
      console.log('  - dbInstanceIdentifier:', config.dbInstanceIdentifier || 'not set');
      
      if (config.host && config.username && config.password) {
        console.log('\n✓ Secret format is valid!');
        console.log(`\n📊 Database Endpoint: ${config.host}`);
        console.log(`📊 Database Name: ${config.database || 'NOT SPECIFIED (will connect without default database)'}`);
        console.log(`📊 Username: ${config.username}`);
        
        if (!config.database) {
          console.log('\n⚠️  Warning: No database name specified.');
          console.log('   You can still connect, but you\'ll need to specify the database in your queries.');
          console.log('   Consider adding: "database": "your_database_name" to your secret.');
        }
      } else {
        console.log('\n✗ Secret is missing required fields!');
        console.log('   Required fields: host, username, password');
      }
      
    } catch (parseError) {
      console.error('✗ Failed to parse secret as JSON:', parseError.message);
      console.log('\nSecret value preview (first 100 chars):');
      console.log(response.SecretString.substring(0, 100));
    }
    
    console.log('\n' + '='.repeat(50));
    console.log('✅ All tests passed! Your AWS setup is working correctly.');
    console.log('You should now be able to connect to your database.');
    
  } catch (error) {
    console.error('\n✗ Error fetching secret from AWS Secrets Manager\n');
    console.error('Error Details:');
    console.error('  Name:', error.name);
    console.error('  Message:', error.message);
    
    if (error.$metadata) {
      console.error('  HTTP Status:', error.$metadata.httpStatusCode);
      console.error('  Request ID:', error.$metadata.requestId);
    }
    
    console.log('\n🔧 Troubleshooting Tips:\n');
    
    if (error.name === 'ResourceNotFoundException') {
      console.log('❌ Secret Not Found');
      console.log('   → Check the secret name is correct: "wilderness-namibia-db"');
      console.log('   → Verify the secret exists in AWS Console → Secrets Manager');
      console.log('   → Ensure you\'re using the correct AWS region (us-east-1)');
      console.log('\n   Run this to list all secrets:');
      console.log('   aws secretsmanager list-secrets --region us-east-1');
    }
    
    else if (error.name === 'AccessDeniedException' || error.name === 'UnrecognizedClientException') {
      console.log('❌ Permission Denied / Invalid Credentials');
      console.log('   → Check AWS credentials are correct');
      console.log('   → Verify IAM user has "secretsmanager:GetSecretValue" permission');
      console.log('   → Ensure credentials are not expired');
      console.log('\n   Test credentials with:');
      console.log('   aws sts get-caller-identity');
    }
    
    else if (error.name === 'CredentialsProviderError') {
      console.log('❌ AWS Credentials Not Found');
      console.log('   → Run: aws configure');
      console.log('   → Or set AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in .env.local');
      console.log('   → Or create ~/.aws/credentials file');
    }
    
    else if (error.message.includes('ENOTFOUND') || error.message.includes('ETIMEDOUT')) {
      console.log('❌ Network Connection Error');
      console.log('   → Check your internet connection');
      console.log('   → Verify you can reach AWS services');
      console.log('   → Check if you need a VPN to access AWS');
    }
    
    else {
      console.log('❌ Unknown Error');
      console.log('   → Check the error message above for details');
      console.log('   → Verify all AWS configurations');
      console.log('   → Try running: aws secretsmanager get-secret-value --secret-id wilderness-namibia-db');
    }
    
    console.log('\n' + '='.repeat(50));
  }
}

// Load .env.local if it exists
try {
  require('dotenv').config({ path: '.env.local' });
} catch (e) {
  console.log('Note: dotenv not loaded (this is okay if using AWS CLI credentials)');
}

// Run the test
testAWSConnection().catch(console.error);
