'use client';
import React, { useState, useEffect } from 'react';


function GuideCard() {

  const [fetchedData, setFetchedData] = useState([]);

  useEffect(()=>{
    fetch ('http://localhost:3100/products').then(
      response => response.json()
    ).then(data => setFetchedData(data.message));
  }, []);

  return (
    <div className='h-[300px]'>
     {fetchedData}
    </div>
  );
}

export default GuideCard;