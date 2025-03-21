import React from 'react'
import { AnimatePresence, motion } from "motion/react"

function RatingSubmenu({state}) {
  return (
    <AnimatePresence>
    {
      state &&
    
    <motion.div 
      initial={{
        height:0,
        opacity:0,        
      }}
      
      animate={
        {
          height:'auto',
          opacity:1,
          transition:{
            duration:0.4,
            ease:'backInOut'
          }
        }  
      }

      exit={{
        height:0,
        opacity:0,  
      }}
      className='w-[90%] relative top-0  ml-2 rounded-md shadow-md z-10 flex justify-center'
    >

        Brnacalkjd
      
    </motion.div>
}
  </AnimatePresence>
  )
}

export default RatingSubmenu