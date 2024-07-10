import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import LegalPage from "./LegalPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import SearchPage from "./Pages/SearchPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/legal" element={<LegalPage />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/search" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default App;
