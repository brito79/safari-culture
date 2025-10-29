import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

const client = new SecretsManagerClient({ region: "us-east-1" });

export async function getDatabaseCredentials() {
  try {
    const response = await client.send(
      new GetSecretValueCommand({
        SecretId: process.env.SECRET_NAME,
        VersionStage: "AWSCURRENT",
      })
    );

    const secret = response.SecretString;
    if (!secret) {
        throw new Error("The secrets doesn't exist")
    }
    return JSON.parse(secret);
  } catch (error) {
    console.error("Error retrieving secret:", error);
    throw error;
  }
}
