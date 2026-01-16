# SLSRF Website Deployment Guide

## Prerequisites

- GitHub account with repository access
- Vercel account (free tier is sufficient)
- Resend account for email functionality

## Step-by-Step Deployment

### 1. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository: `dk-nishwanth/SLSRF-launch-website`
4. Vercel will auto-detect the Vite framework
5. Click "Deploy"

### 2. Set Up Email Service (Resend)

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to **API Keys**
4. Click "Create API Key"
5. Copy the API key (starts with `re_`)

### 3. Configure Environment Variables in Vercel

1. In your Vercel project dashboard, go to **Settings** → **Environment Variables**
2. Add the following variables:

| Name | Value | Environment |
|------|-------|-------------|
| `RESEND_API_KEY` | `re_xxxxx...` (your API key) | Production, Preview, Development |
| `CONTACT_EMAIL` | `contact@slsrf.org` (or your email) | Production, Preview, Development |

3. Click "Save"
4. Redeploy the project for changes to take effect

### 4. Verify Domain (Optional - For Production)

To send emails from your own domain:

1. In Resend dashboard, go to **Domains**
2. Click "Add Domain"
3. Enter your domain (e.g., `slsrf.org`)
4. Add the provided DNS records to your domain registrar
5. Wait for verification (usually takes a few minutes)
6. Update `api/contact.ts` line 52 and 70:
   ```typescript
   from: 'SLSRF <noreply@slsrf.org>'
   ```

### 5. Test the Contact Form

1. Visit your deployed website
2. Scroll to the contact form
3. Fill in the form with test data
4. Submit and verify:
   - Success message appears
   - You receive notification email
   - User receives confirmation email

## Monitoring

### Check Logs

1. In Vercel dashboard, go to **Deployments**
2. Click on the latest deployment
3. Go to **Functions** tab
4. Click on `/api/contact` to view logs

### Email Delivery

1. In Resend dashboard, go to **Emails**
2. View all sent emails and their status
3. Check delivery rates and any errors

## Troubleshooting

### Form Submission Fails

- Check browser console for errors
- Verify API endpoint is accessible: `https://your-domain.vercel.app/api/contact`
- Check Vercel function logs

### Emails Not Sending

- Verify `RESEND_API_KEY` is set correctly in Vercel
- Check Resend dashboard for error messages
- Ensure you haven't exceeded free tier limits (100/day, 3000/month)
- Verify the API key has proper permissions

### Domain Verification Issues

- Ensure DNS records are added correctly
- Wait 24-48 hours for DNS propagation
- Use `nslookup` or online DNS checkers to verify records

## Production Checklist

- [ ] Website deployed to Vercel
- [ ] Custom domain connected (if applicable)
- [ ] Environment variables configured
- [ ] Email service tested and working
- [ ] Contact form tested end-to-end
- [ ] Domain verified in Resend (optional)
- [ ] Analytics set up (Google Analytics, etc.)
- [ ] SSL certificate active (automatic with Vercel)

## Support

For issues or questions:
- Email: contact@slsrf.org
- Phone: +91 91767 60863

## Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [Resend Documentation](https://resend.com/docs)
- [Vite Documentation](https://vitejs.dev)
