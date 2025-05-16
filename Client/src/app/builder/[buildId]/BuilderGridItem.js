import React from 'react';
import { RxCrossCircled, RxCheckCircled } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

// Sample component to display preview
function BuilderGridItem({itemData, isItem}) {


  return (
    <div>
      {
        isItem ?
          <CardWithPart itemData={itemData} />
        :
          <CardWithoutPart itemData={itemData} />
      }
    </div>
  );
}

function CardWithPart({itemData}){
  return (
    <div className="group relative my-4">
        {/* Gradient glow effect on hover */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-700 rounded-xl opacity-0 blur group-hover:opacity-40 transition duration-300`}></div>
        
        {/* Main container */}
        <div className="relative grid grid-cols-[150px_1fr_120px_80px_100px_50px] gap-3 items-center bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 py-4 px-6 transition-all duration-300 hover:border-opacity-70 group-hover:border-opacity-100 group-hover:border-blue-500">
          {/* Type badge */}
          <div className={`flex-none px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-700 `}>
            {itemData.type}
          </div>
          
          {/* Item name */}
          <div className="flex items-center space-x-4">
              <div className="text-white font-medium text-lg truncate hover:text-blue-300 transition-colors duration-200 cursor-pointer">
                {itemData.name}
              </div>
          </div>
          
          {/* Price */}
          <div className="text-right text-xl font-bold text-white">
            ${itemData.price.toFixed(2)}
          </div>
          
          {/* Compatibility */}
          <div className="flex justify-center">
            <RxCheckCircled className="text-green-500 size-8" />
          </div>
          
          {/* Buy button */}
          <button 
            className="px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-110 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30"
          >
            Buy
          </button>
          
          {/* Remove button */}
          <button className="size-10 rounded-full flex items-center justify-center text-gray-300 hover:text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-sm hover:shadow-red-500/40 transform hover:scale-110 transition-all duration-200 border border-red-700">
            <RxCross2 className="text-white size-5" />
          </button>
        </div>
      </div>
  )
}

function CardWithoutPart({itemData}){
  return(
      <div className="mt-12">
        <div className="group relative my-4">
          <div className="relative grid grid-cols-[150px_1fr_120px_80px_100px_50px] gap-3 items-center bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 py-4 px-6">
            <div className="flex-none px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-green-600 to-emerald-500">
              GPU
            </div>
            
            <div className="flex">
              <button className="flex items-center text-white hover:text-green-300 transition-colors duration-200">
                <FaPlus className="mr-2" />
                <span className="font-medium">Add GPU</span>
              </button>
            </div>
            
            <div className="text-right text-xl font-bold text-white">
              $0
            </div>
            
            <div className="flex justify-center">
              <RxCrossCircled className="text-red-500 size-8" />
            </div>
            
            <button className="px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-110 transition-all duration-300">
              Buy
            </button>
            
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-300 hover:text-white bg-red-600/50 hover:bg-red-600 transition-colors duration-300">
              x
            </button>
          </div>
        </div>
      </div>
  )
}


export default BuilderGridItem;