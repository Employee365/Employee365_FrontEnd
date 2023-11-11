import React from "react";
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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />

        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<DashBoard />} />

          <Route path="employee" element={<EmployeeList />} />
          <Route path="employee/:employeeId" element={<Employee />} />
          <Route path="newEmployee" element={<NewEmployee />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
