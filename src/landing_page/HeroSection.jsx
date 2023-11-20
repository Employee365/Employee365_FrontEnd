import React from "react";
import { GiPlainCircle } from "react-icons/gi";
import HeroRightContent from "./HeroRightContent";
import HeroContentUpper from "./HeroContentUpper";
import HeroContentBottom from "./HeroContentBottom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const wordVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
  const containerVariant = {
    hidden: { opacity: 0, x: 75, y: 75 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <main className="bg-[#E0EBF4] py-[3rem] px-[7rem] relative ">
      <motion.section
        className="bg-white  py-[6rem] px-[3rem] w-full rounded-3xl shadow-3xl "
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <motion.h1
          className="text-[42px] font-[400] w-[721px] leading-10"
          variants={wordVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Elevate Your <span className="font-bold">Workforce</span> Management
          Experience Like Never Before
        </motion.h1>
        <div className="ss:flex-row lg:flex  justify-between gap-3">
          <div className="mt-[2rem]">
            <motion.p
              className="text-[20px] font-[400]"
              variants={wordVariant}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We seamlessly blend the power of employee empowerment with
              cutting-edge technology, revolutionizing the way you engage with
              your workforce. Discover a world where HR is not just a department
              but a driving force of growth and transformation, all made
              possible through Employee365.
            </motion.p>
            <div className="flex gap-3 mt-9">
              <Link to="/signUp">
                <button className=" bg-[#0C6CAC] hover:bg-blue-700 text-white font-bold py-2 px-[52px] rounded-md mr-4 shadow-4xl ">
                  Get started
                </button>
              </Link>
              <button className=" bg-white hover:bg-blue-700 text-black font-bold py-2 px-[52px] rounded-md border-2  shadow-4xl  border-black">
                Pricing Plan
              </button>
            </div>

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
      </motion.section>
    </main>
  );
};

export default HeroSection;
