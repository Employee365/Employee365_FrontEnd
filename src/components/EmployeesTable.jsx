import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../FakeData";
import { Link } from "react-router-dom";

const EmployeesTable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="flex items-center gap-3">
            <div className="py-[2px] px-[5px] text-blue-900 border-[1px] rounded-[5px] border-blue-400">View</div>
            <div className="py-[2px] px-[5px] text-red-900 border-[1px] rounded-[5px] border-red-400">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="h-[90%] w-full">

      <div className="w-full font-[24px] text-gray-600 mb-[10px] flex items-center justify-between">
        Add New Employee
        <Link to='/newEmployee' className="text-green-500 font-semibold text-[16px] border-[1px] border-green-500 p-[5px] rounded-md" style={{textDecoration:'none'}} >
      Add New 
      </Link>
      </div>
      <DataGrid
        rows={userRows}
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
