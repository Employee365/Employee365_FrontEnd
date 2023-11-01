import React from 'react'
import amazon from './assets/amazon.png'
import creative from './assets/creative.png'
import wgg from './assets/wgg.png'
import world from './assets/world.png'
import venture from './assets/venture.png'

const Partner = () => {
  return (
    <main className='flex justify-center  items-center flex-col mt-[5rem]'>

        <p className='text-[25px] font-[400]'>We’re hosted on Amazon Web Services and we’ve worked with top companies.</p>

        <div className='flex gap-12 mt-[2rem]'>
            <div>
               <img src={amazon} alt="" /> 
            </div>
            <div>
               <img src={creative} alt="" /> 
            </div>
            <div>
               <img src={world} alt="" /> 
            </div>
            <div>
               <img src={venture} alt="" /> 
            </div>
            <div>
               <img src={wgg} alt="" /> 
            </div>
            
        </div>
    </main>
  )
}

export default Partner