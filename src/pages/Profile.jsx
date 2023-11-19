import React, { useContext, useEffect, useState } from 'react'
import Loader from "../components/Loader";
import { AuthContext } from "../components/AuthContext";


import { db } from "../firebase.config";
import {
 
  getAuth,
 
} from "firebase/auth";
import {doc, getDoc, } from "firebase/firestore";
import { Link } from 'react-router-dom';


const Profile = ({companyData,isLoading}) => {
  
  
if(isLoading){
  return <Loader/>
}


  return (
    <div className='pb-[20rem] rounded-lg pt-[2rem] px-[7rem] bg-gradient-to-r from-neutral-100 to-gray-100'>
        <p className='mb-[1.5rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg font-bold text-center border-2 p-2'>COMPANY PROFILE</p>
    <div className=" w-full rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]   gap-[8rem] flex p-[1rem] justify-between  items-center ">
      <div className="">
        <img src={companyData.avatar} className="w-[200px] h-[200px] rounded-2xl object-cover" alt="" />
      </div>
      <div className="flex flex-col gap-6 ">
        <div>
          <h1 className="text-[1rem] font-normal">COMPANY NAME</h1>
          <p className="font-semibold">{companyData.name}</p>
        </div>
        <div>
          <h1 className="text-[1rem] font-normal">EMAIL</h1>
          <p className="font-semibold">{companyData.email}</p>
        </div>
        <div>
          <h1 className="text-[1rem] font-normal">PHONE NUMBER</h1>
          <p className="font-semibold">{companyData.number}</p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        
        <div>
          <h1 className="text-[1rem] font-normal">SPECIALITY</h1>
          <p className="font-semibold">{companyData.speciality}</p>
        </div>
        <div>
          <h1 className="text-[1rem] font-normal">ADDRESS</h1>
          <p className="font-semibold">{companyData.address}</p>
        </div>
      </div>
      
    </div>
    <div className='mt-[1rem] rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold cursor-default w-[115px] py-[0.3rem] px-[1rem]'>

      <Link to='edit-profile'><button>Edit Profile</button></Link>
    </div>
    </div>

  )
}

export default Profile