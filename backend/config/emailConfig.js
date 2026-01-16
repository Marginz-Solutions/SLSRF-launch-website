const Brevo = require("@getbrevo/brevo");

const sendMail = async (req) => {
  try {
    const { name, email, service, subject, message, phone } = req.body;

    const apiInstance = new Brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(
      Brevo.TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY
    );

    /* ================= ADMIN EMAIL ================= */
    const adminMsg = {
      sender: {
        name: "SLSRF",
        email: process.env.SUBDOMAIN, // e.g., noreply@slsrf.com
      },
      to: [{ email: process.env.EMAIL, name: "Admin" }],
      replyTo: { email },
      subject: `Contact Form: ${subject || "No subject"}`,
      htmlContent: `
        <!DOCTYPE html>
        <html lang="en">
        <head><meta charset="UTF-8"><title>Submission Details - SLSRF</title></head>
        <body style="margin:0;padding:0;background-color:#f5f7fa;font-family:'Segoe UI',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding:40px 0;">
            <tr><td align="center">
              <table width="600" style="background:#fff;border-radius:10px;border:1px solid #e5e7eb;">
                <tr><td style="padding:30px 25px;">
                  <h2 style="color:#003663;border-left:4px solid #0056b3;padding-left:10px;">
                    Submission Details
                  </h2>
                  <table width="100%" cellpadding="10" style="font-size:14px;">
                    <tr><td><b>Name:</b></td><td>${name}</td></tr>
                    <tr><td><b>Email:</b></td><td>${email}</td></tr>
                    <tr><td><b>Service:</b></td><td>${service || "N/A"}</td></tr>
                    <tr><td><b>Message:</b></td><td>${message}</td></tr>
                  </table>
                </td></tr>
              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    };

    /* ================= CLIENT EMAIL ================= */
    const clientMsg = {
      sender: {
        name: "SLSRF",
        email: process.env.SUBDOMAIN,
      },
      to: [{ email, name }],
      replyTo: { email: process.env.EMAIL },
      subject: "We received your message",
      htmlContent: `
        <!DOCTYPE html>
        <html lang="en">
        <head><meta charset="UTF-8"><title>Submission Confirmation - SLSRF</title></head>
        <body style="margin:0;padding:0;background-color:#f5f7fa;font-family:'Segoe UI',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
            <tr><td align="center">
              <table width="600" style="background:#fff;border-radius:10px;">
                <tr>
                  <td style="background:linear-gradient(135deg,#003663,#0056b3);padding:40px;text-align:center;">
                    <h1 style="color:#fff;">Submission Confirmed</h1>
                    <p style="color:#e2e8f0;">Thank you for contacting SLSRF.</p>
                  </td>
                </tr>
                <tr><td style="padding:30px;">
                  <table width="100%" style="font-size:14px;">
                    <tr><td><b>Name:</b></td><td>${name}</td></tr>
                    <tr><td><b>Email:</b></td><td>${email}</td></tr>
                    <tr><td><b>Service:</b></td><td>${service || "N/A"}</td></tr>
                    <tr><td><b>Message:</b></td><td>${message}</td></tr>
                  </table>
                </td></tr>
                <tr>
                  <td style="background:#003663;color:#9ca3af;text-align:center;padding:20px;font-size:12px;">
                    © 2025 SLSRF. All rights reserved.
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    };

    await apiInstance.sendTransacEmail(adminMsg);
    await apiInstance.sendTransacEmail(clientMsg);

    console.log("✅ Emails sent successfully via Brevo (SLSRF)");
  } catch (error) {
    console.error("❌ Brevo error:", error.response?.text || error.message);
  }
};

module.exports = sendMail;
