# AWS Amplify Deployment Guide

## Overview

This guide covers deploying the Safari Culture application to AWS Amplify Gen 2 with proper environment configuration and secret management.

## Prerequisites

- AWS Account with Amplify access
- GitHub repository connected to Amplify
- AWS RDS MySQL database instance
- Auth0 application configured
- S3 bucket for images

## Deployment Steps

### 1. Create Amplify App

```bash
# Using AWS CLI
aws amplify create-app \
  --name safari-culture \
  --repository https://github.com/your-username/safari-culture \
  --platform WEB \
  --region us-east-1
```

Or use the AWS Amplify Console:
1. Go to AWS Amplify Console
2. Click "New app" → "Host web app"
3. Connect your GitHub repository
4. Select the branch (e.g., `main`)

### 2. Configure Build Settings

The `amplify.yml` file is already configured with:
- ✅ Dependency installation with caching
- ✅ Environment variable validation
- ✅ AWS Secrets Manager integration
- ✅ Database connectivity testing
- ✅ Build verification
- ✅ Build metadata generation

### 3. Set Environment Variables

#### Required Variables

Go to **Amplify Console** → **App Settings** → **Environment Variables** and add:

```bash
# Database Configuration
RDS_HOST=your-db-instance.region.rds.amazonaws.com
RDS_DATABASE=wilderness_namibia_db
RDS_PORT=3306

# Database Credentials (Option 1: Direct)
RDS_USER=admin
RDS_PASSWORD=your_secure_password

# Database Credentials (Option 2: Secrets Manager - Recommended)
SECRET_NAME=rds!db-e723523c-73e0-4627-af0f-e024a025e859

# Database Connection Pool
DB_CONNECTION_LIMIT=10

# Auth0 Configuration
AUTH0_SECRET=use_openssl_rand_hex_32_to_generate
AUTH0_DOMAIN=your-domain.auth0.com
AUTH0_CLIENT_ID=your_auth0_client_id
AUTH0_CLIENT_SECRET=your_auth0_client_secret
AUTH0_ISSUER_BASE_URL=https://your-domain.auth0.com
AUTH0_AUDIENCE=your_auth_api_identifier
AUTH0_SCOPE=openid profile email read:shows

# Application URLs
APP_BASE_URL=https://your-app.amplifyapp.com
NEXT_PUBLIC_BASE_URL=https://your-app.amplifyapp.com

# S3 Configuration
S3_BUCKET_NAME=your-s3-bucket-name
S3_REGION=us-east-1
S3_BASE_URL=https://your-s3-bucket-name.s3.us-east-1.amazonaws.com
NEXT_PUBLIC_S3_BASE_URL=https://your-s3-bucket-name.s3.us-east-1.amazonaws.com

# Environment
NODE_ENV=production

# Optional: Skip database check during build
SKIP_DB_CHECK=false
```

#### How to Set Variables

**Via Console:**
1. Amplify Console → Your App → App Settings → Environment Variables
2. Click "Manage variables"
3. Add each variable with key and value
4. Click "Save"

**Via CLI:**
```bash
aws amplify update-app \
  --app-id YOUR_APP_ID \
  --environment-variables \
    RDS_HOST=your-db-instance.region.rds.amazonaws.com \
    RDS_DATABASE=wilderness_namibia_db \
    AUTH0_SECRET=your_secret \
    # ... add all variables
```

### 4. Configure AWS Secrets Manager (Recommended)

#### Create Secret

```bash
# Create database credentials secret
aws secretsmanager create-secret \
  --name safari-culture-db-credentials \
  --description "Database credentials for Safari Culture app" \
  --secret-string '{"username":"admin","password":"your_secure_password"}' \
  --region us-east-1
```

#### Grant Amplify Access

