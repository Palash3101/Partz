'use client';
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating'

import styles from './page.module.css';

const PCComponentShowcase = () => {
  // Product data
  const product = {
    name: "AMD Ryzen 9 7950X 4.5 GHz 16-Core Processor",
    image: "/api/placeholder/400/300",
    price: 599.99,
    rating: 4.5,
    specs: {
      "Cores": "16",
      "Threads": "32",
      "Base Clock": "4.5 GHz",
      "Boost Clock": "5.7 GHz",
      "TDP": "170W",
      "Socket": "AM5",
      "Cache": "80MB",
      "Architecture": "Zen 4"
    },
    retailers: [
      { name: "Amazon", price: 599.99, stock: "In Stock" },
      { name: "Newegg", price: 579.99, stock: "In Stock" },
      { name: "Best Buy", price: 609.99, stock: "Limited Stock" },
      { name: "Micro Center", price: 569.99, stock: "Out of Stock" }
    ]
  }


  return (
    <div className={styles.pageWrapper} data-theme="dark">
      <div className={styles.pageMainSection}>
        {/* Left Section - Product Image and Specs */}
        <div className="w-2/5 p-6 flex flex-col">
          {/* Product Image */}
          <div className="flex items-center justify-center mb-6">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-w-full size-72 object-contain"
            />
          </div>
          
          {/* Specifications */}
          <div>
            <h2 className="text-lg font-semibold mb-3 border-b border-gray-200 pb-1">
              Specifications
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex">
                  <span className="font-bold text-xl" data-theme="dark">{key}:</span>
                  <span className="text-lg ml-3">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Section - Product Details and Where to Buy */}
        <div className="w-3/5 p-8 border-l border-gray-200">
          <h1 className="text-2xl font-bold  mb-2">
            {product.name}
          </h1>
          
          {/* Product Rating */}
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
          
          {/* Price */}
          <div className="text-xl font-bold text-blue-600 mb-6">
            ${product.price}
          </div>
          
          {/* Where to Buy */}
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