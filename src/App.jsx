import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import PageContent from "./components/page_content/PageContent";
import Sidebar from "./components/sidebar/Sidebar";
import ListView from "./components/page_content/ListView/ListView";
import GridView from "./components/page_content/GridView/GridView";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="page-layout">
        <Sidebar />
        <div className="main-content">
          <Header />
          <PageContent>
            <Routes>
              <Route path="/grid" element={<GridView />} />
              <Route path="/list" element={<ListView />} />
            </Routes>
          </PageContent>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
