import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default function logUserOut(req: NextApiRequest, res: NextApiResponse) {
  const filePath: any = process.env.NEXT_PUBLIC_USER_PATH;

  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      res.status(200).json({ status: 200, message: "user logged out" });
    } else throw new Error("user does not exist");
  } catch (err) {
    res.status(404).json({ status: 404, message: "user not found" });
  }
}
