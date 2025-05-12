'use client';
import React, { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';
import { motion } from 'framer-motion';


function PCComponentShowcase({ params }) {
  const id = React.use(params).productId; // Safely access productId
  const [product, setProduct] = useState(null); // Initialize product as null
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (id) { // Only fetch if id is available
      fetch(`http://localhost:3100/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
        })
        .catch(error => {
          console.error("Error fetching product:", error);
        });
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center">
        <div className="text-center p-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-700 shadow-xl">
          <div className="text-3xl font-bold text-red-500 mb-4">Product Not Found</div>
          <div className="text-gray-300">The requested product could not be located. Please check the product ID and try again.</div>
        </div>
      </div>
    );
  }

  const getStockColor = (stock) => {
    if (stock === "In Stock") return "bg-gradient-to-r from-green-600 to-emerald-500";
    if (stock === "Limited Stock") return "bg-gradient-to-r from-orange-500 to-amber-500";
    return "bg-gradient-to-r from-red-600 to-rose-500";
  };

  // Simulated images array for the gallery
  const productImages = [
    'https://via.placeholder.com/500',
    'https://via.placeholder.com/500?text=Detail+View',
    'https://via.placeholder.com/500?text=Angle+View',
    'https://via.placeholder.com/500?text=Side+View'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl border border-gray-700 shadow-2xl overflow-hidden">
          {/* Left column - Images */}
          <div className="lg:w-2/5 p-8 border-r border-gray-700">
            {/* Main image */}
            <motion.div
              className="relative mb-8 rounded-xl overflow-hidden bg-black/50 border border-gray-600"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={productImages[activeImage]}
                alt={product?.name}
                className="w-full h-80 object-contain p-4"
              />
            </motion.div>

            {/* Thumbnail gallery */}
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`cursor-pointer rounded-lg overflow-hidden border-2 ${activeImage === index ? 'border-blue-500' : 'border-gray-600'}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={img} alt={`View ${index + 1}`} className="w-full h-16 object-cover" />
                </motion.div>
              ))}
            </div>

            {/* Specifications */}
            <div className="mt-10">
              <h2 className="text-xl font-bold mb-6 pb-2 border-b border-gray-600">
                Technical Specifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product?.specs && Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="group relative">                
                    {/* Content */}
                    <div className="relative flex flex-col bg-gray-800/80 rounded-lg p-3 border border-gray-700">
                      <span className="text-gray-300 text-sm font-medium">
                        {key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </span>
                      <span className="text-white font-bold text-lg">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Details */}
          <div className="lg:w-3/5 p-8">
            {/* Product name and rating */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                {product?.name}
              </h1>

              <div className="flex items-center mb-4">
                <Rating
                  SVGclassName={"inline-block"}
                  initialValue={product?.rating}
                  readonly={true}
                  allowFraction={true}
                  iconsCount={5}
                  size={24}
                  emptyColor={"gray"}
                />
                <span className="ml-3 text-lg text-gray-300">
                  ({product?.rating}/5)
                </span>
              </div>

              {/* Price and buy button */}
              <div className="flex items-center justify-between mt-6">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  ${product?.price}
                </div>

                <button className="px-8 py-3 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-110 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Add to Build
                </button>
              </div>
            </div>

            <hr className="border-gray-700 my-8" />
            {/* Where to buy section */}
            <div>
              <h2 className="text-xl font-bold mb-6">Where to Buy</h2>
              <div className="space-y-4">
                {product?.retailers?.map((retailer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="relative group"
                  >
                    {/* Subtle glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl opacity-50 blur-sm group-hover:opacity-70 transition duration-300"></div>

                    {/* Content */}
                    <div className="relative flex justify-between items-center p-4 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl border border-gray-700">
                      <div className="font-medium text-xl text-white">{retailer.name}</div>

                      <div className="flex items-center">
                        <div className={`px-3 py-1 rounded-lg text-sm font-medium text-white ${getStockColor(retailer.stock)}`}>
                          {retailer.stock}
                        </div>

                        <div className="mx-4 text-2xl font-bold text-white">${retailer.price}</div>

                        <div className="flex space-x-3">
                          <button className="px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:brightness-110 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                            Add to List
                          </button>
                          <button className="px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-110 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Compatibility section
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-4">Compatibility Check</h2>
          <div className="flex items-center">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white text-xl font-bold">
              ✓
            </div>
            <div className="ml-4">
              <div className="text-lg font-medium text-white">Compatible with your current build</div>
              <div className="text-gray-300">This component is compatible with all the other parts in your build.</div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </motion.div>
  );
}

export default PCComponentShowcase;