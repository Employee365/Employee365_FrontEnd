import React, { useContext } from 'react'
import { Outlet,Navigate } from 'react-router-dom'

import EmployeeSideBar from './EmployeeSideBar'
import { AuthContext } from '../../../components/AuthContext'
import EmployeeSideBarLayOut from './EmployeeSideBarLayOut'


const EmployeeProtectedRoute = () => {
  const {currentUser} = useContext(AuthContext)
  
    
  return currentUser ? <EmployeeSideBarLayOut/>:<Navigate to='/loginOption'/>
}

export default EmployeeProtectedRoute