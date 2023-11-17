import { getAuth } from 'firebase/auth'
import React, { useContext } from 'react'
import { AuthContext } from '../components/AuthContext'
import Widget from '../components/Widget'
import { FaUser,FaFolder } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
import { GiFinishLine } from "react-icons/gi";
import { GrSchedule } from "react-icons/gr";
import TaskTable from '../components/TaskTable';


const DashBoard = () => {
  const auth = getAuth()
  const {currentUser} = useContext(AuthContext)
  console.log('photo',currentUser.photoURL);
  return (
    <>
    <div className='flex justify-around'>
      <Widget title='Employee' link='see all employees' icon={<FaUser/>} number='100' color='red' />
      <Widget title='Attendance' link='see all attendance' icon={<GrSchedule/>} number='100' color='yellow' />
      <Widget title='Task' link='see all task' icon={<FaFolder/>} number='100' color='green'/>
      <Widget title='Finished' link='see all finished task' icon={<GiFinishLine/>} number='100' color='purple'/>
    </div>
    <div className='mt-[3rem]'>
      <h1 className='text-gray-400 text-xl uppercase mb-5 underline'>Recently Updated Task</h1>
    <TaskTable/>
    </div>
    </>
  )
}

export default DashBoard