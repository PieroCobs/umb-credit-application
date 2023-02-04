import React from "react";

export default function CenteredContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingBottom: "100px",
      }}
    >
      {children}
    </div>
  );
}
