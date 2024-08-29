import React from 'react'
import { IoMdReturnRight } from "react-icons/io";


function Button({title = "Start a Product"}) {
  return (
    <div className='group border link w-44 h-10 px-4 py-2 bg-white rounded-full overflow-hidden flex items-center justify-between gap-1'>
        <div className='group-hover:-translate-y-[15px] flex flex-col gap-2 transition duration-500 linear translate-y-[17px]'>         
            <span className='text-black'>{title}</span>
            <span className='text-black'>{title}</span>         
        </div>
        <div className='group-hover:-translate-y-[25px] flex flex-col gap-9 transition duration-1000 linear translate-y-[25px]'>  
          <IoMdReturnRight className='text-black'/>
          <IoMdReturnRight className='text-black'/>
        </div>
    </div>
  )
}

export default Button