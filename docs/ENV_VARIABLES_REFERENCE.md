# Environment Variables Reference

Quick reference for all environment variables used in Safari Culture application.

## 🔴 Required Variables

These **must** be set for the application to function:

| Variable | Description | Example | Where Used |
|----------|-------------|---------|------------|
| `RDS_HOST` | MySQL database hostname | `db.region.rds.amazonaws.com` | Database connection |
| `RDS_DATABASE` | Database name | `wilderness_namibia_db` | Database connection |
| `AUTH0_SECRET` | Auth0 session secret | `openssl rand -hex 32` | Authentication |
| `AUTH0_DOMAIN` | Auth0 tenant domain | `your-domain.auth0.com` | Authentication |
| `AUTH0_CLIENT_ID` | Auth0 application client ID | `abc123...` | Authentication |
| `AUTH0_CLIENT_SECRET` | Auth0 application secret | `xyz789...` | Authentication |
| `AUTH0_ISSUER_BASE_URL` | Auth0 issuer URL | `https://your-domain.auth0.com` | Authentication |
| `APP_BASE_URL` | Application base URL | `https://your-app.com` | Auth callbacks |
| `S3_BUCKET_NAME` | S3 bucket for images | `safari-images` | Image storage |
| `S3_REGION` | S3 bucket region | `us-east-1` | Image storage |
| `NEXT_PUBLIC_S3_BASE_URL` | Public S3 URL | `https://bucket.s3.region.amazonaws.com` | Client-side image loading |

## 🟡 Recommended Variables

Highly recommended for production:

| Variable | Description | Default | Example |
|----------|-------------|---------|---------|
| `SECRET_NAME` | AWS Secrets Manager secret ID | None | `rds!db-secret-id` |
| `RDS_USER` | Database username | `admin` | `admin` |
| `RDS_PASSWORD` | Database password | None | `SecurePass123!` |
| `NODE_ENV` | Environment mode | `development` | `production` |

## 🟢 Optional Variables

Can be omitted, have sensible defaults:

| Variable | Description | Default | Example |
|----------|-------------|---------|---------|
| `RDS_PORT` | Database port | `3306` | `3306` |
| `DB_CONNECTION_LIMIT` | Max DB connections | `10` | `20` |
| `AWS_REGION` | AWS region | `us-east-1` | `us-east-1` |
| `SKIP_DB_CHECK` | Skip build-time DB test | `false` | `true` |
| `AUTH0_AUDIENCE` | Auth0 API audience | None | `https://api.example.com` |
| `AUTH0_SCOPE` | Auth0 scopes | `openid profile email` | `openid profile email read:shows` |
| `S3_BASE_URL` | Server-side S3 URL | Computed | `https://bucket.s3.amazonaws.com` |
| `NEXT_PUBLIC_BASE_URL` | Public app URL | `APP_BASE_URL` | `https://your-app.com` |

## 🔵 AWS-Provided Variables

Automatically set by AWS Amplify (do not set manually):

| Variable | Description | Set By |
|----------|-------------|--------|
| `AWS_ACCESS_KEY_ID` | AWS access key | Amplify |
| `AWS_SECRET_ACCESS_KEY` | AWS secret key | Amplify |
| `AWS_COMMIT_ID` | Git commit SHA | Amplify |
| `AWS_BRANCH` | Git branch name | Amplify |

## Variable Validation

The build process validates required variables in `amplify.yml`:

```bash
# These are checked during preBuild:
✅ RDS_HOST
✅ RDS_DATABASE
✅ AUTH0_SECRET
✅ AUTH0_DOMAIN
✅ AUTH0_CLIENT_ID
✅ AUTH0_CLIENT_SECRET
```

**Build fails if any are missing!**

## Secrets Management Options

### Option 1: Direct Environment Variables (Simple)

Set all variables directly in Amplify Console:

```bash
RDS_USER=admin
RDS_PASSWORD=your_password
```

**Pros:** Simple, no additional AWS services  
**Cons:** Credentials visible in Amplify Console

### Option 2: AWS Secrets Manager (Recommended)

Store credentials in Secrets Manager:

```bash
# Only set in Amplify:
SECRET_NAME=rds!db-secret-id

# Stored in Secrets Manager:
{
  "username": "admin",
  "password": "your_password"
}
```

**Pros:** Centralized secret management, rotation support  
**Cons:** Requires IAM permissions, additional AWS service

## Environment-Specific Configuration

### Local Development (.env.local)

```bash
# Database
RDS_HOST=localhost
RDS_PORT=3306
RDS_USER=root
RDS_PASSWORD=password
RDS_DATABASE=wilderness_namibia_db

# Auth0
AUTH0_SECRET=development_secret_min_32_chars
AUTH0_DOMAIN=dev-xxxxx.auth0.com
AUTH0_CLIENT_ID=dev_client_id
AUTH0_CLIENT_SECRET=dev_client_secret
AUTH0_ISSUER_BASE_URL=https://dev-xxxxx.auth0.com
APP_BASE_URL=http://localhost:3000

# S3
S3_BUCKET_NAME=dev-safari-images
S3_REGION=us-east-1
NEXT_PUBLIC_S3_BASE_URL=https://dev-safari-images.s3.us-east-1.amazonaws.com

# Environment
NODE_ENV=development
```

### Staging (Amplify Console)

