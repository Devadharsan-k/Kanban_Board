import { Menu, Typography } from "antd";
import React from "react";
const { Text } = Typography;

const MenuItems = ({ title, data }) => {
  return (
    <>
      <Text type="secondary">{title}</Text>
      <Menu>
        {data.map((item) => (
          <Menu.Item
            key={item.label}
            icon={item.icon}
            style={{ margin: "0", fontWeight: "500", fontSize: "16px" }}
          >
            {item.color ? (
              <span
                style={{
                  display: "inline-block",
                  background: `${item.color}`,
                  borderRadius: "50%",
                  width: "10px",
                  height: "10px",
                  marginRight: "10px",
                }}
              ></span>
            ) : (
              ""
            )}

            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
};

export default MenuItems;
