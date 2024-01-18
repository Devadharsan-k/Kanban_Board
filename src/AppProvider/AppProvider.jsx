import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const AppContent = createContext(null);

export const AppProvider = ({ children }) => {
  const [cards, setCards] = useState([
    {
      id: uuidv4(),
      name: "Applied",
      items: [
        {
          id: uuidv4(),
          name: "deva",
          city: "dpm",
        },
        {
          id: uuidv4(),
          name: "dharsan",
          city: "cbe",
        },
      ],
    },
  ]);

  const contextValue = {
    cards,
    setCards,
  };

  return (
    <AppContent.Provider value={contextValue}>{children}</AppContent.Provider>
  );
};
