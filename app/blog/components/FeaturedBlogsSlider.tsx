"use client"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import featuredImage from "@/public/featuredImage.png"
import { MdOutlineArrowOutward } from "react-icons/md";


export default function FeaturedBlogsSlider() {

    const featuredBlogArray = [
        featuredImage,
        featuredImage,
        featuredImage,
        featuredImage,
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        easing:'ease-in',
        arrows: false,
        appendDots: (dots: any) => (
            <div
              style={{
                zIndex: "20px",
                position: 'absolute',
                bottom: '80px',
                padding: "5px",
                color: 'white',
                margin: '0px'
              }}
            >
              <ul style={{ color: 'white'}}> {dots} </ul>
            </div>
          ),
          customPaging: (i: any) => (
            <div
              style={{
                zIndex: "20px",
                position: 'absolute',
                top: '40px',
                color: "white",
                borderRadius: '50%',
                width: '15px',
                marginRight: '3px',
                marginTop: '2rem',
                height: '15px',
                backgroundColor: 'white'
              }}
            >
            </div>
          )
      };

  return (
    <div className=' w-[98%] rounded-xl overflow-hidden  mx-auto h-[300px] md:h-[500px]'>
         <Slider {...settings} className='relative overflow-hidden w-full h-full'>
            {
                featuredBlogArray.map((item, i) => (
                  <div key={i} className='w-full mx-auto flex h-full items-center justify-center'>
                    <div  className='relative w-full h-[300px] md:h-[500px] items-center bg-slate-600 justify-center '>
                      <Image
                        src={item}
                        alt={`home-${i}`}
                        className='w-full h-full bg-center object-cover'
                        priority
                      />
                      <div className=' absolute p-10 text-white flex items-end justify-between top-0 left-0 w-full h-full'>
                        <div className=' flex flex-col items-start justify-center gap-3'>
                            <p  className=' bg-[#D9D9D97D]/50 rounded-2xl px-3 py-1'>featured</p>
                            <p className=' lg:text-[40px] text-[18px] leading-5 w-[70%] lg:leading-[48px] font-semibold'>
                                Diversifying  more in the African workspace
                            </p>
                        </div>
                        <span className='rounded-full p-2 bg-white'>
                            <MdOutlineArrowOutward fontSize={25} color='#000000' />
                        </span>
                      </div>
                    </div>
                  </div>
                  ))
              }
        </Slider>
    </div>
    )
}
