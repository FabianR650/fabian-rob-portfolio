import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_EMAIL_PASSWORD, // APP PASSWORD ONLY
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.CONTACT_EMAIL}>`,
    to: process.env.CONTACT_EMAIL,
    subject: `New message from ${name}`,
    replyTo: email,
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
  });

  return NextResponse.json({ success: true });
}
