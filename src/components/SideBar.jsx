import React from "react";
import world from "../assets/world.png";
import {LuLayoutDashboard} from 'react-icons/lu'
import {CgProfile} from 'react-icons/cg'
import {CiSettings} from 'react-icons/ci'
import {BsPersonVcard} from 'react-icons/bs'
import {SlCalender} from 'react-icons/sl'
import {LuContact} from 'react-icons/lu'
import { NavLink } from "react-router-dom";



const SideBar = () => {
  return (
    <div className="bg-[#E0EBF4] w-max  ">
        <div className="flex flex-col gap-5">

      <div className="flex gap-2 justify-center items-center px-[1rem] py-[0.5rem] rounded-md">
        <img src={world} alt="" className="rounded-full w-[50px] h-[50px]" />
        <div>
          <h3 className="font-bold text-sm">John Doe</h3>
          <h3 className="text-[12px]"> Marketing Specialist</h3>
        </div>
      </div>

      <div className="">
        <ul>

          <NavLink   to='/'      className={({isActive})=> isActive ? " flex gap-4 items-center mb-5 bg-white w-[100%] py-[0.7rem] px-[0.5rem] border-l-[5px] border-blue-400 text-blue-400 font-semibold":"flex gap-4 items-center mb-5  py-[1rem] px-[0.5rem]"} > <LuLayoutDashboard/> DashBoard </NavLink>
          <NavLink to='employee' className={({isActive})=> isActive ? " flex gap-4 items-center mb-5 bg-white w-[100%] py-[0.7rem] px-[0.5rem] border-l-[5px] border-blue-400 text-blue-400 font-semibold":"flex gap-4 items-center mb-5  py-[1rem] px-[0.5rem]"}> <BsPersonVcard/> Employees</NavLink>
          <NavLink className="flex gap-4 items-center mb-5"> <LuContact/> Candidate</NavLink>
          <NavLink className="flex gap-4 items-center mb-5"> <SlCalender/>Schedule set</NavLink>
        </ul>
      </div>

      <div>
        <ul>
          <NavLink className="flex gap-4 items-center mb-5" ><CgProfile/>Profile</NavLink>
          <NavLink className="flex gap-4 items-center mb-5"><CiSettings/>Setting</NavLink>
        </ul>
      </div>
        </div>
    </div>
  );
};

export default SideBar;
