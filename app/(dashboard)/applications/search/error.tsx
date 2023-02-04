"use client";

import { ButtonSize, UmbButton } from "@/app/(components)/UmbButton";
import { useEffect } from "react";
import CenteredContent from "../../CenteredContent";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <CenteredContent>
      <p>Could not find what you are looking for</p>
      <UmbButton
        size={ButtonSize.md}
        label="OK"
        onClick={() => router.push("/applications")}
      />
    </CenteredContent>
  );
}
