import React from 'react'
import styles from './IdeaCard.module.css';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function IdeaCard({scrollNext, scrollPrev, data,id, ref}) {
    

  return (
    <div className={id==0?styles.ideasSectionCardSelected:styles.ideasSectionCard} id={id} ref={ref}>

    <button className={styles.ideasSectionButton} onClick={scrollPrev}>
        <HiChevronLeft style={{scale:3}}/>
    </button>

    <div className={styles.ideasSectionMainWrapper}>
        <div className='h-[90%] max-w-[450px] mt-[5%] ml-[10px]'>
            <div className='text-3xl font-bold mb-[50px] h-[0.3rem]'>
                {data["title"]}
            </div>
            <br/>
            <ul className='list-disc list-inside pl-3 mt-[5px]'>
                <li>{data["description"]}</li>
                <li>{data["CPU"]}</li>
                <li>{data["GPU"]}</li>
            </ul>
            <br/>
            <button className='bg-[rgb(2,6,23)] text-white px-len py-2 rounded-2xl w-[150px] mb-[10px]'>Build Guide</button>
        </div>
        <div className='bg-white h-[90%] my-[5%] text-[rgb(2,6,23)] text-center rounded-2xl min-w-[170px] w-[170px] mr-[10px]'>  
            <div 
                style={{backgroundImage:`url(${data.image})`}} 
                className='h-full w-full rounded-3xl bg-center bg-cover duration-300' />
        </div>
    </div>

    <button className={styles.ideasSectionButton} onClick={scrollNext}>
        <HiChevronRight style={{scale:3}}/>
    </button>        
    </div>
  )
}

export default IdeaCard
