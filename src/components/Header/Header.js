'use client'

import React from 'react'
import styles from './header.module.css';
import Link from 'next/link';

import { HiSearch,HiChevronDown, HiChevronUp  } from "react-icons/hi";
import { useState } from 'react';

import {AnimatePresence} from "motion/react";
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
            <button className={styles.headerSearchButton}>Builder</button>

            <button className={styles.headerSearchButton}>Guides</button>

            <button className={styles.headerSearchButton} onClick={()=>setProductsToggle(!productsToggle)}>
              Products
              <HiChevronDown style={{scale:1.3,  marginLeft:'5px', marginBottom:'5px'}}/>
            </button>

            <button className={styles.headerSearchButton}>PreBuilts</button>

            {/* <button className={styles.headerSearchButton}>BenchMarks</button> */}

            {/* <button className={styles.headerSearchButton}>Forums</button> */}
        </div>
      </div>
      <AnimatePresence>

      {productsToggle &&
        <ProductsSubmenu toggle={productsToggle} setToggle={setProductsToggle}/>
    }
      </AnimatePresence>
    </main>
    
  )
}

export default Header
