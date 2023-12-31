import React, { useContext } from "react";
import world from "../../../assets/world.png";
import { LuLayoutDashboard } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { BsPersonVcard } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { LuContact } from "react-icons/lu";
import {RiLogoutBoxLine} from 'react-icons/ri'
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { AuthContext } from "../../../components/AuthContext";


const EmployeeSideBar = () => {
  
  const auth = getAuth();
  const navigate = useNavigate();
  const {dispatch,currentUser} = useContext(AuthContext)

  const onlogOut = () => {
    dispatch({type:'LOGOUT'})
    navigate("/loginOption");
  };
  /*  */

  return (
    <div className="bg-[#E0EBF4] w-max h-screen ">
      <div className="flex flex-col justify-around gap-5">
        <div className="flex gap-2 justify-center items-center px-[1rem] py-[0.5rem] rounded-md">
          <img src={currentUser.photoURL} alt="" className="rounded-full w-[50px] h-[50px]" />
          <div>
            <h3 className="font-bold text-sm">{currentUser.displayName}</h3>
            
          </div>
        </div>

        <div className="">
          <ul className="flex flex-col gap-1">
            <NavLink
              to="/employeeDashboard"
              className={({ isActive }) =>
                isActive
                  ? " flex gap-4 items-center  bg-white w-[100%] py-[0.5rem] px-[1rem] border-l-[5px] border-blue-400 text-blue-400 font-semibold"
                  : "flex gap-4 items-center   py-[0.5rem] px-[1rem] hover:bg-white hover:text-blue-400 transition-all ease-in-out duration-150"
              }
            >
              
              <LuLayoutDashboard /> DashBoard
            </NavLink>
            
            <NavLink
              to="/employeeTask"
              className={({ isActive }) =>
                isActive
                  ? " flex gap-4 items-center bg-white w-[100%] py-[0.5rem] px-[1rem] border-l-[5px] border-blue-400 text-blue-400 font-semibold"
                  : "flex gap-4 items-center   py-[0.5rem] px-[1rem] hover:bg-white hover:text-blue-400 transition-all ease-in-out duration-150"
              }
            >
              
              <BsPersonVcard /> View Task
            </NavLink>
            
            {/* <NavLink to='schedule' className={({ isActive }) =>
                isActive
                  ? " flex gap-4 items-center bg-white w-[100%] py-[0.5rem] px-[1rem] border-l-[5px] border-blue-400 text-blue-400 font-semibold"
                  : "flex gap-4 items-center   py-[0.5rem] px-[1rem] hover:bg-white hover:text-blue-400 transition-all ease-in-out duration-150"
              }>
              
              <SlCalender />
              View Schedule
            </NavLink> */}
            <NavLink to='/employeeAttendance' className={({ isActive }) =>
                isActive
                  ? " flex gap-4 items-center bg-white w-[100%] py-[0.5rem] px-[1rem] border-l-[5px] border-blue-400 text-blue-400 font-semibold"
                  : "flex gap-4 items-center   py-[0.5rem] px-[1rem] hover:bg-white hover:text-blue-400 transition-all ease-in-out duration-150"
              }>
              
              <SlCalender />
             Set Attendance
            </NavLink>
            {/* <NavLink to='schedule' className={({ isActive }) =>
                isActive
                  ? " flex gap-4 items-center bg-white w-[100%] py-[0.5rem] px-[1rem] border-l-[5px] border-blue-400 text-blue-400 font-semibold"
                  : "flex gap-4 items-center   py-[0.5rem] px-[1rem] hover:bg-white hover:text-blue-400 transition-all ease-in-out duration-150"
              }>
              
              <SlCalender />
             Request Leave
            </NavLink> */}
          </ul>
        </div>

        <div>
          <ul>
            <NavLink to='/employeeProfile' className={({ isActive }) =>
                isActive
                  ? " flex gap-4 items-center bg-white w-[100%] py-[0.5rem] px-[1rem] border-l-[5px] border-blue-400 text-blue-400 font-semibold"
                  : "flex gap-4 items-center   py-[0.5rem] px-[1rem] hover:bg-white hover:text-blue-400 transition-all ease-in-out duration-150"
              }>
              <CgProfile />
              Profile
            </NavLink>
            <NavLink to='/loginOption'
              className={({ isActive }) =>
                isActive
                  ? " flex gap-4 items-center bg-white w-[100%] py-[0.65rem] px-[1rem] border-l-[5px] border-blue-400 text-blue-400 font-semibold"
                  : "flex gap-4 items-center   py-[0.65rem] px-[1rem] mb-2  hover:bg-white hover:text-blue-400 transition-all ease-in-out duration-150"
              }
              onClick={onlogOut}
            >
              <RiLogoutBoxLine />
              Log Out
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSideBar;
