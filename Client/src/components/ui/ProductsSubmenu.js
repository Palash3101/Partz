import React, {useState} from 'react'
import { animate, AnimatePresence, motion } from 'framer-motion';
import styles from '../Header/header.module.css';
import Link from 'next/link';

function ProductsSubmenu({toggle, setToggle}){

  const topBuilds = [1,2,3];
  const mainVariation={
    initial:{
      scaleY:0,
      opacity:0
    },
    
    animate:{
      scaleY:1,
      opacity:1,
      transition:{
        duration:0.45,
        type:"spring",
        stiffness:550,
        damping:25
      }

    },
    exit:{
      scaleY:0,
      opacity:0,
      transition:{
        duration:0.45,
        type:"spring",
      }
    },

  }

  return(
    
      <AnimatePresence>

      {toggle &&
      
      <motion.div 
      variants={mainVariation}
      initial="initial"
      animate="animate"
      exit="exit"

      
      className={styles.headerSubmenuWrapper}
      >

      <div className='grid grid-cols-4 items-center justify-center'>
        <SubmenuCard setToggle={setToggle} image='/images/cpu.png' title='CPU'/>
        <SubmenuCard setToggle={setToggle} image='/images/cpu.png' title='GPU'/>
        <SubmenuCard setToggle={setToggle} image='/images/cpu.png' title='Motherboard'/>
        <SubmenuCard setToggle={setToggle} image='/images/cpu.png' title='Memory'/>
        <SubmenuCard setToggle={setToggle} image='/images/cpu.png' title='Storage'/>
        <SubmenuCard setToggle={setToggle} image='/images/cpu.png' title='Peripherals'/>
        <SubmenuCard setToggle={setToggle} image='/images/cpu.png' title='Powersupply'/>
        <SubmenuCard setToggle={setToggle} image='/images/cpu.png' title='Coolers'/>
      </div>

      <div className="inline-block min-h-[1em] w-0.5 self-stretch bg-white/70 mx-3"/>

      <div className='w-[50%] p-4'>
          <h3 className="text-xl font-bold mb-3">Top Builds</h3>
          <div className="space-y-3">

            <SubmenuCardBuilds setToggle={setToggle} topBuilds={topBuilds[0]}/>
            <SubmenuCardBuilds setToggle={setToggle} topBuilds={topBuilds[1]}/>
            <SubmenuCardBuilds setToggle={setToggle} topBuilds={topBuilds[2]}/>

          </div>
          <Link 
            href="/products/prebuilts" 
            className=" mx-3 mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded "
            onClick={()=>setToggle(false)}
            >
            Explore Pre-Builts
          </Link>
          <Link 
            href="/guides" 
            className="mx-3 mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded "
            onClick={()=>setToggle(false)}
            >
            Explore Build Guides
          </Link>
      </div>
    </motion.div>
  }
    </AnimatePresence>
  
  )
}

function SubmenuCardBuilds({setToggle, topBuilds }) {
  function handleClick() {
    setToggle(false);
  }

  return(
    <div className="bg-gray-800 rounded-lg p-3 hover:cursor-default">
      <h4 className="font-medium text-blue-400 hover:text-green-600 transition-colors duration-200 cursor-pointer">Gaming Powerhouse</h4>
      <p className="text-sm text-gray-300 mb-2">Perfect for 4K gaming with ray tracing</p>
      <div className="flex flex-wrap gap-2">
        <span className="bg-gray-700 text-xs px-2 py-1 rounded">RTX 4080</span>
        <span className="bg-gray-700 text-xs px-2 py-1 rounded">i9-13900K</span>
        <span className="bg-gray-700 text-xs px-2 py-1 rounded">32GB DDR5</span>
      </div>
    </div>
  )

}

function SubmenuCard({setToggle, image, title }) {
  function handleClick() {
    setToggle(false);
  }

  return (
    <Link
      href={`/products/${title.toLowerCase()}`}
    >
      <button 
        onClick={handleClick}
        className="w-40 h-48 bg-gray-800 p-4 flex flex-col items-center justify-center rounded-xl m-2 hover:scale-105 transition-transform duration-150"
      >
        <div className="mb-4">
          <img 
            className="bg-white size-28 object-contain rounded-lg"
            src={image} 
            alt={title}
          />
        </div>
        <div className="text-center">
          <span className="text-white text-lg font-medium block leading-tight">
            {title}
          </span>
        </div>
      </button>
    </Link>
  );
}

export default ProductsSubmenu