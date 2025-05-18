'use client';
import {createContext, useState} from 'react';


export const BuilderContext = createContext(null);

export default function BuilderContextProvider({children}) {
    const [parts, setParts] = useState([
    {
      type: "Motherboard",
      id: null,
      name:'',
      wattage: 0,
      price: 0
    },
    {
      type: "CPU",
      id: null,
      name:'',
      wattage: 0,
      price: 0
    },
    {
      type: "GPU",
      id: null,
      name:'',
      wattage: 0,
      price: 0
    },
    {
      type: "Power Supply",
      id: null,
      name:'',
      wattage: 0,
      price: 0
    },
    {
      type: "Storage",
      id: null,
      wattage: 0,
      price: 0
    },
    {
      type: "Memory",
      id: null,
      name:'',
      wattage: 0,
      price: 0
    }
  ]);

  return (
    <BuilderContext.Provider value={{parts, setParts}}>
      {children}
    </BuilderContext.Provider>
  )
}