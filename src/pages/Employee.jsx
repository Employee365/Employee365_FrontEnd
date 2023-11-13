import React from 'react'
import { useParams } from 'react-router-dom'
import EmployeeDetail from '../components/EmployeeDetail';

const Employee = ({data}) => {
  const params = useParams()

  console.log(params);

  return (
    <div>
        <EmployeeDetail/>
    </div>
    /* Details */
    
  )
}

export default Employee