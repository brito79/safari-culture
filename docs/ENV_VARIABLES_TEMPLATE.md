# 🔐 Environment Variables Template

## Safari Culture - Wilderness Namibia Platform

Copy this template and set values in **AWS Amplify Console > Environment Variables**

---

## 🔑 Auth0 Configuration

```bash
# Auth0 Secret (Generate: openssl rand -hex 32)
AUTH0_SECRET=your-32-character-secret-here

# Your Amplify App URL
AUTH0_BASE_URL=https://your-app.amplifyapp.com

# Auth0 Tenant Domain
AUTH0_ISSUER=https://your-tenant.auth0.com

# Auth0 Application Credentials
AUTH0_CLIENT_ID_ID=your-auth0-client-id
AUTH0_CLIENT_ID_SECRET=your-auth0-client-secret

# Auth0 API Audience (optional)
AUTH0_AUDIENCE=https://your-api-audience
```

---

## 💾 Database Configuration

```bash
# AWS RDS MySQL Endpoint
DB_HOST=your-rds-endpoint.rds.amazonaws.com

# Database Credentials
DB_USER=admin
DB_PASSWORD=your-secure-password
DB_NAME=safari_culture
DB_PORT=3306
```

---

## 📦 AWS S3 Configuration

```bash
# S3 Bucket URL (public)
NEXT_PUBLIC_S3_BASE_URL=https://your-bucket.s3.amazonaws.com

# AWS Credentials (for server-side operations)
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-access-key-id
AWS_SECRET_ACCESS_KEY=your-secret-access-key
```

---

## 🌐 Application Configuration

```bash
# Environment
NODE_ENV=production

# Public App URL
NEXT_PUBLIC_APP_URL=https://your-app.amplifyapp.com

# API Base URL (if different)
NEXT_PUBLIC_API_URL=https://your-app.amplifyapp.com/api
```

---

## 📊 Optional: Analytics & Monitoring

```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Sentry Error Tracking
SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id

# New Relic (optional)
NEW_RELIC_LICENSE_KEY=your-license-key
```

---

## 🎛️ Feature Flags

```bash
# Enable/Disable Features
ENABLE_KYC_FORM=true
ENABLE_BOOKING=false
ENABLE_ADMIN_DASHBOARD=true
```

---

## 🔧 Build Configuration

```bash
# Next.js Build Settings
NEXT_TELEMETRY_DISABLED=1
NODE_OPTIONS=--max-old-space-size=4096

# Turbopack
TURBOPACK=1

# React 19 Compatibility
NPM_CONFIG_LEGACY_PEER_DEPS=true
```

---

## 📝 Notes

### Security Best Practices:

1. **Never commit secrets to Git**
   - Use `.env.local` for local development
   - Set in Amplify Console for production

2. **Use AWS Secrets Manager** for sensitive data:
   ```bash
   aws secretsmanager create-secret \
     --name safari-culture/db-password \
     --secret-string "your-password"
   ```

3. **Rotate credentials regularly**
   - Database passwords: Every 90 days
   - API keys: Every 6 months
   - Auth0 secrets: Annually

### Required vs Optional:

**Required for deployment:**
- ✅ All Auth0 variables
- ✅ All Database variables
- ✅ NEXT_PUBLIC_S3_BASE_URL
- ✅ NODE_ENV

**Optional (but recommended):**
- Analytics variables
- Feature flags
- Monitoring tools

---

## 🚀 Quick Setup Commands

### Generate Auth0 Secret:
```bash
openssl rand -hex 32
```

### Test Database Connection:
```bash
mysql -h your-rds-endpoint.rds.amazonaws.com \
      -u admin \
      -p \
      -D safari_culture
```

### Verify S3 Access:
```bash
aws s3 ls s3://your-bucket/images/
```

---

## 📚 Related Documentation

- [Amplify Deployment Guide](./AMPLIFY_DEPLOYMENT_GUIDE.md)
- [Database Setup](./database-indexes.sql)
- [API Optimization](./API_OPTIMIZATION_GUIDE.md)

---

**Last Updated:** November 2025  
**Project:** Safari Culture - Wilderness Namibia Platform
