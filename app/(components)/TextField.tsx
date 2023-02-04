"use client";

import React from "react";
import styles from "../styles/textfield.module.scss";

export default function TextField({
  label,
  type,
  id,
  onChange,
  pattern,
  readOnly = false,
  step,
}: {
  label: string;
  type?: string;
  id?: string;
  pattern?: string;
  readOnly?: boolean;
  step?: number;
  onChange?: (e: string) => void;
}) {
  return (
    <label className={styles.textfield}>
      <span className={styles.label}>{label}</span>

      <input
        id={id}
        type={type ?? "text"}
        className={styles.input}
        pattern={pattern}
        readOnly={readOnly}
        step={step}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const val = e.target.value;
          onChange && onChange(val);
        }}
      />
    </label>
  );
}
