'use client';
import React, { use, useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating'

import styles from './page.module.css';

function PCComponentShowcase ({params}){
  const id = use(params).productId 
  const [product, setProduct] = useState(); 

  useEffect(() => {
    fetch(`http://localhost:3100/products/${id}`).then
    ((response)=> response.json()).then
    ((data) => {
      setProduct(data);
    })

  }, [])

  if (!product) {
    return <div>Not Found... Bad request</div>;
  }

  return (
  <div className={styles.pageWrapper} data-theme="dark">
  <div className={styles.pageMainSection}>

    <div className="w-2/5 p-6 flex flex-col">

      <div className="flex items-center justify-center mb-6">
        <img 
          src={'https://via.placeholder.com/150'} 
          alt={product.name} 
          className="max-w-full size-72 object-contain"
        />
      </div>
      
      <div>
        <h2 className="text-lg font-semibold mb-3 border-b border-gray-200 pb-1">
          Specifications
        </h2>
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(product.specs).map(([key, value]) => (
            <div key={key} className="flex">
              <span className="font-bold text-xl" data-theme="dark">{key.split('_')}:</span>
              <span className="text-lg ml-3">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    

    <div className="w-3/5 p-8 border-l border-gray-200">
      <h1 className="text-2xl font-bold  mb-2">
        {product.name}
      </h1>
      

      <div className="flex items-center mb-4">
      <Rating
        SVGclassName={"inline-block"}
        initialValue={product.rating}
        readonly={true}
        allowFraction={true}
        iconsCount={5}
        size={20}
      />
        <span className="ml-2 text-gray-600">({product.rating}/5)</span>
      </div>
      

      <div className="text-xl font-bold text-blue-600 mb-6">
        ${product.price}
      </div>
      

      <div>
        <h2 className="text-lg font-semibold mb-4  border-b border-gray-200 pb-1">
          Where to Buy
        </h2>
        <div className="space-y-3">
          {product.retailers.map((retailer, index) => (
            <div key={index} className="flex justify-between items-center p-3 border border-gray-200 rounded ">
              <span className="font-medium">{retailer.name}</span>
              <div className="flex items-center">
                <span className={`mr-4 ${
                  retailer.stock === "In Stock" 
                    ? "text-green-600" 
                    : retailer.stock === "Limited Stock" 
                      ? "text-orange-500" 
                      : "text-red-500"
                }`}>
                  {retailer.stock}
                </span>
                <span className="font-bold text-blue-600">${retailer.price}</span>
                <button className="ml-4 bg-blue-600 text-white px-4 py-1 rounded">
                  List
                </button>
                <button className="ml-4 bg-blue-600 text-white px-4 py-1 rounded">
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  </div>
  );
};

export default PCComponentShowcase;