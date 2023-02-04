"use client";

import { useGlobalContext } from "@/app/context/store";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import styles from "../styles/summary-sort.module.scss";
import SortParams from "./sort/Types";

export default function SummaryAndSort() {
  const { creditApplications } = useGlobalContext();
  const router = useRouter();
  const searchParams = useSearchParams();
  const sortParam = searchParams.get("sort_by") as string;
  const searchTerms = searchParams.get("terms") as string;

  return (
    <div className={styles["summary-and-sort"]}>
      <div className={styles["sort-box"]}>
        <div className={styles.label}>Sort by</div>
        <select
          aria-label="sort"
          name="sort"
          id="sort"
          defaultValue={sortParam}
          onChange={(e) => {
            const { value } = e.target;
            if (sortParam == undefined && value == SortParams.Reset) {
              return;
            }
            const getSearchParams = () => {
              return searchTerms !== null && searchTerms !== ""
                ? `&terms=${searchTerms}`
                : "";
            };
            router.push(
              `/applications/sort?sort_by=${value}${getSearchParams()}`
            );
          }}
        >
          <option value={SortParams.Reset}>{sortParam && "reset"}</option>
          <option value={SortParams.MostRecent}>most recent</option>
          <option value={SortParams.AccountName}>account name</option>
        </select>
      </div>

      <div className={styles.summary}>
        Showing {creditApplications.length} of {100} records
      </div>
    </div>
  );
}
