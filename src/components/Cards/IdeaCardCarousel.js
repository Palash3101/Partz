"use client"
import React, { useCallback, useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import IdeaCard from './IdeaCard';

export default function EmblaCarousel({data}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop:true, watchDrag:true})
    const len=5;
  const [index, setIndex] = useState(5);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
    setIndex((index) => (index - 1)%len);
    node;

}, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
    setIndex((index) => (index + 1)%len);
    node;

  }, [emblaApi])



  
  const node = useEffect(() => {
    if (emblaApi) console.log(emblaApi.selectedScrollSnap());
    
  }, [index, emblaApi])


  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
       
        {data.map((item, i) => (
          <IdeaCard key={i} id={i}
            scrollNext={scrollNext}
            scrollPrev={scrollPrev} 
            data={item} />
        ))}

      </div>
    </div>
  )
}
