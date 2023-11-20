import React from "react";
import amazon from "./assets/amazon.png";
import creative from "./assets/creative.png";
import wgg from "./assets/wgg.png";
import world from "./assets/world.png";
import venture from "./assets/venture.png";
import { motion } from "framer-motion";

const Partner = () => {
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
      id="product"
      className="flex justify-center  items-center flex-col mt-[5rem]"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <motion.p
        className="text-[25px] font-[400]"
        variants={wordVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        We’re hosted on Amazon Web Services and we’ve worked with top companies.
      </motion.p>

      <div className="flex gap-12 mt-[2rem]">
        <div>
          <img src={amazon} alt="" />
        </div>
        <div>
          <img src={creative} alt="" />
        </div>
        <div>
          <img src={world} alt="" />
        </div>
        <div>
          <img src={venture} alt="" />
        </div>
        <div>
          <img src={wgg} alt="" />
        </div>
      </div>
    </motion.main>
  );
};

export default Partner;
