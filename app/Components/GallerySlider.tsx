"use client";

import { professionsImage } from "../lib/helper";
import  Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";
import React from "react";
import { MdArrowForward, MdArrowBack } from "react-icons/md";



const GallerySlider = () => {  
    
    const slider = React.useRef<null | any>();


    const settings = {
        infinite: true,
        speed: 400,
        autoplay: true,
        centerMode: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 558,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    
      };

  return (
            <div className='flex w-full h-full box-border relative pt-6  px-4 mb-8 mx-auto mt-0 justify-center items-center'>
                <button className=" z-20 border-mainColor border hover:bg-mainColor -bottom-16 md:bottom-auto  rounded-full absolute md:-top-20 right-24 p-2" onClick={() => slider?.current?.slickPrev()}>
                    <MdArrowBack fontSize={25} color="#ffffff" />
                </button>
                <button className=" z-20 border-mainColor border hover:bg-mainColor -bottom-16  rounded-full absolute md:-top-20 md:bottom-auto right-12 p-2" onClick={() => slider?.current?.slickNext()}>
                    <MdArrowForward fontSize={25} color="#ffffff" />
                </button>
                <Slider {...settings} ref={slider} className="w-[100%] overflow-hidden  gap-6 h-full flex" >
                {professionsImage.map((item, idx: number) => (
                    <div key={idx} className="w-[100%] h-full flex flex-col flex-1 justify-center px-1 md:px-4  items-center gap-6">
                        <div className='w-full h-[335px] overflow-hidden papa rounded-2xl'>
                            <Image
                                src={item.labelImage}
                                width={425}
                                height={335}
                                className='w-full h-full object-cover object-center'
                                alt='service-image'
                            />
                        </div>
                    </div>
                    ))}
                </Slider>
            </div>  
        )
    }


export default GallerySlider;