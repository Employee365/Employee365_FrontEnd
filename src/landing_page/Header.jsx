import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="ss:py-[3rem] px-[2rem] bg-[#E0EBF4] sm:py-[3rem] md:px-[7rem] flex justify-between items-center ">
        <div className="text-[30px] md:hidden" onClick={() => setIsOpen(true)}>
          <GiHamburgerMenu />
        </div>

        <div className="flex items-center ss:text-[15px] sm:text-[25px] font-bold ">
          <svg
            width="40"
            height="30"
            viewBox="0 0 51 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.97736 14.2007L23.6403 22.9508C24.1522 23.1757 24.8356 23.2932 25.5119 23.2932C26.1883 23.2932 26.8716 23.1757 27.3826 22.9508L47.0455 14.2007C48.0794 13.7417 48.0794 12.9908 47.0455 12.53L27.3826 3.7799C26.8716 3.555 26.1873 3.4375 25.5119 3.4375C24.8366 3.4375 24.1522 3.555 23.6403 3.7799L3.97736 12.53C2.94342 12.9908 2.94342 13.7399 3.97736 14.2007Z"
              fill="#0C6CAC"
            />
            <path
              d="M47.0455 23.1646C47.0455 23.1646 43.4546 21.5691 42.9784 21.3543C42.5023 21.1395 42.3738 21.1515 41.8738 21.3654C41.3737 21.5792 27.3706 27.8123 27.3706 27.8123C26.7804 28.0471 26.1428 28.1641 25.5 28.1556C24.8256 28.1556 24.1403 28.0372 23.6293 27.8123C23.6293 27.8123 9.99777 21.7537 9.35828 21.4617C8.666 21.1542 8.46678 21.1542 7.83625 21.4296L3.95148 23.1536C2.91754 23.6125 2.91754 24.3644 3.95148 24.8243L23.6174 33.5743C24.1284 33.7992 24.8127 33.9167 25.488 33.9167C26.1634 33.9167 26.8477 33.7992 27.3597 33.5743L47.0226 24.8261C48.0794 24.3745 48.0794 23.6254 47.0455 23.1646Z"
              fill="#0C6CAC"
            />
            <path
              d="M47.0455 33.7993C47.0455 33.7993 43.4546 32.2038 42.9785 31.9863C42.5024 31.7687 42.3739 31.7834 41.8738 31.9973C41.3738 32.2112 27.3826 38.4579 27.3826 38.4579C26.7923 38.6924 26.1548 38.8091 25.512 38.8003C24.8376 38.8003 24.1523 38.6828 23.6403 38.4579C23.6403 38.4579 10.0088 32.3993 9.37028 32.1074C8.67301 31.7962 8.47379 31.7962 7.84725 32.0753L3.96249 33.7993C2.92754 34.2582 2.92754 35.0091 3.96249 35.47L23.6254 44.22C24.1364 44.455 24.8207 44.5624 25.496 44.5624C26.1714 44.5624 26.8557 44.4449 27.3667 44.22L47.0336 35.4745C48.0795 35.0091 48.0795 34.2601 47.0455 33.7993Z"
              fill="#0C6CAC"
            />
          </svg>
          <h1>
            EMPLOYEE <span>365</span>
          </h1>
        </div>

        <div className=" ">
          <ul className="ss:hidden md:flex gap-6 text-[25px] cursor-pointer font-normal">
            <li className="text-[#0C6CAC]">Home</li>
            <li>Pricing</li>
            <li>Product</li>
          </ul>
        </div>

        <div>
          <button className="ss:text-[15px] sm:text-[25px] font-bold ss:rounded-[10px]  sm:rounded-[15px] bg-white shadow-4xl ss:py-[7px] ss:px-[20px]   sm:py-[18px] px-[64px] inline-block">
            Login
          </button>
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
              <li className="text-[#0C6CAC] mb-6 ">Home</li>
              <li className="mb-6">Pricing</li>
              <li>Product</li>
            </ul>
          </div>
        </aside>
      )}
    </>
  );
};

export default Header;
