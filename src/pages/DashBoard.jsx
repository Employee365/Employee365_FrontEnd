import { getAuth } from 'firebase/auth'
import React, { useContext } from 'react'
import { AuthContext } from '../components/AuthContext'
import Widget from '../components/Widget'
import { FaUser,FaFolder } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
import { GiFinishLine } from "react-icons/gi";
import { GrSchedule } from "react-icons/gr";
import TaskTable from '../components/TaskTable';


const DashBoard = ({data,attendance}) => {
  
  
  return (
    <>
    <div className='flex justify-around'>
      <Widget title='Employee' linkAddress='/employee' link='see all employees' icon={<FaUser/>} number={data.length} color='red' />
      <Widget title='Attendance' linkAddress='/attendance' link='see all attendance' icon={<GrSchedule/>} number={attendance.length} color='yellow' />
      <Widget title='Task' linkAddress='/task' link='see all task' icon={<FaFolder/>} number='100' color='green'/>
      <Widget title='Finished'   icon={<GiFinishLine/>} number='100' color='purple'/>
    </div>
    <div className='mt-[3rem]'>
      <h1 className='text-gray-400 text-xl uppercase mb-5 underline'>Recently Updated Task</h1>
    <TaskTable/>
    </div>
    </>
  )
}

export default DashBoard