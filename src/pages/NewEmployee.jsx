import React, { useState } from 'react'
import {BsImage} from 'react-icons/bs'

const NewEmployee = () => {
  const [file,setFile] = useState('') 
  return (
    <div className='p-[2rem]'>
      <div className=''>
        <div className=' top w-[100%] p-[10px] m-[20px] flex shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
          <h1 className='text-gray-200 text-[20px] font-bold'>Add New Employee</h1>

        </div>
        <div className='bottom  top w-[100%] p-[10px] m-[20px] flex justify-center items-center shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] '>
          <div className="left flex justify-center items-start flex-1">
            <img src={file ? URL.createObjectURL(file): 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'} alt="" className=' h-[100px] rounded-full object-cover' />
          </div>
          <div className="right flex-1">
            <form 
             className='flex flex-wrap justify-around gap-[30px]'>
              <div className='w-[40%] cursor-pointer'>
                <label className='flex items-center gap-[10px]' htmlFor="file" >Image<BsImage className=''/></label>
                <input className='w-[100%] border-none ' type="file" id='file' style={{display:'none'}} onChange={(e)=> setFile(e.target.files[0])} />
              
              </div>
              <div className='w-[40%] border-b-2 border-gray-500'>
                <label className='flex items-center gap-[10px]' htmlFor="">UserName</label>
                <input className='w-[100%] border-none 'type="text" placeholder='john-doe' />
              </div>
              <div className='w-[40%] border-b-2 border-gray-500'>
                <label className='flex items-center gap-[10px]' htmlFor="">Name and Surnmae</label>
                <input className='w-[100%] border-none 'type="text" placeholder='John DOe' />
              </div>
              <div className='w-[40%] border-b-2 border-gray-500'>
               <label className='flex items-center gap-[10px]' htmlFor="">Email</label>
                <input className='w-[100%] border-none 'type="text" placeholder='JohnDoe@gmail.com' />
              </div>
              <div className='w-[40%] border-b-2 border-gray-500'>
                <label className='flex items-center gap-[10px]' htmlFor="">Phone Number</label>
                <input className='w-[100%] border-none 'type="text" placeholder='+234 08181138489' />
              </div>
              <div className='w-[40%] border-b-2 border-gray-500'>
                <label className='flex items-center gap-[10px]' htmlFor="">Password</label>
                <input className='w-[100%] border-none  'type="password"  />
              </div>
              <div className='w-[40%] border-b-2 border-gray-500'>
                <label className='flex items-center gap-[10px]' htmlFor="">Address</label>
                <input className='w-[100%] border-none border-b-[2px] border-s-gray-600 border-gray-600'type="text" placeholder='23,Ogunjobi'  />
              </div>
              <div className='w-[40%] border-b-2 border-gray-500'>
                <label className='flex items-center gap-[10px]' htmlFor="">Country</label>
                <input className='w-[100%] border-none 'type="text" placeholder='Nigeria'  />
              </div>
              <button className='w-[150px] p-[10px] border-none bg-teal-400 text-white font-bold mt-[10px]'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewEmployee