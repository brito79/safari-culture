# 🚀 Deployment Checklist

Use this checklist to ensure a smooth deployment to AWS Amplify.

## Pre-Deployment

### 1. Code Review ✅
- [ ] All features tested locally
- [ ] No console errors in browser
- [ ] Database queries optimized
- [ ] Error handling implemented
- [ ] Loading states added
- [ ] Mobile responsive
- [ ] Images optimized

### 2. Environment Files ✅
- [ ] `.env.example` updated with all variables
- [ ] `.env.local` not committed to git
- [ ] `.gitignore` includes `.env.local`
- [ ] All required variables documented

### 3. Database ✅
- [ ] RDS instance created and running
- [ ] Database schema created
- [ ] Sample data loaded (optional)
- [ ] Database credentials secured
- [ ] Security group configured
- [ ] Backup enabled

### 4. AWS Services ✅
- [ ] S3 bucket created
- [ ] S3 bucket policy configured (public read)
- [ ] S3 CORS configured
- [ ] Images uploaded to S3
- [ ] Secrets Manager secret created (optional)
- [ ] IAM roles configured

### 5. Auth0 ✅
- [ ] Auth0 application created
- [ ] Callback URLs configured
- [ ] Logout URLs configured
- [ ] Application type set correctly
- [ ] Credentials saved securely

## AWS Amplify Setup

### 6. Create Amplify App
- [ ] AWS Amplify app created
- [ ] GitHub repository connected
- [ ] Branch selected (e.g., `main`)
- [ ] Build settings configured
- [ ] `amplify.yml` file in repository

### 7. Environment Variables
Copy from [ENV_VARIABLES_REFERENCE.md](docs/ENV_VARIABLES_REFERENCE.md)

#### Required Variables
- [ ] `NEXT_PUBLIC_RDS_HOST`
- [ ] `NEXT_PUBLIC_RDS_DATABASE`
- [ ] `NEXT_PUBLIC_RDS_USER` (or use NEXT_PUBLIC_SECRET_NAME)
- [ ] `NEXT_PUBLIC_RDS_PASSWORD` (or use NEXT_PUBLIC_SECRET_NAME)
- [ ] `AUTH0_SECRET` (generate with `openssl rand -hex 32`)
- [ ] `AUTH0_DOMAIN`
- [ ] `AUTH0_CLIENT_ID_ID`
- [ ] `AUTH0_CLIENT_ID_SECRET`
- [ ] `AUTH0_ISSUER_BASE_URL`
- [ ] `APP_BASE_URL`
- [ ] `NEXT_PUBLIC_S3_BUCKET_NAME`
- [ ] `NEXT_PUBLIC_S3_REGION`
- [ ] `NEXT_PUBLIC_S3_BASE_URL`

#### Optional Variables
- [ ] `NEXT_PUBLIC_SECRET_NAME` (if using Secrets Manager)
- [ ] `NEXT_PUBLIC_DB_CONNECTION_LIMIT` (default: 10)
- [ ] `NEXT_PUBLIC_RDS_PORT` (default: 3306)
- [ ] `NODE_ENV` (set to `production`)
- [ ] `AUTH0_AUDIENCE`
- [ ] `AUTH0_SCOPE`

### 8. IAM Permissions
- [ ] Amplify service role created
- [ ] S3 read permissions granted
- [ ] Secrets Manager read permissions granted (if using)
- [ ] RDS network access configured

### 9. Network Configuration
- [ ] RDS security group allows Amplify NAT IPs
- [ ] Database is accessible from Amplify
- [ ] S3 bucket accessible publicly
- [ ] No VPC conflicts

## First Deployment

### 10. Trigger Build
- [ ] Push to connected branch OR
- [ ] Manually trigger build in Amplify Console

### 11. Monitor Build
Watch build logs for:
- [ ] ✅ Dependencies installed
- [ ] ✅ Environment variables validated
- [ ] ✅ Secrets fetched (if using Secrets Manager)
- [ ] ✅ Database connectivity test passed
- [ ] ✅ Build completed successfully
- [ ] ✅ Build metadata generated
- [ ] ❌ No errors in build logs

### 12. Verify Deployment
- [ ] App URL accessible
- [ ] Health check returns 200: `/api/health`
- [ ] Homepage loads correctly
- [ ] Images load from S3
- [ ] Database queries work
- [ ] Auth0 login works
- [ ] All pages accessible
- [ ] No console errors

## Post-Deployment

