import React from 'react'
import { Outlet } from 'react-router-dom'

import EmployeeSideBar from './EmployeeSideBar'
import Header from '../../../components/Header'

const EmployeeSideBarLayOut = () => {
  return (
    <div>
      <div>
        <Header title='Search for Task' />
      </div>
    <div className='flex'>
        <div className=''>

        <EmployeeSideBar />
        </div>
        <main className='p-[2rem]' >
            <Outlet/>
        </main>
    </div>
    </div>
  )
}

export default EmployeeSideBarLayOut