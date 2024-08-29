import React from 'react'
import { motion } from 'framer-motion'

function Loader() {
  return (
    <motion.div initial={{y:'0'}} animate={{y:'-100%'}} transition={{ease: 'linear', duration:1.75, delay:1}} className='absolute bg-black z-30 h-screen w-full flex flex-col items-center justify-around'>
        <div className='w-[85%] h-[1.5px] bg-zinc-700'></div>
        <h2 className='text-[30vh]'>work</h2>
        <span style={{boxShadow: "0 0 0.45em #00FF19"}} className='absolute h-3 w-3 bg-green-600 rounded-full right-[74vh] top-[33vh]'></span>
        <div className='w-[85%] h-[1.5px] bg-zinc-700'></div>
    </motion.div>
  )
}

export default Loader