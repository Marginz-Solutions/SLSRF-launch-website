# SLSRF Backend API

## Contact Form API

### Endpoint
`POST /api/contact`

### Request Body
```json
{
  "name": "John Doe",
  "phone": "+91 9876543210",
  "email": "john@example.com"
}
```

### Response

**Success (200)**
```json
{
  "success": true,
  "message": "Thank you for contacting us! We will get back to you soon."
}
```

**Error (400)**
```json
{
  "error": "Missing required fields",
  "message": "Please provide name, phone, and email"
}
```

**Error (500)**
```json
{
  "error": "Internal server error",
  "message": "Something went wrong. Please try again later."
}
```

## Email Integration Setup

The backend uses **Resend** for email delivery.

### Step 1: Get Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key (starts with `re_`)

### Step 2: Configure Vercel Environment Variables

Add these environment variables in your Vercel project settings:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=contact@slsrf.org
```

### Step 3: Verify Domain (Optional but Recommended)

For production use, verify your domain in Resend:

1. Go to Resend dashboard → Domains
2. Add your domain (e.g., slsrf.org)
3. Add the DNS records provided by Resend
4. Update the `from` field in `api/contact.ts`:
   ```typescript
   from: 'SLSRF <noreply@slsrf.org>'
   ```

### Features

✅ **Dual Email Sending**:
- Notification email to SLSRF team with submission details
- Confirmation email to user with event information

✅ **Email Content**:
- Professional HTML templates
- SLSRF branding with orange (#f2921d) theme
- Event details included in confirmation
- Timestamp in IST timezone

✅ **Error Handling**:
- Graceful fallback if email service fails
- All submissions logged to console
- User still receives success message

### Testing Locally

1. Copy `.env.example` to `.env.local`
2. Add your Resend API key
3. Run `npm run dev`
4. Test the contact form at `http://localhost:3000`

### Free Tier Limits

Resend free tier includes:
- 100 emails per day
- 3,000 emails per month
- Perfect for launch event registrations

For higher volume, upgrade to a paid plan.
