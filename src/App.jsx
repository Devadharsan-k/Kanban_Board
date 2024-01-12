import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import PageContent from "./components/page_content/PageContent";
import Sidebar from "./components/sidebar/Sidebar";
import ListView from "./components/page_content/ListView/ListView";
import GridView from "./components/page_content/GridView/GridView";
import { DragDropContext } from "react-beautiful-dnd";
import { AppContent } from "./AppProvider/AppProvider";
import { useContext, useEffect } from "react";
import "./App.css";

function App() {
  const { users, setUsers } = useContext(AppContent);
  const handleDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const updatedUsers = [...users];
    const movedUser = updatedUsers[source.index];
    updatedUsers.splice(source.index, 1);
    updatedUsers.splice(destination.index, 0, movedUser);

    setUsers(updatedUsers);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="page-layout">
        <Sidebar />
        <div className="main-content">
          <Header />
          <PageContent>
            <Routes>
              <Route path="/" element={<Navigate to="/grid" />} />
              <Route path="/grid" element={<GridView />} />
              <Route path="/list" element={<ListView />} />
            </Routes>
          </PageContent>
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;
