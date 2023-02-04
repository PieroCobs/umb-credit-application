"use client";

import React, { useEffect, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import styles from "../styles/dropdown.module.scss";

type Props = {
  label: string;
  id?: string;
  items?: any;
  onChange?: (val: string) => void;
};

export default function Dropdown({ label, id, items, onChange }: Props) {
  const [dropped, setDropped] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const handleChange = (val: string) => {
    setValue(val);
    onChange && onChange(val);
  };

  const getKeys = () => {
    return Object.keys(items);
  };

  return (
    <div className={styles.dropdown}>
      <span className={styles.label}>{label}</span>

      <div className={styles.content}>
        {dropped && (
          <>
            <ul className={styles.menu}>
              {getKeys().map((k, i) => {
                const item = items[k].toLowerCase();
                return (
                  <li
                    key={i}
                    onClick={() => {
                      handleChange(item);
                      setDropped(false);
                    }}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
            <div
              className={styles.backdrop}
              onClick={() => setDropped(false)}
            ></div>
          </>
        )}

        <input
          id={id}
          type="text"
          className={styles.input}
          value={value}
          onChange={(e) => {
            const val = e.target.value;
            handleChange(val);
          }}
        />
        <button
          aria-label="toggle"
          className={styles.trigger}
          onClick={(e) => {
            e.preventDefault();
            setDropped(true);
          }}
        >
          <IoChevronDownOutline size={24} />
        </button>
      </div>
    </div>
  );
}
