import React from 'react';
import { RxCrossCircled, RxCheckCircled } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import Link from 'next/link';
import { motion } from 'framer-motion';

function BuilderGridItem({isItem, itemData, buildId}) {

  function handleBuy(id){
    console.log(id);
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative my-4"
    >

      {/* <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl opacity-50 blur-sm group-hover:opacity-75 transition duration-300`}></div> */}
      
      {/* Main container */}
      <div className="relative grid grid-cols-[150px_750px_50px_50px_100px_50px] items-center bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 py-3 px-4">
        {/* Type badge */}
        <div className={`flex-none px-4 py-2 mr-4 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500`}>
          {itemData.type}
        </div>
        
        {isItem ? (
          <>
            {/* Image placeholder */}
            <div className="w-16 h-16 flex-none mr-4 rounded-md overflow-hidden border border-gray-600">
              <div className="h-full w-full flex items-center justify-center bg-gray-700 text-gray-300">
                {itemData.img}
              </div>
            </div>
            
            {/* Item name */}
            <div className="flex-1 text-white font-medium truncate mr-4">
              {itemData.name}
            </div>
          </>
        ) : (
          <div className="flex-1 mr-4">
            <Link href={`/products/${itemData.type.toLowerCase()}?buildId=${buildId}`} className="text-inherit">
              <button className="flex items-center text-white hover:text-green-300 transition-colors duration-200">
                <FaPlus className="mr-2" />
                <span className="font-medium">Add {itemData.type}</span>
              </button>
            </Link>
          </div>
        )}
        
        {/* Price */}
        <div className="flex-none w-24 mr-4 text-xl font-bold text-white">
          ${isItem ? itemData.price : 0}
        </div>
        
        {/* Compatibility */}
        <div className="flex-none w-12 mr-4 flex justify-center">
          {itemData.is ? 
            <RxCheckCircled className="text-green-500 size-8" /> : 
            <RxCrossCircled className="text-red-500 size-8" />
          }
        </div>
        
        {/* Buy button */}
        <button 
          onClick={() => handleBuy(itemData.id)}
          className="flex-none px-4 py-2 mr-4 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-110 transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Buy
        </button>
        
        {/* Remove button */}
        <button className="flex-none w-8 h-8 rounded-full flex items-center justify-center text-gray-300 hover:text-white bg-red-600/50 hover:bg-red-600 transition-colors duration-300">
          x
        </button>
      </div>
    </motion.div>
  );
}

export default BuilderGridItem;