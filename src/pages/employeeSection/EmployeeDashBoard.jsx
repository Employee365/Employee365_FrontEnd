import React, { useContext } from 'react'
import { AuthContext } from '../../components/AuthContext'
import { getAuth } from 'firebase/auth'
import { FaUser,FaFolder } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
import { GiFinishLine } from "react-icons/gi";
import { GrSchedule } from "react-icons/gr";
import Widget from '../../components/Widget';
import EmployeeTaskTable from './components/EmployeeTaskTable';

const EmployeeDashBoard = () => {
  

  return (
    <>
    <div className='flex justify-around'>
      <Widget title='Task' link='see all task' icon={<FaUser/>} number='100' color='red' />
      <Widget title='Attendance' link='see all attendance' icon={<GrSchedule/>} number='100' color='yellow' />
      <Widget title='Leave' link='see all leave' icon={<FaFolder/>} number='100' color='green'/>
      <Widget title='Finished' link='see all finished Leave' icon={<GiFinishLine/>} number='100' color='purple'/>
    </div>
    <div className='mt-[3rem]'>
      <h1 className='text-gray-400 text-xl uppercase mb-5 underline'>Recently Updated Task</h1>
    <EmployeeTaskTable/>
    </div>
    </>
  )
}

export default EmployeeDashBoard