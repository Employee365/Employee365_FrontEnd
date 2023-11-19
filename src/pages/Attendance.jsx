import React from 'react'
import AttendanceTable from '../components/AttendanceTable'

const Attendance = ({attendance}) => {
  return (
    <div>
        <AttendanceTable attendance={attendance} />
    </div>
  )
}

export default Attendance