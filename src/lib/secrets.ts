import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

interface DatabaseCredentials {
  username: string;
  password: string;
}

const client = new SecretsManagerClient({ region: process.env.NEXT_PUBLIC_S3_REGION || "us-east-1" });

/**
 * Get database credentials from AWS Secrets Manager with fallback to environment variables
 * Production-ready with retry logic and proper error handling
 */
export async function getDatabaseCredentials(): Promise<DatabaseCredentials> {
  // Fallback to environment variables if Secrets Manager is not configured
  if (!process.env.NEXT_PUBLIC_SECRET_NAME) {
    console.warn('⚠️  NEXT_PUBLIC_SECRET_NAME not configured, using environment variables for database credentials');
    return {
      username: process.env.NEXT_PUBLIC_RDS_USER || 'admin',
      password: process.env.NEXT_PUBLIC_RDS_PASSWORD || '',
    };
  }

  // Try to get credentials from AWS Secrets Manager with retry
  const maxRetries = 3;
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await client.send(
        new GetSecretValueCommand({
          SecretId: process.env.NEXT_PUBLIC_SECRET_NAME,
          VersionStage: "AWSCURRENT",
        })
      );

      const secret = response.SecretString;
      if (!secret) {
        throw new Error("Secret value is empty");
      }

      const credentials = JSON.parse(secret) as DatabaseCredentials;
      
      // Validate credentials structure
      if (!credentials.username || !credentials.password) {
        throw new Error("Invalid credentials structure in secret");
      }

      console.log('✅ Successfully retrieved database credentials from Secrets Manager');
      return credentials;
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      console.error(`❌ Attempt ${attempt}/${maxRetries} failed to retrieve secret:`, lastError.message);
      
      // Wait before retry (exponential backoff)
      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 100));
      }
    }
  }

  // If all retries failed, fall back to environment variables
  console.warn('⚠️  Failed to retrieve from Secrets Manager after retries, falling back to environment variables');
  console.error('Last error:', lastError?.message);
  
  return {
    username: process.env.NEXT_PUBLIC_RDS_USER || 'admin',
    password: process.env.NEXT_PUBLIC_RDS_PASSWORD || '',
  };
}
