# AWS RDS MySQL Connection Setup Guide

Complete step-by-step guide to connect your Next.js application to AWS RDS MySQL using AWS Secrets Manager.

---

## 📋 Prerequisites

- ✅ AWS RDS MySQL database created
- ✅ Database credentials stored in AWS Secrets Manager
- ✅ AWS IAM user with appropriate permissions
- ✅ Packages installed: `@aws-sdk/client-secrets-manager`, `mysql2`, `aws-amplify`

---

## 🔑 Step 1: Set Up AWS Credentials Locally

You have **3 options** to configure AWS credentials:

### **Option A: AWS CLI (Recommended for Development)**

1. Install AWS CLI:
   ```powershell
   # Download from: https://aws.amazon.com/cli/
   # Or using Chocolatey:
   choco install awscli
   ```

2. Configure credentials:
   ```powershell
   aws configure
   ```
   
   Enter when prompted:
   - **AWS Access Key ID**: `AKIA...` (from IAM user)
   - **AWS Secret Access Key**: Your secret key
   - **Default region**: `us-east-1` (or your RDS region)
   - **Output format**: `json`

3. Verify configuration:
   ```powershell
   aws sts get-caller-identity
   ```

### **Option B: Environment Variables in .env.local**

Add to your `.env.local` file:

```bash
# AWS Credentials
AWS_ACCESS_KEY_ID=your_access_key_here
AWS_SECRET_ACCESS_KEY=your_secret_key_here
AWS_REGION=us-east-1

# Database Secret Configuration
DB_NEXT_PUBLIC_SECRET_NAME=wilderness-namibia-db
```

### **Option C: AWS Credentials File**

Create `~/.aws/credentials`:
```ini
[default]
aws_access_key_id = YOUR_ACCESS_KEY
aws_secret_access_key = YOUR_SECRET_KEY
```

And `~/.aws/config`:
```ini
[default]
region = us-east-1
output = json
```

---

## 🔐 Step 2: Verify Your AWS Secrets Manager Secret

### Check Secret Format

Your secret in AWS Secrets Manager should be in **JSON format**:

```json
{
  "host": "your-database.123456.us-east-1.rds.amazonaws.com",
  "username": "admin",
  "password": "your_secure_password",
  "database": "safari_culture_db",
  "port": 3306
}
```

### Verify Secret via AWS CLI

```powershell
# List all secrets
aws secretsmanager list-secrets

# Get your specific secret
aws secretsmanager get-secret-value --secret-id wilderness-namibia-db
```

### Verify Secret via AWS Console

1. Go to AWS Console → Secrets Manager
2. Find your secret: `wilderness-namibia-db`
3. Click "Retrieve secret value"
4. Ensure all fields are present: `host`, `username`, `password`, `database`, `port`

---

## 🛡️ Step 3: Configure IAM Permissions

Your IAM user needs these permissions:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "secretsmanager:GetSecretValue",
        "secretsmanager:DescribeSecret"
      ],
      "Resource": "arn:aws:secretsmanager:us-east-1:YOUR_ACCOUNT_ID:secret:wilderness-namibia-db-*"
    }
  ]
}
```

### Attach Policy to IAM User

1. AWS Console → IAM → Users
2. Select your user
3. "Add permissions" → "Create inline policy"
4. Paste the JSON above (replace `YOUR_ACCOUNT_ID`)
5. Name it: `SecretsManagerReadAccess`

---

## 🌐 Step 4: Configure RDS Network Access

### Make RDS Accessible from Your Local Machine

#### **Option A: Publicly Accessible (Development Only)**

1. AWS Console → RDS → Your Database
2. "Modify" → "Connectivity"
3. Set "Publicly accessible" to **Yes**
4. Apply changes

#### **Option B: Security Group Configuration**

1. Find your RDS security group
2. Add **Inbound Rule**:
   - **Type**: MySQL/Aurora
   - **Protocol**: TCP
   - **Port**: 3306
   - **Source**: Your IP address (or `0.0.0.0/0` for testing - NOT recommended for production)

#### **Option C: Use VPN or Bastion Host (Production)**

For production, use:
- AWS VPN
- AWS Client VPN
- Bastion host in public subnet
- AWS Systems Manager Session Manager

---

## ✅ Step 5: Test the Connection

### Test via API Route

1. Start your development server:
   ```powershell
   npm run dev
   ```

2. Open browser and navigate to:
   ```
   http://localhost:3000/api/test-db
   ```

3. **Expected Success Response:**
   ```json
   {
     "success": true,
     "message": "Database connection successful!",
     "data": {
       "connectionTest": "PASSED",
       "queryResult": [...]
     }
   }
   ```

4. **If Failed, Check:**
   - Console logs for detailed error messages
   - AWS credentials are correctly set
   - Secret name matches (`wilderness-namibia-db`)
   - RDS security group allows your IP
   - RDS is publicly accessible or you have VPN access

---

## 💻 Step 6: Using the Database in Your Code

### Example: Simple Query

```typescript
import { query } from '@/lib/db/db';

