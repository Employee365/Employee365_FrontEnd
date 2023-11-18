import React, { useState, useEffect, useContext } from "react";
import { db } from "../../firebase.config";
import { BsImage } from "react-icons/bs";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthContext";
import toast from "react-hot-toast";

const EmployeeAttendance = () => {
  const [data, setData] = useState([]);


  const auth = getAuth();

  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const adminId = currentUser.uid;
  const filtered = data.filter((filter) => filter.email === currentUser.email);
  

  const [formData, setFormData] = useState({
    employeeName:currentUser.displayName,
    date:'',
    signInTime:'',
    signOutTime:'',
    place: "Office",
  });
  const {employeeName, place,date,signInTime,signOutTime } = formData;



  useEffect(() => {
    const fetchEmployeeData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "employee"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
       
      } catch (err) {
        console.log(err);
      }
    };
    fetchEmployeeData();
  }, [currentUser]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      if (signInTime > signOutTime) {
        toast.error("Start date must be less than end date");
        return;
      }
      // Spreading the value from the input field
      const formDataCopy = {
        ...formData,
        userRef: filtered[0].userRef,
        avatar:filtered[0].avatar
      };

      formDataCopy.timestamp = serverTimestamp();
      const docRef = await addDoc(collection(db, "attendance"), formDataCopy);

      navigate("/task");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="p-[2rem]">
      <div className="">
        <div className=" top w-[100%] p-[10px]  flex shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
          <h1 className="text-gray-200 text-[20px] font-bold">Mark Attendance</h1>
        </div>
        <div className="bottom  top w-[100%] p-[10px]  flex justify-center items-center shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] ">
          <div className="right flex-1">
            <form
              className="flex flex-wrap justify-between gap-[10px]"
              onSubmit={handleAdd}
            >

<div className="w-[40%] border-b-2 ">
                <label className="flex items-center gap-[10px]" htmlFor="">
                  Employee Name:
                </label>
                <input
                  className="w-[100%]  "
                  type="text"
                  
                  value={currentUser.displayName}
                  id="employeeName"
                  onChange={handleChange}
                  required
                  
                  placeholder="Enter Task Name"
                />
              </div>
              
              <div className="w-[40%] border-b-2 ">
                <label className="flex items-center gap-[10px]" htmlFor="">
                  Selected Date
                </label>
                <input
                  className="w-[100%]  "
                  type="date"
                  value={date}
                  id="date"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="w-[40%] border-b-2 ">
                <label className="flex items-center gap-[10px]" htmlFor="">
                  Sign In Time
                </label>
                <input
                  className="w-[100%]  "
                  type="time"
                  value={signInTime}
                  id="signInTime"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="w-[40%] border-b-2 ">
                <label className="flex items-center gap-[10px]" htmlFor="">
                  Sign Out Time
                </label>
                <input
                  className="w-[100%]  "
                  type="time"
                  value={signOutTime}
                  id="signOutTime"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="w-[40%] ">
                <label className="flex items-center gap-[10px]" htmlFor="">
                  Place:
                </label>
                <select
                  value={place}
                  id="place"
                  onChange={handleChange}
                  className="w-[100%]"
                >
                  <option>Office</option>
                  <option>Home</option>
                  <option>Field</option>
                </select>
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

export default EmployeeAttendance;
