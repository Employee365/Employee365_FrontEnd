import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeDetail from "../components/EmployeeDetail";
import PieChart from "../components/PieChart";
import Task from "../components/Task";
import { db } from "../firebase.config";
import { doc, getDoc } from "firebase/firestore";

const Employee = ({ data,isLoading }) => {
  const params = useParams();
  const employeeId = parseInt(params.employeeId);

  return (
    <>
    <div>
      <div>
        <EmployeeDetail params={params} employeeId={employeeId} data={data} isLoading={isLoading} />
      </div>
    </div>
    <div className="mt-4 flex justify-between w-full">
    <div className="h-[250px] w-[250px]">
        <PieChart />
      </div>
      <div>
        <Task params={params} employeeId={employeeId} />
      </div>
    </div>
    </>
    /* Details */
  );
};

export default Employee;
