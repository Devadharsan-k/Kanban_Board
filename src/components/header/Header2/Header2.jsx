import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  BarsOutlined,
  DiffOutlined,
  SearchOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Button, Input, Segmented } from "antd";
import "./Header2.css";

const Header2 = () => {
  const navigate = useNavigate();

  const handleRoute = (selectedValue) => {
    console.log(selectedValue);
    if (selectedValue === "List") {
      navigate("/list");
    } else if (selectedValue === "Kanban") {
      navigate("/kanban");
    }
  };

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
            { value: "Kanban", icon: <AppstoreOutlined /> },
            { value: "List", icon: <BarsOutlined /> },
          ]}
          onChange={handleRoute}
        />
      </div>
    </div>
  );
};

export default Header2;
