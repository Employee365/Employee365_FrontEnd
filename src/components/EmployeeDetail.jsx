import React from "react";
import profileImage from "../assets/world.png";

const EmployeeDetail = () => {
  return (
    <div className=" w-full rounded-lg mt-[1rem] gap-[6rem] flex p-[1.5rem] justify-between  items-center bg-[#E9E5E5]">
      <div className="">
        <img src={profileImage} className="w-[200px]" alt="" />
      </div>
      <div className="flex flex-col gap-6 ">
        <div>
          <h1 className="text-[1rem] font-normal">FULL NAME</h1>
          <p className="font-semibold">John Doe</p>
        </div>
        <div>
          <h1 className="text-[1rem] font-normal">EMAIL</h1>
          <p className="font-semibold">johndoe"gmail.com</p>
        </div>
        <div>
          <h1 className="text-[1rem] font-normal">PHONE NUMBER</h1>
          <p className="font-semibold">+234(0)907324009</p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-[1rem] font-normal">DATE OF EMPLOYEMENT</h1>
          <p className="font-semibold">19 September,2023</p>
        </div>
        <div>
          <h1 className="text-[1rem] font-normal">DEPARTMENT</h1>
          <p className="font-semibold">Marketing</p>
        </div>
        <div>
          <h1 className="text-[1rem] font-normal">ADDRESS</h1>
          <p className="font-semibold">10,Oyebajo street, Mushin,Lagos State</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 ">
        <div>
          <h1 className="text-[1rem] font-normal">NATIONALITY</h1>
          <p className="font-semibold">Nigeria</p>
        </div>
        <div>
          <h1 className="text-[1rem] font-normal">COMPANY</h1>
          <p className="font-semibold">johndoe"gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
