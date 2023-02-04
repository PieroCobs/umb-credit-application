"use client";

import { Credit } from "@/types/credit";
import { formatAsMediumDate, formatAsShortDate } from "@/util/date-time";
import React, { useState } from "react";
import styles from "../styles/application-item.module.scss";
import buttonStyles from "../../styles/umb-button.module.scss";
import { UmbButton } from "../../(components)/UmbButton";
import { MdOutlineModeEdit } from "react-icons/md";

export default function CreditApplicationItem({ credit }: { credit: Credit }) {
  const [mouseIn, setMouseIn] = useState(false);

  return (
    <div
      className={styles["credit-application-item"]}
      onMouseEnter={() => setMouseIn(true)}
      onMouseLeave={() => setMouseIn(false)}
    >
      <div className={styles.mains}>
        <span className={styles["facility-type"]}>
          {credit.facilityType.toLowerCase()}
        </span>
        <span className={styles["account-name"]}>{credit.accountName}</span>
        <span className={styles["account-number"]}>{credit.accountNumber}</span>

        <div className={styles["mains-tags"]}>
          <Tag>{credit.accountType.toLowerCase()}</Tag>
          <Tag>{credit.businessType.toLocaleLowerCase()}</Tag>
          <Tag>{formatAsMediumDate(credit.dateBusinessEstablished)}</Tag>
        </div>
      </div>

      <div className={styles.aux}>
        <div className={styles["aux-top"]}>
          <span>{credit.applicationId}</span>
          <span>{formatAsShortDate(credit.applicationDate)}</span>
        </div>

        {mouseIn && (
          <div className={styles.cta}>
            <UmbButton
              variant="outlined"
              icon={<MdOutlineModeEdit />}
              onClick={() => {}}
            />
            <UmbButton
              label="send for approval"
              size={buttonStyles.md}
              onClick={() => {}}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <div className={styles.tag}>{children}</div>;
}
