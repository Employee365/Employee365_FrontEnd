import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { AuthContext } from "../components/AuthContext";
import toast from "react-hot-toast";


const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [revealPassword, setRevealPassword] = useState(false);

  const { email, password } = formData;

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
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (user) {
        dispatch({ type: "LOGIN", payload: user });
        toast.success('Login Successfull')
        navigate("/dashboard");

      }
    } catch (error) {
      toast.error(error.message)
      
    }
  };

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold ">Log-in Admin</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto gap-20">
        <div className="w-full md:w-[67%] lg:w-[40%]  p-[2rem] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <form onSubmit={onSubmit}>
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
                Don't have an account?{" "}
                <span className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out">
                  <Link to="/signUp">Register</Link>
                </span>
              </p>
              <p className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out">
                <Link to="/forgotPassword">Forgot Password</Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 hover:shadow-lg active:bg-blue-800 ease-in-out"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
