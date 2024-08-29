import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.66%] h-20 border-t-[1.3px] border-b-[1.3px] border-r-[1.3px] border-zinc-600 px-8 flex items-center justify-center gap-20'>
        <img className='w-32' src={val.url} alt="" />
        <span className='font-semibold'>{val.num}</span>
    </div>
  )
}

export default Stripe