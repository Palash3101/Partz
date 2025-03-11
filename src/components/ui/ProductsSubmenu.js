import React from 'react'
import {motion} from 'motion/react';
import styles from '../Header/header.module.css';
import Link from 'next/link';

function ProductsSubmenu({toggle, setToggle}){
  return(
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}} 
      exit={{opacity:0}}
      transition={{duration:0.3}}

      className={styles.headerSubmenuWrapper}
      >
      
      <div className='flex justify-evenly items-center'>
        <SubmenuCard setToggle={setToggle} image='/images/cpu.png' title='CPU'/>
        <SubmenuCard setToggle={setToggle} image='/images/cpu.png' title='GPU'/>
        <SubmenuCard setToggle={setToggle} image='/images/cpu.png' title='Motherboard'/>
        <SubmenuCard setToggle={setToggle} image='/images/cpu.png' title='Memory'/>
        <SubmenuCard setToggle={setToggle} image='/images/cpu.png' title='Storage'/>
        <SubmenuCard setToggle={setToggle} image='/images/cpu.png' title='Peripherals'/>
        <SubmenuCard setToggle={setToggle} image='/images/cpu.png' title='Powersupply'/>
        <SubmenuCard setToggle={setToggle} image='/images/cpu.png' title='Coolers'/>
      </div>
    
    
    
    </motion.div>
  )
}


function SubmenuCard({setToggle,image, title}){

  function handleClick(){
    setToggle(false);
  }


  return(
    <Link
      href={`/products/${title.toLowerCase()}`}
      className='text-white'
    >
    <button 
      onClick={handleClick}
      className='bg-gray-800 p-4 flex flex-col items-center rounded-[30px] h-75 mr-6'
    >
      
      
      <div>
        <img 
          className='size-32 bg-white/10 rounded-[30px] mb-4'
          src={image} 
          alt={title}/>
      </div> 
      <span className='text-lg font-bold decoration-tansparent '>
        {title}
      </span>
    </button>
    </Link>
  )
}

export default ProductsSubmenu