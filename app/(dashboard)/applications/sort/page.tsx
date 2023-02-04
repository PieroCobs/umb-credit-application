import React from "react";
import Searchbox from "../Searchbox";
import SummaryAndSort from "../SummaryAndSort";
import styles from "../../styles/applications.module.scss";
import SortedList from "./SortedList";

export default function Page() {
  return (
    <>
      <div className={styles["search-and-sort"]}>
        <Searchbox />
        <SummaryAndSort />
      </div>

      <SortedList />
    </>
  );
}

export function ListWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.list}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
