import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, email }: ContactFormData = req.body;

    // Validate required fields
    if (!name || !phone || !email) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        message: 'Please provide name, phone, and email'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format',
        message: 'Please provide a valid email address'
      });
    }

    // Validate phone format (basic validation)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ 
        error: 'Invalid phone format',
        message: 'Please provide a valid phone number'
      });
    }

    // Send email notification to SLSRF team
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: 'SLSRF Website <onboarding@resend.dev>', // Change this to your verified domain
          to: process.env.CONTACT_EMAIL || 'contact@slsrf.org',
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #f2921d; border-bottom: 3px solid #f2921d; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              <div style="margin: 20px 0;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
              </div>
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
                <p>This email was sent from the SLSRF Launch Website contact form.</p>
                <p>Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
              </div>
            </div>
          `,
        });

        // Send confirmation email to user
        await resend.emails.send({
          from: 'SLSRF <onboarding@resend.dev>', // Change this to your verified domain
          to: email,
          subject: 'Thank you for contacting SLSRF',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #f2921d; border-bottom: 3px solid #f2921d; padding-bottom: 10px;">
                Thank You for Reaching Out!
              </h2>
              <p>Dear ${name},</p>
              <p>Thank you for your interest in the Semporutkalai Life Science Research Foundation (SLSRF) 2026 Launch.</p>
              <p>We have received your message and our team will get back to you shortly.</p>
              <div style="margin: 30px 0; padding: 20px; background-color: #f9f9f9; border-left: 4px solid #f2921d;">
                <h3 style="margin-top: 0; color: #333;">Event Details</h3>
                <p><strong>Date:</strong> 25 January 2026</p>
                <p><strong>Venue:</strong> Trident, Chennai</p>
                <p><strong>Focus:</strong> Digital Knowledge Bank on Indian Medicinal Flora & Aromatic Plants</p>
              </div>
              <p>For immediate assistance, please call us at <strong>+91 91767 60863</strong></p>
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
                <p>Best regards,<br>SLSRF Team</p>
                <p style="margin-top: 20px;">© 2026 SLSRF. All rights reserved.</p>
              </div>
            </div>
          `,
        });
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        // Continue even if email fails - we still want to log the submission
      }
    }

    // Log the submission
    console.log('Contact form submission:', { 
      name, 
      phone, 
      email, 
      timestamp: new Date().toISOString() 
    });

    return res.status(200).json({ 
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: 'Something went wrong. Please try again later.'
    });
  }
}
