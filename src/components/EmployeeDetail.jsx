import React, { useEffect, useState } from "react";
import profileImage from "../assets/world.png";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";
import Loader from "./Loader";

const EmployeeDetail = ({employeeId}) => {
  const [data,setData] =  useState(null)
 
  const [isLoading,setIsLoading] = useState(true)




  useEffect(() => {
    const fetchEmployeeData = async () => {
      let list = [];
      try {
        
        const employeeRef = collection(db, "employee");
      
        const querrySnap = await getDocs(employeeRef);

        querrySnap.forEach((doc) => {
          return list.push({ id: doc.id, ...doc.data() });
        });
    
        setData(list);
        setIsLoading(false)
        
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchEmployeeData();
  }, []);
  if(isLoading){
    return <Loader/>
  }
  const filtered = data.filter((filter)=> filter.id === employeeId)

 
  return (
    <div className=" w-full rounded-lg  gap-[6rem] flex p-[1rem] justify-between  items-center bg-[#E9E5E5]">
      <div className="">
        <img src={filtered[0].avatar} className="w-[200px] h-[200px] rounded-xl object-cover" alt="" />
      </div>
      <div className="flex flex-col gap-6 ">
        <div>
          <h1 className="text-[1rem] font-normal">FULL NAME</h1>
          <p className="font-semibold">{filtered[0].FullName}</p>
        </div>
        <div>
          <h1 className="text-[1rem] font-normal">EMAIL</h1>
          <p className="font-semibold">{filtered[0].email}</p>
        </div>
        <div>
          <h1 className="text-[1rem] font-normal">PHONE NUMBER</h1>
          <p className="font-semibold">{filtered[0].number}</p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-[1rem] font-normal">DATE OF EMPLOYEMENT</h1>
          <p className="font-semibold">19 September,2023</p>
        </div>
        <div>
          <h1 className="text-[1rem] font-normal">DEPARTMENT</h1>
          <p className="font-semibold">{filtered[0].department}</p>
        </div>
        <div>
          <h1 className="text-[1rem] font-normal">ADDRESS</h1>
          <p className="font-semibold">{filtered[0].address}</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 ">
        <div>
          <h1 className="text-[1rem] font-normal">NATIONALITY</h1>
          <p className="font-semibold">{filtered[0].country}</p>
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
