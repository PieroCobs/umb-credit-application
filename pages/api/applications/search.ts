import { Credit } from "@/types/credit";
import type { NextApiRequest, NextApiResponse } from "next";
import applicationList from "./applicationList";

export default async function search(
  req: NextApiRequest,
  res: NextApiResponse<Credit[]>
) {
  const terms = req.query.terms as string;

  const searchApplications = () => {
    const searchTermArray = terms.split(", ");

    const results = applicationList.filter((item) => {
      for (let i = 0; i < searchTermArray.length; i++) {
        const term = searchTermArray[i].toString().toLowerCase();
        if (
          item.accountName.toLowerCase().includes(term) ||
          item.applicationId.toLowerCase() == term ||
          item.accountNumber.toString().toLowerCase() == term
        )
          return item;
      }
    });

    return results;
  };

  res.status(200).json(searchApplications());
}
