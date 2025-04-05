import React, { useState } from 'react';

function SortBox({ isOpen, setIsOpen, selectedOption, setSelectedOption }) {

  
  const options = [
    'Featured',
    'Price: Low to High',
    'Price: High to Low',
    'Avg. Customer Review',
  ];
  


  return (
    <div>
      {isOpen && 
        <div className="w-[300px] h-auto mt-1 bg-black/80 border rounded-[20px] rounded-br-none rounded-tr-none shadow-lg p-3 text-white">
          <div className="flex justify-end mb-2">
            <button 
              onClick={()=>setSelectedOption(null)}
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              Clear All
            </button>
          </div>
          {options.map((option, index) => (
            <button 
              key={index}
              onClick={() => setSelectedOption(option)}
              className={`w-full mb-1 px-4 py-2 hover:bg-blue-600 cursor-pointer rounded-[15px]  ${
                selectedOption === option ? 'w-full mb-1 bg-blue-600 text-white rounded-[15px] ' : ''
              }`}
            >
              {option}
            </button>
          ))}
        
        <button 
          className="mt-1 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          onClick={() => setIsOpen(false)}  
        >
          Apply Sort
        </button>
        
        </div>
          
      }
    </div>
  );
}

export default SortBox;