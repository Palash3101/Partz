"use client";
import React,{ useState } from 'react'
import styles from './home.module.css';
import Card from '@/components/ui/Cards/Card';

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";


function Prebuilts({data}) {
    var [index, setIndex] = useState(0);

  return (
    <div className={styles.buildSectionWrapper} data-theme='dark'>
        <button className={styles.ideasSectionButton} onClick={()=>{setIndex(index+-1);}}>
            <HiChevronLeft style={{scale:3}}/>
        </button>

        <Card data={data[index%data.length]} />
        <Card data={data[(index+1)%data.length]}/>
        <Card data={data[(index+2)%data.length]}/>
        <Card data={data[(index+3)%data.length]}/>

        <button className={styles.ideasSectionButton} onClick={()=>{setIndex(index+1);}}>
            <HiChevronRight style={{scale:3}}/>
        </button>
    </div>
  )
}

export default Prebuilts