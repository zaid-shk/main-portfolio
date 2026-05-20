import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Create SMTP transporter using secure environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER || "mohammadzaid8178@gmail.com",
      pass: process.env.SMTP_PASS, // Set this in .env file (Gmail App Password)
    },
  });

  try {
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL || "mohammadzaid8178@gmail.com",
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: 'Outfit', sans-serif; padding: 30px; color: #ffffff; background-color: #050505; border: 1px solid #10b981; border-radius: 20px; max-width: 600px; margin: 0 auto; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          <div style="text-align: center; margin-bottom: 20px;">
            <div style="display: inline-block; width: 40px; height: 40px; background-color: #059669; border-radius: 50%; line-height: 40px; text-align: center; font-weight: bold; font-size: 14px; color: #ffffff; margin-bottom: 10px;">MZ</div>
            <h2 style="color: #10b981; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 2px;">Secure Uplink Active</h2>
            <p style="color: #666666; font-size: 10px; margin: 5px 0 0 0; text-transform: uppercase;">Message Transmitted Successfully</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #222222; margin: 20px 0;" />
          
          <div style="margin-bottom: 25px;">
            <p style="margin: 0 0 8px 0; font-size: 11px; text-transform: uppercase; color: #666666; letter-spacing: 1px;">Sender Identity</p>
            <p style="margin: 0; font-size: 15px; font-weight: bold; color: #ffffff;">${name}</p>
          </div>
          
          <div style="margin-bottom: 25px;">
            <p style="margin: 0 0 8px 0; font-size: 11px; text-transform: uppercase; color: #666666; letter-spacing: 1px;">Frequency (Email)</p>
            <p style="margin: 0; font-size: 15px; font-weight: bold; color: #10b981;">${email}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <p style="margin: 0 0 8px 0; font-size: 11px; text-transform: uppercase; color: #666666; letter-spacing: 1px;">Signal Content</p>
            <div style="background-color: #0c0c0c; border: 1px solid #222222; padding: 20px; border-radius: 12px; color: #dddddd; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          </div>
          
          <hr style="border: none; border-top: 1px solid #222222; margin: 20px 0;" />
          
          <p style="font-size: 10px; color: #444444; margin: 0; text-align: center; text-transform: uppercase; letter-spacing: 1px;">
            PORTFOLIO CONTACT HUB • SECURE TLS_1.3 TUNNEL
          </p>
        </div>
      `,
    };

    // If SMTP credentials aren't set in dev, log output and mock success
    if (!process.env.SMTP_USER || process.env.SMTP_USER === "fake-developer-email@gmail.com") {
      console.log("----------------------------------------");
      console.log("LOCAL DEV: Nodemailer Simulated Send");
      console.log("To:", mailOptions.to);
      console.log("Sender Name:", name);
      console.log("Sender Email:", email);
      console.log("Subject:", mailOptions.subject);
      console.log("Message:", message);
      console.log("----------------------------------------");
      
      // Simulate slight network delay
      await new Promise((resolve) => setTimeout(resolve, 800));
      return res.status(200).json({ success: true, simulated: true });
    }

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Nodemailer transmission error:", error);
    return res.status(500).json({ error: "Failed to transmit message: " + error.message });
  }
}
