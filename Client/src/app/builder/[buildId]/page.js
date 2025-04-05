'use client';

import React, { use, useEffect, useState } from 'react';
import styles from './page.module.css';
import BuilderGridItem from './BuilderGridItem';

function Builder({params}) {
  const buildId  = use(params).buildId;

  const [estimatedwattage, setEstimatedwattage] = useState(0);
  const [price, setPrice] = useState(0);

  const list = [
    {
      type: "Motherboard",
      data:null
    },
    {
      type: "CPU",
      data:null
    },
    {
      type: "GPU",
      data:null
    },
    {
      type: "Power Supply",
      data:null
    },
    {
      type: "Storage",
      data:null
    },
    {
      type: "Memory",
      data:null
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
              {buildId}
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
                  buildId={buildId}
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