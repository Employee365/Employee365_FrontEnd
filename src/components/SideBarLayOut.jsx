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
    <div className='grid grid-cols-7'>
        <div className='col-span-1'>

        <SideBar />
        </div>
        <main className='col-span-6 p-4   border-gray-200' >
            <Outlet/>
        </main>
    </div>
    </div>
  )
}

export default SideBarLayOut