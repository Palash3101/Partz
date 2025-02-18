import React from 'react'
import styles from './IdeaCard.module.css';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function IdeaCard({index, setIndex, ideas}) {
    const len = 5;


  return (
    <div className={styles.ideasSectionCard}>
    
    <moti

    <button className={styles.ideasSectionButton} onClick={()=>{setIndex(index-1);console.log(index);}}>
        <HiChevronLeft style={{scale:3}}/>
    </button>

    <div className={styles.ideasSectionMainWrapper}>
        <div className='h-[90%] max-w-[450px] mt-[5%] ml-[10px]'>
            <div className='text-3xl font-bold mb-[50px] h-[0.3rem]'>
                {ideas[(index)%len]["title"]}
            </div>
            <br/>
            <ul className='list-disc list-inside pl-3 mt-[5px]'>
                <li>{ideas[(index)%len]["description"]}</li>
                <li>{ideas[(index)%len]["CPU"]}</li>
                <li>{ideas[(index)%len]["GPU"]}</li>
            </ul>
            <br/>
            <button className='bg-[rgb(2,6,23)] text-white px-len py-2 rounded-2xl w-[150px]'>Build Guide</button>
        </div>
        <div className='bg-white h-[90%] my-[5%] text-[rgb(2,6,23)] text-center rounded-2xl min-w-[170px] w-[170px] mr-[10px]'>  
            <div 
                style={{backgroundImage:`url(${ideas[(index)%len].image})`}} 
                className='h-full w-full rounded-3xl bg-center bg-cover duration-300' />
        </div>
    </div>

    <button className={styles.ideasSectionButton} onClick={()=>{setIndex(index+1);console.log(index);}}>
        <HiChevronRight style={{scale:3}}/>
    </button>        
    </div>
  )
}

export default IdeaCard
