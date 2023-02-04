"use client";

import React, { useState } from "react";
import styles from "../styles/modal.module.scss";
import { VscChromeClose } from "react-icons/vsc";
import TabControl from "./TabControl";
import { ButtonSize, UmbButton } from "../../(components)/UmbButton";
import { BsChevronRight } from "react-icons/bs";
import CompanyInfo from "./(application-form)/CompanyInfo";

export default function CreditApplicationModal({
  onClose,
}: {
  onClose: Function;
}) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.modal}>
      <div className={styles.backdrop}></div>
      <div className={styles.dialog}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.title}>New Credit Application</div>
            <button
              aria-label="Close"
              className={styles.dismiss}
              onClick={() => {
                onClose();
              }}
            >
              <VscChromeClose size={24} />
            </button>
          </div>
          <div className={styles.body}>
            <TabControl
              activeTab={activeTab}
              onChangeTab={(tabIndex: number) => {
                setActiveTab(tabIndex);
              }}
              heads={[
                "company info",
                "facility/account summary",
                "company background",
                "summary/recommendation",
              ]}
              content={[
                {
                  body: <CompanyInfo />,
                  footer: (
                    <>
                      <UmbButton size={ButtonSize.lg}>
                        Continue &nbsp;&nbsp;&nbsp;&nbsp;
                        <BsChevronRight size={20} />
                      </UmbButton>
                    </>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
