'use client'

import React from 'react'
import styles from '../page.module.css';
import FilterSidebar from '@/components/FilterSidebar/FilterSidebar';

import { TiShoppingCart } from "react-icons/ti";
import { HiShoppingBag } from "react-icons/hi2";

function CpuPage() {

  const ProductData=
  [{'boost_clock': 5,
    'core_clock': 4.2,
    'core_count': 8,
    'graphics': 'Radeon',
    'name': 'AMD Ryzen 7 7800X3D',
    'price': 339,
    'rating': 4.5,
    'tdp': 120},
   {'boost_clock': 5.3,
    'core_clock': 4.7,
    'core_count': 6,
    'graphics': 'Radeon',
    'name': 'AMD Ryzen 5 7600X',
    'price': 204.99,
    'rating': 4.1,
    'tdp': 105},
   {'boost_clock': 4.6,
    'core_clock': 3.7,
    'core_count': 6,
    'graphics': null,
    'name': 'AMD Ryzen 5 5600X',
    'price': 144.31,
    'rating': 3.8,
    'tdp': 65},
   {'boost_clock': 5.1,
    'core_clock': 3.8,
    'core_count': 6,
    'graphics': 'Radeon',
    'name': 'AMD Ryzen 5 7600',
    'price': 185,
    'rating': 4.9,
    'tdp': 65},
   {'boost_clock': 6,
    'core_clock': 3.2,
    'core_count': 24,
    'graphics': 'Intel UHD Graphics 770',
    'name': 'Intel Core i9-14900K',
    'price': 544.99,
    'rating': 4.7,
    'tdp': 125},
   {'boost_clock': 5.6,
    'core_clock': 3.4,
    'core_count': 20,
    'graphics': 'Intel UHD Graphics 770',
    'name': 'Intel Core i7-14700K',
    'price': 399.99,
    'rating': 3.9,
    'tdp': 125},
   {'boost_clock': 4.4,
    'core_clock': 2.5,
    'core_count': 6,
    'graphics': null,
    'name': 'Intel Core i5-12400F',
    'price': 128,
    'rating': 4.3,
    'tdp': 65},
   {'boost_clock': 4.2,
    'core_clock': 3.6,
    'core_count': 6,
    'graphics': null,
    'name': 'AMD Ryzen 5 3600',
    'price': 84,
    'rating': 4.0,
    'tdp': 65},
];


  return (
  <div>

    <div className={styles.pageCategoriesSection} data-theme='dark'>

    <FilterSidebar/>
    <div className='flex-grow ml-10'>  
      <center  className='font-bold text-4xl mb-8'>
        <span>
          Choose A CPU
        </span>
      </center>

      <hr className='w-[95%] mr-auto'/> 
        
        <div className='h-[50px] flex items-center justify-center align-middle '>
          A few buttons here
        </div>
      <hr className='w-[95%] mr-auto'/> 

      <div className='mt-7 grid grid-rows-10 gap-5'>
        {
          ProductData.map((data, index)=>(
            <CpuCard 
              key={index}
              data={data}
            />
          ))
        }
      </div>

    </div>
  </div>
      
  </div>
    
  )
}



function CpuCard(props) {
  return (
    <div className='flex bg-black/40 rounded-[20px] p-4 text-[var(--text-color)] w-[95%]'>

      <div>
        <img src='https://via.placeholder.com/150' alt='product' 
          className='rounded-[20px] size-[110px] bg-white'/>
      </div>

      <div className='w-full'>

        <div className='font-bold text-2xl grow ml-4'>{props.data.name}</div>
        <div>
          
        </div>
        <div className='flex justify-between'>
          <ul className='ml-4 list-disc list-inside grid grid-cols-2 grid-rows-3'>
            <li className='text-lg'>{props.data.price}</li>
            <li className='text-lg'>{props.data.graphics}</li>
            <li className='text-lg'>{props.data.core_clock}</li>

            <li className='text-lg'>{props.data.boost_clock}</li>
            <li className='text-lg'>{props.data.core_count}</li>
            <li className='text-lg'>{props.data.tdp}</li>
          </ul>
    
        </div>

      </div>

      <div className='flex justify-between w-auto'>
        <div className='flex flex-col items-center justify-evenly text-2xl font-bold mr-[40px] truncate'>
            <span>{props.data.rating}awfd</span>
            <span>{props.data.price}</span>
        </div>
        <button className='bg-blue-500 text-white rounded-[10px] w-[80px] h-[105px] ml-4 flex items-center justify-center'>
          <TiShoppingCart style={{ scale: 2.5 }} />
        </button>
        <button className='bg-blue-500 text-white rounded-[10px] w-[80px] h-[105px] ml-4 flex items-center justify-center'>
          <HiShoppingBag style={{ scale: 2.5 }} />
        </button>
       </div>



    </div>
  )
}

export default CpuPage
