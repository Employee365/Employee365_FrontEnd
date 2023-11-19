import React from 'react'

const Cards = ({icon,title,subtitle}) => {
  return (
    <div className='p-[1rem]  bg-white rounded-2xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
        {icon}
        <h1 className='text-[20px] font-semibold'>{title}</h1>
        <p className='text-[16px] text-gray-600'>{subtitle}</p>
    </div>
  )
}

export default Cards