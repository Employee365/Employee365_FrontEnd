import React from 'react'
import SideBar from '../components/SideBar'
import DashBoard from './DashBoard'

const Home = () => {
  return (
    <div className='flex'>
        <SideBar/>
        <DashBoard/>
    </div>
  )
}

export default Home