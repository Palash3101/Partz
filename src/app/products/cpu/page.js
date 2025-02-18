import React from 'react'
import styles from '../page.module.css';
import FilterSidebar from '@/components/FilterSidebar/FilterSidebar';

function CpuPage() {
  return (
    <div>
        
        <div className={styles.pageWrapper} data-theme='dark'>
            <center>
                <span className='font-bold text-2xl'>
                    Choose a CPU
                </span>
            </center>
        </div>

        <div className={styles.pageCategoriesSection} data-theme='dark'>

            <FilterSidebar/>
            <div >
                    jbkjbkj
            </div>

            
        </div>
        
    </div>
    
  )
}

export default CpuPage