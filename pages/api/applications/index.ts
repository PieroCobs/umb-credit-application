import { Credit } from "@/types/credit";
import type { NextApiRequest, NextApiResponse } from "next";
import applicationList from "./applicationList";

export default function getAll(
  req: NextApiRequest,
  res: NextApiResponse<Credit[]>
) {
  const timeout: number = Math.floor(Math.random() * 2 + 1) * 1000;

  setTimeout(() => {
    res.status(200).json(applicationList.slice(0, 10));
  }, timeout);
}
