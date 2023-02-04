import { User } from "@/types/user";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default function getLoggedInUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const filePath: any = process.env.NEXT_PUBLIC_USER_PATH;
  let user: User;

  try {
    if (fs.existsSync(filePath)) {
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) throw err;
        else {
          user = JSON.parse(data);
          res
            .status(200)
            .json({ status: 200, message: "User retrieved.", user });
        }
      });
    } else throw new Error(``);
  } catch (err) {
    res.status(404).json({ status: 404, message: "user not found" });
  }
}
