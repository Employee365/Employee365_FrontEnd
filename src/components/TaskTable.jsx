import React, { useState, useEffect, useContext } from "react";
import { db } from "../firebase.config";
import { DataGrid } from "@mui/x-data-grid";
import { taskColumns, userRows } from "../FakeData";
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

const TaskTable = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const auth = getAuth();
  const {currentUser} = useContext(AuthContext)
  /* console.log(
    auth.currentUser.uid,
    auth.currentUser.displayName,
    auth.currentUser.email
  ); */
  useEffect(() => {
    const fetchEmployeeData = async () => {
      let list = [];
      try {
        const employeeRef = collection(db, "tasks");
        const q = query(
          employeeRef,
          where("userRef", "==", currentUser.uid),
          orderBy("timestamp", "desc")
        );
        const querrySnap = await getDocs(q);

        querrySnap.forEach((doc) => {
          return list.push({ id: doc.id, ...doc.data() });
        });
        console.log(list);
        setData(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEmployeeData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "tasks", id));
      setData(data.filter((item) => item.id !== id));
      console.log(id);
    } catch (err) {
      console.log(err);
    }
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-3">
            
            <button
              className="py-[2px] px-[5px] text-red-900 border-[1px] rounded-[5px] border-red-400 cursor-pointer"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="h-[90%] w-full">
      
      <DataGrid
        rows={data}
        columns={taskColumns.concat(actionColumn)}
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

export default TaskTable;
