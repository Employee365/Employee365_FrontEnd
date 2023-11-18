import React, { useState, useEffect, useContext } from "react";
import { db } from "../firebase.config";
import { DataGrid } from "@mui/x-data-grid";
import { attendanceColumns, taskColumns, userRows } from "../FakeData";
import { Link } from "react-router-dom";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { AuthContext } from "./AuthContext";

const AttendanceTable = () => {
  const [data, setData] = useState([]);
 
  const auth = getAuth();
  const {currentUser} = useContext(AuthContext)
 
  useEffect(() => {
    const fetchEmployeeData = async () => {
      let list = [];
      try {
        const employeeRef = collection(db, "attendance");
        const q = query(
          employeeRef,
          where("userRef", "==", currentUser.uid),
          orderBy("timestamp", "desc")
        );
        const querrySnap = await getDocs(q);

        querrySnap.forEach((doc) => {
          return list.push({ id: doc.id, ...doc.data() });
        });
      
        setData(list);
      } catch (err) {
      
      }
    };
    fetchEmployeeData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "tasks", id));
      setData(data.filter((item) => item.id !== id));
      
    } catch (err) {
      
    }
  };
  
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
        rows={data}
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