1. Go to **IAM Console** → **Roles**
2. Find the Amplify service role (e.g., `amplifyconsole-backend-role`)
3. Attach policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "secretsmanager:GetSecretValue"
      ],
      "Resource": "arn:aws:secretsmanager:us-east-1:ACCOUNT_ID:secret:safari-culture-db-credentials-*"
    }
  ]
}
```

4. Set `SECRET_NAME` environment variable in Amplify to the secret name

### 5. Configure Database Access

#### Update RDS Security Group

Allow Amplify to access your RDS instance:

```bash
# Get Amplify NAT Gateway IPs (from Amplify Console → App Settings → General)
# Add inbound rule to RDS security group

aws ec2 authorize-security-group-ingress \
  --group-id sg-xxxxx \
  --protocol tcp \
  --port 3306 \
  --cidr AMPLIFY_NAT_IP/32
```

**Note:** Amplify uses NAT Gateways. You may need to whitelist multiple IPs or use a VPC configuration.

### 6. Configure S3 Bucket

#### Bucket Policy for Public Read

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

#### CORS Configuration

```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET", "HEAD"],
    "AllowedOrigins": [
      "https://your-app.amplifyapp.com",
      "http://localhost:3000"
    ],
    "ExposeHeaders": ["ETag"],
    "MaxAgeSeconds": 3000
  }
]
```

### 7. Deploy

#### Automatic Deployment

Once configured, Amplify automatically deploys on:
- Push to connected branch
- Pull request (preview deployments)

#### Manual Deployment

```bash
# Trigger build via CLI
aws amplify start-job \
  --app-id YOUR_APP_ID \
  --branch-name main \
  --job-type RELEASE
```

#### Monitor Deployment

1. Go to Amplify Console → Your App
2. Click on the branch
3. View build logs in real-time
4. Check for:
   - ✅ Dependencies installed
   - ✅ Environment variables validated
   - ✅ Secrets fetched (if using Secrets Manager)
   - ✅ Database connectivity test passed
   - ✅ Build completed
   - ✅ Build metadata generated

## Build Process Explained

### PreBuild Phase

```yaml
preBuild:
  commands:
    1. Install dependencies (npm ci)
    2. Verify Node.js/npm versions
    3. Fetch secrets from AWS Secrets Manager (if configured)
    4. Validate required environment variables
    5. Test database connectivity (optional)
```

**What happens:**
- Dependencies are installed from `package-lock.json`
- If `SECRET_NAME` is set, credentials are fetched and exported
- Required env vars are checked (fails build if missing)
- Database connection is tested (non-blocking warning if fails)

### Build Phase

```yaml
build:
  commands:
    1. Set NODE_ENV=production
    2. Run npm run build
    3. Verify .next directory exists
    4. Generate build metadata
```

**What happens:**
- Next.js builds the production bundle
- Build output is verified
- Metadata file created with commit info, timestamp, etc.

### Artifacts

```yaml
artifacts:
  baseDirectory: .next
  files:
    - '**/*'
```

The `.next` directory contains the built application.

### Cache

```yaml
cache:
  paths:
    - .next/cache/**/*
    - .npm/**/*
    - node_modules/**/*
```

Cached between builds for faster deployments.

## Environment-Specific Configuration

### Development Branch

```bash
# Set different variables for dev branch
APP_BASE_URL=https://dev.your-app.amplifyapp.com
NODE_ENV=development
SKIP_DB_CHECK=true  # Skip DB check in dev
```

### Production Branch

```bash
APP_BASE_URL=https://your-app.amplifyapp.com
NODE_ENV=production
SKIP_DB_CHECK=false
```

## Troubleshooting

### Build Fails: Missing Environment Variables

**Error:**
```
❌ Missing required environment variables: RDS_HOST AUTH0_SECRET
```

**Solution:**
1. Go to Amplify Console → Environment Variables
2. Add the missing variables
3. Redeploy

### Build Fails: Secrets Manager Access Denied

**Error:**
```
⚠️  Failed to fetch secrets, will use environment variables
```

**Solution:**
1. Check IAM role has `secretsmanager:GetSecretValue` permission
2. Verify `SECRET_NAME` is correct
3. Ensure secret exists in the same region

### Build Fails: Database Connection Test

**Error:**
```
⚠️  Database connection test failed (non-blocking)
```

**Note:** This is a warning, not a failure. The build continues.

**To fix:**
1. Check RDS security group allows Amplify IPs
2. Verify database credentials
3. Or set `SKIP_DB_CHECK=true` to skip the test

### Build Succeeds but App Doesn't Work

**Check:**
1. Browser console for errors
2. Amplify logs: `aws logs tail /aws/amplify/YOUR_APP_ID --follow`
3. Health check: `https://your-app.amplifyapp.com/api/health`
4. Environment variables are set correctly

