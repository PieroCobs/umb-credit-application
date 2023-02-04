"use client";

import React, { useState } from "react";
import styles from "../../styles/company-info.module.scss";
import TextField from "../../../(components)/TextField";
import { UmbButton } from "../../../(components)/UmbButton";
import { TbSum } from "react-icons/tb";
import Dropdown from "@/app/(components)/Dropdown";
import { BusinessType, Facility } from "@/types/credit";
import { RiAddFill } from "react-icons/ri";
import ShareholderControl, { Shareholder } from "./ShareholderControl";

export default function CompanyInfo() {
  const [shareholders, setShareholders] = useState<Shareholder[]>([
    { id: 1, name: undefined, share: undefined },
  ]);
  const [highestCount, setHighestCount] = useState(1);

  const handleRemove = (id: number) => {
    const newList = shareholders.filter((s) => s.id != id);
    setShareholders(newList);
  };

  const handleUpdate = (holder: Shareholder) => {
    const oldList = shareholders;
    const newList = oldList.map((item) => {
      if (item.id == holder.id) return holder;
      return item;
    });
    setShareholders(newList);
  };

  const checkShareholderInfoComplete = () => {
    const lastItem = shareholders[shareholders.length - 1];
    const values = Object.values(lastItem);

    if (values.includes(undefined)) return false;
    return true;
  };

  return (
    <form className={styles.scaffold}>
      <div>
        <TextField label="account number" />
        <TextField label="account name" />
        <TextField label="date business est'd" type="date" />
        <TextField label="date account opened" type="date" />
        <TextField label="business sector" />
        <TextField label="main business location" />
        <TextField
          label="contact person tel no."
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />
      </div>
      <div>
        <Dropdown label="facility type" items={Facility} />
        <div className={styles["flex-control"]}>
          <TextField label="PSR score" type="number" step={0.1} />
          <div className={styles.postfix}>
            <UmbButton icon={<TbSum size={24} />} fullscreen />
          </div>
        </div>
        <Dropdown label="type of business" items={BusinessType} />
        <div className={styles.shareholders}>
          <div className={`${styles.row} ${styles.header}`}>
            <div className={styles.holder}>Shareholder(s)</div>
            <div className={styles.holding}>Shares(%)</div>
          </div>

          <div>
            {shareholders.map((s, i) => (
              <ShareholderControl
                key={i}
                shareholder={s}
                onRemove={handleRemove}
                onUpdate={handleUpdate}
              />
            ))}
          </div>

          <div className={styles.footer}>
            {checkShareholderInfoComplete() && (
              <UmbButton
                label="add"
                icon={<RiAddFill />}
                variant="outlined"
                onClick={(e) => {
                  e.preventDefault();
                  setShareholders((sh) => [
                    ...sh,
                    {
                      id: highestCount + 1,
                      name: undefined,
                      share: undefined,
                    },
                  ]);
                  setHighestCount((hc) => hc + 1);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
