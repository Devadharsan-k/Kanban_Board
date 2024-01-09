import React, { createContext, useState } from "react";

export const AppContent = createContext(null);

export const AppProvider = ({ children }) => {
  const [cards, setCards] = useState([
    {
      id: Date.now(),
      name: "Applied",
    },
  ]);
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const contextValue = {
    cards,
    users,
    searchValue,
    setCards,
    setUsers,
    setSearchValue,
  };

  return (
    <AppContent.Provider value={contextValue}>{children}</AppContent.Provider>
  );
};
