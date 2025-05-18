'use client'

import React from 'react'
import styles from './header.module.css';
import Link from 'next/link';

import { HiSearch, HiChevronDown, HiUser, HiDesktopComputer} from "react-icons/hi";
import { useState } from 'react';


import ProductsSubmenu from '@/components/ui/ProductsSubmenu';
import RedirectBuilder from '@/services/builderRedirectLogic';


function Header() {
  const [productsToggle, setProductsToggle] = useState(false);

  
  return (
    <main className={styles.headerWrapper} data-theme="dark">
      <div className={styles.headerSearchButtonWrapper}>
        <Link className={styles.headerTitle} href={'/'}>
          Partz
        </Link>

        <div className={styles.navButtonsContainer}>
        <button 
          className={styles.headerNavButton}
          onClick={RedirectBuilder}
        >
          Builder
        </button>

          {/* <Link href={'/guides'}>
            <button className={styles.headerNavButton}>Guides</button>
          </Link> */}
           
          <Link href={'/prebuilts'}>
            <button className={styles.headerNavButton}>PreBuilts</button>
          </Link>

          {/* <Link href={'/products/prebuilts'}>
            <button className={styles.headerNavButton}>Comparator</button>
          </Link>

          <Link href={'/products/prebuilts'}>
            <button className={styles.headerNavButton}>Benchmarks</button>
          </Link> */}

          <button 
            className={`${styles.headerNavButton} ${styles.dropdownButton}`} 
            onClick={()=>setProductsToggle(!productsToggle)}
          >
            Products
            <HiChevronDown className={styles.dropdownIcon} />
          </button>
        </div>
        
        <div className={styles.rightIconsContainer}>
          <Link href="/search">
            <button className={styles.iconButton} title="Search">
              <HiSearch size={24} />
            </button>
          </Link>

          <button 
            className={styles.iconButton} 
            title="Current Build"
            onClick={RedirectBuilder}
          >
            <HiDesktopComputer size={24} />
          </button>


          <Link href="/profile">
            <button className={styles.iconButton} title="Profile">
              <HiUser size={24} />
            </button>
          </Link>

        </div>
      </div>

      <ProductsSubmenu toggle={productsToggle} setToggle={setProductsToggle}/>
    </main>


  )
}

export default Header