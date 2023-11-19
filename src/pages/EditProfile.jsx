import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase.config";
import { serverTimestamp, setDoc, doc, updateDoc } from "firebase/firestore";
import { BsImage } from "react-icons/bs";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import toast from "react-hot-toast";
import { AuthContext } from "../components/AuthContext";


const EditProfile = ({companyData,isLoading}) => {
  const auth = getAuth()
  console.log(auth.currentUser);
  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [percentage, setPercentage] = useState(null);
  const [formData, setFormData] = useState({
    name: companyData.name,
    email: companyData.email,
    
    address: companyData.address,
    number: companyData.number,
    speciality: companyData.speciality,
  });

  const [revealPassword, setRevealPassword] = useState(false);

  const { email, password, name, number, speciality, address } = formData;
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
        displayName: name,
        phoneNumber: number,
        photoURL: avatar,
      });
      
      const docRef = doc(db, "admin",currentUser.uid );

      await updateDoc(docRef, formData)
      localStorage.setItem("user", JSON.stringify(auth.currentUser))
      toast.success("Profile Update Successfully");
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
        toast.error(error.message);
    }
  };

  return (
    <section className="">
      <h1 className="text-3xl text-center mt-6 font-bold ">
        Edit Company Profile
      </h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto gap-20 ">
        <div className="w-full md:w-[67%] lg:w-[40%] p-[2rem] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <div className=" flex justify-center items-start ">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : companyData.avatar
              }
              alt=""
              className=" h-[100px] rounded-full object-cover"
            />
          </div>
          <form onSubmit={onSubmit}>
            <div className="w-[100%] cursor-pointer">
              <label className="flex items-center gap-[10px]" htmlFor="file">
                Change Image
                <BsImage />
              </label>
              <input
                className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
                <label htmlFor="">Company Name</label>
            <input
              className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Company Name"
            />
            <label htmlFor="">Company Address</label>
            <input
              className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              type="text"
              id="address"
              value={address}
              onChange={onChange}
              placeholder="Company Address"
            />
            <input
              className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              type="text"
              id="number"
              value={number}
              onChange={onChange}
              placeholder="Phone No"
            />
            <label htmlFor="">Speciality</label>
            <input
              className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              type="text"
              id="speciality"
              value={speciality}
              onChange={onChange}
              placeholder="Speciality"
            />

            

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
    </section>
  );
};

export default EditProfile;
