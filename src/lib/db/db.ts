import mysql from 'mysql2/promise';

let pool;

export const db = (() => {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.RDS_HOST,
      user: process.env.RDS_USER,
      password: process.env.RDS_PASSWORD,
      database: process.env.RDS_DATABASE,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }
  return pool;
})();
