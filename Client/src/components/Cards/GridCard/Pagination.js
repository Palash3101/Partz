'use client'

import React from 'react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function Pagination({ slice, setSlice, totalItems, itemsPerPage = 12 }) {
  const currentPage = Math.floor(slice / itemsPerPage) + 1;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const goToPrevPage = () => {
    if (slice >= itemsPerPage) {
      setSlice(slice - itemsPerPage);
    }
  };
  
  const goToNextPage = () => {
    if (slice + itemsPerPage < totalItems) {
      setSlice(slice + itemsPerPage);
    }
  };

  return (
    <div className="mb-12">
      {/* Decorative top border */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>
      
      <div className="flex justify-center items-center space-x-6">
        {/* Previous page button */}
        {currentPage === 1 ? (
          <div className="w-12 h-12"></div>
        ) : (
          <button 
            onClick={goToPrevPage}
            className="relative group"
            aria-label="Previous page"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-70 blur-sm group-hover:opacity-100 transition duration-300"></div>
            
            <div className="relative w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 text-white rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover:-translate-y-0.5">
              <SlArrowLeft className="w-5 h-5" />
            </div>
          </button>
        )}
        
        {/* Current page indicator */}
        <div className="relative">
          {/* Background glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full opacity-30 blur-md"></div>
          
          <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 shadow-inner">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              {currentPage}
            </span>
          </div>
        </div>
        
        {/* Next page button */}
        {currentPage >= totalPages ? (
          <div className="w-12 h-12"></div>
        ) : (
          <button 
            onClick={goToNextPage}
            className="relative group"
            aria-label="Next page"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-70 blur-sm group-hover:opacity-100 transition duration-300"></div>
            
            <div className="relative w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:brightness-110 text-white rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover:-translate-y-0.5">
              <SlArrowRight className="w-5 h-5" />
            </div>
          </button>
        )}
      </div>
      
      {/* Page counter text */}
      <div className="text-center mt-4 text-gray-400">
        <span>Page {currentPage} of {totalPages}</span>
      </div>
    </div>
  );
}

export default Pagination;