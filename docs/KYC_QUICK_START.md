# KYC Application - Quick Start Guide 🚀

## ✅ What's Been Implemented

A complete 7-step safari booking application form with:
- Personal information collection
- Travel details & group size
- **Camp & lodge selection with images**
- Experience & wildlife preferences
- Special requirements (dietary, medical, mobility)
- Emergency contact
- Review & submit

## 🎯 Quick Setup (3 Steps)

### Step 1: Create Database Table
```bash
cd safari-culture
mysql -h YOUR_HOST -u YOUR_USER -p YOUR_DATABASE < database/create_kyc_applications_table.sql
```

### Step 2: Verify Environment Variables
Check `.env.local` has:
```env
NEXT_PUBLIC_RDS_HOST=your-host
NEXT_PUBLIC_RDS_DATABASE=your-database
NEXT_PUBLIC_RDS_USER=your-user
NEXT_PUBLIC_RDS_PASSWORD=your-password
NEXT_PUBLIC_S3_BASE_URL=https://your-bucket.s3.amazonaws.com
```

### Step 3: Test the Application
```bash
npm run dev
```

Navigate to: **http://localhost:3000/apply**

## 📁 File Structure

```
✅ 17 Files Created:

Types:
- src/types/kyc.ts

Components (10 files):
- src/components/kyc/KYCContext.tsx
- src/components/kyc/KYCProgress.tsx
- src/components/kyc/KYCForm.tsx
- src/components/kyc/shared/FormNavigation.tsx
- src/components/kyc/camp-selection/CampCard.tsx
- src/components/kyc/steps/Step1PersonalInfo.tsx
- src/components/kyc/steps/Step2TravelDetails.tsx
- src/components/kyc/steps/Step3CampSelection.tsx
- src/components/kyc/steps/Step4ExperiencePreferences.tsx
- src/components/kyc/steps/Step5SpecialRequirements.tsx
- src/components/kyc/steps/Step6EmergencyContact.tsx
- src/components/kyc/steps/Step7ReviewSubmit.tsx

Pages:
- src/app/(public)/apply/page.tsx
- src/app/(public)/apply/success/page.tsx

API:
- src/app/api/kyc/submit/route.ts

Database:
- database/create_kyc_applications_table.sql
```

## 🎨 Features

### User Experience
- ✅ Beautiful progress stepper
- ✅ Auto-save to localStorage
- ✅ Mobile responsive
- ✅ Real-time validation
- ✅ Edit any step
- ✅ Visual camp selection with images

### Technical
- ✅ TypeScript
- ✅ Context API state management
- ✅ MySQL database
- ✅ Server-side API
- ✅ Error handling

## 🏕️ Camp Selection (Step 3)

4 camps available with images:
1. **Wilderness-Doro-Nawas** (Damaraland)
2. **Wilderness-Little-Kulala** (Sossusvlei)
3. **Wilderness Damaraland Camp**
4. **Wilderness Hoanib Skeleton Coast**

Each camp allows:
- Number of nights selection
- Room type (Standard/Suite/Family)
- Number of rooms
- Special requests

## 🦁 Experience Preferences (Step 4)

Activities:
- Nature Drives 🚙
- Skeleton Coast Expeditions 🌊
- Hot Air Balloon Safaris 🎈
- Cultural Nature Walks 👥
- Geological Expeditions ⛰️

Wildlife:
- Desert Elephants 🐘
- Black Rhinos 🦏
- Big Cats 🦁
- Bird Watching 🦅
- Marine Life 🦭

## 📊 Database Schema

Table: `kyc_applications`
- Stores complete application data
- JSON fields for arrays (camps, experiences, etc.)
- Status tracking (pending/reviewing/approved/rejected)
- Admin notes field

## 🔗 Routes

- `/apply` - Main application form
- `/apply/success` - Success confirmation
- `/api/kyc/submit` - Submission endpoint

## 🎯 Testing

1. Go to `/apply`
2. Fill in all 7 steps
3. Submit application
4. Check database for new record
5. Verify success page shows application ID

## 🐛 Common Issues

### Issue: Camp images not loading
**Solution:** Check `NEXT_PUBLIC_S3_BASE_URL` in `.env.local`

### Issue: Database connection error
**Solution:** Verify RDS credentials in `.env.local`

### Issue: Form not saving
**Solution:** Check browser localStorage is enabled

## 📝 Next Steps

1. **Test the form** - Complete an application
2. **Check database** - Verify data is saved
3. **Customize camps** - Update camp data in Step3CampSelection.tsx
4. **Add email notifications** - Implement in API route
5. **Create admin dashboard** - View/manage applications

## 🎉 You're Ready!

Everything is implemented and ready to use. Just:
1. Create the database table
2. Start the dev server
3. Navigate to `/apply`

**Happy Safari Booking! 🦁🏕️✨**
