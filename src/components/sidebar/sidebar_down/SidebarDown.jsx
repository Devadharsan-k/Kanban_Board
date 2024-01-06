import React from "react";
import MenuItems from "../MenuItems/MenuItems";
import { Menu1, Menu2, Menu3 } from "../../../Data/Data";
import "./SidebarDown.css";
const SidebarDown = () => {
  return (
    <div className="sidebar_down">
      <MenuItems title="Menu" data={Menu1} />
      <MenuItems title="Your Jobs" data={Menu2} />
      <MenuItems title="Tripping Teddies" data={Menu3} />
    </div>
  );
};

export default SidebarDown;
