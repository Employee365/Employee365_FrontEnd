import React, { useState, useEffect, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../FakeData";
import { Link } from "react-router-dom";

const EmployeesTable = ({data,setData}) => {
 

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
      width: 150,
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
