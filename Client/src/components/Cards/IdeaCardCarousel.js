"use client"
import React, { useCallback, useState, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import IdeaCard from './IdeaCard';

export default function EmblaCarousel({data}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop:true, watchDrag:true})
    const len=5;

  const itemsRef = useRef([]);


  function fader(){
    itemsRef.current[emblaApi.selectedScrollSnap()].style.opacity=1;
    itemsRef.current[emblaApi.previousScrollSnap()].style.opacity=0.5;   
  }


  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
    fader();

}, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
    fader();
  }, [emblaApi])


//   useEffect(() => {
//     fader();
//   }, []);



  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
       
        {data.map((item, i) => (
          <IdeaCard key={i} id={i}
            ref = {(element) => (itemsRef.current[i] = element)}
            scrollNext={scrollNext}
            scrollPrev={scrollPrev} 
            data={item} />
        ))
        }


      </div>
    </div>
  )
}
