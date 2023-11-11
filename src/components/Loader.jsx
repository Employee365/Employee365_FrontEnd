import React from 'react'
import { Spinner } from 'flowbite-react';

const Loader = () => {
  return (
    <div className='bg-black bg-opacity-50 flex items-center justify-center fixed left-0 right-0 bottom-0 top-0 z-50'>
        <div>
        <Spinner className='flex items-center text-[20rem]' aria-label="Extra large spinner example" size="xl" />

        </div>
    </div>
  )
}

export default Loader