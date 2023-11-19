import React, { useContext } from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import {useAuthStatus} from '../hooks/useAuthStatus'

import Loader from './Loader'
import SideBarLayOut from './SideBarLayOut'
import { AuthContext } from './AuthContext'


const ProtectedRoute = ({companyData,isLoading}) => {
  const {currentUser} = useContext(AuthContext)

    
  return currentUser ? <SideBarLayOut companyData={companyData} isLoading={isLoading}/>:<Navigate to='/loginOption'/>
}

export default ProtectedRoute