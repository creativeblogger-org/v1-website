import nodemailer from "nodemailer";
import * as dotenv from "dotenv";

dotenv.config();

export default async function handler(req: any, res: any) {
  const { name, email, emailUser, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "mail.creativeblogger.org",
    port: 465,
    secure: true,
    auth: {
      user: "contact@creativeblogger.org",
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "contact@creativeblogger.org",
      subject: "New message from contact form",
      text: `De : ${emailUser}\n\nMessage : ` + message,
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ message: "Message envoyé !" });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message:
        "Une erreur provient du serveur lui-même. Passez par discord pour contacter les administrateurs de ce problème",
    });
  }
}
