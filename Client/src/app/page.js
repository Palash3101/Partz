'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Icons
import { FaArrowRight, FaRegLightbulb } from "react-icons/fa";
import PreBuiltCard from '@/components/Cards/PreBuiltCard';

function HomePage() {
  const [activeTab, setActiveTab] = useState('guides');
  
  const Guides = [
    {
      title: 'Budget Gaming PC',
      description: 'Good entry-level gaming PC',
      CPU: 'Ryzen 3 3100',
      GPU: 'GTX 1650 Super',
      image: 'https://antesports.com/wp-content/uploads/2024/07/Crystal-Z2-L2B.png'
    }, 
    {
      title: 'Mid-Range Gaming',
      description: 'Powerful 1080p gaming performance',
      CPU: 'Ryzen 5 7900',
      GPU: 'RTX 4050 Super',
      image: 'https://antesports.com/wp-content/uploads/2024/07/Crystal-Z2-L2B.png'
    }, 
    {
      title: 'Creator Workstation',
      description: 'Balanced for productivity and gaming',
      CPU: 'Ryzen 7 7800X3D',
      GPU: 'RTX 4070',
      image: 'https://antesports.com/wp-content/uploads/2024/07/Crystal-Z2-L2B.png'
    },
    {
      title: 'High-End Gaming',
      description: '4K gaming powerhouse',
      CPU: 'Intel Core i9-14900K',
      GPU: 'RTX 4080 Super',
      image: 'https://antesports.com/wp-content/uploads/2024/07/Crystal-Z2-L2B.png'
    },
    {
      title: 'Ultimate Enthusiast',
      description: 'No compromises performance',
      CPU: 'Ryzen 9 7950X3D',
      GPU: 'RTX 4090',
      image: 'https://antesports.com/wp-content/uploads/2024/07/Crystal-Z2-L2B.png'
    },
  ];

  const PreBuilts = [
    {
      title: 'Nexus Gaming Pro',
      price: '999',
      specs: 'Ryzen 5 | RTX 4060 | 16GB RAM',
      image: 'https://antesports.com/wp-content/uploads/2024/07/Crystal-Z2-L2B.png'
    }, 
    {
      title: 'Horizon Creator',
      price: '1499',
      specs: 'Intel i7 | RTX 4070 | 32GB RAM',
      image: 'https://antesports.com/wp-content/uploads/2024/07/Crystal-Z2-L2B.png'
    }, 
    {
      title: 'Phantom Elite',
      price: '1999',
      specs: 'Ryzen 9 | RTX 4080 | 32GB RAM',
      image: 'https://antesports.com/wp-content/uploads/2024/07/Crystal-Z2-L2B.png'
    },
    {
      title: 'Quantum Fighter',
      price: '1299',
      specs: 'Intel i5 | RTX 4060 Ti | 16GB RAM',
      image: 'https://antesports.com/wp-content/uploads/2024/07/Crystal-Z2-L2B.png'
    },
    {
      title: 'Nova Ultra',
      price: '2499',
      specs: 'Ryzen 9 | RTX 4090 | 64GB RAM',
      image: 'https://antesports.com/wp-content/uploads/2024/07/Crystal-Z2-L2B.png'
    },
    {
      title: 'Stealth Mini',
      price: '899',
      specs: 'Intel i5 | RTX 4050 | 16GB RAM',
      image: 'https://antesports.com/wp-content/uploads/2024/07/Crystal-Z2-L2B.png'
    }
  ];

  const featuredComponents = [
    {
      name: 'AMD Ryzen 9 7950X3D',
      category: 'CPU',
      price: '599',
      image: 'https://antesports.com/wp-content/uploads/2024/07/Crystal-Z2-L2B.png'
    },
    {
      name: 'NVIDIA RTX 4080 Super',
      category: 'GPU',
      price: '999',
      image: 'https://antesports.com/wp-content/uploads/2024/07/Crystal-Z2-L2B.png'
    },
    {
      name: 'Samsung 990 Pro 2TB',
      category: 'SSD',
      price: '179',
      image: 'https://antesports.com/wp-content/uploads/2024/07/Crystal-Z2-L2B.png'
    },
    {
      name: 'Corsair Dominator 32GB DDR5',
      category: 'RAM',
      price: '199',
      image: 'https://antesports.com/wp-content/uploads/2024/07/Crystal-Z2-L2B.png'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative py-16">
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Custom builds and premium components for gamers, creators, and professionals
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/build">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center">
              Start Your Build <FaArrowRight className="ml-2" />
            </button>
          </Link>
          <Link href="/prebuilts">
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg border border-gray-700 transition-all duration-300">
              Shop Pre-Built PCs
            </button>
          </Link>
        </div>  
      </div>

      {/* PC Guides Section */}
      <div className="py-2 px-4 h-auto max-w-[85%] mx-auto">
        <SectionTitle 
          title="Custom PC Guides" 
          description="Expert recommendations for your specific needs and budget" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {Guides.map((guide, index) => (
              <PreBuiltCard  key={index} guide={guide}/>
          ))}
        </div>
      </div>


      {/* Featured Components Section */}
      <div className="py-24 px-4 max-w-[85%] mx-auto">
        <SectionTitle 
          title="Featured Components" 
          description="Premium parts for your custom PC build" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredComponents.map((component, index) => (
            <div key={index}>
              <div  className="h-48 overflow-hidden">
                <img src={component.image} alt={component.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <span className="inline-block px-3 py-1 rounded-full text-xs bg-blue-900/50 text-blue-300 border border-blue-800 mb-2">
                  {component.category}
                </span>
                <h3 className="font-bold text-lg mb-2 text-white">{component.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-white">${component.price}</span>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-1 px-4 rounded-lg transition-all duration-300">
                    Details
                  </button>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

  // Section Title Component
  function SectionTitle({ title, description }){
    return(
      <div className="mb-12 rounded-3xl bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 shadow-2xl overflow-hidden">
        <div className="pt-8 pb-10 px-8">
          <h2 className="font-bold text-3xl text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            {title}
          </h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    )
  };



export default HomePage;