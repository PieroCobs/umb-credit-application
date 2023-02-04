import React from "react";
import { Credit } from "@/types/credit";
import CreditApplicationItem from "./CreditApplicationItem";
import ContextLifer from "./ContextLifer";

const fetchCreditApplications = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/applications/`);
  const applications: Credit[] = await res.json();
  return applications;
};

export default async function CreditApplicationList() {
  const creditApplications = await fetchCreditApplications();

  return (
    <>
      {creditApplications.map((ca, i) => (
        <CreditApplicationItem key={i} credit={ca} />
      ))}
      <ContextLifer initialCreditApplications={creditApplications} />
    </>
  );
}
