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
