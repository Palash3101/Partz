"use client";
import { LampDemo } from '@/components/ui/lamp';
import React from 'react'

import Ideas from './ideas';
import Prebuilts from './prebuilts';

function HomePage() {
    const Guides = [
        {
            title: 'Budget Gaming PC',
            description: 'Good entry-level gaming PC',
            CPU: 'Ryzen 3 3100',
            GPU: 'GTX 1650 Super',
            image: 'https://s.alicdn.com/@sc04/kf/H7e9db0b79cbd4feea544ccbc4b0a12cd9.jpg_720x720q50.jpg'
        }, 
        {
            title: 'Budget Gaming PC',
            description: 'Good entry-level gaming PC',
            CPU: 'Ryzen 5 7900',
            GPU: 'RTX 4050 Super',
            image: 'https://antesports.com/wp-content/uploads/2024/07/Crystal-Z2-L2B.png'
        }, 
        {
            title: 'Budget Gaming PC 2',
            description: 'Good mid-level gaming PC',
            CPU: 'Ryzen 3 3100',
            GPU: 'GTX 1650 Super',
            image: 'https://antesports.com/wp-content/uploads/2024/07/Crystal-Z2-L2B.png'
        },
        {
            title: 'Budget Gaming PC 3',
            description: 'Good end-level gaming PC',
            CPU: 'Ryzen 3 3100',
            GPU: 'GTX 1650 Super',
            image: 'https://s.alicdn.com/@sc04/kf/H7e9db0b79cbd4feea544ccbc4b0a12cd9.jpg_720x720q50.jpg'
        },
        {
            title: 'Budget Gaming PC 4 wkdalk dwlhijklmn',
            description: 'Best Bang for Busk',
            CPU: 'Ryzen 3 3100',
            GPU: 'GTX 1650 Super',
            image: 'https://antesports.com/wp-content/uploads/2024/07/Crystal-Z2-L2B.png'
        },
    ]


    const PreBuilts=[
        {
            title: 'A good Low-End Pc, this can be a long ass title',
            price: '1010',
            image: 'https://antesports.com/wp-content/uploads/2024/07/Crystal-Z2-L2B.png'
        }, 
        {
            title: 'Prebuilt 2',
            price: '1000',
            image: 'https://antesports.com/wp-content/uploads/2024/07/Crystal-Z2-L2B.png'
        }, 
        {
            title: 'Prebuilt 3',
            price: '1200',
            image: 'https://antesports.com/wp-content/uploads/2024/07/Crystal-Z2-L2B.png'
        },
        {
            title: 'Prebuilt 4',
            price: '1000',
            image: 'https://antesports.com/wp-content/uploads/2024/07/Crystal-Z2-L2B.png'
        },
        {
            title: 'Prebuilt 5',
            price: '1080',
            image: 'https://antesports.com/wp-content/uploads/2024/07/Crystal-Z2-L2B.png'
        },
        {
            title: 'Prebuilt 6',
            price: '8000',
            image: 'https://s.alicdn.com/@sc04/kf/H7e9db0b79cbd4feea544ccbc4b0a12cd9.jpg_720x720q50.jpg'
        }
    ]

  return (
    <div>
        <div className='h-10vh'>

            <LampDemo />
        </div>

        <Ideas ideas={Guides}/>

        <Prebuilts data={PreBuilts}/>

    </div>


  )
}

export default HomePage


