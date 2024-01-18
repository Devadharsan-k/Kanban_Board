// Card.jsx

import React from "react";
import "./Card.css";
import { DeleteOutlined } from "@ant-design/icons";
import UserCards from "../UserCards/UserCards";

const Card = ({ card, handleDelete }) => {
  const handleDeleteCard = () => {
    handleDelete(card.id);
  };

  return (
    <div className="card">
      <div className="card_details">
        <p className="card_title">{card.name}</p>
        <div className="dlt_icon">
          {card.name !== "Applied" && (
            <div className="dlt_icon">
              <DeleteOutlined onClick={handleDeleteCard} className="dlt_icon" />
            </div>
          )}
        </div>
      </div>
      <div className="user_details">
        <div className="scrollable-content">
          {card.items.map((user) => (
            <UserCards key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
