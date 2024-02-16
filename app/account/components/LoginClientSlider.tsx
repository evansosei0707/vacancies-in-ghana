"use client"

import React from 'react'
import  Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";
import ImageSlider1 from "@/public/slider1.png";
import ImageSlider2 from '@/public/Vector 4 (1).png';


export default function LoginClientSlider() {

    
    const settings = {
        dots: true,
        
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    const sliderContent = [
        {
            image: ImageSlider1,
            text1: 'Simplify your job searching',
            text2: 'Connecting people to jobs'
        },
        {
            image: ImageSlider2,
            text1: 'Simplify your job searching',
            text2: 'Connecting people to jobs'
        },
        {
            image: ImageSlider1,
            text1: 'Simplify your job searching',
            text2: 'Connecting people to jobs'
        },
        {
            image: ImageSlider1,
            text1: 'Simplify your job searching',
            text2: 'Connecting people to jobs'
        },
    ]


  return (
    <section className=' bg-[#008080] w-1/2 hidden lg:block items-start pt-10  h-full'>
        <div className='w-[100%] h-[584px] flex items-center justify-center pl-8'>
        <Slider {...settings} className="w-[100%]  gap-6 h-full flex" >
            {sliderContent.map((item, idx) => (
                 <div key={idx} className="w-[100%] h-full flex flex-col  justify-center   items-center gap-6">
                    <div className=' h-[484px] w-[533px]'>
                        <Image
                            src={item.image}
                             width={533}
                             height={484}
                             alt='login-slider image'
                        />
                    </div>
                    <div className=' flex flex-col mt-6 items-center justify-center text-white'>
                        <p className=' text-white font-[400] text-[24px] leading-[28px]'>{item.text1}</p>
                        <p className=' text-white text-[36px] font-medium leading-[42px]'>{item.text1}</p>
                    </div>
                 </div>
            ))}
        </Slider>
        </div>
    </section>
  )
}
