'use client';

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import { animate, AnimatePresence, motion } from 'framer-motion';

function Prebuilts() {
  const guideData = [
    {
      id: 'A1B2C',
      type: 'workstation',
      name: 'Workstation Guide',  
      price: 500,
      Cpu: 'Intel Core i9-14900K',
      Gpu: 'Nvidia RTX 3090',
      Ram: 'Corsair Vengeance RGB Pro 32GB',
      Storage: 'Samsung 970 Evo 1TB',
      color: 'from-blue-600 to-violet-600',
    },
    {
      id: 'D3E4F',
      type: 'gaming',
      name: 'Gaming Beast',  
      price: 2000,
      Cpu: 'AMD Ryzen 9 7950X',
      Gpu: 'Nvidia RTX 4090',
      Ram: 'G.Skill Trident Z5 RGB 64GB',
      Storage: 'Samsung 980 Pro 2TB',
      color: 'from-red-500 to-pink-600',
    },
    {
      id: 'G5H6I',
      type: 'streaming',
      name: 'Streaming Pro',  
      price: 1500,
      Cpu: 'Intel Core i7-13700K',
      Gpu: 'Nvidia RTX 4070 Ti',
      Ram: 'Corsair Dominator Platinum 32GB',
      Storage: 'WD Black SN850X 1TB',
      color: 'from-purple-600 to-indigo-600',
    },
    {
      id: 'J7K8L',
      type: 'workstation',
      name: 'Workstation Power',  
      price: 2500,
      Cpu: 'AMD Ryzen Threadripper 5995WX',
      Gpu: 'Nvidia RTX A6000',
      Ram: 'Kingston Fury Beast 128GB',
      Storage: 'Samsung 980 Pro 4TB',
      color: 'from-blue-600 to-cyan-500',
    },
    {
      id: 'M9N0O',
      type: 'gaming',
      name: 'Ultimate Gamer',  
      price: 1800,
      Cpu: 'Intel Core i7-12700KF',
      Gpu: 'AMD Radeon RX 7900 XTX',
      Ram: 'G.Skill Ripjaws V 32GB',
      Storage: 'Crucial P5 Plus 2TB',
      color: 'from-red-600 to-orange-500',
    },
    {
      id: 'P1Q2R',
      type: 'streaming',
      name: 'Stream Master',  
      price: 1400,
      Cpu: 'AMD Ryzen 7 7700X',
      Gpu: 'Nvidia RTX 3060 Ti',
      Ram: 'Corsair Vengeance LPX 32GB',
      Storage: 'Samsung 970 Evo Plus 1TB',
      color: 'from-purple-500 to-fuchsia-500',
    },
    {
      id: 'S3T4U',
      type: 'workstation',
      name: 'Pro Creator',  
      price: 2800,
      Cpu: 'Intel Xeon W-2295',
      Gpu: 'Nvidia Quadro RTX 5000',
      Ram: 'G.Skill Trident Z Neo 128GB',
      Storage: 'WD Black SN850X 4TB',
      color: 'from-teal-500 to-blue-600',
    },
    {
      id: 'V5W6X',
      type: 'gaming',
      name: 'FPS King',  
      price: 2200,
      Cpu: 'AMD Ryzen 9 5900X',
      Gpu: 'Nvidia RTX 3080 Ti',
      Ram: 'Corsair Vengeance RGB Pro 32GB',
      Storage: 'Samsung 980 Pro 2TB',
      color: 'from-red-600 to-yellow-500',
    },
    {
      id: 'Y7Z8A',
      type: 'streaming',
      name: 'Streamer Elite',  
      price: 1700,
      Cpu: 'Intel Core i5-13600K',
      Gpu: 'AMD Radeon RX 6800 XT',
      Ram: 'G.Skill Ripjaws V 32GB',
      Storage: 'Crucial P3 Plus 2TB',
      color: 'from-violet-600 to-blue-500',
    },
    {
      id: 'B9C0D',
      type: 'workstation',
      name: 'Design Studio',  
      price: 3000,
      Cpu: 'AMD Ryzen Threadripper 3970X',
      Gpu: 'Nvidia RTX A5000',
      Ram: 'Corsair Dominator Platinum 256GB',
      Storage: 'Samsung 990 Pro 4TB',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      id: 'E1F2G',
      type: 'gaming',
      name: 'Next-Gen Gaming',  
      price: 2100,
      Cpu: 'Intel Core i9-13900K',
      Gpu: 'Nvidia RTX 4080',
      Ram: 'Corsair Vengeance RGB Pro 64GB',
      Storage: 'Samsung 980 Pro 2TB',
      color: 'from-emerald-500 to-red-500',
    },
    {
      id: 'H3I4J',
      type: 'streaming',
      name: 'Streaming Hero',  
      price: 1600,
      Cpu: 'AMD Ryzen 7 5800X3D',
      Gpu: 'Nvidia RTX 4060 Ti',
      Ram: 'G.Skill Trident Z5 RGB 32GB',
      Storage: 'Crucial P3 Plus 1TB',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      id: 'K5L6M',
      type: 'workstation',
      name: 'Engineering Pro',  
      price: 3200,
      Cpu: 'Intel Xeon W-3375',
      Gpu: 'Nvidia RTX A6000',
      Ram: 'Kingston Fury Renegade 256GB',
      Storage: 'WD Black SN850X 8TB',
      color: 'from-blue-500 to-teal-500',
    },
    {
      id: 'N7O8P',
      type: 'gaming',
      name: 'Battle Ready',  
      price: 1900,
      Cpu: 'AMD Ryzen 9 7900X',
      Gpu: 'AMD Radeon RX 7800 XT',
      Ram: 'Corsair Vengeance LPX 32GB',
      Storage: 'Samsung 970 Evo 2TB',
      color: 'from-amber-500 to-red-600',
    },
    {
      id: 'Q9R0S',
      type: 'streaming',
      name: 'Content Creator',  
      price: 1750,
      Cpu: 'Intel Core i7-12700K',
      Gpu: 'Nvidia RTX 3070 Ti',
      Ram: 'G.Skill Ripjaws V 32GB',
      Storage: 'Crucial P5 Plus 1TB',
      color: 'from-fuchsia-500 to-indigo-500',
    },
  ];

  const [activeType, setActiveType] = useState('workstation');
  const [filteredData, setFilteredData] = useState(guideData.filter(data => data.type === "workstation"));

  useEffect(() => {
    setFilteredData(guideData.filter(data => data.type === activeType));
  }
  , [activeType]);

  const typeColors = {
    workstation: 'from-blue-600 to-cyan-500',
    gaming: 'from-red-600 to-pink-500',
    streaming: 'from-purple-600 to-fuchsia-500'
  };

  const types = ['workstation', 'gaming', 'streaming']

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
              Pre-built PC's
            </h1>
            <p className="text-l text-center text-gray-300 max-w-2xl mx-auto">
              Find the perfect PC build for your needs. Whether you're a professional, a gamer, or a content creator,
              we have the ideal configuration for you.
            </p>
          </div>
        </div>

        {/* Type Selection Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-gray-800/50 rounded-2xl border border-gray-700/50 mb-5">
            {
              types.map(type => (
                <NavButton 
                  key={type} 
                  text={type} 
                  selected={activeType === type} 
                  typeColors={typeColors}
                  setSelected={setActiveType} 
                />
              ))
            }
          </div>
        </div>

        {/* Cards Grid */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 transition-opacity duration-300`}
        >
          {filteredData.map((data) => (
            <GuideCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function GuideCard({ data }) {
  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${data.color} rounded-2xl opacity-50 blur group-hover:opacity-75 transition duration-300`}></div>
      
      {/* Card content */}
      <div className="relative flex flex-col h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700">
        {/* Image section */}
        <div className="h-48 w-full overflow-hidden relative">
          <div className={`absolute inset-0 bg-gradient-to-r ${data.color} opacity-20`}></div>
          <img 
            src={`/api/placeholder/400/320`} 
            alt={`${data.name} build`} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>
        
        {/* Title bar */}
        <div className="py-4 px-5 bg-gray-800/80 backdrop-blur-sm">
          <h3 className="font-bold text-xl text-white">{data.name}</h3>
        </div>
        
        {/* Price tag */}
        <div className={`absolute right-4 top-40 px-4 py-2 rounded-xl font-bold text-lg text-white shadow-lg bg-gradient-to-r ${data.color}`}>
          ${data.price}
        </div>
        
        {/* Specs */}
        <div className="p-5 flex-grow">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-gray-400 w-20">CPU</span>
              <span className="text-white flex-1 truncate font-medium">{data.Cpu}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-400 w-20">GPU</span>
              <span className="text-white flex-1 truncate font-medium">{data.Gpu}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-400 w-20">RAM</span>
              <span className="text-white flex-1 truncate font-medium">{data.Ram}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-400 w-20">Storage</span>
              <span className="text-white flex-1 truncate font-medium">{data.Storage}</span>
            </div>
          </div>
          
          {/* Button */}
          <button className={`w-full mt-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r ${data.color} hover:brightness-110 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

function NavButton({text,selected, setSelected,typeColors}){
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      } px-5 py-3 h-auto text-2xl transition-colors rounded-md relative`}
    >
    <span className="relative z-10 flex items-center justify-center">
      {text.charAt(0).toUpperCase() + text.slice(1)}
    </span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className={`absolute inset-0 z-0 bg-gradient-to-r  ${typeColors[text]} rounded-md`}
        ></motion.span>
      )}
    </button>
  );
};

export default Prebuilts;