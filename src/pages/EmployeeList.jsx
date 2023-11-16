import React from "react";
import EmployeesTable from "../components/EmployeesTable";
import { Link } from "@mui/material";
import Loader from "../components/Loader";

const EmployeeList = ({ data, setData, isLoading }) => {
  return (
    <div className="">
      <EmployeesTable data={data} setData={setData} />
    </div>
  );
};

export default EmployeeList;
