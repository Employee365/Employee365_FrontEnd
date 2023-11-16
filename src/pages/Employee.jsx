import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EmployeeDetail from '../components/EmployeeDetail';
import PieChart from '../components/PieChart';
import Task from '../components/Task';
import { db } from '../firebase.config';
import { doc, getDoc } from 'firebase/firestore';

const Employee = ({data}) => {
  const params = useParams()
  const employeeId = parseInt(params.employeeId)


  
  

  return (
    <div>

    <div>
        <EmployeeDetail params={params} employeeId={employeeId}/>
       
    </div>
    <div className='h-[300px] w-[300px]'>
    <PieChart/>
    </div>
    <div>
      <Task/>
    </div>
    </div>
    /* Details */
    
  )
}

export default Employee