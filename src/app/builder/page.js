'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import BuilderGridItem from './BuilderGridItem';

function Builder() {
  const buildLink = 'axbyz';
  const [estimatedwattage, setEstimatedwattage] = useState(0);
  const [price, setPrice] = useState(0);

  const list = [
    {
      type: "Motherboard",
      id: "X9Y3Z7",
      img: "https://example.com/motherboard.jpg",
      name: "ASUS ROG STRIX B550-F",
      price: 179.99,
      wattage: 65,
      is: true
    },
    {
      type: "CPU",
      id: "M2N8P5",
      img: "https://example.com/cpu.jpg",
      name: "Intel Core i7-12700K",
      price: 349.99,
      wattage: 125,
      is: true
    },
    {
      type: "GPU",
      id: "Q4R1S6",
      img: "https://example.com/gpu.jpg",
      name: "NVIDIA GeForce RTX 3070",
      price: 499.99,
      wattage: 220,
      is: true
    },
    {
      type: "CPU Cooler",
      id: "T7U3V9",
      img: "https://example.com/cooler.jpg",
      name: "Noctua NH-D15",
      price: 89.99,
      wattage: 10,
      is: true
    },
    {
      type: "GPU Cooler",
      id: "W5X2Y8",
      img: "https://example.com/gpu_cooler.jpg",
      name: "NZXT Kraken G12",
      price: 49.99,
      wattage: 5,
      is: true
    },
    {
      type: "Power Supply",
      id: "A1B6C4",
      img: "https://example.com/psu.jpg",
      name: "Corsair RM850x",
      price: 129.99,
      wattage: 850,
      is: true
    },
    {
      type: "Storage",
      id: "D3E7F9",
      img: "https://example.com/storage.jpg",
      name: "Samsung 970 EVO Plus 1TB",
      price: 109.99,
      wattage: 6,
      is: true
    },
    {
      type: "Memory",
      id: "G2H5J8",
      img: "https://example.com/memory.jpg",
      name: "Corsair Vengeance LPX 16GB",
      price: 74.99,
      wattage: 10,
      is: true
    }
  ];

  useEffect(() => {
    var totalWattage = 0;
    var totalPrice = 0;
    
    for (let i = 0; i < list.length; i++) {
      totalWattage += list[i].wattage;
      totalPrice += list[i].price;  
    }
    
    setEstimatedwattage(totalWattage);
    setPrice(Math.round(totalPrice * 100) / 100);
  }, [list]);

  return (
    <div className={styles.BuilderWrapper} data-theme='dark'>   
      <center className='font-bold text-4xl mb-8'>
        <span>
          Choose Your Parts
        </span>

        <div className='flex justify-between bg-black/40 mx-auto my-7 p-4 h-[10vh] rounded-[20px] w-[90%]'>
          <div className='flex'>
            <div className='bg-white/40 p-2 rounded-[20px] w-[200px] text-center align-middle text-xl'>
              {buildLink}
            </div>

            <button className='ml-5'>
              Save
            </button>
          </div>

          <div>
            &#x24;{price}
          </div>

          <div className='flex'>
            <button className='mr-5'>
              New
            </button>
          
            <div className='bg-white/40 p-2 rounded-[20px] w-[200px] text-center align-middle text-xl'>
              {estimatedwattage}W
            </div>         
          </div>
        </div>

        <hr className='w-[95%] mx-auto my-5'/>

        <div className={styles.BuilderGrid}>
          {
            list.map((item, index) => {
              return (
                <BuilderGridItem 
                  key={index}
                  isItem={item.id ? true : false} 
                  itemData={item}
                />
              );
            })
          }
        </div>

        <hr className='w-[95%] mx-auto mt-10'/>
        
        <div className='mx-3 flex justify-center w-[95%] mx-auto mt-6 mb-8'>
          <button className='bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-xl'>
            Export Build
          </button>
          
          <div className='mx-3 text-xl flex items-center'>
            <span >Compatibility:</span>
            <span className='ml-2 text-green-500 font-bold'>Compatible</span>
          </div>
          
          <button className=' mx-3 bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg text-xl'>
            Compare Build
          </button>
        </div>
      </center>
    </div>
  );
}

export default Builder;