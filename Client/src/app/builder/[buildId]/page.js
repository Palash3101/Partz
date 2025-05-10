'use client';

import React, { use, useEffect, useState } from 'react';
import BuilderGridItem from './BuilderGridItem';
import { motion } from 'framer-motion';

function Builder({params}) {
  const buildId = use(params).buildId;

  const [estimatedwattage, setEstimatedwattage] = useState(0);
  const [price, setPrice] = useState(0);

  const list = [
    {
      type: "Motherboard",
      data: null
    },
    {
      type: "CPU",
      data: null
    },
    {
      type: "GPU",
      data: null
    },
    {
      type: "Power Supply",
      data: null
    },
    {
      type: "Storage",
      data: null
    },
    {
      type: "Memory",
      data: null
    }
  ];

  useEffect(() => {
    var totalWattage = 0;
    var totalPrice = 0;
    
    for (let i = 0; i < list.length; i++) {
      totalWattage += list[i].wattage || 0;
      totalPrice += list[i].price || 0;
    }
    
    setEstimatedwattage(totalWattage);
    setPrice(Math.round(totalPrice * 100) / 100);
  }, [list]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-8"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="rounded-3xl bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 shadow-2xl overflow-hidden mb-16">
          <div className="pt-12 pb-16 px-8">
            <h1 className="font-bold text-5xl text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Choose Your Parts
            </h1>
            <p className="text-lg text-center text-gray-300 max-w-2xl mx-auto">
              Create your perfect custom PC build by selecting compatible components
            </p>
          </div>
        </div>

        {/* Build Info Section */}
        <div className="mb-12">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl opacity-50 blur"></div>
            
            {/* Content */}
            <div className="relative flex items-center justify-between bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-xl p-6">
              <div className="flex items-center">
                <div className="bg-black/40 px-6 py-3 rounded-xl border border-gray-700">
                  <span className="font-medium text-gray-300">Build ID:</span>
                  <span className="ml-2 font-bold text-white">{buildId}</span>
                </div>
                <button className="ml-6 px-5 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-green-600 to-teal-600 hover:brightness-110 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Save Build
                </button>
              </div>
              
              <div className="px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-red-600 font-bold text-2xl text-white shadow-lg">
                ${price}
              </div>
              
              <div className="flex items-center">
                <button className="mr-6 px-5 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:brightness-110 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  New Build
                </button>
                <div className="bg-black/40 px-6 py-3 rounded-xl border border-gray-700">
                  <span className="font-medium text-gray-300">Estimated Power:</span>
                  <span className="ml-2 font-bold text-white">{estimatedwattage}W</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Components List */}
        <div className="mb-16">
          {
            list.map((item, index) => {
              return (
                <BuilderGridItem 
                  key={index}
                  isItem={item.id ? true : false} 
                  itemData={item}
                  buildId={buildId}
                />
              );
            })
          }
        </div>

        {/* Action Buttons Section */}
        <div className="flex justify-center items-center space-x-8 mb-12">
          <button className="px-8 py-3 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-110 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Export Build
          </button>
          
          <div className="flex items-center">
            <span className="text-lg font-medium text-gray-300">Compatibility:</span>
            <span className="ml-3 text-lg font-bold text-green-400">Compatible</span>
          </div>
          
          <button className="px-8 py-3 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-green-600 to-teal-600 hover:brightness-110 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Compare Build
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Builder;