import React from 'react';
import { RxCrossCircled, RxCheckCircled } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import styles from './page.module.css';
import Link from 'next/link';

function BuilderGridItem({isItem, itemData, buildId}) {

  function handleBuy(id){
    console.log(id);
  }

  return (
    <div className={`${styles.BuilderGridItem} hover:shadow-md transition-all duration-200`}>
      <div className='border-r-2 border-white p-2 mr-2 text-center font-medium'>
        {itemData.type}
      </div>

      {
        isItem?
        <div className='flex'>
          <div className='w-20 flex-none border-r-2 border-white p-1 mr-2 text-center truncate'>
            {itemData.img}
          </div>
          <div className='flex-1 border-r-2 border-white p-1 mr-2 truncate'>
            {itemData.name}
          </div>
        </div>
        :
        <div className='border-r-2 border-white py-1 pr-2 mr-2 text-center'>
          <Link href={`/products/${itemData.type.toLowerCase()}?buildId=${buildId}`} className='text-inherit '>
            <button className='pl-3 h-full w-full mr-4 text-left hover:bg-green-700 transition-colors duration-200 rounded'>
              <FaPlus className='inline-block mr-2'/>
              Add item 
            </button>
          </Link>
        </div>
      }
      
      <div className='border-r-2 border-white p-1 mr-2 text-left py-auto text-[25px]'>
        &#x24;{isItem?itemData.price:0}
      </div>

      <div className='border-r-2 border-white p-1 mr-2 text-center'>
        {itemData.is?
        <RxCheckCircled className='text-green-500 size-10'/>
        : 
        <RxCrossCircled className='text-red-500 size-10'/>
        }
      </div>

      <div className='border-r-2 border-white py-1 pr-2 mr-2 text-center'>
        <button 
          onClick={()=>handleBuy(itemData.id)}
          className='h-full w-full mr-4 text-center hover:bg-blue-700 transition-colors duration-300 rounded'>
          Buy   
        </button>
      </div>

      <button className='rounded-r-[20px] p-1 mr-2 text-center hover:bg-red-700 transition-colors duration-300'>
        x
      </button>
    </div>
  );
}

export default BuilderGridItem;