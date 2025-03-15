'use client';
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating'

function GuideCard() {
  const data={
      id: 'A1B2C',
      type: 'workstation',
      name: 'Workstation Guide',  
      price: 500,
      Cpu: 'Intel Core i9-14900K',
      Gpu: 'Nvidia RTX 3090',
      Ram: 'Corsair Vengeance RGB Pro 32GB',
      Storage: 'Samsung 970 Evo 1TB',
    }
  
  return (
    <div className="my-20 p-5 m-auto w-[280px] rounded-xl overflow-hidden shadow-xl bg-black/40 border border-gray-700 relative">
      
      {/* Image Section */}
      <div className="h-[140px] w-full bg-white flex items-center justify-center overflow-hidden">
        <img 
          src={`/api/placeholder/200/120`} 
          alt={`${data.name} build`} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="py-3 px-4 bg-gray-800 border-b border-gray-700">
        <h3 className="font-bold text-lg text-white truncate">{data.name}</h3>
      </div>
      

      <div className="absolute right-0 top-[152px] px-3 py-1 rounded-l-md font-bold text-white shadow-md bg-gray-700">
      &#36;{data.price}
      </div>
      
      {/* Card Content */}
      <div className="p-4 mt-6">
        <div className="space-y-2 text-sm">
          <div className='flex'>
            <span className="font-semibold mr-1">CPU:</span>
            <p className="text-white truncate">{data.Cpu}</p>
          </div>
          <div className='flex'>
            <span className="font-semibold mr-1">GPU:</span>
            <p className="text-white truncate">{data.Gpu}</p>
          </div>
          <div className='flex'>
            <span className="font-semibold mr-1">RAM:</span>
            <p className="text-white truncate">{data.Ram}</p>
          </div>
          <div className='flex'>
            <span className="font-semibold mr-1">Storage:</span>
            <p className="text-white truncate">{data.Storage}</p>
          </div>
        </div>
        
        {/* View Details Button */}
        <button className="w-full mt-6 py-2 rounded-md font-medium border border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300">
          View Details
        </button>
      </div>
    </div>
  );
}

export default GuideCard;