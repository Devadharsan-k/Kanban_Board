import React from "react";
import { useLocation } from "react-router-dom";
import ListView from "./ListView/ListView";
import GridView from "./GridView/GridView";

const PageContent = () => {
  const location = useLocation();
  const path = location.pathname;

  return path === "/list" ? <ListView /> : <GridView />;
};

export default PageContent;