### Database Connection Issues in Production

**Symptoms:**
- Health check returns 503
- API routes return 500 errors

**Solutions:**
1. Verify RDS security group allows Amplify NAT Gateway IPs
2. Check database credentials in Secrets Manager
3. Test connection from Amplify build logs
4. Review CloudWatch logs

## Post-Deployment Checklist

- [ ] Health check returns 200: `curl https://your-app.amplifyapp.com/api/health`
- [ ] Database connectivity confirmed
- [ ] Auth0 login works
- [ ] Images load from S3
- [ ] All API routes return data
- [ ] Performance is acceptable (check response times)
- [ ] Set up monitoring/alerts
- [ ] Configure custom domain (optional)
- [ ] Enable HTTPS (automatic with Amplify)
- [ ] Set up CloudWatch alarms

## Monitoring

### Build Notifications

Configure SNS topic for build notifications:

```bash
aws amplify update-app \
  --app-id YOUR_APP_ID \
  --enable-notification \
  --notification-arn arn:aws:sns:us-east-1:ACCOUNT_ID:amplify-builds
```

### CloudWatch Logs

View application logs:

```bash
aws logs tail /aws/amplify/YOUR_APP_ID --follow
```

### Health Check Monitoring

Set up CloudWatch alarm:

```bash
aws cloudwatch put-metric-alarm \
  --alarm-name safari-culture-health \
  --alarm-description "Alert when health check fails" \
  --metric-name HealthCheckStatus \
  --namespace AWS/Amplify \
  --statistic Average \
  --period 300 \
  --evaluation-periods 2 \
  --threshold 1 \
  --comparison-operator LessThanThreshold
```

## Custom Domain Setup

### Add Custom Domain

1. Amplify Console → Domain Management
2. Add domain (e.g., `safari-culture.com`)
3. Follow DNS configuration steps
4. Wait for SSL certificate provisioning

### Update Environment Variables

```bash
APP_BASE_URL=https://safari-culture.com
NEXT_PUBLIC_BASE_URL=https://safari-culture.com
```

Update Auth0 callback URLs to include new domain.

## Rollback

### Rollback to Previous Deployment

1. Amplify Console → Your App → Branch
2. Find previous successful build
3. Click "Redeploy this version"

### Via CLI

```bash
aws amplify start-job \
  --app-id YOUR_APP_ID \
  --branch-name main \
  --job-type RELEASE \
  --job-id PREVIOUS_JOB_ID
```

## Security Best Practices

1. **Use Secrets Manager** for sensitive credentials
2. **Enable branch protection** in GitHub
3. **Use preview deployments** for pull requests
4. **Restrict IAM permissions** to minimum required
5. **Enable CloudWatch logging**
6. **Set up security headers** in Next.js config
7. **Regular security updates** for dependencies

## Cost Optimization

1. **Enable caching** (already configured)
2. **Use preview deployments** sparingly
3. **Delete old branches** in Amplify
4. **Monitor build minutes** usage
5. **Optimize bundle size** (check `.next` size in build logs)

## Additional Resources

- [AWS Amplify Documentation](https://docs.aws.amazon.com/amplify/)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/)
- [Production Readiness Guide](../PRODUCTION_READINESS.md)
- [Monitoring Guide](./MONITORING.md)

---

**Last Updated:** November 11, 2024  
**Amplify Version:** Gen 2  
**Next.js Version:** 15+
