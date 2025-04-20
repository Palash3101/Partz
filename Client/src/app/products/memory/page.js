'use client'

import React, {useState, useEffect} from 'react'
import styles from '../page.module.css';
import { useSearchParams } from 'next/navigation';

import { FaSort} from "react-icons/fa";
import { RiGridFill, RiListUnordered } from "react-icons/ri";
import GridCard from '@/components/Cards/GridCard/GridCard';

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import FilterBox from '@/components/DropBox/FilterBox';
import SortBox from '@/components/DropBox/SortBox';

function MemoryPage() {
  const buildId = useSearchParams().get('buildId');

  const [ProductData, setProductsData] = useState([]);
  const [slice, setSlice] = useState(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const [brandsSelected, setBrandsSelected] = React.useState(["Apple", "Samsung", "Sony", "LG", "Amazon Basics"]);


  const brands = ["Apple", "Samsung", "Sony", "LG", "Amazon Basics"];


  useEffect(() => {
    fetch('http://localhost:3100/products/memory').then
    ((response)=> response.json()).then
    ((data) => {
      setProductsData(data);
    })
  }, [])


  return (
    <div>
      <div className={styles.pageCategoriesSection} data-theme='dark'>
        <div className='flex-grow mx-10'>  
          <center className='font-bold text-4xl mb-8'>
            <span>
              Choose Your Memory
            </span>
          </center>

          <hr className='w-full mr-auto'/> 
            
          <div className='h-[50px] flex items-center justify-center align-middle space-x-4'>
            <button className='bg-gray-700 hover:bg-gray-600 text-white rounded-md px-3 py-2 flex items-center transition-colors duration-200'>
              <RiGridFill className='mr-2'/>
              <span>Grid</span>
            </button>
            <button 
              className='bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 flex items-center transition-colors duration-200'
              onClick={()=> setIsSortOpen(!isSortOpen)}
            >
              <FaSort className='mr-2'/>
              <span>Sort By</span>
            </button>
            <div className='absolute top-[264px] right-[762px] z-50'>
                <SortBox
                  isOpen={isSortOpen}
                  setIsOpen={setIsSortOpen}
                  data={ProductData}
                  setData = {setProductsData}
                />
              </div>
            <button 
              className='bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 flex items-center transition-colors duration-200'
              onClick={()=> setIsFilterOpen(!isFilterOpen)} 
            >
              <span>Filter By</span>
              <FaSort className='ml-2'/>
            </button>
              <div className='absolute top-[264px] right-[463px] z-50'>
                <FilterBox
                  brands={brands}
                  brandsSelected={brandsSelected}
                  setBrandsSelected={setBrandsSelected}
                  isOpen={isFilterOpen}
                  setIsOpen={setIsFilterOpen}
                  data={ProductData}
                  setData={setProductsData}
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
                  buildId={buildId}
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


export default MemoryPage;