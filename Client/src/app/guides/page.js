'use client';

import React from 'react';
import styles from './page.module.css';

function Guides() {
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
    },
  ];

  const [activeType, setActiveType] = React.useState('workstation');
  
  // Get type-specific color theme
  const getTypeColor = (type) => {
    switch(type) {
      case 'workstation': return { primary: '#3B82F6', secondary: '#1E40AF' }; // Blue
      case 'gaming': return { primary: '#EF4444', secondary: '#B91C1C' }; // Red
      case 'streaming': return { primary: '#8B5CF6', secondary: '#5B21B6' }; // Purple
      default: return { primary: '#3B82F6', secondary: '#1E40AF' };
    }
  };

  const typeColors = getTypeColor(activeType);

  return (
    <div className={styles.pageMainSection} data-theme="dark">
      <div className={styles.pageWrapper}>
        <div className="mb-5">
          <h1 className="font-bold text-4xl text-center mb-2">PC Build Guides</h1>
          <hr className="w-[95%] mx-auto mt-5" />
        </div>
        

        <div className="flex justify-center">
          {['workstation', 'gaming', 'streaming'].map((type) => (
            <button 
              key={type}
              className="w-[120px] h-[45px] rounded-t-[10px] text-xl mx-2 border-2 border-b-0 transition-all duration-300"
              style={{ 
                color: activeType === type ? 'white' : '#9CA3AF',
                fontWeight: activeType === type ? 'bold' : 'normal',
              }}
              onClick={() => setActiveType(type)}
            >
              {type[0].toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <div className="border-2 border-solid border-grey-800 p-5 rounded-[30px] grid grid-cols-4 gap-4 w-[95%] mx-auto">
          {guideData
            .filter(data => data.type === activeType)
            .map((data, index) => (
              <GuideCard key={index} data={data} colors={typeColors} />
            ))}
        </div>
      </div>
    </div>
  );
}

function GuideCard({ data, colors }) {
  
  return (
    <div className="p-5 m-auto w-[280px] rounded-xl overflow-hidden shadow-xl bg-black/40 border border-gray-700 relative">
      
      {/* Image Section */}
      <div className="h-[160px] w-full bg-white flex items-center justify-center overflow-hidden">
        <img 
          src={`/api/placeholder/200/120`} 
          alt={`${data.name} build`} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="py-3 px-4 bg-gray-800 border-b border-gray-700">
        <h3 className="font-bold text-xl text-white truncate">{data.name}</h3>
      </div>
      

      <div className="absolute right-0 top-[152px] px-3 py-1 rounded-l-md font-bold text-lg text-white shadow-md bg-gray-700">
      &#36;{data.price}
      </div>
      
      {/* Card Content */}
      <div className="p-4 mt-6">
        <div className="space-y-3 text-base">
          <div className='flex'>
            <span className="font-semibold mr-2">CPU:</span>
            <p className="text-white truncate">{data.Cpu}</p>
          </div>
          <div className='flex'>
            <span className="font-semibold mr-2">GPU:</span>
            <p className="text-white truncate">{data.Gpu}</p>
          </div>
          <div className='flex'>
            <span className="font-semibold mr-2">RAM:</span>
            <p className="text-white truncate">{data.Ram}</p>
          </div>
          <div className='flex'>
            <span className="font-semibold mr-2">Storage:</span>
            <p className="text-white truncate">{data.Storage}</p>
          </div>
        </div>
        
        {/* View Details Button */}
        <button className="w-full mt-6 py-2 rounded-md font-medium text-base border border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300">
          View Details
        </button>
      </div>
    </div>
  );
}

export default Guides;