### 13. Testing
- [ ] Test all main features
- [ ] Test camp listings
- [ ] Test camp details
- [ ] Test experiences
- [ ] Test contact form
- [ ] Test admin login (if applicable)
- [ ] Test on mobile devices
- [ ] Test on different browsers

### 14. Performance
- [ ] Page load time < 3 seconds
- [ ] API response times acceptable
- [ ] Images load quickly
- [ ] No memory leaks
- [ ] Check Lighthouse score

### 15. Monitoring Setup
- [ ] CloudWatch logs enabled
- [ ] Health check monitoring configured
- [ ] Error alerts set up
- [ ] Performance monitoring enabled
- [ ] Uptime monitoring configured (e.g., UptimeRobot)

### 16. Security
- [ ] HTTPS enabled (automatic with Amplify)
- [ ] Security headers configured
- [ ] No credentials in logs
- [ ] Secrets Manager used for sensitive data
- [ ] Database credentials rotated
- [ ] Auth0 production keys used

### 17. Documentation
- [ ] Deployment documented
- [ ] Environment variables documented
- [ ] Runbook created for common issues
- [ ] Team trained on deployment process

## Custom Domain (Optional)

### 18. Domain Configuration
- [ ] Custom domain added in Amplify
- [ ] DNS records configured
- [ ] SSL certificate provisioned
- [ ] Domain verified
- [ ] Update `APP_BASE_URL` to custom domain
- [ ] Update Auth0 callback URLs
- [ ] Test with custom domain

## Ongoing Maintenance

### 19. Regular Tasks
- [ ] Monitor health check endpoint
- [ ] Review CloudWatch logs weekly
- [ ] Update dependencies monthly
- [ ] Rotate secrets quarterly
- [ ] Review performance metrics
- [ ] Check for security updates

### 20. Backup & Recovery
- [ ] Database backups enabled
- [ ] Backup retention configured
- [ ] Recovery procedure documented
- [ ] Rollback procedure tested

## Troubleshooting Guide

### Build Fails

**Missing Environment Variables**
```bash
❌ Missing required environment variables: NEXT_PUBLIC_RDS_HOST
```
→ Add missing variables in Amplify Console

**Secrets Manager Access Denied**
```bash
⚠️ Failed to fetch secrets
```
→ Check IAM permissions for Amplify role

**Database Connection Failed**
```bash
⚠️ Database connection test failed
```
→ Check RDS security group and credentials

### Runtime Issues

**Health Check Returns 503**
```json
{"status": "unhealthy", "database": "disconnected"}
```
→ Check database connectivity and credentials

**Images Not Loading**
→ Check S3 bucket policy and CORS configuration

**Auth0 Login Fails**
→ Verify callback URLs and credentials

**API Returns 500 Errors**
→ Check CloudWatch logs for error details

## Quick Commands

### Check Health
```bash
curl https://your-app.amplifyapp.com/api/health
```

### View Logs
```bash
aws logs tail /aws/amplify/YOUR_APP_ID --follow
```

### Trigger Build
```bash
aws amplify start-job \
  --app-id YOUR_APP_ID \
  --branch-name main \
  --job-type RELEASE
```

### Check Environment Variables
```bash
aws amplify get-app --app-id YOUR_APP_ID
```

## Success Criteria

### Deployment is successful when:
- ✅ Build completes without errors
- ✅ Health check returns 200
- ✅ All pages load correctly
- ✅ Database queries work
- ✅ Authentication works
- ✅ Images load from S3
- ✅ Performance is acceptable
- ✅ No console errors
- ✅ Mobile responsive
- ✅ Monitoring configured

## Sign-Off

- [ ] Technical lead approval
- [ ] QA testing complete
- [ ] Stakeholder review complete
- [ ] Documentation complete
- [ ] Monitoring configured
- [ ] Team trained

**Deployed By:** _______________  
**Date:** _______________  
**Version:** _______________  
**Environment:** ☐ Staging  ☐ Production

---

## Related Documentation

- 📖 [Amplify Deployment Guide](docs/AMPLIFY_DEPLOYMENT.md)
- 🔧 [Production Readiness](PRODUCTION_READINESS.md)
- 📊 [Monitoring Guide](docs/MONITORING.md)
- 🔑 [Environment Variables Reference](docs/ENV_VARIABLES_REFERENCE.md)
- 📝 [.env.example](.env.example)

---

**Last Updated:** November 11, 2024  
**Status:** Ready for Deployment ✅
