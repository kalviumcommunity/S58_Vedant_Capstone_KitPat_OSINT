import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import LegalPage from "./LegalPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import SearchPage from "./Pages/SearchPage";
import ProfilePage from "./Pages/ProfilePage";
import NotLoggedInRoutes from "./function/NotLoggedInRoutes";
import LoggedInRoutes from "./function/LoggedInRoutes";
import BuyKitpat from "./Pages/BuyKitpat";

function App() {
  return (
    <>
      <Routes>
        <Route element={<NotLoggedInRoutes />}>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/legal" element={<LegalPage />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Route>

      <Route element={<LoggedInRoutes />}>
        <Route exact path="/search" element={<SearchPage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/recharge" element={<BuyKitpat />} />
      </Route>
      </Routes>
    </>
  );
}

export default App;
