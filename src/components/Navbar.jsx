import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='max-w-screen-xl bg-black z-10 mx-auto p-6 text-white flex items-center gap-20 justify-between'>
        <div className='flex gap-28 items-center'>
          <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
          <div className='flex items-center gap-10'>
              {["Home", "Work", "Culture", "", "News"].map(((elem, index) => <a key={index} className='text-sm flex items-center gap-1 font-["satoshi-variable"]'>
                  {elem.length === 0 && <span key={index} className='w-[1px] h-7 bg-zinc-400'></span>}
                  {index === 1 && (<span key={index} style={{boxShadow: "0 0 0.45em #00FF19"}} className='inline-block h-[5px] w-[5px] rounded-full bg-green-400'></span>)}
                  {elem}
              </a>))}
          </div>
        </div>
       <Button />
    </div>
  )
}

export default Navbar