```bash
# Database
RDS_HOST=staging-db.region.rds.amazonaws.com
RDS_DATABASE=wilderness_namibia_staging
SECRET_NAME=staging-db-credentials

# Auth0
AUTH0_SECRET=staging_secret_generated_with_openssl
AUTH0_DOMAIN=staging-xxxxx.auth0.com
AUTH0_CLIENT_ID=staging_client_id
AUTH0_CLIENT_SECRET=staging_client_secret
AUTH0_ISSUER_BASE_URL=https://staging-xxxxx.auth0.com
APP_BASE_URL=https://staging.safari-culture.amplifyapp.com

# S3
S3_BUCKET_NAME=staging-safari-images
S3_REGION=us-east-1
NEXT_PUBLIC_S3_BASE_URL=https://staging-safari-images.s3.us-east-1.amazonaws.com

# Environment
NODE_ENV=production
SKIP_DB_CHECK=false
```

### Production (Amplify Console)

```bash
# Database
RDS_HOST=prod-db.region.rds.amazonaws.com
RDS_DATABASE=wilderness_namibia_db
SECRET_NAME=prod-db-credentials

# Auth0
AUTH0_SECRET=production_secret_generated_with_openssl
AUTH0_DOMAIN=auth.safari-culture.com
AUTH0_CLIENT_ID=prod_client_id
AUTH0_CLIENT_SECRET=prod_client_secret
AUTH0_ISSUER_BASE_URL=https://auth.safari-culture.com
APP_BASE_URL=https://safari-culture.com

# S3
S3_BUCKET_NAME=safari-culture-images
S3_REGION=us-east-1
NEXT_PUBLIC_S3_BASE_URL=https://safari-culture-images.s3.us-east-1.amazonaws.com

# Environment
NODE_ENV=production
DB_CONNECTION_LIMIT=20
SKIP_DB_CHECK=false
```

## Generating Secrets

### AUTH0_SECRET

```bash
# Generate a secure 32-byte secret
openssl rand -hex 32
```

### Database Password

```bash
# Generate a secure password
openssl rand -base64 32
```

## Checking Variables

### In Application Code

```typescript
// Check if variable is set
if (!process.env.RDS_HOST) {
  throw new Error('RDS_HOST is required');
}

// Use with fallback
const port = parseInt(process.env.RDS_PORT || '3306', 10);
```

### During Build (amplify.yml)

```bash
# Check variable
[ -z "$RDS_HOST" ] && echo "Missing RDS_HOST" && exit 1

# Use variable
echo "Connecting to $RDS_HOST"
```

### At Runtime (Health Check)

```bash
# Test health endpoint
curl https://your-app.com/api/health

# Should return:
{
  "status": "healthy",
  "database": "connected"
}
```

## Troubleshooting

### Variable Not Found

**Symptom:** Build fails with "Missing required environment variables"

**Solution:**
1. Go to Amplify Console → App Settings → Environment Variables
2. Add the missing variable
3. Redeploy

### Variable Not Taking Effect

**Symptom:** Old value still being used

**Solution:**
1. Clear Amplify cache: Delete `.next/cache` in build settings
2. Trigger new deployment
3. Verify variable in build logs

### Secret Manager Access Denied

**Symptom:** "Failed to fetch secrets, will use environment variables"

**Solution:**
1. Check IAM role has `secretsmanager:GetSecretValue`
2. Verify `SECRET_NAME` is correct
3. Ensure secret exists in correct region

### NEXT_PUBLIC_ Variables Not Working

**Issue:** Client-side variables must be prefixed with `NEXT_PUBLIC_`

**Solution:**
```bash
# ❌ Won't work on client
S3_BASE_URL=https://...

# ✅ Works on client
NEXT_PUBLIC_S3_BASE_URL=https://...
```

## Security Checklist

- [ ] Never commit `.env.local` to git (in `.gitignore`)
- [ ] Use Secrets Manager for production credentials
- [ ] Rotate secrets regularly
- [ ] Use different credentials per environment
- [ ] Limit IAM permissions to minimum required
- [ ] Enable CloudWatch logging
- [ ] Monitor for exposed secrets in logs
- [ ] Use strong passwords (min 32 characters)

## Quick Copy Templates

### .env.local Template

```bash
# Copy to .env.local and fill in values
RDS_HOST=
RDS_PORT=3306
RDS_USER=
RDS_PASSWORD=
RDS_DATABASE=wilderness_namibia_db
AUTH0_SECRET=
AUTH0_DOMAIN=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
AUTH0_ISSUER_BASE_URL=
APP_BASE_URL=http://localhost:3000
S3_BUCKET_NAME=
S3_REGION=us-east-1
NEXT_PUBLIC_S3_BASE_URL=
NODE_ENV=development
```

### Amplify Console Template

```bash
# Copy to Amplify Console Environment Variables
RDS_HOST=
RDS_DATABASE=wilderness_namibia_db
SECRET_NAME=
AUTH0_SECRET=
AUTH0_DOMAIN=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
AUTH0_ISSUER_BASE_URL=
APP_BASE_URL=
S3_BUCKET_NAME=
S3_REGION=us-east-1
NEXT_PUBLIC_S3_BASE_URL=
NODE_ENV=production
```

---

**Related Documentation:**
- [Amplify Deployment Guide](./AMPLIFY_DEPLOYMENT.md)
- [.env.example](../.env.example)
- [Production Readiness](../PRODUCTION_READINESS.md)
