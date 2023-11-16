import React, { useContext } from "react";
import world from "../assets/world.png";
import { LuLayoutDashboard } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { BsPersonVcard } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { LuContact } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { AuthContext } from "./AuthContext";

const SideBar = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext)
  const onlogOut = () => {
    dispatch({type:'LOGOUT'})
    navigate("/loginOption");
  };
  /*  */

  return (
    <div className="bg-[#E0EBF4] w-max h-[120%] ">
      <div className="flex flex-col gap-5">
        <div className="flex gap-2 justify-center items-center px-[1rem] py-[0.65rem] rounded-md">
          <img src={world} alt="" className="rounded-full w-[50px] h-[50px]" />
          <div>
            <h3 className="font-bold text-sm">John Doe</h3>
            <h3 className="text-[12px]"> Marketing Specialist</h3>
          </div>
        </div>

        <div className="">
          <ul className="flex flex-col gap-1">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? " flex gap-4 items-center  bg-white w-[100%] py-[0.65rem] px-[1rem] border-l-[5px] border-blue-400 text-blue-400 font-semibold"
                  : "flex gap-4 items-center   py-[0.65rem] px-[1rem] hover:bg-white hover:text-blue-400 transition-all ease-in-out duration-150"
              }
            >
              
              <LuLayoutDashboard /> DashBoard
            </NavLink>
            <NavLink
              to="/employee"
              className={({ isActive }) =>
                isActive
                  ? " flex gap-4 items-center bg-white w-[100%] py-[0.65rem] px-[1rem] border-l-[5px] border-blue-400 text-blue-400 font-semibold"
                  : "flex gap-4 items-center   py-[0.65rem] px-[1rem] hover:bg-white hover:text-blue-400 transition-all ease-in-out duration-150"
              }
            >
              
              <BsPersonVcard /> Employees
            </NavLink>
            <NavLink
              to="/task"
              className={({ isActive }) =>
                isActive
                  ? " flex gap-4 items-center bg-white w-[100%] py-[0.65rem] px-[1rem] border-l-[5px] border-blue-400 text-blue-400 font-semibold"
                  : "flex gap-4 items-center   py-[0.65rem] px-[1rem] hover:bg-white hover:text-blue-400 transition-all ease-in-out duration-150"
              }
            >
              
              <BsPersonVcard /> Task Management
            </NavLink>
            <NavLink to='candidate' className={({ isActive }) =>
                isActive
                  ? " flex gap-4 items-center bg-white w-[100%] py-[0.65rem] px-[1rem] border-l-[5px] border-blue-400 text-blue-400 font-semibold"
                  : "flex gap-4 items-center   py-[0.65rem] px-[1rem] hover:bg-white hover:text-blue-400 transition-all ease-in-out duration-150"
              }>
              
              <LuContact /> Candidate
            </NavLink>
            <NavLink to='schedule' className={({ isActive }) =>
                isActive
                  ? " flex gap-4 items-center bg-white w-[100%] py-[0.65rem] px-[1rem] border-l-[5px] border-blue-400 text-blue-400 font-semibold"
                  : "flex gap-4 items-center   py-[0.65rem] px-[1rem] hover:bg-white hover:text-blue-400 transition-all ease-in-out duration-150"
              }>
              
              <SlCalender />
              Schedule set
            </NavLink>
            <NavLink to='/attendance' className={({ isActive }) =>
                isActive
                  ? " flex gap-4 items-center bg-white w-[100%] py-[0.65rem] px-[1rem] border-l-[5px] border-blue-400 text-blue-400 font-semibold"
                  : "flex gap-4 items-center   py-[0.65rem] px-[1rem] hover:bg-white hover:text-blue-400 transition-all ease-in-out duration-150"
              }>
              
              <SlCalender />
              Attendance
            </NavLink>
            <NavLink to='schedule' className={({ isActive }) =>
                isActive
                  ? " flex gap-4 items-center bg-white w-[100%] py-[0.65rem] px-[1rem] border-l-[5px] border-blue-400 text-blue-400 font-semibold"
                  : "flex gap-4 items-center   py-[0.65rem] px-[1rem] hover:bg-white hover:text-blue-400 transition-all ease-in-out duration-150"
              }>
              
              <SlCalender />
              Leave
            </NavLink>
          </ul>
        </div>

        <div>
          <ul>
            <NavLink to='profile' className={({ isActive }) =>
                isActive
                  ? " flex gap-4 items-center bg-white w-[100%] py-[0.65rem] px-[1rem] border-l-[5px] border-blue-400 text-blue-400 font-semibold"
                  : "flex gap-4 items-center   py-[0.65rem] px-[1rem] hover:bg-white hover:text-blue-400 transition-all ease-in-out duration-150"
              }>
              <CgProfile />
              Profile
            </NavLink>
            <NavLink className={({ isActive }) =>
                isActive
                  ? " flex gap-4 items-center bg-white w-[100%] py-[0.65rem] px-[1rem] border-l-[5px] border-blue-400 text-blue-400 font-semibold"
                  : "flex gap-4 items-center   py-[0.65rem] px-[1rem] mb-2  hover:bg-white hover:text-blue-400 transition-all ease-in-out duration-150"
              } onClick={onlogOut}>
              <CiSettings />
              Setting
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
