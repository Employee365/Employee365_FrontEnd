import { getAuth } from 'firebase/auth'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../components/AuthContext'
import Widget from '../components/Widget'
import { FaUser,FaFolder } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
import { GiFinishLine } from "react-icons/gi";
import { GrSchedule } from "react-icons/gr";
import TaskTable from '../components/TaskTable';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { db } from '../firebase.config';


const DashBoard = () => {
  const [data, setData] = useState([]);
  const [task, setTask] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const {currentUser} = useContext(AuthContext)
  
  

  useEffect(() => {
    const fetchEmployeeData = async () => {
      let list = [];
      try {
       
        const employeeRef = collection(db, "employee");
        const q = query(
          employeeRef,
          where("userRef", "==", currentUser.uid),
          orderBy("timestamp", "desc")
        );
        const querrySnap = await getDocs(q);
  
        querrySnap.forEach((doc) => {
          return list.push({ id: doc.id, ...doc.data() });
        });
  
        setData(list);
        
      } catch (err) {}
    };
    fetchEmployeeData();
  }, []);



 
 
  useEffect(() => {
    const fetchEmployeeTask = async () => {
      let list = [];
      try {
        const employeeRef = collection(db, "tasks");
        const q = query(
          employeeRef,
          where("userRef", "==", currentUser.uid),
          orderBy("timestamp", "desc")
        );
        const querrySnap = await getDocs(q);

        querrySnap.forEach((doc) => {
          return list.push({ id: doc.id, ...doc.data() });
        });
       
        setTask(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEmployeeTask();
  }, []);


  useEffect(() => {
    const fetchEmployeeData = async () => {
      let list = [];
      try {
        const employeeRef = collection(db, "attendance");
        const q = query(
          employeeRef,
          where("userRef", "==", currentUser.uid),
          orderBy("timestamp", "desc")
        );
        const querrySnap = await getDocs(q);

        querrySnap.forEach((doc) => {
          return list.push({ id: doc.id, ...doc.data() });
        });
      
        setAttendance(list);
      } catch (err) {
      
      }
    };
    fetchEmployeeData();
  }, []);



  
  const completed = task.filter((done)=> done.status === "Done")

  
  return (
    <>
    <div className='flex justify-around'>
      <Widget title='Employee' linkAddress='/employee' link='see all employees' icon={<FaUser/>} number={data.length} color='red' />
      <Widget title='Attendance' linkAddress='/attendance' link='see all attendance' icon={<GrSchedule/>} number={attendance.length} color='yellow' />
      <Widget title='Task' linkAddress='/task' link='see all task' icon={<FaFolder/>} number={task.length} color='green'/>
      <Widget title='Finished'   icon={<GiFinishLine/>} number={completed.length} color='purple'/>
    </div>
    <div className='mt-[3rem]'>
      <h1 className='text-gray-400 text-xl uppercase mb-5 underline'>Recently Updated Task</h1>
    <TaskTable/>
    </div>
    </>
  )
}

export default DashBoard