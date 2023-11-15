import React from "react";
import {Link} from 'react-router-dom'
const LoginOption = () => {
 
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold ">Log-In</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto gap-20">
        <div className="w-full flex flex-col gap-2 md:w-[67%] lg:w-[40%]  p-[2rem] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
            <Link to='/adminLogin'>
            <button className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 hover:shadow-lg active:bg-blue-800 ease-in-out" type="submit">Login Admin
          </button>
            </Link>

            <Link to='/employeeLogin'>

            <button className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 hover:shadow-lg active:bg-blue-800 ease-in-out" type="submit">Login Employee
          </button>
          
            </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginOption;
