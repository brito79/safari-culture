# 🚀 Quick Start: Connect to AWS RDS MySQL

Follow these 5 steps to connect your local environment to AWS RDS.

---

## Step 1️⃣: Configure AWS Credentials

**Choose ONE method:**

### Method A: AWS CLI (Recommended)
```powershell
aws configure
```
Enter your Access Key ID, Secret Access Key, and region (`us-east-1`)

### Method B: Environment Variables
Add to `.env.local`:
```bash
AWS_ACCESS_KEY_ID=your_key_here
AWS_SECRET_ACCESS_KEY=your_secret_here
AWS_REGION=us-east-1
DB_SECRET_NAME=wilderness-namibia-db
```

---

## Step 2️⃣: Verify AWS Secret Format

Your secret in AWS Secrets Manager should look like:
```json
{
  "host": "your-db.xxxxx.us-east-1.rds.amazonaws.com",
  "username": "admin",
  "password": "your_password",
  "database": "your_db_name",
  "port": 3306
}
```

**Verify it:**
```powershell
aws secretsmanager get-secret-value --secret-id wilderness-namibia-db
```

---

## Step 3️⃣: Configure RDS Network Access

1. Go to AWS Console → RDS → Your Database
2. Check Security Group
3. Add Inbound Rule:
   - Type: **MySQL/Aurora**
   - Port: **3306**
   - Source: **Your IP** (or `0.0.0.0/0` for testing)

4. Ensure RDS is **Publicly Accessible** (for local dev):
   - Database → Modify → Connectivity → Publicly accessible: **Yes**

---

## Step 4️⃣: Test the Connection

```powershell
npm run dev
```

Then visit: **http://localhost:3000/api/test-db**

✅ **Success:** You should see `"success": true`  
❌ **Failed:** Check console logs for error details

---

## Step 5️⃣: Use Database in Your Code

```typescript
import { query } from '@/lib/db/db';

// Simple query
const users = await query('SELECT * FROM users');

// Parameterized query (safe from SQL injection)
const user = await query(
  'SELECT * FROM users WHERE id = ?',
  [userId]
);
```

---

## 🆘 Quick Troubleshooting

| Error | Fix |
|-------|-----|
| **CredentialsProviderError** | Run `aws configure` or add credentials to `.env.local` |
| **ETIMEDOUT** | Check RDS security group and public accessibility |
| **Access Denied** | Verify username/password in Secrets Manager |
| **Secret not found** | Check secret name matches `wilderness-namibia-db` |

---

## 📚 Full Documentation

See `docs/AWS_RDS_SETUP_GUIDE.md` for complete details.

---

## ✅ Quick Checklist

- [ ] AWS credentials configured
- [ ] Secret verified in Secrets Manager
- [ ] RDS security group allows your IP
- [ ] RDS is publicly accessible (dev only)
- [ ] Test API returns success
- [ ] Ready to code! 🎉
