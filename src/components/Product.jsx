import React from 'react'
import Button from './Button'

function Product({val, mover, count}) {

  const hovereffects = (count)=>{
    switch(count) {
      case 0: return "hover:bg-[#2DCB76]"
      case 1: return "hover:bg-[#4A576B]"
      case 2: return "hover:bg-[#4C20CF]"
      case 3: return "hover:bg-[#FF7548]"
    }
  }

  return (
    <div onMouseEnter={()=>{mover(count)}} className={`'w-full h-[20rem] py-5 flex items-center overflow-hidden transition duration-500 ease-in-out ${hovereffects(count)}`}>
        <div  className={`max-w-screen-xl mx-auto flex items-center justify-between`}>
            <h1 className='text-5xl capitalize font-semibold'>{val.title}</h1>
            <div className='w-1/3 pl-5'>
                <p className='mb-10'>{val.description}</p>
                <div className='flex items-center justify-start gap-5'>
                {val.live && <Button/>}
                {val.case && <Button title="Case Study"/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product