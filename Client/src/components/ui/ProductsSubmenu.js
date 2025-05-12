import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '../Header/header.module.css';
import Link from 'next/link';

function ProductsSubmenu({ toggle, setToggle }) {
  // Define component categories
  const categories = [
    { title: 'CPU', image: '/images/cpu.png', gradient: 'from-blue-600 to-cyan-500' },
    { title: 'GPU', image: '/images/cpu.png', gradient: 'from-red-500 to-pink-600' },
    { title: 'Motherboard', image: '/images/cpu.png', gradient: 'from-purple-600 to-indigo-600' },
    { title: 'Memory', image: '/images/cpu.png', gradient: 'from-teal-500 to-blue-600' },
    { title: 'Storage', image: '/images/cpu.png', gradient: 'from-amber-500 to-red-600' },
    { title: 'Powersupply', image: '/images/cpu.png', gradient: 'from-emerald-500 to-teal-500' }
  ];

  // Featured builds data
  const featuredBuilds = [
    {
      id: 'gaming-beast',
      name: 'Gaming Beast',
      description: 'Perfect for 4K gaming with ray tracing',
      specs: ['RTX 4080', 'i9-13900K', '32GB DDR5'],
      gradient: 'from-red-600 to-pink-500'
    },
    {
      id: 'workstation-pro',
      name: 'Workstation Pro',
      description: 'Designed for professional content creators',
      specs: ['RTX 4090', 'Ryzen 9 7950X', '64GB DDR5'],
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      id: 'streaming-setup',
      name: 'Streaming Setup',
      description: 'Optimized for gaming while streaming',
      specs: ['RTX 4070 Ti', 'i7-13700K', '32GB DDR5'],
      gradient: 'from-purple-600 to-fuchsia-500'
    }
  ];

  // Animation variants
  const mainVariant = {
    initial: {
      scaleY: 0,
      opacity: 0,
      transformOrigin: 'top'
    },
    animate: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.45,
        type: "spring",
        stiffness: 550,
        damping: 25,
        staggerChildren: 0.05
      }
    },
    exit: {
      scaleY: 0,
      opacity: 0,
      transformOrigin: 'top',
      transition: {
        duration: 0.35,
        type: "spring"
      }
    }
  };

  const itemVariant = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 10, opacity: 0 }
  };

  return (
    <AnimatePresence>
      {toggle && (
        <motion.div
          variants={mainVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute right-[100px] transform -translate-x-1/2 w-5/6 max-w-7xl bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700 z-50 overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row p-6">
            {/* Components Section */}
            <div className="flex-1 mb-8 lg:mb-0">
              <motion.h3 
                variants={itemVariant}
                className="text-2xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
              >
                PC Components
              </motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {categories.map((category, index) => (
                  <ComponentCard 
                    key={index}
                    item={category}
                    setToggle={setToggle}
                    variants={itemVariant}
                  />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block lg:w-px lg:self-stretch bg-gradient-to-b from-gray-600 to-gray-800 mx-6"></div>
            
            {/* Featured Builds Section */}
            <div className="lg:w-2/5">
              <motion.h3 
                variants={itemVariant}
                className="text-2xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
              >
                Featured Builds
              </motion.h3>
              <div className="space-y-4">
                {featuredBuilds.map((build, index) => (
                  <FeatureBuildCard 
                    key={index}
                    build={build}
                    setToggle={setToggle}
                    variants={itemVariant}
                  />
                ))}
              </div>
              
              {/* Call to action buttons */}
              <div className="flex flex-wrap gap-4 mt-6">
                <motion.div variants={itemVariant}>
                  <Link
                    href="/products/prebuilts"
                    onClick={() => setToggle(false)}
                    className="inline-block px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Explore Pre-Builts
                  </Link>
                </motion.div>
                
                <motion.div variants={itemVariant}>
                  <Link
                    href="/guides"
                    onClick={() => setToggle(false)}
                    className="inline-block px-5 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-xl font-medium shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    View Build Guides
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ComponentCard({ item, setToggle, variants }) {
  return (
    <motion.div variants={variants}>
      <Link href={`/products/${item.title.toLowerCase()}`}>
        <div 
          onClick={() => setToggle(false)}
          className="group relative cursor-pointer"
        >
          {/* Glow effect */}
          <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-xl opacity-30 blur group-hover:opacity-70 transition duration-300`}></div>
          
          {/* Card content */}
          <div className="relative flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-4 h-40 border border-gray-700 group-hover:border-opacity-0 transition duration-300">
            <div className="mb-3 bg-gradient-to-r from-gray-800 to-gray-900 p-2 rounded-lg transform group-hover:scale-110 transition duration-300">
              <img
                className="w-16 h-16 object-contain"
                src={item.image}
                alt={item.title}
              />
            </div>
            <h4 className="text-white text-lg font-medium text-center">
              {item.title}
            </h4>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function FeatureBuildCard({ build, setToggle, variants }) {
  return (
    <motion.div variants={variants}>
      <Link href={`/products/prebuilts/${build.id}`}>
        <div 
          onClick={() => setToggle(false)}
          className="group relative cursor-pointer"
        >
          <div className={`absolute -inset-0.5 bg-gradient-to-r ${build.gradient} rounded-xl opacity-30 blur group-hover:opacity-70 transition duration-300`}></div>
          
          {/* Card content */}
          <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 group-hover:border-opacity-0 transition duration-300">
            <h4 className={`font-medium text-xl bg-gradient-to-r ${build.gradient} bg-clip-text text-transparent group-hover:translate-x-0.5 transition-transform duration-300`}>
              {build.name}
            </h4>
            <p className="text-sm text-gray-300 mb-3">
              {build.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {build.specs.map((spec, index) => (
                <span key={index} className="bg-gray-700 text-xs px-2 py-1 rounded group-hover:bg-gray-600 transition duration-300">
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProductsSubmenu;