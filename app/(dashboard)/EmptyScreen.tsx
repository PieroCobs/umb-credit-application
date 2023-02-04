import React from "react";
import colors from "../styles/variables.module.scss";
import CenteredContent from "./CenteredContent";

type PropTypes = {
  title: String;
  subtext?: String;
};

export default function EmptyScreen({ title, subtext }: PropTypes) {
  return (
    <CenteredContent>
      <h1
        style={{
          margin: "0 0 8px 0",
          textTransform: "capitalize",
        }}
      >
        {title}
      </h1>
      {subtext && (
        <span
          style={{
            fontSize: "14px",
            color: colors.umbTextGray,
          }}
        >
          {subtext}
        </span>
      )}
    </CenteredContent>
  );
}
