import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "../components/dashboard/dashboard-sidebar";
import BooksData from "../data/books";

interface Props {
  searchBook?: string;
}

const DashboardShop: React.FC<Props> = ({ searchBook }) => {
  const navigate = useNavigate();
  const [isName, setIsName] = useState<string>("");
  const [isCategory, setIsCategory] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  let datas = BooksData;

  const filterBook = datas.filter((items) => {
    const filterByName =
      isName === "" ||
      items.title.toLowerCase().includes(isName) ||
      items.title.includes(isName) ||
      items.title.toUpperCase().includes(isName);
    const filterByCategory =
      isCategory === "" || items.category.includes(isCategory);
    return filterByName && filterByCategory;
  });

  return (
    <div className="w-full h-full flex overflow-clip">
      <DashboardSidebar />
      <div className="flex flex-col">
        <div className="w-screen backdrop-blur-2xl py-[20px] pl-[50px] md:pl-[200px] flex fixed items-center justify-center z-0">
          {/** Search Bar Section Start */}
          <input
            type="text"
            className="w-full max-w-[600px] h-[40px] rounded-full border-[2px] focus:border-stateblue outline-none px-[20px] font-nunito-sans text-[14px] placeholder:font-nunito-sans placeholder:text-[14px] mx-[20px]"
            placeholder="Search..."
            value={searchBook}
            onChange={(e) => setIsName(e.target.value)}
          />
          {/** Search Bar Section End */}

          {/** Selecter Category Section Start */}
          <select
            name=""
            id=""
            className="mr-[20px] border-[2px] focus:border-stateblue focus:ring-0 outline-none rounded-full h-[30px] px-[10px] font-nunito-sans text-[14px]"
            onChange={(e) => setIsCategory(e.target.value)}
          >
            <option value="" className="font-nunito-sans text-[14px]">
              All
            </option>
            <option value="novel" className="font-nunito-sans text-[14px]">
              Novel
            </option>
            <option value="manga" className="font-nunito-sans text-[14px]">
              Manga
            </option>
          </select>
          {/** Selecter Category Section End */}
        </div>
        <div className="w-screen h-full pl-[50px] md:pl-[200px] mt-[80px] flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-[20px] lg:px-[40px] gap-[10px] md:gap-[20px]">
            {filterBook.map((items, id) => {
              return (
                <div
                  className="w-full max-w-[375px] h-full px-[10px] py-[20px] flex flex-col items-center justify-center"
                  key={id}
                >
                  <img src={items.image} alt="" className="" />
                  <div className="w-full h-full my-[10px] gap-[5px] flex flex-col">
                    <p className="font-nunito-sans text-[16px] md:text-[18px] font-bold truncate">
                      {items.title}
                    </p>
                    <p className="font-nunito-sans text-[14px] md:text-[16px] line-clamp-2 text-gray-500">
                      {items.description}
                    </p>
                    <p className="font-nunito-sans text-[14px] md:text-[16px] text-gray-500 font-semibold">
                      Author: <span className="text-black">{items.author}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardShop;
