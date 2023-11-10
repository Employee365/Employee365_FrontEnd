import React from "react";
import world from "../assets/world.png";
import {LuLayoutDashboard} from 'react-icons/lu'
import {CgProfile} from 'react-icons/cg'
import {CiSettings} from 'react-icons/ci'
import {BsPersonVcard} from 'react-icons/bs'
import {SlCalender} from 'react-icons/sl'
import {LuContact} from 'react-icons/lu'



const SideBar = () => {
  return (
    <div className="bg-[#E0EBF4] py-[2rem] px-[3rem] flex-2 ">
        <div className="flex flex-col gap-5">

      <div className="flex gap-2 justify-center items-center">
        <img src={world} alt="" className="rounded-full w-[50px] h-[50px]" />
        <div>
          <h3 className="font-bold text-sm">John Doe</h3>
          <h3 className="text-[12px]"> Marketing Specialist</h3>
        </div>
      </div>

      <div className="">
        <ul>
          
          <li className="flex gap-4 items-center mb-5" ><LuLayoutDashboard/> DashBoard</li>
          <li className="flex gap-4 items-center mb-5"> <BsPersonVcard/> Employees</li>
          <li className="flex gap-4 items-center mb-5"> <LuContact/> Candidate</li>
          <li className="flex gap-4 items-center mb-5"> <SlCalender/>Schedule set</li>
        </ul>
      </div>

      <div>
        <ul>
          <li className="flex gap-4 items-center mb-5" ><CgProfile/>Profile</li>
          <li className="flex gap-4 items-center mb-5"><CiSettings/>Setting</li>
        </ul>
      </div>
        </div>
    </div>
  );
};

export default SideBar;
