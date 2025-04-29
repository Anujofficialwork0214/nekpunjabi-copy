
import nodemailer from "nodemailer";
import axios from "axios";
import { RateLimiterMemory } from "rate-limiter-flexible";

// Rate limiter: Allow 5 requests per minute per IP
const rateLimiter = new RateLimiterMemory({
  points: 5,
  duration: 60,
  keyPrefix: "email_limiter",
});

export default async function handler(req, res) {
  // Ensure method is POST
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const { name, phone, location, recaptchaToken } = req.body;

  // Validate required fields
  if (!name || !phone || !location || !recaptchaToken) {
    return res.status(400).json({ success: false, error: "Missing required fields" });
  }

  // Get IP address safely
  const ip =
    (req.headers["x-forwarded-for"]?.split(",")[0]?.trim()) ||
    req.socket?.remoteAddress ||
    "unknown";

  // Rate limiting to prevent excessive requests from the same IP
  try {
    await rateLimiter.consume(ip);
  } catch {
    return res.status(429).json({ success: false, error: "Too many requests. Please try again later." });
  }

  // reCAPTCHA verification
  let recaptchaData;
  try {
    const { data } = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY || "",
        response: recaptchaToken,
      }),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );
    recaptchaData = data;

    if (!data.success) {
      return res.status(400).json({ success: false, error: "reCAPTCHA verification failed" });
    }
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return res.status(500).json({ success: false, error: "Error verifying reCAPTCHA" });
  }

  // Log the request body and reCAPTCHA response
  console.log("Request body:", req.body);
  console.log("reCAPTCHA verification response:", recaptchaData);

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: "smtppro.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_EMAIL,
      pass: process.env.ZOHO_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.ZOHO_EMAIL,
    to: "priya.kumari@quadbtech.com",
    subject: `📩 New Inquiry: ${location} | ${name} | nekPunjabi`,
    text: `Name: ${name}\nPhone: ${phone}\nLocation: ${location}`,
    html: `
      <div>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
      </div>
    `,
  };

  // Send the email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    return res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Failed to send email:", error);
    return res.status(500).json({ success: false, error: "Failed to send email", details: error?.message || "Unknown error" });
  }
}
