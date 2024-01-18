import React, { useContext } from "react";
import { AppContent } from "../../../AppProvider/AppProvider";
import Card from "../Card/Card";
import "./GridView.css";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const GridView = () => {
  const { cards, setCards } = useContext(AppContent);

  const handleDelete = (cardId) => {
    const updatedCards = cards.filter((card) => card.id !== cardId);
    setCards(updatedCards);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    const updatedCards = Array.from(cards);
    const [movedCard] = updatedCards.splice(sourceIndex, 1);
    updatedCards.splice(destinationIndex, 0, movedCard);

    setCards(updatedCards);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
            className="card_content"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {cards.map((card, index) => (
              <div className="card_body" key={card.id}>
                <Card card={card} index={index} handleDelete={handleDelete} />
              </div>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default GridView;
