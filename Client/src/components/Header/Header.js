'use client'

import React from 'react'
import styles from './header.module.css';
import Link from 'next/link';

import { HiSearch,HiChevronDown, HiChevronUp  } from "react-icons/hi";
import { useState } from 'react';

import ProductsSubmenu from '@/components/ui/ProductsSubmenu';

function Header() {
  const [productsToggle, setProductsToggle] = useState(false);


  return (
    <main className={styles.headerWrapper}  data-theme="dark">
      <div>
      <div className={styles.headerTitle}>
            Partz
        </div>        

        <div className={styles.headerSearchButtonWrapper}>
            <Link href={'/'}>
            <button className={styles.headerSearchButton} >
              <HiSearch style={{scale:1.3, margin:'1px'}}/>
            </button>
            </Link>
            <Link href={'/builder'}>
                <button className={styles.headerSearchButton}>Builder</button>
            </Link>

            <Link href={'/guides'}>
            <button className={styles.headerSearchButton}>Guides</button>
            </Link>
            
            <button className={styles.headerSearchButton} onClick={()=>setProductsToggle(!productsToggle)}>
              Products
              <HiChevronDown style={{scale:1.3,  marginLeft:'5px', marginBottom:'5px'}}/>
            </button>
            <Link href={'/products/prebuilts'}>
              <button className={styles.headerSearchButton}>PreBuilts</button>
            </Link>

            {/* <Link href={'/comparator'}>
            <button className={styles.headerSearchButton}>Comparator</button>
            </Link> */}

            {/* <button className={styles.headerSearchButton}>BenchMarks</button> */}

            {/* <button className={styles.headerSearchButton}>Forums</button> */}
        </div>
      </div>


      <ProductsSubmenu toggle={productsToggle} setToggle={setProductsToggle}/>
    </main>
    
  )
}

export default Header
