import React from 'react'
import {motion} from 'framer-motion'

const Cards = ({icon,title,subtitle,color}) => {
  const wordVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }
  return (
    <div className='p-[5px] w-[250px] h-[250px] flex flex-col justify-end bg-white rounded-2xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
        <div className={`p-[1rem]  h-[100%] ${color}`}>

        <motion.p className='text-5xl mb-5'
        variants={wordVariant}
        initial='hidden'
        whileInView='visible'
        transition={{ duration: 0.5, delay: 0.10 }}>{icon}</motion.p>
        <motion.h1  className='text-[17px] font-bold'
        variants={wordVariant}
        initial='hidden'
        whileInView='visible'
        transition={{ duration: 0.5, delay: 0.10 }}>{title}</motion.h1>
        <motion.p className='text-[12px] text-gray-600'
        variants={wordVariant}
        initial='hidden'
        whileInView='visible'
        transition={{ duration: 0.5, delay: 0.10 }}>{subtitle}</motion.p>
        </div>
    </div>
  )
}

export default Cards