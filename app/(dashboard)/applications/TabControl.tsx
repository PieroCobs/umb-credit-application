import React from "react";
import EmptyScreen from "../EmptyScreen";
import styles from "../styles/tab-control.module.scss";
import TabButton from "./TabButton";

type ContentProps = {
  footer?: React.ReactElement;
  body: React.ReactElement;
};

export default function TabControl({
  activeTab,
  onChangeTab,
  heads,
  content,
}: {
  activeTab: number;
  onChangeTab: Function;
  heads: string[];
  content: ContentProps[];
}) {
  return (
    <div className={styles["tab-control"]}>
      <div className={styles.header}>
        {heads.map((h, i) => {
          return (
            <TabButton
              key={i}
              label={h}
              isActive={activeTab == i}
              onClick={() => onChangeTab(i)}
            />
          );
        })}
      </div>

      {content.length == 0 ? (
        <EmptyScreen title="empty" subtext="Nothing to display here" />
      ) : (
        heads.map((h, index) => {
          const currentItem = content[index];
          return (
            <div
              className={`${styles.body} ${
                activeTab == index && styles.active
              }`}
              key={index}
            >
              {currentItem != undefined ? (
                currentItem.body
              ) : (
                <EmptyScreen
                  key={index}
                  title={h}
                  subtext="Nothing to display here"
                />
              )}
            </div>
          );
        })
      )}

      {content[activeTab] && content[activeTab].footer && (
        <div className={styles.footer}>{content[activeTab].footer}</div>
      )}
    </div>
  );
}
