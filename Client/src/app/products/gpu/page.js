'use client'

import React, {useState} from 'react'
import styles from '../page.module.css';


import { FaSort} from "react-icons/fa";
import { RiGridFill, RiListUnordered } from "react-icons/ri";
import GridCard from '@/components/Cards/GridCard/GridCard';

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import FilterBox from '@/components/FliterBox/FilterBox';

function CpuPage() {

  const ProductData = [{"id":"D1z8K3p","name":"AMD Radeon RX 6800 XT","price":529.99,"rating":4.5,"specs":{"DLSS_version":null,"FSR_version":"2","TDP":300,"boost_clock":2.3,"cuda_cores":3840,"RT_enabled":1,"vram":"16GB GDDR6"}},{"id":"E4f5G6h","name":"AMD Radeon RX 7900 XTX","price":999.99,"rating":4.8,"specs":{"DLSS_version":null,"FSR_version":"3","TDP":355,"boost_clock":2.5,"cuda_cores":6144,"RT_enabled":1,"vram":"24GB GDDR6"}},{"id":"e6F5g4H","name":"AMD Radeon RX 6700 XT","price":399.99,"rating":4.4,"specs":{"DLSS_version":null,"FSR_version":"2","TDP":230,"boost_clock":2.6,"cuda_cores":2560,"RT_enabled":1,"vram":"12GB GDDR6"}},{"id":"h6G5f4E","name":"NVIDIA GeForce RTX 3080","price":699.99,"rating":4.6,"specs":{"DLSS_version":"2","FSR_version":null,"TDP":320,"boost_clock":1.7,"cuda_cores":8704,"RT_enabled":1,"vram":"10GB GDDR6"}},{"id":"pQ3r4S5","name":"NVIDIA GeForce RTX 4070 Ti","price":799.99,"rating":4.6,"specs":{"DLSS_version":"3","FSR_version":null,"TDP":285,"boost_clock":2.61,"cuda_cores":7680,"RT_enabled":1,"vram":"12GB GDDR6X"}},{"id":"z8K3pD1","name":"NVIDIA GeForce RTX 4090","price":1599.99,"rating":4.9,"specs":{"DLSS_version":"3","FSR_version":null,"TDP":450,"boost_clock":2.52,"cuda_cores":16384,"RT_enabled":1,"vram":"24GB GDDR6X"}}];
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
              Choose A GPU
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