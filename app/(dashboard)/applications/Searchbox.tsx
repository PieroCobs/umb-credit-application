"use client";

import React, { FormEvent, useState } from "react";
import styles from "../styles/searchbox.module.scss";
import { GoSearch } from "react-icons/go";
import { VscChromeClose } from "react-icons/vsc";
import { useRouter, useSearchParams } from "next/navigation";

export default function Searchbox() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerms = searchParams.get("terms") as string;
  const [searchString, setSearchString] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchString.trim() != "") {
      let url: string = "";
      searchTerms === null || searchTerms === ""
        ? (url = searchString)
        : (url = `${searchString}, ${searchTerms}`);

      setSearchString("");
      navigateToSearchPage(url);
    }
  };

  const handleTermRemoval = async (termToRemove: string) => {
    const searchTermArray: string[] = searchTerms.split(", ");
    const newList = await searchTermArray.filter(
      (term) => term != termToRemove
    );
    if (newList.length === 0) {
      router.push("/applications/");
      return;
    }
    navigateToSearchPage(newList.join(", "));
  };

  const navigateToSearchPage = (terms: string) => {
    router.push(`/applications/search?terms=${terms}`);
  };

  return (
    <div className={styles.searchbox}>
      <form className={styles.input} onSubmit={handleSubmit}>
        <div className={styles.prefix}>
          <GoSearch size={20} />
        </div>
        <input
          type="search"
          id="search"
          placeholder="Search by CA number, account number, company name"
          onChange={(e) => setSearchString(e.target.value.toString())}
          value={searchString}
          autoFocus={searchTerms != null}
        />
      </form>
      {searchTerms && (
        <div className={styles["search-terms"]}>
          {searchTerms.split(", ").map((term, i) => (
            <Tag key={i} label={term} onDismiss={handleTermRemoval} />
          ))}
        </div>
      )}
    </div>
  );
}

function Tag({
  label,
  onDismiss,
}: {
  label: string;
  onDismiss?: (term: string) => void;
}) {
  return (
    <div className={styles.tag}>
      <div className={styles.label}>{label}</div>
      <button aria-label="close" onClick={() => onDismiss && onDismiss(label)}>
        <VscChromeClose size={16} />
      </button>
    </div>
  );
}
