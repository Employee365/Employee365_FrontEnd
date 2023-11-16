import React from 'react'
import { Link } from 'react-router-dom'

const Widget = ({title,icon,link,number,color}) => {
  return (
    <div className='flex hover:bg-gradient-to-r from-sky-100 to-cyan-200 rounded-xl justify-between w-[250px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-[1rem]'>
        <div className='flex flex-col gap-3 justify-between'>
            <h1 className='text-gray-400 uppercase font-semibold'>{title}</h1>
            <p className='text-[2rem]'>{number}</p>
            <Link>
                <p className='text-sm underline capitalize text-gray-400 font-semibold'>{link}</p>
            </Link>
        </div>
        <div className='flex justify-center items-center '>
            <p className={`bg-${color}-200 p-3 text-[20px] rounded-xl`}>{icon}</p>
        </div>
    </div>
  )
}

export default Widget