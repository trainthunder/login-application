import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login-page";
import DashboardHome from "./pages/dashboard-home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<DashboardHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
