'use client'

import React, {useState} from 'react'
import styles from '../page.module.css';
import FilterSidebar from '@/components/FilterSidebar/FilterSidebar';
import CpuGridCard from './CpuGridCard';

import { FaSort, FaFilter } from "react-icons/fa";
import { RiGridFill, RiListUnordered } from "react-icons/ri";



import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function CpuPage() {

  const ProductData = [
    {
      id: 'A1B2C3',
      name: 'AMD Ryzen 7 7800X3D',
      core_count: 8,
      core_clock: 4.2,
      boost_clock: 5,
      graphics: 'Radeon',
      price: 339,
      rating: 4.5,
      tdp: 120
    },
    {
      id: 'D4E5F6',
      name: 'Intel Core i9-12900K',
      core_count: 16,
      core_clock: 3.9,
      boost_clock: 5.2,
      graphics: 'Intel UHD 770',
      price: 589,
      rating: 4.7,
      tdp: 125
    },
    {
      id: 'G7H8I9',
      name: 'AMD Ryzen 5 7600X',
      core_count: 6,
      core_clock: 4.7,
      boost_clock: 5.3,
      graphics: 'Radeon',
      price: 299,
      rating: 4.6,
      tdp: 105
    },
    {
      id: 'J1K2L3',
      name: 'Intel Core i7-13700K',
      core_count: 12,
      core_clock: 3.4,
      boost_clock: 5.4,
      graphics: 'Intel UHD 770',
      price: 419,
      rating: 4.8,
      tdp: 125
    },
    {
      id: 'M4N5O6',
      name: 'AMD Ryzen 9 7950X',
      core_count: 16,
      core_clock: 4.5,
      boost_clock: 5.7,
      graphics: 'Radeon',
      price: 699,
      rating: 4.9,
      tdp: 170
    },
    {
      id: 'P7Q8R9',
      name: 'Intel Core i5-12600K',
      core_count: 10,
      core_clock: 3.7,
      boost_clock: 4.9,
      graphics: 'Intel UHD 770',
      price: 289,
      rating: 4.4,
      tdp: 125
    },
    {
      id: 'S1T2U3',
      name: 'AMD Ryzen 3 5300G',
      core_count: 4,
      core_clock: 4.0,
      boost_clock: 4.2,
      graphics: 'Radeon',
      price: 149,
      rating: 4.2,
      tdp: 65
    },
    {
      id: 'V4W5X6',
      name: 'Intel Core i3-12100',
      core_count: 4,
      core_clock: 3.3,
      boost_clock: 4.3,
      graphics: 'Intel UHD 730',
      price: 129,
      rating: 4.3,
      tdp: 60
    },
    {
      id: 'Y7Z8A9',
      name: 'AMD Ryzen 9 5900X',
      core_count: 12,
      core_clock: 3.7,
      boost_clock: 4.8,
      graphics: 'None',
      price: 549,
      rating: 4.7,
      tdp: 105
    },
    {
      id: 'B1C2D3',
      name: 'Intel Core i9-13900KS',
      core_count: 24,
      core_clock: 3.2,
      boost_clock: 6.0,
      graphics: 'Intel UHD 770',
      price: 739,
      rating: 5.0,
      tdp: 150
    },
    {
      id: 'E4F5G6',
      name: 'AMD Ryzen 5 5600X',
      core_count: 6,
      core_clock: 3.7,
      boost_clock: 4.6,
      graphics: 'None',
      price: 199,
      rating: 4.5,
      tdp: 65
    },
    {
      id: 'H7I8J9',
      name: 'Intel Core i7-11700K',
      core_count: 8,
      core_clock: 3.6,
      boost_clock: 5.0,
      graphics: 'Intel UHD 750',
      price: 399,
      rating: 4.6,
      tdp: 125
    },
    {
      id: 'K1L2M3',
      name: 'AMD Ryzen 7 5700G',
      core_count: 8,
      core_clock: 3.8,
      boost_clock: 4.6,
      graphics: 'Radeon',
      price: 299,
      rating: 4.5,
      tdp: 65
    },
    {
      id: 'N4O5P6',
      name: 'Intel Core i5-13400F',
      core_count: 10,
      core_clock: 2.5,
      boost_clock: 4.6,
      graphics: 'None',
      price: 219,
      rating: 4.4,
      tdp: 65
    }
  ];

  const [slice, setSlice] = useState(0);

  return (
    <div>
      <div className={styles.pageCategoriesSection} data-theme='dark'>
        <FilterSidebar/>
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
                <CpuGridCard 
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



export default CpuPage;