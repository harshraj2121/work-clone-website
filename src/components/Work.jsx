import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

function Work() {


    const [images, SetImages] = useState([
      {url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top: "51%", left: "50%", isActive: false},
      {url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top: "57%", left: "47%", isActive: false},
      {url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top: "41%", left: "54%", isActive: false},
      {url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", top: "59%", left: "51%", isActive: false},
      {url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top: "50%", left: "56%", isActive: false},
      {url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", top: "46%", left: "49%", isActive: false},    
    ]);




    // FRAMER MOTION CONTROL
  const { scrollYProgress } = useScroll()

    scrollYProgress.on("change", (data) => {
      console.log(Math.floor(data*100))
      // ye data hume ye batata hai ki humne kitna scroll kiya hai
      
    function imagesShow(arr){
      SetImages(prev => (
        prev.map((item, index) => (
          arr.indexOf(index) === -1 ? ({...item, isActive: false}) : ({...item, isActive: true})
        ))
      ))
    }
    switch(Math.floor(data*100)){
      case 0: imagesShow([]); 
      break;
      case 1: imagesShow([0])
      break;
      case 2: imagesShow([0,1])
      break;
      case 3: imagesShow([0,1,2])
      break;
      case 4: imagesShow([0,1,2,3])
      break;
      case 5: imagesShow([0,1,2,3,4])
      break;
      case 6: imagesShow([0,1,2,3,4,5])
      break;
    }
  })
  // isme humne use liya hai scrollYprogress ko usescroll kar ke on change kar diya matlab jab bhi scrollyprogress change hoga tab wo function chalega
  // images show name ke function me ek "arr" recieve hua aur phir setimage ko chalaya gaya jo previous value to use karta hai aur sare ko map karta hai.
  // yahan pe minus 1 isiliye kiya gaya hai taki always condition negavive wala hi aaye kyuki index kabhi negative nahi hota hai
  // to humesha wo state ko change hi karega to ab wo kya kareha ki image show se index ko le kar jo bhi index hoga usska
  
  return (
  <div className='w-full'>
      <div className='relative max-w-screen-xl mx-auto'>
          <h1 className='text-[76vh] text-center mb-20 font-medium tracking-tight select-none leading-none overflow-hidden text-white'>work</h1>
          <p className='text-center leading-none tracking-tight capitalize text-zinc-500 font-thin font-["Courier"] -translate-y-20 text-xl'>web design, webflow development, creative development</p>
          <div className='absolute w-full h-full top-0'>
              {images.map((elem, index)=>(elem.isActive && (<img className='absolute rounded-lg -translate-x-[50%] -translate-y-[50%] w-72' src={elem.url} style={{top: elem.top, left: elem.left}} alt="" />)))}
          </div>
      </div>
    </div>
  )
}

export default Work