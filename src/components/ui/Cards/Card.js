import React from 'react'
import styles from './Card.module.css';

function Card({data}) {
  return (
    <div className={styles.CardWrapper}>
        <div className='h-[200px] w-[200px]'>
            <img 
                src={data.image} 
                alt='product'
                className='w-full h-full rounded-[20px] bg-white'
                />
        </div>
        <div>
            <div className='text-xl font-bold text-center w-full mt-[10px] h-[5rem] '>    
                {data.title}
            </div>

            <div className='text-left'>
                <span className='text-lg font-bold ml-5'>
                    Price: 
                </span>
                &#8377;{data.price}
            </div>
        
        </div>

        <center>
            <button className={styles.buyButton} role="button"><span className="text">Buy Now</span></button>
        </center>
        
    </div>
  )
}

export default Card