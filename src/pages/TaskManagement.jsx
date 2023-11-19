import React from 'react'
import TaskTable from '../components/TaskTable'
import { Link } from 'react-router-dom'

const TaskManagement = ({task}) => {
  return (
    <div>
      <div className="w-full font-[24px] text-gray-600 mb-[10px] flex items-center justify-between">
        Add New Task
        <Link
          to="newTask"
          className="text-green-500 font-semibold text-[16px] border-[1px] border-green-500 p-[5px] rounded-md"
          style={{ textDecoration: "none" }}
        >
          Add New
        </Link>
      </div>
        <TaskTable task={task}/>
    </div>
  )
}

export default TaskManagement
