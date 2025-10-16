import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';
import mysql from 'mysql2/promise';
// 1. DB connection logic

// 2. secrets retrieval logic

//Access secret keys
export async function getDbConfig() {
  const client = new SecretsManagerClient({ region: 'us-east-1' });
  const command = new GetSecretValueCommand({ SecretId: 'safari-culture-db' });
  const response = await client.send(command);
  return JSON.parse(response.SecretString);
}


//MySQL connection utility function
export async function getConnection() {
  const config = await getDbConfig();
  return await mysql.createConnection({
    host: config.host,
    user: config.username,
    password: config.password,
    database: config.database,
  });
}
