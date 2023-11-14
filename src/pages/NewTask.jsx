import React, { useState,useEffect, useContext } from "react";
import { db } from "../firebase.config";
import { BsImage } from "react-icons/bs";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";

const NewTask = () => {
  const [file, setFile] = useState("");
  const [percentage,setPercentage] = useState(null)
  const auth = getAuth();
  const navigate = useNavigate()
  const {currentUser} = useContext(AuthContext)
  const adminId = currentUser.uid

  const [formData, setFormData] = useState({
    username: "",
    FullName: "",
    email: "",
    password: "",
    number: "",
    address: "",
    country: "",
    id:new Date().getTime()
  });
  const { username, FullName, email, password, address, country, number } =
    formData;

  
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    
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
                  value={username}
                  id="username"
                  required
                  onChange={handleChange}
                  placeholder="john-doe"
                />
              </div>
              <div className="w-[40%] ">
                <label className="flex items-center gap-[10px]" htmlFor="">
                  Assign To
                </label>
                <select name="" id="" className="w-[100%]">
                  <option value="">Taiwo</option>
                </select>
              </div>
              <div className="w-[40%] border-b-2 ">
                <label className="flex items-center gap-[10px]" htmlFor="">
                  Start Date
                </label>
                <input
                  className="w-[100%]  "
                  type="date"
                  value={email}
                  id="email"
                  required
                  onChange={handleChange}
                  placeholder="JohnDoe@gmail.com"
                />
              </div>
              <div className="w-[40%] border-b-2 ">
                <label className="flex items-center gap-[10px]" htmlFor="">
                  End Date
                </label>
                <input
                  className="w-[100%]  "
                  type="date"
                  value={number}
                  id="number"
                  required
                  onChange={handleChange}
                  placeholder="+234 08181138489"
                />
              </div>

              <div className="w-[50%] mr-[25rem]">
                <label className="flex items-center gap-[10px]" htmlFor="">
                  Status
                </label>
                <select className="w-[50%]" name="" id="">
                  <option value="">Active</option>
                  <option value="">Pending</option>
                  <option value="">Done</option>
                </select>
              </div>
              <div className="w-[90%] border-b-2 ">
                <label className="flex items-center gap-[10px]" htmlFor="">
                  Description
                </label>
                <textarea className="w-full" name="" id="" cols="30" rows=""></textarea>
              </div>
              
              
              <button
                className={`w-[150px] h-[50px] p-[10px]   text-white font-bold ${percentage !== null ? 'bg-teal-100 cursor-not-allowed': "bg-teal-400"}`}
                type="submit"
                disabled={percentage !== null && percentage < 100}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default NewTask;
