import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import {useAuthStatus} from '../hooks/useAuthStatus'

import Loader from './Loader'
import SideBarLayOut from './SideBarLayOut'


const ProtectedRoute = () => {
    const {loggedIn,checkingStatus} = useAuthStatus()
    if(checkingStatus){
        
        return <Loader/>
        
    }
  return loggedIn ? <SideBarLayOut/>:<Navigate to='/login'/>
}

export default ProtectedRoute