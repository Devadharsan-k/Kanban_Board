import React from "react";
import SidebarUp from "./sidebar_up/SidebarUp";
import SidebarDown from "./sidebar_down/SidebarDown";

const Siderbar = () => {
  return (
    <div style={{ width: "21%", borderRight: "1px solid gray" }}>
      <SidebarUp />
      <SidebarDown />
    </div>
  );
};

export default Siderbar;
