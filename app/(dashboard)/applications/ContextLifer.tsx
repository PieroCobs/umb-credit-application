"use client";

import { useGlobalContext } from "@/app/context/store";
import { Credit } from "@/types/credit";
import React, { useEffect } from "react";

export default function ContextLifer({
  initialCreditApplications,
}: {
  initialCreditApplications: Credit[];
}) {
  const { setCreditApplications } = useGlobalContext();

  useEffect(() => {
    setCreditApplications(initialCreditApplications);
  });

  return <></>;
}
