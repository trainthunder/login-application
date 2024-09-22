import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

type Props = {};

const DashboardSidebar = ({}: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="w-full max-w-[50px] md:max-w-[240px] h-full bg-stateblue pl-[5px] md:pl-[40px]">
      <div className="w-full bg-stateblue relative flex flex-col">
        <div className="w-[20px] h-full bg-white absolute right-0 flex z-5"></div>
        <button className="w-full py-[10px] bg-white rounded-l-full z-10 flex">
          <div className="w-[24px] h-[24px]"></div>
        </button>
        <button className="w-full py-[10px] bg-stateblue rounded-l-full flex rounded-tr-full z-10">
          <div className="w-[24px] h-[24px]"></div>
        </button>
      </div>
    </nav>
  );
};

export default DashboardSidebar;
