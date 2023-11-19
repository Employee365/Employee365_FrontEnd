import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const SideBarLayOut = () => {
  return (
    <div>
      <div className='fixed top-0 left-0 right-0 z-10 bg-white'>
        <Header title='search for employee'/>
      </div>
    <div className='flex'>
        <div className='fixed top-[5rem] z-[20]'>

        <SideBar />
        </div>
        <main className='mt-[5rem] ml-[13rem] p-[1.5rem]   border-gray-200' >
            <Outlet/>
        </main>
    </div>
    </div>
  )
}

export default SideBarLayOut