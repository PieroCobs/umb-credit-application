import React from "react";
import styles from "../styles/tab-control.module.scss";

export default function TabButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}) {
  return (
    <button
      className={`${styles["tab-button"]} ${isActive && styles.active}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
