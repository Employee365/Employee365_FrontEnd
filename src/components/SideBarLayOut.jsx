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
        <main className='' >
            <Outlet/>
        </main>
    </div>
    </div>
  )
}

export default SideBarLayOut