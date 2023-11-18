import React, { useState } from "react";
import Logo from "./Logo";
import { BsBell } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { HiOutlineExclamationCircle } from "react-icons/hi2";


const Header = () => {
  const [search, setSearch] = useState();
 
  return (
    <div className="p-[1rem] flex justify-between items-center gap-[2rem] border-b-2 border-gray-200">
      <div className="flex gap-[4rem]">
        <Logo textSize={12} />
        <div>
          <input
            type="text"
            placeholder="search for employee"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" bg-[#E9E5E5] rounded-xl ss:w-[100%] md:w-[200%]  lg:w-[350%]"
          />
        </div>
      </div>

      <div className="flex items-center gap-[3rem]">
        <div className="p-2 rounded-full bg-[#E9E5E5]">
          <HiOutlineExclamationCircle className=" text-[2rem] "/>
        </div>
        <div className="p-2 rounded-2xl bg-[#E9E5E5]">
            <BsBell className="relative text-[2rem]"/>
            <p className="absolute top-6 right-6 text-red-600 text-[1rem]"><GoDotFill/></p>
        </div>
      </div>
    </div>
  );
};

export default Header;
