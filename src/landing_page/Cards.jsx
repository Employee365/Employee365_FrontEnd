import React from 'react'

const Cards = ({icon,title,subtitle,color}) => {
  return (
    <div className='p-[5px] w-[250px] h-[250px] flex flex-col justify-end bg-white rounded-2xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
        <div className={`p-[1rem]  h-[100%] ${color}`}>

        <p className='text-5xl mb-5'>{icon}</p>
        <h1  className='text-[17px] font-bold'>{title}</h1>
        <p className='text-[12px] text-gray-600'>{subtitle}</p>
        </div>
    </div>
  )
}

export default Cards