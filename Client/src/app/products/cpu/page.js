'use client'

import React, {useState} from 'react'
import styles from '../page.module.css';


import { FaSort} from "react-icons/fa";
import { RiGridFill, RiListUnordered } from "react-icons/ri";
import GridCard from '@/components/Cards/GridCard/GridCard';

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import FilterBox from '@/components/FliterBox/FilterBox';

function CpuPage() {

  const ProductData = [{"id":"7X2a9Bq","name":"Intel Core i9-14900K","price":599.99,"rating":4.8,"specs":{"base_clock":3.2,"boost_clock":6,"TDP":125,"core_count":24,"integrated_gpu":"Intel UHD Graphics 770"}},{"id":"9Bq7X2a","name":"Intel Core i7-13700K","price":409.99,"rating":4.7,"specs":{"base_clock":3.4,"boost_clock":5.4,"TDP":125,"core_count":20,"integrated_gpu":"Intel UHD Graphics 770"}},{"id":"A1b2C3d","name":"AMD Ryzen 9 7950X3D","price":649.99,"rating":4.9,"specs":{"base_clock":4.2,"boost_clock":5.7,"TDP":120,"core_count":16,"integrated_gpu":"AMD Radeon Graphics"}},{"id":"a9B8c7D","name":"Intel Core i5-13600K","price":309.99,"rating":4.6,"specs":{"base_clock":3.4,"boost_clock":5.1,"TDP":125,"core_count":14,"integrated_gpu":"Intel UHD Graphics 770"}},{"id":"d3C2b1A","name":"AMD Ryzen 7 7700X","price":339.99,"rating":4.6,"specs":{"base_clock":4.2,"boost_clock":5,"TDP":105,"core_count":8,"integrated_gpu":"AMD Radeon Graphics"}},{"id":"jK9lM0n","name":"AMD Ryzen 5 7600X","price":249.99,"rating":4.5,"specs":{"base_clock":4.7,"boost_clock":5.3,"TDP":105,"core_count":6,"integrated_gpu":"AMD Radeon Graphics"}}];
  const [slice, setSlice] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const [priceRange, setPriceRange] = React.useState([0, 1000]);
  const [tdpRange, setTdpRange] = React.useState([0, 300]);
  const [rating, setRating] = React.useState(0);
  const [brandsSelected, setBrandsSelected] = React.useState(["Apple", "Samsung", "Sony", "LG", "Amazon Basics"]);

  const brands = ["Apple", "Samsung", "Sony", "LG", "Amazon Basics"];

  function handleFilterBox() {
    setIsOpen(!isOpen);
  }

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
            <button 
              className='bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 flex items-center transition-colors duration-200'
              onClick={handleFilterBox}
            >
              <span>Filter By</span>
              <FaSort className='ml-2'/>
            </button>
              <div className='absolute top-[34%] right-[37%] z-50'>
                <FilterBox
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  tdpRange={tdpRange}
                  setTdpRange={setTdpRange}
                  rating={rating}
                  setRating={setRating}
                  brands={brands}
                  brandsSelected={brandsSelected}
                  setBrandsSelected={setBrandsSelected}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                />
              </div>

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



export default CpuPage;