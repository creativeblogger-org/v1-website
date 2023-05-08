import type { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";
import nodemailer from "nodemailer";
import requestIp from "request-ip";

async function sendMail(fileName: string, ip: any) {
  const transporter = nodemailer.createTransport({
    host: "mail.creativeblogger.org",
    port: 465,
    secure: true,
    auth: {
      user: "contact@creativeblogger.org",
      pass: "EMAIL.mael2008",
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"File" <contact@maeldev.fr>`,
      to: "contact@creativeblogger.org",
      subject: "New message from contact form",
      text: `Un nouveau fichier a été uploadé !\n\n---Infos---\n\nNom du fichier : ${fileName}\nIp du posteur : ${ip}`,
    });

    console.log("Message sent: %s", info.messageId);
  } catch (err) {
    console.error(err);
  }
}

export const config = {
  api: {
    bodyParser: false,
    timeout: 30000, // Increase timeout to 30 seconds
  },
};

const storage = multer.diskStorage({
  destination: "verifiable/",
  filename: (req: any, file: any, cb: any) => {
    cb(null, file.originalname); // use the original filename
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 10, // 10 MB
  },
});
// const upload = multer({
//   dest: "posts/",
//   limits: {
//     fileSize: 1024 * 1024 * 10,
//   },
// });

export default async function handler(req: any, res: any) {
  const detectedIp = requestIp.getClientIp(req);
  try {
    await new Promise((resolve, reject) => {
      upload.single("file")(req, res, (err: any) => {
        if (err) {
          reject(err);
        } else {
          resolve("");
        }
      });
    });
    const { file }: any = req;
    if (!file) {
      throw new Error("No file uploaded");
    }
    res.status(200).json({ message: "File uploaded successfully" });
    sendMail(file.originalname, detectedIp);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error uploading file" });
  }
}
