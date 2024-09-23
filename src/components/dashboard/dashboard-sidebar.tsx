import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface Props {}

const DashboardSidebar: React.FC<Props> = ({}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <nav className="w-full max-w-[50px] md:max-w-[200px] h-full bg-stateblue fixed z-10">
      {/** Profile Icon Section Start */}
      <div className="w-full pt-[44px] flex items-center justify-center">
        <div className="w-[100px] md:h-[100px] rounded-full md:border-[5px] border-white flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-5 md:size-12 text-white"
          >
            <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
        </div>
      </div>
      {/** Profile Icon Section End */}

      <div className="pl-[5px] md:pl-[15px]">
        {location.pathname === "/home" ? (
          <div className="w-full bg-stateblue relative flex flex-col">
            <div className="w-[20px] h-full bg-white absolute right-0 flex z-5"></div>
            <div className="w-full h-[44px] bg-stateblue rounded-l-full flex rounded-br-full z-10"></div>
            {/** Button Home Section Start */}
            <button
              className="w-full py-[10px] bg-white rounded-l-full z-10 flex justify-center items-center gap-[10px]"
              onClick={() => handleNavigate("/home")}
            >
              {/** Home Icon Start */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-5 text-stateblue lg:size-6"
              >
                <path d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              {/** Home Icon End */}

              {/** Home Text Start */}
              <span className="font-nunito-sans font-bold text-[16px] lg:text-[18px] text-stateblue hidden md:flex">
                HOME
              </span>
              {/** Home Text End */}
            </button>
            {/** Button Home Section End */}

            {/** Button Shop Section Start */}
            <button
              className="w-full py-[10px] bg-stateblue rounded-l-full flex rounded-tr-full z-10 justify-center items-center gap-[10px]"
              onClick={() => handleNavigate("/shop")}
            >
              {/** Shop Icon Start */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-5 text-white lg:size-6"
              >
                <path d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
              </svg>
              {/** Shop Icon End */}

              {/** Shop Text Start */}
              <span className="font-nunito-sans font-bold text-[16px] lg:text-[18px] text-white hidden md:flex">
                SHOP
              </span>
              {/** Shop Text End */}
            </button>
            {/** Button Shop Section End */}
          </div>
        ) : (
          <div className="w-full bg-stateblue relative flex flex-col">
            <div className="w-[20px] h-full bg-white absolute right-0 flex z-5"></div>
            <div className="w-full h-[44px] bg-stateblue rounded-l-full flex z-10"></div>
            {/** Button Home Section Start */}
            <button
              className="w-full py-[10px] bg-stateblue rounded-l-full flex rounded-br-full z-10 justify-center items-center gap-[10px]"
              onClick={() => handleNavigate("/home")}
            >
              {/** Home Icon Start */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-5 text-white lg:size-6"
              >
                <path d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              {/** Home Icon End */}

              {/** Home Text Start */}
              <span className="font-nunito-sans font-bold text-[16px] lg:text-[18px] text-white hidden md:flex">
                HOME
              </span>
              {/** Home Text End */}
            </button>
            {/** Button Home Section End */}

            {/** Button Shop Section Start */}
            <button
              className="w-full py-[10px] bg-white rounded-l-full z-10 flex justify-center items-center gap-[10px]"
              onClick={() => handleNavigate("/shop")}
            >
              {/** Shop Icon Start */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-5 text-stateblue lg:size-6"
              >
                <path d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
              </svg>
              {/** Shop Icon End */}

              {/** Shop Text Start */}
              <span className="font-nunito-sans font-bold text-[16px] lg:text-[18px] text-stateblue hidden md:flex">
                SHOP
              </span>
              {/** Shop Text End */}
            </button>
            {/** Button Shop Section End */}
            <div className="w-full h-[44px] bg-stateblue rounded-l-full flex rounded-tr-full z-10"></div>
          </div>
        )}
      </div>

      {/** Button Logout Section Start */}
      <button
        className="w-full h-[45px] absolute bottom-[50px] left-0 flex items-center justify-center gap-[10px]"
        onClick={handleLogout}
      >
        {/** Logout Icon Start */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-5 text-white lg:size-6"
        >
          <path d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
        </svg>
        {/** Logout Icon End */}

        {/** Logout Text Start */}
        <span className="font-nunito-sans font-bold text-[16px] lg:text-[18px] text-white hidden md:flex">
          LOGOUT
        </span>
        {/** Logout Text End */}
      </button>
      {/** Button Logout Section End */}
    </nav>
  );
};

export default DashboardSidebar;
