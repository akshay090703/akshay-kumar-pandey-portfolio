"use server";
import nodemailer from "nodemailer";
const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export async function sendMail({
  from,
  sendTo,
  subject,
  text,
  html,
}: {
  from: string;
  sendTo?: string;
  subject: string;
  text: string;
  html?: string;
}) {
  try {
    const isVerified = await transporter.verify();
  } catch (error) {
    console.error(
      "Something Went Wrong",
      SMTP_SERVER_USERNAME,
      SMTP_SERVER_PASSWORD,
      error
    );
    return;
  }
  const info = await transporter.sendMail({
    from: from,
    to: SITE_MAIL_RECIEVER,
    subject: subject,
    text: text,
    html: html || "",
  });
  //   console.log(info);
  //   console.log("Message Sent", info.messageId);
  console.log("Mail sent to", SITE_MAIL_RECIEVER);
  return info;
}
