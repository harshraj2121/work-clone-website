import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

function Products() {

    var products = [
        {title: "arquitel", description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", live: true, case: false,},
        {title: "cula", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta unde dolores rem magnam! Sapiente excepturi sit vel iusto odio natus placeat incidunt! Placeat iure cumque, incidunt alias unde ratione tempore", live: true, case: true,},
        {title: "Layout land", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta unde dolores rem magnam! Sapiente excepturi sit vel iusto odio natus placeat incidunt! Placeat iure cumque, incidunt alias unde ratione tempore", live: true, case: false,},
        {title: "TTR", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta unde dolores rem magnam! Sapiente excepturi sit vel iusto odio natus placeat incidunt! Placeat iure cumque, incidunt alias unde ratione tempore", live: true, case: true,},
    ]

    const [Pos, setPos] = useState(0);
    const mover = (val)=>{
      setPos(val*20);
      
    }

  return (
    <div className='mt-32 relative'>
        {products.map((elem, index)=> <Product mover={mover} count={index} key={index} val={elem}/>)}
        <div className='w-full h-full absolute top-0 pointer-events-none'>
          <motion.div initial={{y: Pos , x:"-56%"}} animate={{y: Pos + 'rem'}} transition={{ease: [0.76, 0, 0.24, 1] , duration: .5}} className='w-[31rem] h-[20rem] absolute left-[49%] bg-white overflow-hidden'>
            <motion.div animate={{y: -Pos + 'rem'}} transition={{ease: [0.76, 0, 0.24, 1] , duration: .5}} className='w-[31rem] h-[20rem] bg-sky-100'>
              <img src="https://images.unsplash.com/photo-1608755768421-ba3662c9e7ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </motion.div>
            <motion.div animate={{y: -Pos + 'rem'}} transition={{ease: [0.76, 0, 0.24, 1] , duration: .5}} className='w-[31rem] h-[20rem] bg-sky-200'>
              <img src="https://images.unsplash.com/photo-1608755768421-ba3662c9e7ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </motion.div>
            <motion.div animate={{y: -Pos + 'rem'}} transition={{ease: [0.76, 0, 0.24, 1] , duration: .5}} className='w-[31rem] h-[20rem] bg-sky-300'>
              <img src="https://images.unsplash.com/file-1715652217532-464736461acbimage?dpr=2&w=416&auto=format&fit=crop&q=60" alt="" />
            </motion.div>
            <motion.div animate={{y: -Pos + 'rem'}} transition={{ease: [0.76, 0, 0.24, 1] , duration: .5}} className='w-[31rem] h-[20rem] bg-sky-400'>
              <img src="https://images.unsplash.com/file-1720553250263-3b4f25a93c9cimage?dpr=2&w=416&auto=format&fit=crop&q=60" alt="" />
            </motion.div>
          </motion.div>
        </div>
    </div>
  )
}

export default Products