import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({width, heading1, heading2, start, para, hover}) {
  return (
    <div className={`bg-zinc-800 p-5 ${hover} group rounded-xl flex flex-col justify-between gap-36 mb-8 ${width}`}>
        <div className='group-hover:px-[5px] ease-in duration-200'>
          <div className='w-full flex justify-between items-center'>
              <h3>{heading1}</h3>
              <IoIosArrowRoundForward />
          </div>
          <h1 className='text-3xl font-medium mt-8'>{heading2}</h1>
        </div>
        <div className='w-full'>
            {
              start === true && (
                <>
                  <h1 className='text-8xl font-medium tracking-tight leading-none'>Start a Project</h1>
                  <button className='rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50'>Contact Us</button>
                </>
              )
            }
            {para === true && (<p className='text-sm text-zinc-500 font-medium'>Explore what drives our team.</p>)}

        </div>
    </div>
  )
}

export default Card