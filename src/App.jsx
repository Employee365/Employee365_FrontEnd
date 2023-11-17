import React, { useContext, useEffect, useState } from "react";
import LandingPage from "./landing_page/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";
import EmployeeList from "./pages/EmployeeList";
import Employee from "./pages/Employee";
import NewEmployee from "./pages/NewEmployee";
import SideBarLayOut from "./components/SideBarLayOut";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import ForgotPassword from "./pages/ForgetPassword";
import { AuthContext } from "./components/AuthContext";
import TaskManagement from "./pages/TaskManagement";
import NewTask from "./pages/NewTask";
import { db } from "./firebase.config";

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
import { Spinner } from "flowbite-react";
import Loader from "./components/Loader";
import Attendance from "./pages/Attendance";
import LoginOption from "./pages/LoginOption";
import EmployeeLogin from "./pages/employeeSection/EmployeeLogin";
import EmployeeDashBoard from "./pages/employeeSection/EmployeeDashBoard";
import EmployeeProtectedRoute from "./pages/employeeSection/components/EmployeeProtectedRoute";
import EmployeeAttendance from "./pages/employeeSection/EmployeeAttendance";
import EmployeeTask from "./pages/employeeSection/EmployeeTask";

const App = () => {
  const [data, setData] = useState([]);
  const auth = getAuth();
  const { currentUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  /*  console.log(
    auth.currentUser.uid,
    auth.currentUser.displayName,
    auth.currentUser.email
  ); */

  useEffect(() => {
    const fetchEmployeeData = async () => {
      let list = [];
      try {
        setIsLoading(true);
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
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEmployeeData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/adminLogin" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/employeeLogin" element={<EmployeeLogin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/loginOption" element={<LoginOption />} />

        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashBoard />} />
        </Route>
        <Route path="employee" element={<ProtectedRoute />}>
          <Route
            path="/employee"
            element={
              <EmployeeList
                data={data}
                setData={setData}
                isLoading={isLoading}
              />
            }
          />
          <Route path=":employeeId" element={<Employee data={data} />} />
          <Route path="newEmployee" element={<NewEmployee />} />
        </Route>
        {/* <Route path="/task" element={<ProtectedRoute/>}>

      </Route> */}
        <Route path="task" element={<ProtectedRoute />}>
          <Route path="/task" element={<TaskManagement />} />
          <Route
            path="newTask"
            element={<NewTask data={data} setData={setData} />}
          />
        </Route>

        <Route path="attendance" element={<ProtectedRoute />}>
          <Route path="/attendance" element={<Attendance />} />
        </Route>

        <Route path="employeeDashboard" element={<EmployeeProtectedRoute />}>
          <Route path="/employeeDashboard" element={<EmployeeDashBoard />} />
        </Route>

        <Route path="employeeAttendance" element={<EmployeeProtectedRoute />}>
          <Route path="/employeeAttendance" element={<EmployeeAttendance />} />
        </Route>
        <Route path="employeeTask" element={<EmployeeProtectedRoute />}>
          <Route path="/employeeTask" element={<EmployeeTask />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
