import { Card } from "@mui/material";
import React from "react";

const Possibilities = () => {
  return (
    <div className="bg-[#E0EBF4] py-[6rem] px-[7rem]">
      <div className="text-center ">
        <h1 className="text-[2rem] font-[900]">
          Endless Possibilities with Employee
          <span className="text-blue-700">365</span>
        </h1>
        <p className="text-[19px]">
          Employee365 offers a wide range of possibilities to enhance HR
          management and create more engaging and efficient work place
        </p>
      </div>
      <div>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
};

export default Possibilities;
