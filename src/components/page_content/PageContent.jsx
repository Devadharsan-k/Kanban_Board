import React from "react";
import { useLocation } from "react-router-dom";
import ListView from "./ListView/ListView";
import GridView from "./GridView/GridView";

const PageContent = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div
      style={{
        width: 1022,
        height: 492,
        overflowX: "auto",
        overflow: "auto",
        background: "#f8f9fa",
      }}
    >
      <div style={{ display: "flex", width: "max-content" }}>
        {path === "/list" ? <ListView /> : <GridView />}
      </div>
    </div>
  );
};

export default PageContent;
