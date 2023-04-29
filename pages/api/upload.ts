import type { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";

export const config = {
  api: {
    bodyParser: false,
    timeout: 30000, // Increase timeout to 30 seconds
  },
};

const storage = multer.diskStorage({
  destination: "posts/",
  filename: (req, file, cb) => {
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await new Promise((resolve, reject) => {
      upload.single("file")(req, res, (err: any) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
    const { file } = req;
    if (!file) {
      throw new Error("No file uploaded");
    }
    res.status(200).json({ message: "File uploaded successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error uploading file" });
  }
}
