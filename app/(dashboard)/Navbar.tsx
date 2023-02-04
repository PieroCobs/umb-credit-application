"use client";

import React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { AiFillAppstore, AiOutlineCheckSquare } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";

import styles from "./styles/navbar.module.scss";

export default function MainMenu() {
  const activeSegment: String | null = useSelectedLayoutSegment();

  return (
    <nav className={styles.navbar}>
      {links.map((l, i) => (
        <Link
          href={l.path}
          key={i}
          className={l.targetSegment == activeSegment ? styles.active : ""}
        >
          {l.icon}
          <span>{l.label}</span>
        </Link>
      ))}
    </nav>
  );
}

const links = [
  {
    label: "applications",
    path: "/applications",
    targetSegment: "applications",
    icon: <AiFillAppstore size={16} />,
  },
  {
    label: "approvals",
    path: "/approvals",
    targetSegment: "approvals",
    icon: <AiOutlineCheckSquare size={16} />,
  },
  {
    label: "messages",
    path: "/messages",
    targetSegment: "messages",
    icon: <BiMessageSquareDetail size={16} />,
  },
];
