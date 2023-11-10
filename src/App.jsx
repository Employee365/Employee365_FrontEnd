import React from 'react'
import LandingPage from './landing_page/LandingPage'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import DashBoard from './pages/DashBoard'
import EmployeeList from './pages/EmployeeList'
import Employee from './pages/Employee'
import NewEmployee from './pages/NewEmployee'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/employee' >
        <Route index element={<EmployeeList/>}/>
        <Route path=':employeeId' element={<Employee/>}/>
        <Route path=':newEmployee' element={<NewEmployee/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App
