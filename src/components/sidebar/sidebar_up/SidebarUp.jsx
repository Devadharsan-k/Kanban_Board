import React from "react";
import "./SidebarUp.css";
import { DownOutlined } from "@ant-design/icons";
import { Divider } from "antd";

const SidebarUp = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_up">
        <div className="sidebar_content">
          <img
            src="/src/assets/letter-n.png"
            width={50}
            alt="brand_logo"
            className="brand_img"
          />
          <div>
            <p className="brand_name">NUBIZE</p>
            <p className="brand_workspace">Workspace</p>
          </div>
        </div>
        <div>
          <DownOutlined className="down_icon" />
        </div>
      </div>
      <Divider className="divider" />
    </div>
  );
};

export default SidebarUp;
