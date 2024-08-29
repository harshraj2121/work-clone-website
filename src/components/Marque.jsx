import React from 'react'
import { motion } from 'framer-motion'
function Marque({imagesurl, direction}) {
  return (
    <div className='flex  w-full overflow-hidden'>
      <motion.div initial={{x: direction === "left" ? "0" : "-100%"}} animate={{x: direction === "left" ? "-100%" : 0}} transition={{ease: "linear", duration: 30, repeat: Infinity, repeatType: 'loop'}} className='flex flex-shrink-0 py-10 pr-40 gap-40'>
        {imagesurl.map((url, index)=> <img key={index} src={url} className='w-[6vw] flex-shrink-0'/>)}
      </motion.div>
      <motion.div initial={{x: direction === "left" ? "0" : "-100%"}} animate={{x: direction === "left" ? "-100%" : 0}} transition={{ease: "linear", duration: 30, repeat: Infinity, repeatType: 'loop'}} className='flex flex-shrink-0 py-10 pr-40 gap-40'>
        {imagesurl.map((url, index)=> <img key={index} src={url} className='w-[6vw] flex-shrink-0'/>)}
      </motion.div>
    </div>
  )
}

export default Marque