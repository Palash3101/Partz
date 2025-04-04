'use client'

import React, {useState} from 'react'
import styles from '../page.module.css';
import GridCard from './GridCard';

import { FaSort} from "react-icons/fa";
import { RiGridFill, RiListUnordered } from "react-icons/ri";


import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function GpuPage() {

  const ProductData = [    {
    "id": "D1z8K3p",
    "name": "AMD Radeon RX 6800 XT",
    "price": 529.99,
    "rating": 4.5,
    "vram_version": "GDDR6",
    "vram": 16,
    "DLSS_version": null,
    "FSR_version": "2",
    "TDP": 300,
    "boost_clock": 2.3,
    "cuda_cores": 3840,
    "RT_enabled": 1
}];

  const [slice, setSlice] = useState(0);

  return (
    <div>
      <div className={styles.pageCategoriesSection} data-theme='dark'>
        <div className='flex-grow mx-10'>  
          <center className='font-bold text-4xl mb-8'>
            <span>
              Choose A CPU
            </span>
          </center>

          <hr className='w-full mr-auto'/> 
            
          <div className='h-[50px] flex items-center justify-center align-middle space-x-4'>
            <button className='bg-gray-700 hover:bg-gray-600 text-white rounded-md px-3 py-2 flex items-center transition-colors duration-200'>
              <RiGridFill className='mr-2'/>
              <span>Grid</span>
            </button>
            <button className='bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 flex items-center transition-colors duration-200'>
              <FaSort className='mr-2'/>
              <span>Sort By</span>
            </button>
            <button className='bg-gray-700 hover:bg-gray-600 text-white rounded-md px-3 py-2 flex items-center transition-colors duration-200'>
              <RiListUnordered className='mr-2'/>
              <span>List</span>
            </button>
          </div>
          
          <hr className='w-full mr-auto'/> 

          <div className='mt-7 grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {
              ProductData.slice(slice, slice+12).map((data, index) => (
                <GridCard 
                  key={index}
                  data={data}
                />
              ))
            }
          </div>

          <hr className='w-[95%] mx-auto mt-10'/>
            
          <div className='flex justify-evenly'>
            {
              slice === 0 ?
              <div className='size-[60px]' />
              :
              <button 
                onClick={() => setSlice(slice-12)}
                className='bg-blue-500 size-[60px] text-white rounded-[10px] p-4 mt-4 flex items-center justify-center'>
                <SlArrowLeft className='size-[30px]'/>
              </button>
            }
            
            <span className='size-[60px] mt-4 text-2xl align-middle flex items-center justify-center'>
              {Math.floor(slice/12)+1}
            </span>

            {
              slice+12 >= ProductData.length ?
              <div className='size-[60px]' />
              :
              <button 
                onClick={() => setSlice(slice+12)}
                className='bg-blue-500 size-[60px] text-white rounded-[10px] p-4 mt-4 flex items-center justify-center'>
                <SlArrowRight className='size-[30px]'/>
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}



export default GpuPage;