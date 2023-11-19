import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase.config";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { BsImage } from "react-icons/bs";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import toast from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [percentage, setPercentage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    number: "",
    speciality: "",
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
          reject(error);
        },
        () => {
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
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { avatar } = formData;
      console.log(avatar);

      updateProfile(auth.currentUser, {
        displayName: name,
        phoneNumber: number,
        photoURL: avatar,
      });
      const admin = userCredential.user;

      const formDataCopy = { ...formData };

      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "admin", admin.uid), formDataCopy);
      toast.success('Sign Up Successfully')
      navigate("/loginOption");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold ">
        Create an account With us as an Administrator
      </h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto gap-20 ">
        <div className="w-full md:w-[67%] lg:w-[40%] p-[2rem] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <div className=" flex justify-center items-start ">
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
          <form onSubmit={onSubmit}>
            <div className="w-[100%] cursor-pointer">
              <label className="flex items-center gap-[10px]" htmlFor="file">
                Upload An Image
                <BsImage />
              </label>
              <input
                className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                required
              />
            </div>

            <input
              className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Company Name"
            />
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
            <input
              className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              type="text"
              id="speciality"
              value={speciality}
              onChange={onChange}
              placeholder="Speciality"
            />

            <input
              className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
            />
            <div className="relative mb-6">
              <input
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                type={revealPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="password"
              />
              {revealPassword ? (
                <AiFillEyeInvisible
                  className="text-black absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setRevealPassword((prev) => !prev)}
                />
              ) : (
                <AiFillEye
                  className="text-black absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setRevealPassword((prev) => !prev)}
                />
              )}
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Have an account?{" "}
                <span className="text-green-600 hover:text-green-700 transition duration-200 ease-in-out">
                  <Link to="/sign-up">Log In</Link>
                </span>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 hover:shadow-lg active:bg-blue-800 ease-in-out"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
