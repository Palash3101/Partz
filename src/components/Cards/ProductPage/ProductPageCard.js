import React from 'react'

function ProductPageCard(props) {
  return (
    <div className='flex flex-col bg-black/40 rounded-[20px] p-3 text-[var(--text-color)] w-[200px]'>
      <center>
        <img src='https://via.placeholder.com/150' alt='product' 
          className='rounded-[20px] size-[150px] bg-white mb-6'/>
      </center>

      <div>{props.title}</div>
      <div>{props.price}</div>
      <div>{props.rating}</div>
      
    </div>
  )
}

export default ProductPageCard