import Header from "./components/header/Header";
import PageContent from "./components/page_content/PageContent";
import Siderbar from "./components/sidebar/Siderbar";
import "./App.css";

function App() {
  return (
    <div className="page-layout">
      <Siderbar />
      <div className="main-content">
        <Header />
        <PageContent />
      </div>
    </div>
  );
}

export default App;
