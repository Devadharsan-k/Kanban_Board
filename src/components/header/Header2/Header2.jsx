import {
  AppstoreOutlined,
  BarsOutlined,
  DiffOutlined,
  SearchOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Button, Input, Segmented } from "antd";
import React from "react";
import "./Header2.css";

const Header2 = () => {
  return (
    <div className="header2_left">
      <Input
        placeholder="Search Candidate..."
        prefix={<SearchOutlined />}
        className="input"
      />
      <div className="header2_right">
        <Button type="primary" className="btn_add_candidate">
          <UserAddOutlined /> Add Candidates
        </Button>
        <Button type="dashed" className="btn_add_candidate">
          <DiffOutlined /> Add Card
        </Button>
        <Segmented
          options={[
            {
              label: "List",
              value: "List",
              icon: <BarsOutlined />,
            },
            {
              label: "Kanban",
              value: "Kanban",
              icon: <AppstoreOutlined />,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Header2;
