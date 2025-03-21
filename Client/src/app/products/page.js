'use client';
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating'
import Link from 'next/link';

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
    <div className='w-ful h-full flex flex-col items-center justify-center p-20'>
      <SubmenuCard image={data} title="CPU"/>
    </div>
  );
}

function SubmenuCard({ image, title }) {
  function handleClick() {
    setToggle(false);
  }

  return (
    <Link
      href={`/products/${title.toLowerCase()}`}
    >
      <button 
        onClick={handleClick}
        className="w-40 h-48 bg-gray-800 hover:bg-gray-700 transition-colors duration-200 p-4 flex flex-col items-center justify-center rounded-xl m-2 shadow-md"
      >
        <div className="mb-4">
          <div 
            className="bg-white size-28 object-contain rounded-lg"
            // src={image} 
            // alt={title}
          />
        </div>
        <div className="text-center">
          <span className="text-white text-lg font-medium block leading-tight">
            {title}
          </span>
        </div>
      </button>
    </Link>
  );
}

export default GuideCard;