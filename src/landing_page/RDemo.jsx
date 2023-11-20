import React from "react";
import frame131 from "./assets/Frame131.png";

const RDemo = () => {
  return (
<>
    <div className="bg-[#E0EBF4] py-[6rem] px-[7rem]">
        <div>
            <img src={frame131} alt="" />
        </div>
    </div>
    {/* <div className="bg-[#E0EBF4] py-[6rem] px-[7rem]">
      <div className="bg-white  flex px-[2rem] py-[6rem] rounded-2xl">
        <div className="w-[50%]">
          <h1 className="font-extrabold text-4xl">Experiences with Online salary administration</h1>
          <p className="font-bold text-gray-500">
            Employee365 streamlines the management of employee records, making
            it easy to access and update information, reducing errors, and
            saving time.
          </p>
        </div>
        <div >
          <form className="flex w-[175%] h-[120%] flex-col gap-3 bg-gray-200 p-[1rem] rounded-xl">
            <input type="text" placeholder="Fist Name" className="h-[150%]"/>
            <input type="text" placeholder="Company Name" />
            <button className="bg-blue-600 text-white w-[50%]">Request a Demo</button>
          </form>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default RDemo;
