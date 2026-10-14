require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter configured with integralwebsolution@gmail.com
const createTransporter = () => {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = Number(process.env.SMTP_PORT) || 465;
  const secure = process.env.SMTP_SECURE !== 'false'; // true for port 465
  const user = process.env.SMTP_USER || 'integralwebsolution@gmail.com';
  const pass = process.env.SMTP_PASS || '';

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass
    }
  });
};

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Shyam Colour Express Backend',
    timestamp: new Date().toISOString()
  });
});

// 3-Way Enquiry Submission Endpoint
app.post('/api/enquiry', async (req, res) => {
  try {
    const {
      fullName,
      companyName,
      email,
      phone,
      enquiryType,
      productName,
      approxQuantity,
      message,
      honeypot
    } = req.body;

    // Honeypot check for spam prevention
    if (honeypot) {
      return res.json({ success: true, message: 'Enquiry received successfully.' });
    }

    // Required fields validation
    if (!fullName || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide all required fields: Full Name, Email, Phone, and Message.'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid email address.'
      });
    }

    const senderEmail = process.env.SMTP_USER || 'integralwebsolution@gmail.com';
    const clientEmail = process.env.CLIENT_EMAIL || 'bipin.mshr@gmail.com';
    const agencyEmail = process.env.AGENCY_EMAIL || 'integralwebsolution@gmail.com';
    const userEmail = email.trim();

    console.log(`\n======================================================`);
    console.log(`📩 NEW ENQUIRY RECEIVED: ${fullName} (${email})`);
    console.log(`Phone: ${phone} | Type: ${enquiryType || 'General'}`);
    console.log(`Product: ${productName || 'N/A'} | Qty: ${approxQuantity || 'N/A'}`);
    console.log(`Message: ${message}`);
    console.log(`======================================================\n`);

    // Check if App Password is provided
    const smtpPass = process.env.SMTP_PASS;
    const isSmtpConfigured = smtpPass && smtpPass !== 'YOUR_GMAIL_APP_PASSWORD_HERE';

    if (isSmtpConfigured) {
      const transporter = createTransporter();

      // Email 1: Notification to Client (Mr. Bipin Mishra / Shyam Colour)
      const clientMailOptions = {
        from: `"Shyam Colour Website" <${senderEmail}>`,
        to: clientEmail,
        replyTo: userEmail,
        subject: `🔔 New Website Enquiry: ${fullName} [${enquiryType || 'General'}]`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #0f172a; padding: 20px; text-align: center; color: #ffffff;">
              <h2 style="margin: 0; color: #d4a017; font-size: 22px;">SHYAM COLOUR</h2>
              <p style="margin: 5px 0 0 0; font-size: 13px; color: #94a3b8;">New B2B Lead Received from Website</p>
            </div>
            <div style="padding: 24px; background-color: #ffffff;">
              <h3 style="color: #0f172a; margin-top: 0; font-size: 16px; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">Customer & Requirement Details:</h3>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 12px;">
                <tr><td style="padding: 8px; color: #64748b; width: 35%;"><strong>Customer Name:</strong></td><td style="padding: 8px; color: #0f172a; font-weight: 600;">${fullName}</td></tr>
                <tr><td style="padding: 8px; color: #64748b;"><strong>Company Name:</strong></td><td style="padding: 8px; color: #0f172a;">${companyName || 'Not specified'}</td></tr>
                <tr><td style="padding: 8px; color: #64748b;"><strong>Email Address:</strong></td><td style="padding: 8px; color: #0f172a;"><a href="mailto:${userEmail}">${userEmail}</a></td></tr>
                <tr><td style="padding: 8px; color: #64748b;"><strong>Phone / WhatsApp:</strong></td><td style="padding: 8px; color: #0f172a;"><a href="tel:${phone}">${phone}</a></td></tr>
                <tr><td style="padding: 8px; color: #64748b;"><strong>Enquiry Type:</strong></td><td style="padding: 8px; color: #0f172a;">${enquiryType || 'General Enquiry'}</td></tr>
                <tr><td style="padding: 8px; color: #64748b;"><strong>Product / Model:</strong></td><td style="padding: 8px; color: #0f172a;">${productName || 'All Categories'}</td></tr>
                <tr><td style="padding: 8px; color: #64748b;"><strong>Approx. Quantity:</strong></td><td style="padding: 8px; color: #0f172a;">${approxQuantity || 'Not specified'}</td></tr>
                <tr><td style="padding: 8px; color: #64748b; vertical-align: top;"><strong>Message:</strong></td><td style="padding: 8px; color: #0f172a; background: #f8fafc; border-radius: 4px;">${message.replace(/\n/g, '<br/>')}</td></tr>
              </table>
              <div style="margin-top: 24px; text-align: center;">
                <a href="tel:${phone}" style="background-color: #d4a017; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: bold; font-size: 13px; display: inline-block;">Call Customer Now</a>
              </div>
            </div>
            <div style="background-color: #f1f5f9; padding: 12px; text-align: center; font-size: 11px; color: #64748b;">
              Submitted via Shyam Colour Official Website • Vasai East Factory
            </div>
          </div>
        `
      };

      // Email 2: Notification to Integral Web Solution (Agency Copy)
      const agencyMailOptions = {
        from: `"Shyam Colour Lead Tracker" <${senderEmail}>`,
        to: agencyEmail,
        replyTo: userEmail,
        subject: `[Lead Tracker] Shyam Colour Enquiry from ${fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #cbd5e1; border-radius: 6px; padding: 20px;">
            <h3 style="color: #1e293b; margin-top: 0;">New Lead Notification (Integral Web Solution)</h3>
            <p style="font-size: 13px; color: #475569;">A new enquiry was submitted through <strong>Shyam Colour Website</strong>:</p>
            <ul style="font-size: 13px; color: #1e293b; line-height: 1.6;">
              <li><strong>Name:</strong> ${fullName}</li>
              <li><strong>Company:</strong> ${companyName || 'N/A'}</li>
              <li><strong>Email:</strong> ${userEmail}</li>
              <li><strong>Phone:</strong> ${phone}</li>
              <li><strong>Enquiry Type:</strong> ${enquiryType}</li>
              <li><strong>Product:</strong> ${productName || 'N/A'}</li>
              <li><strong>Quantity:</strong> ${approxQuantity || 'N/A'}</li>
              <li><strong>Message:</strong> ${message}</li>
              <li><strong>Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</li>
            </ul>
          </div>
        `
      };

      // Email 3: Auto-Confirmation to the User / Inquirer
      const userMailOptions = {
        from: `"SHYAM COLOUR" <${senderEmail}>`,
        to: userEmail,
        replyTo: clientEmail,
        subject: `Thank You for Contacting Shyam Colour - Enquiry Received`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #0f172a; padding: 24px; text-align: center; color: #ffffff;">
              <h2 style="margin: 0; color: #d4a017; font-size: 24px; letter-spacing: 1px;">SHYAM COLOUR</h2>
              <p style="margin: 6px 0 0 0; font-size: 12px; color: #cbd5e1; text-transform: uppercase; letter-spacing: 1.5px;">Paint Roller & Painting Tools Manufacturer</p>
            </div>
            <div style="padding: 24px; background-color: #ffffff; color: #334155; line-height: 1.6; font-size: 14px;">
              <p>Dear <strong>${fullName}</strong>,</p>
              <p>Thank you for reaching out to <strong>Shyam Colour</strong>. We have successfully received your inquiry regarding our paint rollers and manufacturing solutions.</p>
              
              <div style="background-color: #f8fafc; border-left: 4px solid #d4a017; padding: 14px 18px; margin: 20px 0; border-radius: 0 6px 6px 0;">
                <p style="margin: 0 0 6px 0; font-weight: bold; color: #0f172a;">Summary of Your Enquiry:</p>
                <p style="margin: 3px 0; font-size: 13px;"><strong>Enquiry Type:</strong> ${enquiryType || 'General Enquiry'}</p>
                ${productName ? `<p style="margin: 3px 0; font-size: 13px;"><strong>Product:</strong> ${productName}</p>` : ''}
                ${approxQuantity ? `<p style="margin: 3px 0; font-size: 13px;"><strong>Approx Quantity:</strong> ${approxQuantity}</p>` : ''}
              </div>

              <p>Our sales and factory coordination team is reviewing your requirements and will connect with you shortly with product specifications and wholesale quotation details.</p>
              
              <p style="margin-top: 20px; font-weight: 600; color: #0f172a;">For urgent orders or immediate coordination:</p>
              <ul style="padding-left: 18px; margin-top: 6px; font-size: 13px; color: #475569;">
                <li><strong>Director:</strong> Mr. Bipin Mishra</li>
                <li><strong>Direct Phone:</strong> <a href="tel:8451845284" style="color: #d4a017; font-weight: bold;">+91 84518 45284</a></li>
                <li><strong>Email:</strong> <a href="mailto:${clientEmail}" style="color: #d4a017;">${clientEmail}</a></li>
                <li><strong>Factory:</strong> Gala No. 7 & 8, Goodwill Industry, Chinchpada, Vasai East – 401208, Maharashtra</li>
              </ul>
              
              <p style="margin-top: 24px; font-style: italic; color: #64748b; font-size: 13px;">
                &ldquo;Delivering the Right Quality to the Right Customer.&rdquo;
              </p>
            </div>
            <div style="background-color: #f1f5f9; padding: 14px; text-align: center; font-size: 11px; color: #64748b;">
              &copy; ${new Date().getFullYear()} SHYAM COLOUR. All rights reserved.<br/>
              Developed by <a href="https://integralwebsolution.in/" style="color: #d4a017; text-decoration: none;">Integral Web Solution</a>
            </div>
          </div>
        `
      };

      // Dispatch all 3 emails concurrently
      const results = await Promise.allSettled([
        transporter.sendMail(clientMailOptions),
        transporter.sendMail(agencyMailOptions),
        transporter.sendMail(userMailOptions)
      ]);

      console.log('✅ 3-Way Email Dispatch Results:');
      console.log(`1. Client (${clientEmail}):`, results[0].status);
      console.log(`2. Agency (${agencyEmail}):`, results[1].status);
      console.log(`3. Inquirer (${userEmail}):`, results[2].status);

    } else {
      console.warn('⚠️ SMTP_PASS is not yet configured in server/.env. Emails were logged to terminal.');
      console.warn('👉 Please update SMTP_PASS in server/.env with integralwebsolution@gmail.com app password.');
    }

    return res.json({
      success: true,
      message: 'Thank you for reaching out to Shyam Colour. Your enquiry has been received and our team will get in touch shortly.'
    });

  } catch (error) {
    console.error('❌ Server error processing enquiry:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while processing your enquiry. Please reach out directly to +91 8451845284.'
    });
  }
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`🚀 Shyam Colour Express Backend running on http://localhost:${PORT}`);
  console.log(`📡 Ready to receive form submissions and route 3-way emails.`);
});
