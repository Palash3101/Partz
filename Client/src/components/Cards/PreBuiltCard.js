import React from 'react'
import { RiComputerLine, RiCpuLine } from "react-icons/ri";
import { BsGpuCard } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

function PreBuiltCard({guide}) {
  return (
    <div className="h-auto overflow-hidden">
    <img src={guide.image} alt={guide.title} className='size-15' />

    <div className="p-5">
      <h3 className="font-bold text-xl mb-2 text-blue-300">{guide.title}</h3>
      <p className="text-gray-300 mb-3">{guide.description}</p>
      <div className="flex items-center text-sm text-gray-400 mb-1">
        <RiCpuLine className="mr-1" /> CPU: <span className="ml-1 text-white">{guide.CPU}</span>
      </div>
      <div className="flex items-center text-sm text-gray-400">
        <BsGpuCard className="mr-1" /> GPU: <span className="ml-1 text-white">{guide.GPU}</span>
      </div>
    </div>
    <div className="px-5 pb-5">
      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 text-white font-medium py-2 rounded-lg transition-all duration-300 flex items-center justify-center">
        View Build <FaArrowRight className="ml-2" />
      </button>
    </div>
    </div>
  )
}

export default PreBuiltCard