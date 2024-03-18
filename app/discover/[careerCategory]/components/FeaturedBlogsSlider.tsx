"use client"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineArrowOutward } from "react-icons/md";
import { Post } from '@/type';
import { urlFor } from '@/lib/client';

interface FeaturedBlogsSliderProps {
  featuredBlogData: Post[];
}

export default function FeaturedBlogsSlider({ featuredBlogData }:FeaturedBlogsSliderProps) {

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

      function convertToTitleCase(str: string) {
        const words = str.split('-');
      
        const capitalizedWords = words.map(word => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        });
      
        const result = capitalizedWords.join(' ');
      
        return result;
      }

  return (
    <div className=' w-[98%] rounded-xl overflow-hidden  mx-auto h-[300px] md:h-[500px]'>
         <Slider {...settings} className='relative overflow-hidden w-full h-full'>
            {
                featuredBlogData.map((item, i) => (
                  <Link href={`/discover/${item.categories[0].slug.current}/${item.slug.current}`}  key={i} className='w-full mx-auto flex h-[300px] md:h-[500px]  bg-slate-600 items-center justify-center'>
                    <div className='feature-parent items-center justify-center '>
                      <Image
                        src={urlFor(item.mainImage).url()}
                        alt={`home-${i}`}
                        width={1000}
                        height={500}
                        className='w-full h-full bg-center blogImage object-cover'
                      />
                      <div className=' absolute p-10 z-20 text-white flex items-end justify-between -top-4 md:top-0 left-0 w-full h-full'>
                        <div className=' flex flex-col w-full md:w-auto items-start justify-center gap-3'>
                            <p  className=' bg-[#D9D9D97D]/50 rounded-2xl px-3 py-1'>featured</p>
                            <p className=' blogTitle lg:text-[40px] text-[20px] leading-6 md:text-[30px] md:leading-[35px] w-[70%] lg:leading-[48px] font-semibold'>
                                {item.title}
                            </p>
                        </div>
                        <span className='rounded-full p-2 bg-white'>
                            <MdOutlineArrowOutward fontSize={25} color='#000000' />
                        </span>
                      </div>
                    </div>
                  </Link>
                  ))
              }
        </Slider>
    </div>
    )
}
