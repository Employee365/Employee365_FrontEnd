import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate()
  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try{
      const auth = getAuth()
      await sendPasswordResetEmail(auth,email)
      toast.success("Email was sent successfully")
      navigate('/loginOption')

    }catch(error){
      toast.error(error.message)
    }
  };
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20 p-[2rem] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <form onSubmit={onSubmit}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Don't have a account?
                <Link
                  to="/signUp"
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/loginOption"
                  className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                >
                  Sign in instead
                </Link>
              </p>
            </div>
            <button
              className="w-full -600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
              type="submit"
            >
              Send reset password
            </button>
            
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
