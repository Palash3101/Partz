'use client'

import React, {useState, useEffect} from 'react'
import { useSearchParams } from 'next/navigation';

import { FaSort } from "react-icons/fa";
import { RiGridFill, RiListUnordered } from "react-icons/ri";
import { FiFilter } from "react-icons/fi";

import FilterBox from '@/components/DropBox/FilterBox';
import SortBox from '@/components/DropBox/SortBox';
import ProductGrid from '@/components/Cards/GridCard/ProductGrid';
import Pagination from '@/components/Cards/GridCard/Pagination';

function CpuPage() {
  const buildId = useSearchParams().get('buildId');

  const [ProductData, setProductsData] = useState([]);
  const [slice, setSlice] = useState(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const [brandsSelected, setBrandsSelected] = React.useState(["Apple", "Samsung", "Sony", "LG", "Amazon Basics"]);

  const brands = ["Apple", "Samsung", "Sony", "LG", "Amazon Basics"];

  useEffect(() => {
    fetch('http://localhost:3100/products/cpu').then
    ((response)=> response.json()).then
    ((data) => {
      setProductsData(data);
    })
  }, [])

  // Close dropdown menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      // Close filter box if clicked outside its container and filter button
      if (isFilterOpen && 
          !event.target.closest('.filter-container') && 
          !event.target.closest('.filter-button')) {
        setIsFilterOpen(false);
      }
      
      // Close sort box if clicked outside its container and sort button
      if (isSortOpen && 
          !event.target.closest('.sort-container') && 
          !event.target.closest('.sort-button')) {
        setIsSortOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFilterOpen, isSortOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-8">
      <div className="max-w-[85%] mx-auto px-4">
        {/* Header Section with Curved Background */}
        <div className="mb-10 rounded-3xl bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 shadow-2xl overflow-hidden">
          <div className="pt-8 pb-10 px-8">
            <h1 className="font-bold text-4xl text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Choose A CPU
            </h1>
            <p className="text-center text-gray-300 max-w-2xl mx-auto">
              Select the perfect processor for your custom PC build
            </p>
          </div>
        </div>
        
        {/* Control Bar */}
        <div className="mb-8 relative z-20">
          <div className="bg-gray-800/50 p-3 rounded-2xl backdrop-blur-sm border border-gray-700/50 shadow-xl mb-6">
            <div className="flex flex-wrap items-center justify-center space-x-3">
              {/* View Mode Buttons */}
              <div className="flex rounded-xl overflow-hidden border border-gray-700">
                <button 
                  className={`px-4 py-2 flex items-center transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                      : 'bg-gray-800 text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setViewMode('grid')}
                >
                  <RiGridFill className="mr-2" />
                  <span>Grid</span>
                </button>
                <button 
                  className={`px-4 py-2 flex items-center transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                      : 'bg-gray-800 text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setViewMode('list')}
                >
                  <RiListUnordered className="mr-2" />
                  <span>List</span>
                </button>
              </div>
              
              {/* Sort Button */}
              <div className="relative sort-button">
                <button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 text-white rounded-xl px-5 py-2 flex items-center transition-all duration-300 shadow-md"
                  onClick={() => {
                    setIsSortOpen(!isSortOpen);
                    setIsFilterOpen(false); // Close filter box when opening sort box
                  }}
                >
                  <FaSort className="mr-2" />
                  <span>Sort By</span>
                </button>
                <div className="absolute top-12 right-0 z-50 sort-container">
                  <SortBox
                    isOpen={isSortOpen}
                    setIsOpen={setIsSortOpen}
                    data={ProductData}
                    setData={setProductsData}
                  />
                </div>
              </div>
              
              {/* Filter Button */}
              <div className="relative filter-button">
                <button 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:brightness-110 text-white rounded-xl px-5 py-2 flex items-center transition-all duration-300 shadow-md"
                  onClick={() => {
                    setIsFilterOpen(!isFilterOpen);
                    setIsSortOpen(false); // Close sort box when opening filter box
                  }}
                >
                  <FiFilter className="mr-2" />
                  <span>Filter By</span>
                </button>
                <div className="absolute top-12 right-0 z-50 filter-container">
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
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid with wider cards */}
        <div className="relative z-10">
          <ProductGrid 
            ProductData={ProductData} 
            slice={slice} 
            buildId={buildId}
            className="w-full"
          />
        </div>

        {/* Pagination Component */}
        <Pagination 
          slice={slice}
          setSlice={setSlice}
          totalItems={ProductData.length}
          itemsPerPage={12}
        />
      </div>
    </div>
  )
}

export default CpuPage;