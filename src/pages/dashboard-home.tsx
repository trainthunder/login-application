import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "../components/dashboard/dashboard-sidebar";

type Props = {};

function DashboardHome({}: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div className="w-screen h-screen">
      <DashboardSidebar />
    </div>
  );
}

export default DashboardHome;
