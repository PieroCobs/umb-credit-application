"use client";

import { ButtonSize, UmbButton } from "@/app/(components)/UmbButton";
import { useGlobalContext } from "@/app/context/store";
import { Credit } from "@/types/credit";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CenteredContent from "../../CenteredContent";
import CreditApplicationItem from "../CreditApplicationItem";
import ListWrapper from "../ListWrapper";
import SortParams from "./Types";

export default function SortedList() {
  const searchParams = useSearchParams();
  const sortParam = searchParams.get("sort_by");
  const { creditApplications } = useGlobalContext();
  const [sortedList, setSortedList] = useState<Credit[]>([]);
  const [isSorting, setIsSorting] = useState(true);
  const router = useRouter();

  useEffect(() => {
    handleSort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortParam]);

  const sortApplications = async (attr: string, asc?: boolean) => {
    /* @ts-ignore */
    const sl = await [...creditApplications].sort((a1, a2) => {
      if (asc) {
        /* @ts-ignore */
        if (a2[attr] > a1[attr]) return 1;
        /* @ts-ignore */
        if (a2[attr] < a1[attr]) return -1;
      } else {
        /* @ts-ignore */
        if (a1[attr] > a2[attr]) return 1;
        /* @ts-ignore */
        if (a1[attr] < a2[attr]) return -1;
      }
    });

    return sl;
  };

  const sortAndUpdateState = (attr: string, asc?: boolean) => {
    sortApplications(attr, asc).then((res) => {
      setSortedList(res);
      setIsSorting(false);
    });
  };

  const handleSort = () => {
    setIsSorting(true);

    switch (sortParam) {
      case SortParams.MostRecent:
        sortAndUpdateState("applicationDate", true);
        break;
      case SortParams.AccountName:
        sortAndUpdateState("accountName");
        break;
      case SortParams.Reset:
      default:
        setSortedList([...creditApplications]);
        setIsSorting(false);
        break;
    }
  };

  return (
    <>
      {creditApplications.length == 0 ? (
        <CenteredContent>
          <p>Something went wrong</p>
          <UmbButton
            size={ButtonSize.md}
            label="try again"
            onClick={() => router.push("/applications")}
          />
        </CenteredContent>
      ) : isSorting ? (
        <CenteredContent>
          <p>Sorting applications...</p>
        </CenteredContent>
      ) : (
        <ListWrapper>
          {sortedList.map((ca, i) => (
            <CreditApplicationItem key={i} credit={ca} />
          ))}
        </ListWrapper>
      )}
    </>
  );
}
