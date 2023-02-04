import React, { Suspense } from "react";
import Searchbox from "../Searchbox";
import SummaryAndSort from "../SummaryAndSort";
import styles from "../../styles/applications.module.scss";
import CenteredContent from "../../CenteredContent";
import SearchResults from "./SearchResults";

export default function Page({ searchParams }: { searchParams: string }) {
  return (
    <>
      <div className={styles["search-and-sort"]}>
        <Searchbox />
        <SummaryAndSort />
      </div>
      <Suspense
        fallback={
          <CenteredContent>
            <p>Searching Credit Applications...</p>
          </CenteredContent>
        }
      >
        {/* @ts-ignore */}
        <SearchResults searchTerms={searchParams.terms} />
      </Suspense>
    </>
  );
}
