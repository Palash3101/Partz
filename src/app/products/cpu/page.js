'use client'

import React from 'react'
import styles from '../page.module.css';
import FilterSidebar from '@/components/FilterSidebar/FilterSidebar';
import ProductPageCard from '@/components/Cards/ProductPage/ProductPageCard';

function CpuPage() {
  const ProductData=[
    {
      title: 'Intel Core i9 11900K',
      price: '₹ 45,000',
      rating: '4.5'
    },
    {
      title: 'Intel Core i9 11900K',
      price: '₹ 45,000',
      rating: '4.56'
    },
    {
      title: 'Intel Core i9 11900K',
      price: '₹ 45,000',
      rating: '4.8'
    },
    {
      title: 'Intel Core i9 11900K',
      price: '₹ 45,000',
      rating: '1'
    },
    {
      title: 'Intel Core i9 11900K',
      price: '₹ 45,000',
      rating: '4.5'
    },
    {
      title: 'Intel Core i9 11900K',
      price: '₹ 45,000',
      rating: '4.56'
    },

  ]


  return (
    <div>
        
      {/* <div className={styles.pageWrapper} data-theme='dark'>
        <center>
            <span className='font-bold text-2xl'>
                Choose a CPU
            </span>
        </center>
      </div> */}

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

          <div className='mt-7 grid grid-cols-4 gap-5'>
            {
              ProductData.map((data, index)=>(
                <ProductPageCard 
                  key={index}
                  title={data.title}
                  price={data.price}
                  rating={data.rating}
                />
              ))
            }
          </div>

        </div>
         

          
      </div>
        
    </div>
    
  )
}

export default CpuPage