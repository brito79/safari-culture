// Quick script to check if experiences_camps table exists
// Run with: node scripts/check-experiences-table.js

const mysql = require('mysql2/promise');
require('dotenv').config({ path: '.env.local' });

async function checkTable() {
  let connection;
  
  try {
    console.log('🔍 Checking database connection...');
    console.log('Host:', process.env.RDS_HOST);
    console.log('Database:', process.env.RDS_DATABASE);
    
    connection = await mysql.createConnection({
      host: process.env.RDS_HOST,
      user: process.env.RDS_USER || 'admin',
      password: process.env.RDS_PASSWORD,
      database: process.env.RDS_DATABASE,
    });
    
    console.log('✅ Connected to database\n');
    
    // Check if table exists
    console.log('📋 Checking if experiences_camps table exists...');
    const [tables] = await connection.query(
      "SHOW TABLES LIKE 'experiences_camps'"
    );
    
    if (tables.length === 0) {
      console.log('❌ Table "experiences_camps" does NOT exist!');
      console.log('\n📝 To create it, run:');
      console.log('   mysql -h ' + process.env.RDS_HOST + ' -u ' + (process.env.RDS_USER || 'admin') + ' -p ' + process.env.RDS_DATABASE + ' < database/create_experiences_table.sql');
      console.log('\nOr copy the SQL from database/create_experiences_table.sql and run it manually.');
      return;
    }
    
    console.log('✅ Table exists!\n');
    
    // Check table structure
    console.log('📊 Table structure:');
    const [columns] = await connection.query(
      "DESCRIBE experiences_camps"
    );
    console.table(columns);
    
    // Check data count
    console.log('\n📈 Checking data...');
    const [countResult] = await connection.query(
      "SELECT COUNT(*) as count FROM experiences_camps"
    );
    const count = countResult[0].count;
    console.log(`Found ${count} experiences in the table`);
    
    if (count === 0) {
      console.log('\n⚠️  Table is empty! Run the INSERT statements from database/create_experiences_table.sql');
    } else {
      // Show sample data
      console.log('\n📄 Sample data:');
      const [rows] = await connection.query(
        "SELECT id, title, subtitle FROM experiences_camps LIMIT 3"
      );
      console.table(rows);
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('\nFull error:', error);
  } finally {
    if (connection) {
      await connection.end();
      console.log('\n✅ Connection closed');
    }
  }
}

checkTable();
