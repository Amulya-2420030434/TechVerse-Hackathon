import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, domain } = req.body;

  // Configure transporter
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Tech Event 2026 Registration Confirmation",
    text: `Hello ${name},\n\nYou are registered for Tech Event 2026 in the ${domain} track.\nSee you in March!\n\nBest,\nTech Event Team`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ message: "Error sending email", error });
  }
}