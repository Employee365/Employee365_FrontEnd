import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const SideBarLayOut = () => {
  return (
    <div>
      <div>
        <Header/>
      </div>
    <div className='flex'>
        <div className=''>

        <SideBar />
        </div>
        <main className=' p-[1.5rem]  border-gray-200' >
            <Outlet/>
        </main>
    </div>
    </div>
  )
}

export default SideBarLayOut