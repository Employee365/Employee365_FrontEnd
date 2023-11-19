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
  getDoc,
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
import { Toaster } from "react-hot-toast";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import EmployeeProfile from "./pages/employeeSection/EmployeeProfile";
import EditEmployeeProfile from "./pages/employeeSection/EditEmployeeProfile";

const App = () => {
  const [data, setData] = useState([]);
  
  const [companyData, setCompanyData] = useState(null)
  const [employeeData, setEmployeeData] = useState(null)
  const [isLoading,setIsLoading] = useState(true)
  const [attendance, setAttendance] = useState([]);


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
      
        setAttendance(list);
      } catch (err) {
      
      }
    };
    fetchEmployeeData();
  }, []);

  useEffect(() => {
    async function fetchAdminData() {
      const docRef = doc(db, "admin", currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setCompanyData(docSnap.data());
        setIsLoading(false)
        
      } else {
      }
    }
    fetchAdminData();
  }, []);

  

  useEffect(() => {
    async function fetchEmployeeInfo() {
      const docRef = doc(db, "employee", currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setEmployeeData(docSnap.data());
        setIsLoading(false)
        
      } else {
      }
    }
    fetchEmployeeInfo();
  }, []);

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

        setData(list);
        setIsLoading(false);
      } catch (err) {}
    };
    fetchEmployeeData();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/adminLogin" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/employeeLogin" element={<EmployeeLogin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/loginOption" element={<LoginOption />} />

          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashBoard data={data} attendance={attendance} />} />
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
            <Route
              path=":employeeId"
              element={<Employee data={data} isLoading={isLoading} />}
            />
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
            <Route path="/attendance" element={<Attendance attendance={attendance}/>} />
          </Route>
          <Route path="profile" element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile companyData={companyData} isLoading={isLoading} />} />
            <Route path="edit-profile" element={<EditProfile companyData={companyData} isLoading={isLoading} />} />
          </Route>

          <Route path="employeeDashboard" element={<EmployeeProtectedRoute employeeData={employeeData}/>}>
            <Route path="/employeeDashboard" element={<EmployeeDashBoard />} />
          </Route>

          <Route path="employeeAttendance" element={<EmployeeProtectedRoute />}>
            <Route
              path="/employeeAttendance"
              element={<EmployeeAttendance />}
            />
          </Route>
          <Route path="employeeTask" element={<EmployeeProtectedRoute />}>
            <Route path="/employeeTask" element={<EmployeeTask />} />
          </Route>
          <Route path="employeeProfile" element={<EmployeeProtectedRoute />}>
            <Route path="/employeeProfile" element={<EmployeeProfile employeeData={employeeData} isLoading={isLoading} />} />
            <Route path="edit-employeeProfile" element={<EditEmployeeProfile employeeData={employeeData} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div>
        <Toaster />
      </div>
    </div>
  );
};

export default App;
