import React from "react";
import dashboard from "./assets/dashboard.png";
import { motion } from "framer-motion";

const Demo = () => {
  const wordVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
  const containerVariant = {
    hidden: { opacity: 0, x: 75, y: 75 },
    visible: { opacity: 1, x: 0, y: 0 },
  };
  return (
    <motion.main
      className="py-[4rem] px-[7rem]"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="flex justify-between items-center gap-5">
        <section className="flex-1">
          <div></div>
          <motion.h1
            className="text-[30px] font-[700]"
            variants={wordVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Where Innovation Meets Human-Centric HR
          </motion.h1>
          <p className="text-[17px] font-[400]">
            Employee365 harnesses the power of cutting-edge technology to
            streamline HR processes. From its modern web technologies to its
            secure database infrastructure, the platform leverages innovation to
            simplify tasks, save time, and reduce administrative burdens. This
            translates into a more efficient and productive HR management
            experience.
          </p>
          <button className=" bg-blue-400 mt-7 hover:bg-blue-700 text-white font-bold py-2 px-[52px] rounded-md mr-4 shadow-4xl ">
            Try Demo Here
          </button>
        </section>

        <section className="flex-1 mt-[7rem]">
          <img src={dashboard} alt="" />
        </section>
      </div>
    </motion.main>
  );
};

export default Demo;
