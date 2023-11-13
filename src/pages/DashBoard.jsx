import { getAuth } from 'firebase/auth'
import React, { useContext } from 'react'
import { AuthContext } from '../components/AuthContext'

const DashBoard = () => {
  const auth = getAuth()
  const {currentUser} = useContext(AuthContext)
  return (
    <>
    <div className='flex-1 bg-red-200'>DashBoard</div>
    {/* <p>{currentUser.uid}</p> */}
    </>
  )
}

export default DashBoard