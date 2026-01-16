#!/usr/bin/env bash

# File: generate-env.sh
# Purpose: Load environment variables from .env.local and generate .env.production
# Usage: ./generate-env.sh

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
  echo "Error: .env.local file not found!"
  exit 1
fi

# Load variables from .env.local
set -a
source .env.local
set +a

# Create/clear the .env.production file
> .env.production

# Write variables to file
{
  # AWS Configuration
  echo "AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID"
  echo "AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY"

  # RDS Database Configuration
  echo "NEXT_PUBLIC_RDS_HOST=$NEXT_PUBLIC_RDS_HOST"
  echo "NEXT_PUBLIC_RDS_PORT=$NEXT_PUBLIC_RDS_PORT"
  echo "NEXT_PUBLIC_RDS_USER=$NEXT_PUBLIC_RDS_USER"
  echo "NEXT_PUBLIC_RDS_PASSWORD=$NEXT_PUBLIC_RDS_PASSWORD"
  echo "NEXT_PUBLIC_RDS_DATABASE=$NEXT_PUBLIC_RDS_DATABASE"
  
  # Connection pool settings
  echo "NEXT_PUBLIC_DB_CONNECTION_LIMIT=$NEXT_PUBLIC_DB_CONNECTION_LIMIT"
  echo "NEXT_PUBLIC_SECRET_NAME=$NEXT_PUBLIC_SECRET_NAME"

  # Auth0 Configuration
  echo "NEXT_PUBLIC_AUTH0_SECRET=$NEXT_PUBLIC_AUTH0_SECRET"
  echo "NEXT_PUBLIC_APP_BASE_URL=$NEXT_PUBLIC_APP_BASE_URL"
  echo "NEXT_PUBLIC_AUTH0_DOMAIN=$NEXT_PUBLIC_AUTH0_DOMAIN"
  echo "NEXT_PUBLIC_AUTH0_CLIENT_ID=$NEXT_PUBLIC_AUTH0_CLIENT_ID"
  echo "NEXT_PUBLIC_AUTH0_CLIENT_SECRET=$NEXT_PUBLIC_AUTH0_CLIENT_SECRET"
  echo "NEXT_PUBLIC_AUTH0_AUDIENCE=$NEXT_PUBLIC_AUTH0_AUDIENCE"
  echo "NEXT_PUBLIC_AUTH0_SCOPE=$NEXT_PUBLIC_AUTH0_SCOPE"
  echo "NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL=$NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL"

  # S3 Configuration
  echo "NEXT_PUBLIC_S3_BUCKET_NAME=$NEXT_PUBLIC_S3_BUCKET_NAME"
  echo "NEXT_PUBLIC_S3_REGION=$NEXT_PUBLIC_S3_REGION"
  echo "NEXT_PUBLIC_S3_BASE_URL=$NEXT_PUBLIC_S3_BASE_URL"

  # Environment
  echo "NODE_ENV=$NODE_ENV"
} >> .env.production

echo "✅ Successfully generated .env.production from .env.local"
echo "📝 Loaded $(grep -c "=" .env.production) environment variables"