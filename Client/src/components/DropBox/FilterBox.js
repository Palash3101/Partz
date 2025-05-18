import React from 'react';
import { Rating } from 'react-simple-star-rating';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import filter from '@/services/filter';

function FilterBox({ brands, setBrandsSelected, brandsSelected, isOpen, setIsOpen, data, setData}) {

  const [priceRange, setPriceRange] = React.useState([0, 2000]);
  const [tdpRange, setTdpRange] = React.useState([0, 500]);
  const [rating, setRating] = React.useState(0);


  const clearFilters = () => {
    setPriceRange([0, 1000]);
    setTdpRange([0, 300]);
    setRating(0);
  }

  function applyFilter(){
    setIsOpen(false);
    const new_data = filter(data, priceRange, tdpRange, rating);
    setData(new_data);
  }

  return (
    <div className='z-50'>
      { isOpen &&
        <div className="w-[300px] z-30 h-auto mt-1 bg-black backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-xl p-4 text-white">
          <div className="flex justify-start mb-3">
            <button 
              onClick={clearFilters}
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              Clear All
            </button>
          </div>
          
          <div className="flex space-x-4 mb-5">
            <div className="w-1/2">
              <SliderElement 
                title="Price Range" 
                range={priceRange} 
                setRange={setPriceRange} 
                min={0} 
                max={2000} 
                prefix="$" 
              />
            </div>
            <div className="w-1/2">
              <SliderElement 
                title="TDP (W)" 
                range={tdpRange} 
                setRange={setTdpRange} 
                min={0} 
                max={400} 
                suffix="W" 
              />
            </div>
          </div>
          
          <div className="mb-5">
            <h4 className="font-medium mb-2 text-lg">Minimum Rating</h4>
            <Rating
              SVGclassName="inline-block"
              allowFraction={true}
              iconsCount={5}
              size={24}
              onClick={(rate)=> setRating(rate)}
              initialValue={rating}
            />
          </div>

          <BrandCheckbox 
            brands={brands} 
            setBrandsSelected={setBrandsSelected} 
            brandsSelected={brandsSelected}
          />
          
          <button 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 text-white py-2 px-4 rounded-xl shadow-md transition duration-300"
            onClick={applyFilter}  
          >
            Apply Filters
          </button>
        </div>
    }
    </div>
    
  );
}

function SliderElement({title, range, setRange, min, max, prefix = "", suffix = ""}) {
  const handleChange = (event, newValue) => {
    setRange(newValue);
  };

  return (
    <div>
      <h4 className="font-medium mb-2 text-lg">{title}</h4>
      <div className="flex justify-between text-gray-300 text-sm mb-1">
        <span>{prefix}{range[0]}{suffix}</span>
        <span>{prefix}{range[1]}{suffix}</span>
      </div>
      <Slider
        value={range}
        onChange={handleChange}
        size="small"
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => `${prefix}${value}${suffix}`}
        min={min}
        max={max}
        disableSwap={true}
        sx={{
          height: 4,
          '& .MuiSlider-thumb': {
            width: 16,
            height: 16,
            backgroundColor: '#3B82F6',
          },
          '& .MuiSlider-track': {
            background: 'linear-gradient(to right, #3B82F6, #8B5CF6)',
            height: 5,
          },
          '& .MuiSlider-rail': {
            backgroundColor: '#6B7280',
            height: 3,
          }
        }}
      />
    </div>
  );
}

function BrandCheckbox({brands, setBrandsSelected, brandsSelected}) {
  function handleChange(brand){
    const newBrandsSelected = [...brandsSelected];
    if (newBrandsSelected.includes(brand)) {
      newBrandsSelected.splice(newBrandsSelected.indexOf(brand), 1);
    } else {
      newBrandsSelected.push(brand);
    }
    setBrandsSelected(newBrandsSelected);
  }

  return(
    <div className="mb-5">
      <h4 className="font-medium mb-2 text-lg">Brands</h4>
      <div className="max-h-32 overflow-y-auto text-gray-300 bg-gray-800/70 rounded-xl p-2">
        {brands.map((brand, index) => (
          <div key={index} className="flex items-center py-1">
            <Checkbox 
              defaultChecked 
              onChange={() => {handleChange(brand)}}
              size="small"
              sx={{
                padding: '2px', 
                color: '#6B7280',
                '&.Mui-checked': {
                  color: '#3B82F6',
                },
              }}
            />
            <label className="text-base">{brand}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterBox;