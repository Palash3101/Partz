import sorter from '@/services/sorter';
import React, { useState } from 'react';

function SortBox({ isOpen, setIsOpen, data, setData }) {

  const [selectedOption, setSelectedOption] = useState('Featured');
  
  const options = [
    'Featured',
    'Price: Low to High',
    'Price: High to Low',
    'Rating: High to Low',
    'Rating: Low to High',
  ];
  
  function apply_sort(){
    setIsOpen(false);
    const new_data = sorter(selectedOption, data);
    setData(new_data);
  }

  return (
    <div className='z-50'>
      {isOpen && 
        <div className="w-[300px] z-30 h-auto mt-1 bg-black border border-gray-700/50 rounded-2xl shadow-xl p-4 text-white">
          <div className="flex justify-end mb-3">
            <button 
              onClick={()=>setSelectedOption(null)}
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              Clear All
            </button>
          </div>
          
          <div className="mb-3 bg-gray-800/70 rounded-xl p-2">
            {options.map((option, index) => (
              <button 
                key={index}
                onClick={() => setSelectedOption(option)}
                className={`w-full mb-1 px-4 py-2 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 cursor-pointer rounded-xl transition duration-300 ${
                  selectedOption === option 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        
          <button 
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:brightness-110 text-white py-2 px-4 rounded-xl shadow-md transition duration-300"
            onClick={apply_sort}  
          >
            Apply Sort
          </button>
        </div>
      }
    </div>
  );
}

export default SortBox;