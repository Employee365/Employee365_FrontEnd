import React, { useState, useEffect, useContext } from "react";
import { db } from "../firebase.config";
import { DataGrid } from "@mui/x-data-grid";
import { attendanceColumns,  } from "../FakeData";
import { Link } from "react-router-dom";
import {
  collection,
  
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { AuthContext } from "./AuthContext";

const AttendanceTable = ({attendance}) => {
  
  return (
    <div className="h-[90%] w-full">
      <div className="w-full font-[24px] text-gray-600 mb-[10px] flex items-center justify-between">
        View All Attendance
        <Link
          to="newTask"
          className="text-green-500 font-semibold text-[16px] border-[1px] border-green-500 p-[5px] rounded-md"
          style={{ textDecoration: "none" }}
        >
          View All
        </Link>
      </div>
      <DataGrid
        rows={attendance}
        columns={attendanceColumns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default AttendanceTable;
