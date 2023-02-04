import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

export default function login(req: NextApiRequest, res: NextApiResponse<{}>) {
  const { body } = req;
  const content = JSON.stringify(body);
  const filePath: any = process.env.NEXT_PUBLIC_USER_PATH;

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      throw err;
    }
  });

  res.status(200).json({ message: "User log in successs.", user: body });
}
