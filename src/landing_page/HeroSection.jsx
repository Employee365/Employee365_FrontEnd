import React from "react";
import { GiPlainCircle } from "react-icons/gi";
import HeroRightContent from "./HeroRightContent";
import HeroContentUpper from "./HeroContentUpper";
import HeroContentBottom from "./HeroContentBottom";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <main className="bg-[#E0EBF4] py-[3rem] px-[7rem] relative ">
      <section className="bg-white  py-[6rem] px-[3rem] w-full rounded-3xl shadow-3xl ">
        <h1 className="text-[42px] font-[400] w-[721px] leading-10">
          Elevate Your <span className="font-bold">Workforce</span> Management
          Experience Like Never Before
        </h1>
        <div className="ss:flex-row lg:flex  justify-between gap-3">
          <div className="mt-[2rem]">
            <p className="text-[20px] font-[400]">
              We seamlessly blend the power of employee empowerment with
              cutting-edge technology, revolutionizing the way you engage with
              your workforce. Discover a world where HR is not just a department
              but a driving force of growth and transformation, all made
              possible through Employee365.
            </p>
            <Link to='/signUp'>
            <button className=" bg-[#0C6CAC] hover:bg-blue-700 text-white font-bold py-2 px-[52px] rounded-md mr-4 shadow-4xl ">
              Get started
            </button>
            </Link>
            <button className=" bg-white hover:bg-blue-700 text-black font-bold py-2 px-[52px] rounded-md border-2  shadow-4xl  border-black">
              Pricing Plan
            </button>

            <ul className="mt-[5rem]">
              <li className="flex items-center mb-5">
                <span>
                  <GiPlainCircle className="text-[#00E933]" />
                </span>
                Task Management
              </li>
              <li className="flex items-center mb-5">
                <span>
                  <GiPlainCircle className="text-[#00E933]" />
                </span>
                Data Security and Compliance
              </li>
              <li className="flex items-center">
                <span>
                  <GiPlainCircle className="text-[#00E933]" />
                </span>
                Communication Tools
              </li>
            </ul>
          </div>

          <div className="mt-[2rem]">
            <div className="">
              <HeroRightContent />
            </div>
            <div className="absolute top-[15%] right-9">
              <HeroContentUpper />
            </div>
            <div className="absolute  bottom-[15%] right-[200px]">
              <HeroContentBottom />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