export async function getUsers() {
  try {
    const users = await query('SELECT * FROM users LIMIT 10');
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}
```

### Example: Parameterized Query

```typescript
import { query } from '@/lib/db/db';

export async function getUserById(id: number) {
  try {
    const users = await query(
      'SELECT * FROM users WHERE id = ?',
      [id]
    );
    return users[0];
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}
```

### Example: Using Connection Pool

```typescript
import { getPool } from '@/lib/db/db';

export async function createUser(name: string, email: string) {
  const pool = await getPool();
  const connection = await pool.getConnection();
  
  try {
    await connection.beginTransaction();
    
    const [result] = await connection.execute(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      [name, email]
    );
    
    await connection.commit();
    return result;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}
```

### Example: API Route

```typescript
// src/app/api/users/route.ts
import { NextResponse } from 'next/server';
import { query } from '@/lib/db/db';

export async function GET() {
  try {
    const users = await query('SELECT id, name, email FROM users');
    return NextResponse.json({ success: true, users });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}
```

---

## 🚨 Troubleshooting

### Error: "CredentialsProviderError"

**Cause:** AWS credentials not found

**Solution:**
1. Run `aws configure` and enter credentials
2. Or set `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` in `.env.local`
3. Restart your dev server after adding env variables

---

### Error: "ETIMEDOUT" or "ECONNREFUSED"

**Cause:** Cannot reach RDS instance

**Solution:**
1. Check RDS security group allows your IP on port 3306
2. Verify RDS is publicly accessible (for local development)
3. Test connection: `telnet your-rds-endpoint.rds.amazonaws.com 3306`
4. Check if VPN is required for your network

---

### Error: "Access Denied for user"

**Cause:** Wrong username/password or insufficient permissions

**Solution:**
1. Verify credentials in Secrets Manager
2. Test MySQL connection: `mysql -h <host> -u <username> -p`
3. Check user has proper database permissions

---

### Error: "ResourceNotFoundException: Secret not found"

**Cause:** Secret name mismatch

**Solution:**
1. Verify secret name in AWS Secrets Manager
2. Update `DB_NEXT_PUBLIC_SECRET_NAME` in `.env.local` or code
3. Ensure you're in the correct AWS region

---

### Error: "Secret not found or is empty"

**Cause:** IAM permissions issue

**Solution:**
1. Check IAM user has `secretsmanager:GetSecretValue` permission
2. Verify the resource ARN in IAM policy matches your secret
3. Test: `aws secretsmanager get-secret-value --secret-id wilderness-namibia-db`

---

## 🔒 Security Best Practices

### For Development

1. ✅ Use `.env.local` for environment variables (gitignored)
2. ✅ Never commit AWS credentials to Git
3. ✅ Use AWS CLI credentials when possible
4. ✅ Limit RDS security group to your IP only

### For Production

1. ✅ Use IAM roles (not access keys) on EC2/ECS/Lambda
2. ✅ Use AWS Amplify environment variables
3. ✅ RDS should NOT be publicly accessible
4. ✅ Use VPC and private subnets
5. ✅ Enable RDS encryption at rest
6. ✅ Use SSL/TLS for database connections
7. ✅ Rotate secrets regularly
8. ✅ Enable AWS Secrets Manager automatic rotation

---

## 🚀 Deploying to AWS Amplify

### Add Environment Variables in Amplify

1. Go to Amplify Console
2. Select your app → "Environment variables"
3. Add:
   ```
   AWS_REGION=us-east-1
   DB_NEXT_PUBLIC_SECRET_NAME=wilderness-namibia-db
   ```

### For Amplify, AWS Credentials are Automatic

- Amplify automatically provides IAM credentials to your app
- Ensure the Amplify service role has Secrets Manager permissions
- No need to set `AWS_ACCESS_KEY_ID` or `AWS_SECRET_ACCESS_KEY`

---

## 📚 Useful Commands

```powershell
# Test AWS credentials
aws sts get-caller-identity

# List secrets
aws secretsmanager list-secrets

# Get secret value
aws secretsmanager get-secret-value --secret-id wilderness-namibia-db

# Test RDS connection
mysql -h your-db.rds.amazonaws.com -u admin -p

# Check if port is open
Test-NetConnection -ComputerName your-db.rds.amazonaws.com -Port 3306
```

---

## 📖 Additional Resources

- [AWS Secrets Manager Documentation](https://docs.aws.amazon.com/secretsmanager/)
- [AWS RDS MySQL Documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html)
- [mysql2 Package Documentation](https://github.com/sidorares/node-mysql2)
- [AWS SDK for JavaScript v3](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/)

---

## ✨ Summary Checklist

- [ ] AWS credentials configured locally
- [ ] Secret exists in Secrets Manager with correct format
- [ ] IAM permissions set for Secrets Manager
- [ ] RDS security group allows your IP
- [ ] RDS is publicly accessible (dev) or VPN configured
- [ ] Environment variables set in `.env.local`
- [ ] Test API route returns success
- [ ] Database queries work in your application

---

**Need Help?** Check the console logs for detailed error messages and refer to the troubleshooting section above.
