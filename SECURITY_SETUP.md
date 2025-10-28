# Security Setup Guide

## Required Configuration Files

### 1. Firebase Service Account (Backend)
- Copy `backend-server/firebase-service-account.sample.json` to `backend-server/firebase-service-account.json`
- Replace all placeholder values with your actual Firebase service account credentials
- This file is automatically ignored by git

### 2. Google Services (Android App)
- Copy `civic_reporter/android/app/google-services.sample.json` to `civic_reporter/android/app/google-services.json`
- Replace all placeholder values with your actual Firebase project configuration
- This file is automatically ignored by git

### 3. Environment Variables
- Ensure all `.env` files contain only non-sensitive configuration
- Use environment variables for sensitive data in production

## Security Notes
- Never commit actual credentials to version control
- Use different Firebase projects for development, staging, and production
- Regularly rotate API keys and service account credentials
- Review and audit access permissions regularly

## Files Removed for Security
The following files were removed as they contained hardcoded credentials:
- `backend-server/firebase-service-account.json`
- `civic_reporter/android/app/google-services.json`
- `backend-server/test-login-update.js`
- `backend-server/test-add-location-report.js`
- `backend-server/test-report-submission.js`
- `test-backend.js`
- `civic_reporter/ios/Flutter/flutter_export_environment.sh`
- `civic_reporter/ios/Flutter/ephemeral/flutter_lldb_helper.py`