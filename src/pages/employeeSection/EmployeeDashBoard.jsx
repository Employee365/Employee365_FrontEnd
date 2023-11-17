import React, { useContext } from 'react'
import { AuthContext } from '../../components/AuthContext'
import { getAuth } from 'firebase/auth'

const EmployeeDashBoard = () => {
  /* const auth = getAuth()
  const {currrentUser} = useContext(AuthContext)
  console.log(currrentUser);
  console.log(auth.currentUser); */

  return (
    <>
    <div>EmployeeDashBoard</div>
    {/* <p>{auth.displayName} hello</p> */}
    </>
  )
}

export default EmployeeDashBoard