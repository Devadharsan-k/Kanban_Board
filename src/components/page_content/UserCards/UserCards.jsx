import { DeleteOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, Divider } from "antd";
import React, { useContext } from "react";
import { Typography } from "antd";
const { Text } = Typography;
import "./UserCards.css";
import { AppContent } from "../../../AppProvider/AppProvider";

const UserCards = ({ user }) => {
  const { cards, setCards } = useContext(AppContent);
  const handleDeleteUser = () => {
    const updatedUsers = cards.map((card) => ({
      ...card,
      items: card.items.filter((u) => u.id !== user.id),
    }));
    setCards(updatedUsers);
  };
  return (
    <div className="user_card">
      <div className="user_align">
        <div className="left_user_details">
          <Avatar>{user.name.charAt(0)}</Avatar>
          <div className="card_left">
            <Text type="strong">{user.name}</Text>
            <Text type="secondary">{user.city}</Text>
          </div>
        </div>
        <DeleteOutlined onClick={handleDeleteUser} className="dlt_icon" />
      </div>
      <Divider className="divider_user" />
      <div className="user_card_footer">
        <div className="user_data">{new Date().toLocaleDateString()}</div>
        <div>
          {[1, 2, 3, 4, 5].map((index) => (
            <StarOutlined key={index} className="star_icon" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserCards;
