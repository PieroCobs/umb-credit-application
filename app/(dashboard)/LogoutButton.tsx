"use client";

import React from "react";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/navigation";

const logUserOut = async () => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout/`;
  const response = await fetch(url);
  const results = await response.json();
  return results;
};

export function LogoutButton() {
  const router = useRouter();

  return (
    <div>
      <Link
        href="#!"
        onClick={async (e) => {
          e.preventDefault();
          await logUserOut();
          router.push("/");
        }}
      >
        <FiLogOut size={16} />
        <span>log out</span>
      </Link>
    </div>
  );
}
