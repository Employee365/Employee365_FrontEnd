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
              className="flex flex-wrap justify-around gap-[30px]"
              onSubmit={handleAdd}
            >
              
              <div className="w-[40%] border-b-2 border-gray-500">
                <label className="flex items-center gap-[10px]" htmlFor="">
                  UserName
                </label>
                <input
                  className="w-[100%] border-none "
                  type="text"
                  value={username}
                  id="username"
                  required
                  onChange={handleChange}
                  placeholder="john-doe"
                />
              </div>
              <div className="w-[40%] border-b-2 border-gray-500">
                <label className="flex items-center gap-[10px]" htmlFor="">
                  Name and Surnmae
                </label>
                <input
                  className="w-[100%] border-none "
                  type="text"
                  value={FullName}
                  id="FullName"
                  required
                  onChange={handleChange}
                  placeholder="John DOe"
                />
              </div>
              <div className="w-[40%] border-b-2 border-gray-500">
                <label className="flex items-center gap-[10px]" htmlFor="">
                  Email
                </label>
                <input
                  className="w-[100%] border-none "
                  type="text"
                  value={email}
                  id="email"
                  required
                  onChange={handleChange}
                  placeholder="JohnDoe@gmail.com"
                />
              </div>
              <div className="w-[40%] border-b-2 border-gray-500">
                <label className="flex items-center gap-[10px]" htmlFor="">
                  Phone Number
                </label>
                <input
                  className="w-[100%] border-none "
                  type="text"
                  value={number}
                  id="number"
                  required
                  onChange={handleChange}
                  placeholder="+234 08181138489"
                />
              </div>
              <div className="w-[40%] border-b-2 border-gray-500">
                <label className="flex items-center gap-[10px]" htmlFor="">
                  Password
                </label>
                <input
                  className="w-[100%] border-none"
                  type="password"
                  id="password"
                  value={password}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="w-[40%] border-b-2 border-gray-500">
                <label className="flex items-center gap-[10px]" htmlFor="">
                  Address
                </label>
                <input
                  className="w-[100%] border-none border-b-[2px] border-s-gray-600 border-gray-600"
                  type="text"
                  id="address"
                  value={address}
                  required
                  onChange={handleChange}
                  placeholder="23,Ogunjobi"
                />
              </div>
              <div className="w-[40%] border-b-2 border-gray-500">
                <label className="flex items-center gap-[10px]" htmlFor="">
                  Country
                </label>
                <input
                  className="w-[100%] border-none "
                  type="text"
                  id="country"
                  value={country}
                  required
                  placeholder="Nigeria"
                  onChange={handleChange}
                />
              </div>
              <button
                className={`w-[150px] p-[10px] border-none  text-white font-bold mt-[10px] ${percentage !== null ? 'bg-teal-100 cursor-not-allowed': "bg-teal-400"}`}
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
