import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const SideBarLayOut = () => {
  return (
    <div className='flex '>
        <div className=''>

        <SideBar />
        </div>
        <main className='' >
            <Outlet/>
        </main>
    </div>
  )
}

export default SideBarLayOut