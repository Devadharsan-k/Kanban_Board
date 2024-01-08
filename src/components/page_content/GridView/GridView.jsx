import React, { useContext } from "react";
import { AppContent } from "../../../AppProvider/AppProvider";
import Card from "../Card/Card";
import "./GridView.css";

const GridView = () => {
  const { cards, setCards } = useContext(AppContent);

  const handleDelete = (cardId) => {
    const updatedCards = cards.filter((card) => card.id !== cardId);
    setCards(updatedCards);
  };

  return (
    <div className="card_content">
      {cards.map((card, index) => (
        <div className="card_body" key={index}>
          <Card card={card} handleDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
};

export default GridView;
