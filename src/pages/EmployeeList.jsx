import React from 'react'
import EmployeesTable from '../components/EmployeesTable'
import { Link } from '@mui/material'

const EmployeeList = ({data,setData}) => {
  return (
    <div className=''>
      
      <EmployeesTable data={data} setData={setData}/>
    </div>
  )
}

export default EmployeeList