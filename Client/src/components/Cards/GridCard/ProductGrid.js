import React from 'react'
import GridCard from '@/components/Cards/GridCard/GridCard';

function ProductGrid({ProductData, slice, buildId}) {
  return (

    <div className="z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
      {ProductData.slice(slice, slice+12).map((data, index) => (
        <div key={index} className="group relative">
          {/* Glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-50 blur group-hover:opacity-75 transition duration-300"></div>
          
          {/* Card wrapper to maintain original GridCard functionality */}
          <div className="relative rounded-2xl overflow-hidden">
            <GridCard 
              data={data}
              buildId={buildId}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductGrid