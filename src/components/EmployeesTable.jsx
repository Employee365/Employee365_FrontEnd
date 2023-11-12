import React, { useState, useEffect, useContext } from "react";
import { db } from "../firebase.config";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../FakeData";
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

const EmployeesTable = () => {
  const [data, setData] = useState([]);
  const auth = getAuth();
  const {currentUser} = useContext(AuthContext)
  /* console.log(
    // auth.currentUser.uid,
    auth.currentUser.displayName,
    auth.currentUser.email
  ); */
  useEffect(() => {
    const fetchEmployeeData = async () => {
      let list = [];
      try {
        const employeeRef = collection(db, "employee");
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

        /* const querySnapshot = await getDocs(collection(db, "employee"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
        console.log(list); */
      } catch (err) {
        console.log(err);
      }
    };
    fetchEmployeeData();

    // LISTEN (REALTIME)
    /* const unsub = onSnapShot(
      collection(db, "users"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );
 */
    /* return () => {
      unsub();
    }; */
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "employee", id));
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
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-3">
            <Link to={`/employee/${params.id}`}>
              <div className="py-[2px] px-[5px] text-blue-900 border-[1px] rounded-[5px] border-blue-400">
                View
              </div>
            </Link>
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
      <div className="w-full font-[24px] text-gray-600 mb-[10px] flex items-center justify-between">
        Add New Employee
        <Link
          to="/newEmployee"
          className="text-green-500 font-semibold text-[16px] border-[1px] border-green-500 p-[5px] rounded-md"
          style={{ textDecoration: "none" }}
        >
          Add New
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
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

export default EmployeesTable;
