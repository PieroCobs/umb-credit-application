import React from "react";
import styles from "../styles/umb-button.module.scss";

interface Props {
  label?: string;
  onClick?: (e: React.MouseEvent) => void;
  icon?: JSX.Element;
  variant?: string;
  size?: string;
  fullscreen?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
}

export function UmbButton({
  label,
  onClick,
  icon,
  variant = "filled",
  size,
  fullscreen,
  children,
  disabled = false,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`${
        styles[
          variant == "filled"
            ? "button-filled"
            : variant == "outlined"
            ? "button-outlined"
            : "button-text"
        ]
      } ${size} ${fullscreen ? styles.fullscreen : null}`}
      disabled={disabled}
    >
      {children ? (
        children
      ) : (
        <>
          {icon ? <span className={styles.icon}>{icon}</span> : null}
          {label ? <span className={styles.label}>{label}</span> : null}
        </>
      )}
    </button>
  );
}

export const ButtonSize = {
  md: styles.md,
  lg: styles.lg,
};
