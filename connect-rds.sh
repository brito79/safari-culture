#!/bin/bash

# Set your secret name and AWS region
SECRET_NAME="rds!db-e723523c-73e0-4627-af0f-e024a025e859"
AWS_REGION="us-east-1"

# Fetch secret from AWS Secrets Manager
echo "🔐 Fetching secret from AWS Secrets Manager..."
SECRET_JSON=$(aws secretsmanager get-secret-value \
  --secret-id "$SECRET_NAME" \
  --region "$AWS_REGION" \
  --query SecretString \
  --output text)

# Check if jq is installed
if ! command -v jq &> /dev/null; then
  echo "❌ 'jq' is required but not installed. Please install it first."
  exit 1
fi

# Parse secret values
HOST=$(echo "$SECRET_JSON" | jq -r '.host')
USER=$(echo "$SECRET_JSON" | jq -r '.username')
PASS=$(echo "$SECRET_JSON" | jq -r '.password')
DB=$(echo "$SECRET_JSON" | jq -r '.database')

# Export as environment variables
export DB_HOST="$HOST"
export DB_USER="$USER"
export DB_PASS="$PASS"
export DB_NAME="$DB"

echo "✅ Environment variables set:"
echo "DB_HOST=$DB_HOST"
echo "DB_USER=$DB_USER"
echo "DB_NAME=$DB_NAME"

# Optional: Connect to MySQL
echo "🔗 Connecting to MySQL..."
mysql -h "$DB_HOST" -u "$DB_USER" -p"$DB_PASS" "$DB_NAME"
