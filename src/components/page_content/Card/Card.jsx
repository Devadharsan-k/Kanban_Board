import React, { useContext } from "react";
import "./Card.css";
import { DeleteOutlined } from "@ant-design/icons";
import UserCards from "../UserCards/UserCards";
import { AppContent } from "../../../AppProvider/AppProvider";

const Card = ({ card, handleDelete }) => {
  const handleDeleteCard = () => {
    handleDelete(card.id);
  };

  const { users, searchValue } = useContext(AppContent);

  const cardUsers = users.filter((user) => user.cardId === card.id);

  const filteredUsers = cardUsers.filter((user) =>
    user.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="card">
      <div className="card_details">
        <p className="card_title">{card.name}</p>
        <p className="dlt_icon">
          {card.name !== "Applied" && (
            <p className="dlt_icon">
              {
                <DeleteOutlined
                  onClick={handleDeleteCard}
                  className="dlt_icon"
                />
              }
            </p>
          )}
        </p>
      </div>
      <div className="user_details">
        <div className="scrollable-content">
          {filteredUsers.map((user) => (
            <UserCards key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
