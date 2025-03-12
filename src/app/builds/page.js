'use client';

import React, {useState} from 'react'
import styles from './page.module.css';

function Builder() {
  const buildLink = 'axbyz';
  const [estimatedwattage, setEstimatedwattage] = useState(0);
  const [price, setPrice] = useState(0);

  const [motherboard, setMotherboard] = useState(true);


  return (
    <div className={styles.BuilderWrapper} data-theme='dark'>   
      <center  className='font-bold text-4xl mb-8'>
        <span>
          Choose Your Parts
        </span>

        <div className='flex justify-between bg-black/40 mx-auto my-7 p-4 h-[10vh] rounded-[20px] w-[90%]' >
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
          <Part isItem={motherboard}/>
        </div>

      </center>
    </div>
  )
}

function Part({isItem, itemData}) {
  return (
    
      <div className={styles.BuilderGridItem}>
        <div className='border-r-2 border-white p-1 mr-2 text-center'>
          Motherboard
        </div>


        {
          isItem?
          <div className='flex '>
            <div className='w-20 flex-none border-r-2 border-white p-1 mr-2 text-center'>
            img
            </div>
            <div className='flex-1 border-r-2 border-white p-1 mr-2'>
            Name
            </div>
          </div>
          :
          <button className=' text-left border-r-2 border-white p-1 mr-2'>
            Add Item
          </button>
        }
        

        <div className='border-r-2 border-white p-1 mr-2 text-center'>
        &#x24;Price
        </div>

        <div className='border-r-2 border-white p-1 mr-2 text-center'>
          is?
        </div>

        <div className='border-r-2 border-white p-1 mr-2 text-center'>
          Buy
        </div>

        <div className='p-1 mr-2 text-center'>
          x
        </div>
      </div>


  )
}

export default Builder