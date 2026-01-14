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

## Email Integration (TODO)

To integrate with an email service, add one of the following:

### Option 1: SendGrid
```bash
npm install @sendgrid/mail
```

### Option 2: Resend
```bash
npm install resend
```

### Option 3: Nodemailer
```bash
npm install nodemailer
```

Then update the `api/contact.ts` file to send emails using your preferred service.

## Environment Variables

Add these to your Vercel project settings:

```
SENDGRID_API_KEY=your_api_key_here
# or
RESEND_API_KEY=your_api_key_here
# or
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_password
```
