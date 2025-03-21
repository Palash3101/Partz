"use client"

import React from 'react'
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { useState } from 'react';
import styles from './FilterSidebar.module.css'

import PriceSubmenu from '../FilterSubmenus/PriceSubmenu';
import BrandSubmenu from '../FilterSubmenus/BrandSubmenu';
import RatingSubmenu from '../FilterSubmenus/RatingSubmenu';

function FilterSidebar() {

    var [priceToggle, setPriceToggle] = useState(false);
    var [brandToggle, setBrandToggle] = useState(false);
    var [ratingToggle, setRatingToggle] = useState(false);
    var [typeToggle, setTypeToggle] = useState(false);




  return (
    <div className='w-[38vh] max-h-auto rounded-[30px] bg-black/40 ml-6 p-3 text-[var(--text-color)] '>

    <center  className='font-bold text-4xl mb-5'>
      <span>
        Filters
      </span>
    </center> 

    <hr className={styles.line}/>             
    

    <div className={styles.submenuClassGroup}>
        <span className={styles.submenuHeading}>
            Price
        </span>

        <DropdownButton Toggle={priceToggle} SetToggle={setPriceToggle}/>

    </div>

    <PriceSubmenu state={priceToggle}/>



    <hr className={styles.line}/>   



    <div className={styles.submenuClassGroup}>
        <span className={styles.submenuHeading}>
            Brand
        </span>

        <DropdownButton Toggle={brandToggle} SetToggle={setBrandToggle}/>

    </div>

    <BrandSubmenu state={brandToggle}/>

    <hr className={styles.line}/>


    <div className={styles.submenuClassGroup}>
        <span className={styles.submenuHeading}>
            Rating
        </span>

        <DropdownButton Toggle={ratingToggle} SetToggle={setRatingToggle}/>

    </div>

    <RatingSubmenu state={ratingToggle}/>

    <hr className={styles.line}/> 



    </div>
  )
}

export default FilterSidebar



export function DropdownButton({Toggle, SetToggle}){
    return(
    <button className='pr-1.5' onClick={()=>{SetToggle(!Toggle)}}>
    {Toggle ? 
        <HiChevronUp style={{scale:2.2}}/>:
        <HiChevronDown style={{scale:2.2}}/> 
        
    }
    </button>
    )
}