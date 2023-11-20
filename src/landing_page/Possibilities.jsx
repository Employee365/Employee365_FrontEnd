import { Card } from "@mui/material";
import React from "react";
import Cards from "./Cards";
import { MdOutlineSecurity } from "react-icons/md";
import { GiEternalLove } from "react-icons/gi";
import { BsCircleHalf } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";
import { motion } from "framer-motion";
const Possibilities = () => {
  const wordVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="bg-[#E0EBF4] py-[6rem] px-[7rem]">
      <div className="text-center ">
        <motion.h1
          className="text-[2rem] font-[900]"
          variants={wordVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Endless Possibilities with Employee
          <span className="text-blue-400">365</span>
        </motion.h1>
        <motion.p
          className="text-[19px]"
          variants={wordVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Employee365 offers a wide range of possibilities to enhance HR
          management and create more engaging and efficient work place
        </motion.p>
      </div>
      <div className="flex gap-5 h-[400px] relative mt-[3rem]">
        <Cards
          className="absolute "
          icon={<MdPeopleAlt />}
          title="Efficient Employee Records Management"
          subtitle="Employee365 streamline the management of emploee records, making it easy to access and update information e.t.c."
        />
        <div className="absolute  bottom-7 left-[25%]">
          <Cards
            icon={<MdOutlineSecurity />}
            title="Data Security and Compliance"
            subtitle="Employee365 follows data protection regulations like GDPR addressing data security concerns by safeguarding sensitive employee information"
            color="bg-[#E0EBF4]"
          />
        </div>
        <div className="absolute  left-[50%]">
          <Cards
            icon={<GiEternalLove />}
            title="Employee Well-being"
            subtitle="Empployee365 promotes employee well being by tracking physical and mental health, work life balance and overall wellness"
          />
        </div>
        <div className="absolute  bottom-7 left-[75%]">
          <Cards
            icon={<BsCircleHalf />}
            title="Inclusivity"
            subtitle="Employee365 encourage and inclusive work culture through feedback mechanism for open dialogue, celebrating diversity and ensuring equal opportunities for all employees"
          />
        </div>
      </div>
    </div>
  );
};

export default Possibilities;
