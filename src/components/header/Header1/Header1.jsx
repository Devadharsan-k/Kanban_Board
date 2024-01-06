import { Avatar } from "antd";
import React from "react";
import "./Header1.css";
import {
  EllipsisOutlined,
  SettingOutlined,
  TeamOutlined,
} from "@ant-design/icons";
const { Text } = Typography;
import { Typography } from "antd";
import Segments from "../Segments/Segments";

const Header1 = () => {
  return (
    <div className="header1_left">
      <div>
        <p className="job_roles">Lead Designer</p>
        <div className="candidate_details">
          <Text type="secondary">Full-time</Text>
          <Text type="secondary">New York</Text>
          <Text type="secondary">
            <TeamOutlined /> 28
          </Text>
        </div>
      </div>
      <div>
        <Segments />
      </div>
      <div className="header1_right">
        <Avatar.Group
          maxCount={4}
          size="medium"
          maxStyle={{
            color: "#f56a00",
            backgroundColor: "#fde3cf",
            cursor: "pointer",
          }}
        >
          <Avatar
            style={{
              backgroundColor: "#FFBFA9",
            }}
          >
            D
          </Avatar>
          <Avatar
            style={{
              backgroundColor: "#D09CFA",
            }}
          >
            E
          </Avatar>
          <Avatar
            style={{
              backgroundColor: "#9FB4FF",
            }}
          >
            V
          </Avatar>
          <Avatar
            style={{
              backgroundColor: "#f56a00",
            }}
          >
            A
          </Avatar>
          <Avatar
            style={{
              backgroundColor: "#B3FFAE",
            }}
          >
            J
          </Avatar>
          <Avatar
            style={{
              backgroundColor: "#1677ff",
            }}
          >
            D
          </Avatar>
        </Avatar.Group>
        <div className="header1_icons">
          <SettingOutlined className="header1_icon" />
          <EllipsisOutlined className="header1_icon" />
        </div>
      </div>
    </div>
  );
};

export default Header1;
