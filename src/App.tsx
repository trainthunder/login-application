import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login-page";
import DashboardHome from "./pages/dashboard-home";
import DashboardShop from "./pages/dashboard-shop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<DashboardHome />} />
          <Route path="/shop" element={<DashboardShop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
