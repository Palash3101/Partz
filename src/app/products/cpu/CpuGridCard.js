import React from 'react'

import { TiShoppingCart } from "react-icons/ti";
import { HiShoppingBag } from "react-icons/hi2";

import { Rating } from 'react-simple-star-rating'
import Link from 'next/link';

function CpuGridCard(props) {
  return (
    <div className='bg-black/40 grid grid-cols-[115px_1fr_120px] grid-rows-1 rounded-[20px] p-4 text-[var(--text-color)] w-full h-[180px] hover:shadow-lg transition-all duration-200'>
      <div className='col-span-1 flex items-center justify-center'>
        <img 
          src={props.data.image || 'https://via.placeholder.com/150'} 
          alt={`${props.data.name || 'CPU'} product image`}
          className='rounded-[20px] w-[100px] h-[100px] bg-white object-contain'
        />
      </div>

      <div className='col-span-1 flex flex-col justify-center'>
        <Link href={'/products/' + props.data.id} className='text-inherit hover:text-blue-300 transition-colors duration-200'> 
          <div className='font-bold text-xl grow ml-4 truncate'>{props.data.name}</div>
        </Link>

        <div className='mt-2'>
          <div className='ml-4 grid grid-cols-2 grid-rows-3 gap-y-1 gap-x-2'>
            <div className='text-base'>
              <span className='font-medium'>Core Clock: </span>{props.data.core_clock}GHz
            </div>
            <div className='text-base'>
              <span className='font-medium'>Boost: </span>{props.data.boost_clock}GHz
            </div>
            <div className='text-base'>
              <span className='font-medium'>Cores: </span>{props.data.core_count}
            </div>
            <div className='text-base'>
              <span className='font-medium'>TDP: </span>{props.data.tdp}W
            </div>
            <div className='text-base col-span-2 truncate'>
              <span className='font-medium'>Graphics: </span>{props.data.graphics || 'None'}
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-between border-l border-gray-600/30 pl-4'>
        <div className='flex flex-col items-center'>
          <span className='text-2xl font-bold'>&#36;{props.data.price}</span>
          <div className='mt-1'>
            <Rating
              SVGclassName="inline-block"
              initialValue={props.data.rating}
              readonly={true}
              allowFraction={true}
              iconsCount={5}
              size={16}
            />
          </div>
        </div>
        
        <div className='flex flex-col gap-2 w-full'>
          <button 
            className='bg-green-600 hover:bg-green-700 text-white rounded-[10px] w-full h-[35px] flex items-center justify-center transition-colors duration-200'
            aria-label="Buy now"
          >
            <HiShoppingBag className='mr-1' />
            <span className='text-sm'>Buy Now</span>
          </button>
          
          <Link href={{pathname: '/builder'}} className='w-full'>
            <button 
              className='bg-blue-500 hover:bg-blue-600 text-white rounded-[10px] w-full h-[35px] flex items-center justify-center transition-colors duration-200'
              aria-label="Add to PC build"
            >
              <TiShoppingCart className='mr-1' />
              <span className='text-sm'>Add to Build</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CpuGridCard;