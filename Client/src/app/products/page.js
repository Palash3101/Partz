'use client';
import { motion } from "framer-motion";
import { useState } from "react";

const tabs = ['workstation', 'gaming', 'streaming'];

const typeColors = {
  workstation: 'from-blue-600 to-cyan-500',
  gaming: 'from-red-600 to-pink-500',
  streaming: 'from-purple-600 to-fuchsia-500'
};

function ChipTabs() {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div className="bg-slate-900 flex items-center flex-wrap gap-2">
      {tabs.map((tab) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
};

function Chip({text,selected, setSelected,}){
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
    <span className="relative z-10 flex items-center justify-center">
      {text.charAt(0).toUpperCase() + text.slice(1)}
    </span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className={`absolute inset-0 z-0 bg-gradient-to-r  ${typeColors[text]} rounded-md`}
        ></motion.span>
      )}
    </button>
  );
};

export default ChipTabs;