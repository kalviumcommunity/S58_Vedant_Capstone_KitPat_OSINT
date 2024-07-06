import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import LegalPage from "./LegalPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/legal" element={<LegalPage />} />
      </Routes>
    </>
  );
}

export default App;
