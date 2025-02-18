"use client"

import React from 'react'
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { useState } from 'react';

function FilterSidebar() {

    var [priceToggle, setPriceToggle] = useState(false);
    var [brandToggle, setBrandToggle] = useState(false);
    var [ratingToggle, setRatingToggle] = useState(false);
    var [typeToggle, setTypeToggle] = useState(false);




  return (
    <div className='w-[33vh] h-4/5 rounded-[30px] bg-black/40 mx-6 p-3 text-[var(--text-color)] '>

    <center><span className='font-bold text-xl '>
        Filters
    </span></center> 

    <hr className='w-[90%] mt-3 mb-1 ml-2'/>             
    

    <div className='flex justify-between px-2'>
        <span className='font-bold text-lg'>
            Price
        </span>

        <button className='pr-1.5' onClick={()=>{setPriceToggle(!priceToggle)}}>
            {priceToggle ? 
                <HiChevronDown style={{scale:2.2}}/> : 
                <HiChevronUp style={{scale:2.2}}/>
            }
        </button>
    </div>
    <hr className='w-[90%] mt-2 mb-1 ml-2'/>   



    <div className='flex justify-between px-2'>
        <span className='font-bold text-lg'>
            Brand
        </span>

        <button className='pr-1.5' onClick={()=>{setBrandToggle(!brandToggle)}}>
            {brandToggle ? 
                <HiChevronDown style={{scale:2.2}}/> : 
                <HiChevronUp style={{scale:2.2}}/>
            }
        </button>
    </div>
    <hr className='w-[90%] mt-2 mb-1 ml-2'/>  



    <div className='flex justify-between px-2'>
        <span className='font-bold text-lg'>
            Rating
        </span>

        <button className='pr-1.5' onClick={()=>{setRatingToggle(!ratingToggle)}}>
            {ratingToggle ? 
                <HiChevronDown style={{scale:2.2}}/> : 
                <HiChevronUp style={{scale:2.2}}/>
            }
        </button>
    </div>
    <hr className='w-[90%] mt-2 mb-1 ml-2'/>  




    <div className='flex justify-between px-2'>
        <span className='font-bold text-lg'>
            Type
        </span>

        <button className='pr-1.5 transition delay-500' onClick={()=>{setTypeToggle(!typeToggle)}}>
            {typeToggle ? 
                <HiChevronDown style={{scale:2.2}}/> : 
                <HiChevronUp style={{scale:2.2}}/>
            }
        </button>
    </div>
    <hr className='w-[90%] mt-2 mb-1 ml-2'/>  

    </div>
  )
}

export default FilterSidebar