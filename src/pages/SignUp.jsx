import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase.config";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
// import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [revealPassword, setRevealPassword] = useState(false);

  const { email, password, name } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {

      // FireBase Logic goes here
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      
      // Updating the user info with value from the input field
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const admin = userCredential.user;
      // Spreading the value from the input field
      const formDataCopy = { ...formData };
      // Removing the password to save in DB for security reasons
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      // Adding user to  database
      await setDoc(doc(db, "admin", admin.uid), formDataCopy);
    //   toast.success("Sign up was successful ");
      navigate("/dashboard");
    } catch (error) {
        console.log(error.message);
    //   toast.error("something went wrong with the registration");
    }
  };

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold ">Sign Up</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto gap-20 ">
        

        <div className="w-full md:w-[67%] lg:w-[40%] p-[2rem] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <form onSubmit={onSubmit}>
            <input
              className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Full Name"
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
                <span className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out">
                  <Link to="/sign-up">Sign In</Link>
                </span>
              </p>
              <p className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out">
                <Link to="/forgot-password">Forgot Password</Link>
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
