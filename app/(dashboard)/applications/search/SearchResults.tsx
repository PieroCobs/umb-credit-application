import React from "react";
import { Credit } from "@/types/credit";
import CreditApplicationItem from "../CreditApplicationItem";
import ContextLifer from "../ContextLifer";
import EmptyScreen from "../../EmptyScreen";
import ListWrapper from "../ListWrapper";

const search = async (terms: string) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/applications/search?terms=${terms}`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, options);
  const results: Credit[] = await response.json();
  return results;
};

export default async function SearchResults({
  searchTerms,
}: {
  searchTerms: string;
}) {
  const seachResults = await search(searchTerms);

  return (
    <>
      {seachResults.length === 0 ? (
        <EmptyScreen
          title="nothing found"
          subtext="Your search terms did not return anything"
        />
      ) : (
        <ListWrapper>
          {seachResults.map((ca, i) => (
            <CreditApplicationItem key={i} credit={ca} />
          ))}
        </ListWrapper>
      )}
      <ContextLifer initialCreditApplications={seachResults} />
    </>
  );
}
