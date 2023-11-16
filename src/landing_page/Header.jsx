import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="ss:py-[3rem] px-[2rem]  bg-[#E0EBF4] sm:py-[1rem] md: flex justify-between items-center ">
        <div className="text-[30px] md:hidden" onClick={() => setIsOpen(true)}>
          <GiHamburgerMenu />
        </div>

        <Logo/>

        <div className=" ">
          <ul className="ss:hidden md:flex gap-6 text-[25px] cursor-pointer font-normal">
            <li className="text-[#0C6CAC]">Home</li>
            <li>Pricing</li>
            <li>Product</li>
          </ul>
        </div>

        <div>
          <Link to='/loginOption' className="ss:text-[15px] sm:text-[25px] font-bold ss:rounded-[10px]  sm:rounded-[15px] bg-white shadow-4xl ss:py-[7px] ss:px-[20px]   sm:py-[10px] sm:px-[50px] inline-block hover:bg-gray-50 transition-all ease-in-out duration-150">
            Login
          </Link>
        </div>
      </header>

      {isOpen && (
        <aside className="fixed top-[0] overflow-visible z-20 w-[80vw] bg-white transform transition-transform duration-300 ease-in-out translate-20 ">
          <div className=" px-10 flex ">
            <button
              className="text-[2rem] bg-transparent  border-transparent absolute top-[1rem] right-[1rem] text-gray-900 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>
            <ul className=" text-[25px] mt-[10rem] cursor-pointer font-normal">
              <li className="text-[#0C6CAC] mb-6 "><a href="#home">Home</a> </li>
              <li className="mb-6"><a href="#pricing">Pricing</a></li>
              <li><a href="#product">Product</a></li>
            </ul>
          </div>
        </aside>
      )}
    </>
  );
};

export default Header;
