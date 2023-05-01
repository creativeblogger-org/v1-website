import type { NextApiRequest, NextApiResponse } from "next";
import requestIp from "request-ip";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const detectedIp: string = requestIp.getClientIp(req);
  console.log(detectedIp);
}
