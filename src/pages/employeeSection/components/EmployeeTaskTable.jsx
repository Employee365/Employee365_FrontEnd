import React, { useState, useEffect, useContext } from "react";

import { DataGrid } from "@mui/x-data-grid";
import { taskColumns, userRows } from "../../../FakeData";
import { Link } from "react-router-dom";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { db } from "../../../firebase.config";
import { AuthContext } from "../../../components/AuthContext";

const EmployeeTaskTable = () => {
  const [data, setData] = useState([]);
  const [individualData, setIndividualData] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const [id, setId] = useState("");

  const auth = getAuth();

  const [formData, setFormData] = useState({});
  const { status,taskName,description } = formData;
  const {currentUser} = useContext(AuthContext)

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  useEffect(() => {
    const fetchEmployeeData = async () => {
      let list = [];
      try {
        const employeeRef = collection(db, "tasks");
        const q = query(
          employeeRef,
          where("assignedTo", "==", currentUser.displayName),
          orderBy("timestamp", "desc")
        );
        const querrySnap = await getDocs(q);

        querrySnap.forEach((doc) => {
          return list.push({ id: doc.id, ...doc.data() });
        });
       
        setData(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEmployeeData();
  }, []);

  useEffect(() => {
    async function fetchListing() {
      const docRef = doc(db, "tasks", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setIndividualData(docSnap.data());
        setFormData({ ...docSnap.data() });
      } else {
      }
    }
    fetchListing();
  }, [id]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "tasks", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleModal = (id) => {
    setIsInView(!isInView);
    setId(id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "tasks", id);
    await updateDoc(docRef, formData);
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
              onClick={() => handleModal(params.id)}
              className="py-[2px] px-[5px] text-blue-900 border-[1px] rounded-[5px] border-blue-400"
            >
              View
            </button>

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
    <div className="h-screen  w-full relative">
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
      {isInView &&
        <div className="absolute opacity-[0.9] top-0 right-0 left-0  bg-gradient-to-r from-neutral-600 to-neutral-900  p-[2rem] h-screen w-full">

        <form onSubmit={handleSubmit} className="flex relative shadow-[0_3px_10px_rgb(0,0,0,1)] bg-gradient-to-r rounded-3xl from-teal-200 to-cyan-800 p-[2rem] flex-col gap-5 ">
            <p onClick={()=> setIsInView(!isInView)} className="cursor-pointer absolute top-2 right-5 font-extrabold text-xl">X</p>
            <div className="w-[40%]  ">
                <label className="flex items-center gap-[10px]" htmlFor="">
                  Task Name
                </label>
                <input
                  className="w-[100%]  "
                  type="text"
                  value={taskName}
                  id="taskName"
                  
                  onChange={handleChange}
                
                  disabled
                />
              </div>

              <div className="w-[90%]  ">
                <label className="flex items-center gap-[10px]" htmlFor="">
                  Description
                </label>
                <textarea className="w-full" value={description} onChange={handleChange} id="description" disabled cols="30" rows=""></textarea>
              </div>

              <div className="w-[90%]  ">
          <label className="flex items-center gap-[10px]">Update Status</label>
          <select
            value={status}
            onChange={handleChange}
            id="status"
            className="w-[50%]"
          >
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Done">Done</option>
          </select>
          </div>
          <button type="submit" className="py-2 px-4 w-[10%] bg-blue-700 text-white rounded-xl">Update</button>
        </form>
        </div>


      }
    </div>
  );
};

export default EmployeeTaskTable;
