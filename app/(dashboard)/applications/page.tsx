import React, { Suspense } from "react";
import CreditApplicationList from "./CreditApplicationList";
import styles from "../styles/applications.module.scss";
import CenteredContent from "../CenteredContent";
import SummaryAndSort from "./SummaryAndSort";
import Searchbox from "./Searchbox";

export default async function Page() {
  return (
    <>
      <div className={styles["search-and-sort"]}>
        <Searchbox />
        <SummaryAndSort />
      </div>
      <Suspense
        fallback={
          <CenteredContent>
            <p>Loading Credit Applications...</p>
          </CenteredContent>
        }
      >
        <div className={styles.list}>
          <div className={styles.container}>
            {/* @ts-ignore */}
            <CreditApplicationList />
          </div>
        </div>
      </Suspense>
    </>
  );
}
