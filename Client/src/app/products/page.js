'use client';

import BuilderGridItem from "../builder/[buildId]/BuilderGridItem";




function ChipTabs() {

  return (
    <div className="max-w-7xl mx-auto px-4">
      <BuilderGridItem
        isItem={true}
        itemData={    {
          type: "CPU",
          id: "9Bq7X2a",
          name: "Intel Corde i9-13900K",
          wattage: 125,
          price: 409.99
        }}
      />
    </div>
  )
};

export default ChipTabs;