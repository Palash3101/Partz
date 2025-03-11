'use client'

import React,{ useState } from 'react'
import styles from './page.module.css';
import { Rating } from 'react-simple-star-rating'

function Products() {
  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
  }

  return (
    <div>
        {/* <div className={styles.pageWrapper} data-theme='dark'>
        Products
        </div>
        <div className={styles.pageFirstSection} data-theme='dark'>
            Hello World
        </div>
        <div className={styles.pageSecondSection} data-theme='dark'>
            Hello World
        </div> */}

    <div>
      <Rating
        SVGclassName={"inline-block"}
        onClick={handleRating}
        readonly={false}
        allowFraction={true}
        iconsCount={5}
        /* Available Props */
      />
    </div>



    </div>
  )}

export default Products