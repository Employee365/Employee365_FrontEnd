import React from 'react'
import { Outlet } from 'react-router-dom'
// import Header from './Header'
import EmployeeSideBar from './EmployeeSideBar'

const EmployeeSideBarLayOut = () => {
  return (
    <div>
      {/* <div>
        <Header/>
      </div> */}
    <div className='flex'>
        <div className=''>

        <EmployeeSideBar />
        </div>
        <main className='' >
            <Outlet/>
        </main>
    </div>
    </div>
  )
}

export default EmployeeSideBarLayOut