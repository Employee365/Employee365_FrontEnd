import React, { useState, useEffect, useContext } from "react";
import { db } from "../firebase.config";
import { BsImage } from "react-icons/bs";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
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
import { AuthContext } from "../components/AuthContext";

const NewEmployee = () => {
  const [file, setFile] = useState("");
  const [percentage, setPercentage] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const adminId = currentUser.uid;

  const [formData, setFormData] = useState({
    username: "",
    FullName: "",
    email: "",
    password: "",
    number: "",
    address: "",
    country: "",
  });
  const { username, FullName, email, password, address, country, number } =
    formData;

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
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const employeeAuth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        employeeAuth,
        email,
        password
      );

      const user = userCredential.user;

      // Spreading the value from the input field
      const formDataCopy = {
        ...formData,
        userRef: adminId,
        id: new Date().getTime(),
      };
      // Removing the password to save in DB for security reasons
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, "employee", user.uid), formDataCopy);
      employeeAuth.signOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
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
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
              className=" h-[100px] rounded-full object-cover"
            />
          </div>
          <div className="right flex-1">
            <form
              className="flex flex-wrap justify-around gap-[30px]"
              onSubmit={handleAdd}
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
                className={`w-[150px] p-[10px] border-none  text-white font-bold mt-[10px] ${
                  percentage !== null
                    ? "bg-teal-100 cursor-not-allowed"
                    : "bg-teal-400"
                }`}
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

export default NewEmployee;
