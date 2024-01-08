import React from "react";
import SidebarUp from "./sidebar_up/SidebarUp";
import SidebarDown from "./sidebar_down/SidebarDown";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "21%",
        height: "100dvh",
        borderRight: "1px solid gray",
      }}
    >
      <SidebarUp />
      <SidebarDown />
    </div>
  );
};

export default Sidebar;
