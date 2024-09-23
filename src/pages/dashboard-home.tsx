import { useEffect } from "react";
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
    <div className="w-screen h-screen flex">
      <DashboardSidebar />
      <div className="w-full h-full pl-[50px] md:pl-[200px] flex flex-col items-center justify-center">
        <p className="font-protest-guerrilla text-[40px] md:text-[52px] lg:text-[64px] text-center font-bold animate-bounce text-wrap bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
          WELCOME TO <br className="min-[460px]:hidden" />
          MY SHOP
        </p>
      </div>
    </div>
  );
}

export default DashboardHome;
