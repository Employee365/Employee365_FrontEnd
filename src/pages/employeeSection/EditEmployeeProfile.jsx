import { getAuth, updateProfile } from 'firebase/auth';
import {BsImage} from 'react-icons/bs'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../components/AuthContext';
import { useNavigate } from 'react-router-dom';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase.config';
import toast from 'react-hot-toast';

const EditEmployeeProfile = ({employeeData}) => {
    const auth = getAuth()
  console.log(auth.currentUser);
  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [percentage, setPercentage] = useState(null);
  const [formData, setFormData] = useState({
    FullName: employeeData.FullName,
    email: employeeData.email,
    
    address: employeeData.address,
    number: employeeData.number,
    department: employeeData.department,
    username: employeeData.username,
    country:employeeData.country
  });



  const {  username, FullName, email,  address, country, number,department } = formData;
  useEffect(() => {
    const uploadFile = () => {
      const storage = getStorage();
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPercentage(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          reject(error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setFormData((prev) => ({ ...prev, avatar: downloadURL }));
            setPercentage(null);
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
     
      const { avatar } = formData;
      

      // Updating the user info with value from the input field
      updateProfile(auth.currentUser, {
        displayName: FullName,
        phoneNumber: number,
        photoURL: avatar,
      });
      
      const docRef = doc(db, "employee",currentUser.uid );

      await updateDoc(docRef, formData)
      localStorage.setItem("user", JSON.stringify(auth.currentUser))
      toast.success("Profile Update Successfully");
      navigate("/employeeDashboard");
    } catch (error) {
      console.log(error.message);
        toast.error(error.message);
    }
  };

  return (
    <div className="p-[2rem]">
      <div className="">
        <div className=" top w-[100%] p-[10px]  flex shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
          <h1 className="text-gray-200 text-[20px] font-bold">
            Add New Employee
          </h1>
        </div>
        <div className="bottom  top w-[100%] p-[10px]  flex justify-center items-center shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] ">
          <div className="left flex justify-center items-start flex-1">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : employeeData.avatar
              }
              alt=""
              className=" h-[100px] rounded-full object-cover"
            />
          </div>
          <div className="right flex-1">
            <form
              className="flex flex-wrap justify-around gap-[20px]"
              onSubmit={onSubmit}
            >
              <div className="w-[40%] cursor-pointer">
                <label className="flex items-center gap-[10px]" htmlFor="file">
                  Image
                  <BsImage className="" />
                </label>
                <input
                  className="w-[100%] border-none "
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
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
                  onChange={onChange}
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
                  onChange={onChange}
                  placeholder="John DOe"
                />
              </div>
              <div className="w-[40%] border-b-2 border-gray-500">
                <label className="flex items-center gap-[10px]" htmlFor="">
                  Department
                </label>
                <input
                  className="w-[100%] border-none "
                  type="text"
                  value={department}
                  id="department"
                  required
                  onChange={onChange}
                  placeholder="Department"
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
                  onChange={onChange}
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
                  onChange={onChange}
                  placeholder="+234 08181138489"
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
                  onChange={onChange}
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
                  onChange={onChange}
                />
              </div>
              <button
                className={`w-[150px] p-[10px] border-none  text-white font-bold mt-[10px] ${
                  percentage !== null
                    ? "bg-teal-100 cursor-not-allowed"
                    : "bg-teal-400"
                }`}
                type="submit"
                disabled={percentage !== null && percentage < 100}
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default EditEmployeeProfile