"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";
import { ButtonSize, UmbButton } from "../(components)/UmbButton";
import { RiAddLine } from "react-icons/ri";
import { useGlobalContext } from "../context/store";

export default function ActionsPane() {
  const activeSegment: String | null = useSelectedLayoutSegment();
  const { setModalVisibility } = useGlobalContext();

  const getSegmentContextActions = () => {
    switch (activeSegment) {
      case "applications":
        return (
          <UmbButton
            variant="outlined"
            label="new credit application"
            icon={<RiAddLine />}
            onClick={() => {
              setModalVisibility(true);
            }}
            size={ButtonSize.md}
            fullscreen={true}
          />
        );
      case "approvals":
        return <></>;
      case "messages":
        return (
          <UmbButton
            variant="outlined"
            label="new message"
            icon={<RiAddLine />}
            onClick={() => {
              alert("new credit app");
            }}
            size={ButtonSize.md}
            fullscreen={true}
          />
        );
      default:
        return <></>;
    }
  };

  return <div>{getSegmentContextActions()}</div>;
}
