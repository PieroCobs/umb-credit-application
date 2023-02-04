"use client";

import React from "react";
import { useGlobalContext } from "../context/store";
import CreditApplicationModal from "./applications/CreditApplicationModal";

export default function Periphery() {
  const { isModalVisible, setModalVisibility } = useGlobalContext();
  return (
    <div>
      {isModalVisible ? (
        <CreditApplicationModal
          onClose={() => {
            setModalVisibility(false);
          }}
        />
      ) : null}
    </div>
  );
}
