"use client";

import React, { useState } from "react";
import { UmbButton } from "./UmbButton";
import buttonStyle from "../styles/umb-button.module.scss";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { User } from "@/types/user";

export default function LoginForm() {
  const [name, setFullName] = useState("");
  const [position, setPosition] = useState("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (name.trim().length == 0) {
      alert("Please enter your full name");
      setLoading(false);
      return;
    }

    if (position.trim().length == 0) {
      alert("Your position is required");
      setLoading(false);
      return;
    }

    const data: User = {
      name,
      position,
    };

    const payload = JSON.stringify(data);
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    };

    const response = await fetch(url, options);

    if (response.status !== 200) {
      alert("An error occurred: " + response.statusText);
      setLoading(false);
      return;
    }

    router.push("/applications");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        full name
        <input
          required
          type="text"
          id="name"
          value={name}
          onChange={(e) => setFullName(e.target.value)}
        />
      </label>
      <label>
        position
        <input
          required
          type="text"
          id="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </label>
      <br />
      <UmbButton size={buttonStyle.lg} fullscreen disabled={isLoading}>
        {isLoading ? <ClipLoader size={20} /> : "Log in"}
      </UmbButton>
    </form>
  );
}
