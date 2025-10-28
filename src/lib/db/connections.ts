import mysql from 'mysql2/promise';

// Create connection pool
const db = mysql.createPool({
  host: process.env.RDS_HOST,
  port: parseInt(process.env.RDS_PORT || '3306'),
  user: process.env.RDS_USER,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DATABASE,
  waitForConnections: true,
  connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT || '10'),
  queueLimit: parseInt(process.env.DB_QUEUE_LIMIT || '0'),
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

// Test connection on startup
db.getConnection()
  .then(connection => {
    console.log('✅ Database connected successfully');
    connection.release();
  })
  .catch(err => {
    console.error('❌ Database connection failed:', err);
  });

export default db;