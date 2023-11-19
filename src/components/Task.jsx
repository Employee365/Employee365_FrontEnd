import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase.config";
import Loader from "./Loader";

const Task = ({ params, employeeId }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTask = async () => {
      let list = [];
      try {
        const employeeRef = collection(db, "tasks");
        const q = query(
          employeeRef,
          where("employeeId", "==", employeeId),
          orderBy("timestamp", "desc")
        );

        const querrySnap = await getDocs(q);

        querrySnap.forEach((doc) => {
          return list.push({ id: doc.id, ...doc.data() });
        });

        setData(list);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchTask();
  }, []);

 
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {data.length > 0 ? (data.map((item) => {
        return (
          <div className="flex justify-between hover:bg-gradient-to-r from-sky-100 to-cyan-200 transition-all ease-in-out duration-200 mb-6 w-[500px] shadow-[0_3px_10px_rgb(0,0,0,0.5)] p-[1rem] rounded-2xl">
            <div className="flex flex-col justify-center gap-3">
              <p className="font-semibold">{item.description}</p>
              <p className="font-semibold">
                Due date:{" "}
                <span className="text-gray-400 font-[500]">{item.endDate}</span>
              </p>

              <div className="w-100 flex items-center gap-2">
                <img
                  src={item.avatar}
                  className="w-[35px] rounded-full"
                  alt=""
                />
                <p className="text-gray-400 font-[500]">
                  {item.assignedTo} - <span>HR MANAGER</span>
                </p>
              </div>
            </div>
            <div className="flex  flex-col justify-between">
              <p className="text-gray-400 font-[500]">Task</p>
              <p className={`status ${item.status} `}>{item.status}</p>
            </div>
          </div>
        );
      })):(<div className="mt-[10rem] mr-[9rem]">
        <p className="text-[1.5rem] font-semibold">No Task Available</p>
        </div>)}
    </>
  );
};

export default Task;
