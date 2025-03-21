"use client";
import React, { useState } from 'react'
import styles from './home.module.css';
import IdeaCard from '@/components/Cards/IdeaCard';
import EmblaCarousel from '@/components/Cards/IdeaCardCarousel';

function Ideas({data}) {

  return (
    <div className={styles.ideasSectionWrapper} data-theme="dark">

        
        <EmblaCarousel data={data}/>    

    </div>
  )
}

export default Ideas