import React from 'react'
import { useParams } from 'react-router-dom'

const Employee = ({data}) => {
  const params = useParams()

  console.log(params);

  return (
    <div>Employee</div>
  )
}

export default Employee