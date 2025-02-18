"use client";
import React, { useState } from 'react'
import styles from './home.module.css';
import IdeaCard from '@/components/Cards/IdeaCard';

function Ideas({ideas}) {
    var [index, setIndex] = useState(6);

  return (
    <div className={styles.ideasSectionWrapper} data-theme="dark">

        <IdeaCard index={index} setIndex={setIndex} ideas={ideas}/>

    </div>
  )
}

export default Ideas