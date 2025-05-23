import React from 'react'
import cookie from "js-cookie";

import { TiShoppingCart } from "react-icons/ti";
import { HiShoppingBag } from "react-icons/hi2";

import { Rating } from 'react-simple-star-rating'
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { BuilderContext } from '@/contexts/BuilderContext';

function GridCard(props) {
  const router = useRouter();  
  const buildId = cookie.get("currentBuild");

  const {parts, setParts} = useContext(BuilderContext);

  function AddToBuild(buildId, productId) {

  // console.log(buildId, productId);
  console.log(props.data.product_type);

  try {
    if (buildId !== null && buildId !== undefined) {
      router.push(`/builder/${buildId}`);

      for (let i=0; i<parts.length; i++){
        if ((parts[i].type).toUpperCase() === (props.data.product_type).toUpperCase()) {
          parts[i].id = productId;
          parts[i].wattage = props.data.wattage;
          parts[i].price = props.data.price;
          parts[i].name = props.data.name;
          setParts(parts)
          break;
        }
      }
      }

    else {
      console.log('Invalid buildId or no build currently.');
    }} 
  catch (err) {
    console.error('Error during build navigation:', err);
  }
  }


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

        <div className='mt-2 ml-4 grid grid-cols-2 grid-rows-3 w-full h-[60%]'>

        {
        Object.entries(props.data.specs).map(([key, value], index) => (
          
          <div key={index}className={index===Object.entries(props.data.specs).length-1 ? 'col-span-2' : 'col-span-1'}>
            <div className='w-auto h-auto p-none m-none' >
              <span className='text-m font-[700]'>{key.toLocaleUpperCase()} : </span>
              <span className='text-m'>{value}</span>
            </div>
          </div>
        )) 
        }
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
          <Link 
            href={'/products/' + props.data.id}
            className='bg-green-600 hover:bg-green-700 text-white rounded-[10px] w-full h-[35px] flex items-center justify-center transition-colors duration-200'
            aria-label="Buy now"
          >
            <HiShoppingBag className='mr-1' />
            <span className='text-sm'>Buy Now</span>
          </Link>
          
            <button 
              className='bg-blue-500 hover:bg-blue-600 text-white rounded-[10px] w-full h-[35px] flex items-center justify-center transition-colors duration-200'
              aria-label="Add to PC build"
              onClick={()=>{AddToBuild(buildId, props.data.id)}}
            >
              <TiShoppingCart className='mr-1' />
              <span className='text-sm'>Add to Build</span>
            </button>
        </div>
      </div>
    </div>
  );

}
export default GridCard;
