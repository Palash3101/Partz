import React from 'react'
import styles from './header.module.css';
import Link from 'next/link';

function Header() {
  return (
    <div className={styles.headerWrapper}  data-theme="dark">
        <div className={styles.headerTitle}>
            Partz
        </div>        

        <div className={styles.headerSearchButtonWrapper}>
            <Link href={'/'}>
            <button className={styles.headerSearchButton} >Search</button>
            </Link>
            <button className={styles.headerSearchButton}>Builder</button>

            <button className={styles.headerSearchButton}>Guides</button>

            <Link href={'/products'}>
            <button className={styles.headerSearchButton}>Products</button>
            </Link>

            <button className={styles.headerSearchButton}>PreBuilts</button>

            <button className={styles.headerSearchButton}>BenchMarks</button>

            <button className={styles.headerSearchButton}>Forums</button>
        </div>
    </div>
    
  )
}

export default Header;