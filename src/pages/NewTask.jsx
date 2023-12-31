import React, { useState,useEffect, useContext } from "react";
import { db } from "../firebase.config";
import { BsImage } from "react-icons/bs";
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import toast from "react-hot-toast";

const NewTask = ({data,setData}) => {
  

  const auth = getAuth();
  const navigate = useNavigate()
  const {currentUser} = useContext(AuthContext)
  const adminId = currentUser.uid

  const [formData, setFormData] = useState({
    taskName: "",
    assignedTo: `${data[0].FullName}`,
    startDate: "",
    endDate: "",
    status: "Active",
    description: "",
  
  });
  const {taskName,assignedTo,startDate,endDate,status,description} =
    formData;
    const filterData = data.filter((filter)=> filter.FullName === assignedTo)
    
    
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    try{
      if(startDate > endDate ){
        toast.error('Start date must be less than end date');
        return
      }
       // Spreading the value from the input field
       const formDataCopy = {
        ...formData,
        userRef: adminId,
        employeeId:filterData[0].id,
        avatar: filterData[0].avatar
       
      };
      
      formDataCopy.timestamp = serverTimestamp();
      const docRef = await addDoc(collection(db, "tasks"), formDataCopy);
      
      navigate("/task");
    }catch(error){
      console.log(error.message)
    }
    
  };
  return (
    <div className="p-[2rem]">
      <div className="">
        <div className=" top w-[100%] p-[10px]  flex shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
          <h1 className="text-gray-200 text-[20px] font-bold">
            Add New Task
          </h1>
        </div>
        <div className="bottom  top w-[100%] p-[10px]  flex justify-center items-center shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] ">
          
          <div className="right flex-1">
            <form
              className="flex flex-wrap justify-between gap-[10px]"
              onSubmit={handleAdd}
            >
              
              <div className="w-[40%] border-b-2 ">
                <label className="flex items-center gap-[10px]" htmlFor="">
                  Task Name
                </label>
                <input
                  className="w-[100%]  "
                  type="text"
                  value={taskName}
                  id="taskName"
                  required
                  onChange={handleChange}
                  placeholder="Enter Task Name"
                />
              </div>
              <div className="w-[40%] ">
                <label className="flex items-center gap-[10px]" htmlFor="">
                  Assign To
                </label>
                <select value={assignedTo} id="assignedTo" onChange={handleChange} className="w-[100%]">
                  {data.map((item)=>{
                      return(
                        <option key={item.id} >{item.FullName}</option>
                      )  
                  }) }
                </select>
              </div>
              <div className="w-[40%] border-b-2 ">
                <label className="flex items-center gap-[10px]" htmlFor="">
                  Start Date
                </label>
                <input
                  className="w-[100%]  "
                  type="date"
                  value={startDate}
                  id="startDate"
                  required
                  onChange={handleChange}
                 
                />
              </div>
              <div className="w-[40%] border-b-2 ">
                <label className="flex items-center gap-[10px]" htmlFor="">
                  End Date
                </label>
                <input
                  className="w-[100%]  "
                  type="date"
                  value={endDate}
                  id="endDate"
                  required
                  onChange={handleChange}
                 
                />
              </div>

              <div className="w-[50%] mr-[25rem]">
                <label className="flex items-center gap-[10px]" htmlFor="">
                  Status
                </label>
                <select value={status} onChange={handleChange} id='status' className="w-[50%]" >
                  <option value='Active'>Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Done">Done</option>
                </select>
              </div>
              <div className="w-[90%] border-b-2 ">
                <label className="flex items-center gap-[10px]" htmlFor="">
                  Description
                </label>
                <textarea className="w-full" value={description} onChange={handleChange} id="description" cols="30" rows=""></textarea>
              </div>
              
              
              <button
                className="w-[150px] h-[50px] p-[10px] rounded-xl hover:bg-teal-700 transition-all ease-in-out duration-200  text-white font-bold bg-teal-400"
                type="submit"
               
              >
                Add Task
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default NewTask;
