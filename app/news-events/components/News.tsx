"use client";

import  Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";
import { Post } from '@/type';
import { urlFor } from "@/lib/client";
import Link from "next/link";
import { any } from "zod";


interface NewsProps {
    allBlogData: Post[]
}

export default function News({ allBlogData }: NewsProps) {

    const settings = {
        infinite: true,
        speed: 400,
        autoplay: true,
        centerMode: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        appendDots: (dots: any) => (
            <div
              style={{
                zIndex: "20px",
                position: 'absolute',
                bottom: '80px',
                padding: "5px",
                color: 'black',
                margin: '0px',
              }}
            >
              <ul style={{ color: 'black'}}> {dots} </ul>
            </div>
          ),
          customPaging: (i: any) => (
            <div
              style={{
                zIndex: "20px",
                position: 'absolute',
                top: '100px',
                color: "black",
                borderRadius: '50%',
                width: '9px',
                marginRight: '1px',
                marginTop: '2rem',
                height: '9px',
                backgroundColor: '#A0A0A0'
              }}
            >
            </div>
          ),
        responsive: [
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
    }
    
  return (
    <div className='flex w-full h-full box-border relative pt-6  mb-8 mx-auto mt-0 justify-center items-center'>
        <Slider {...settings} className="w-[100%]   gap-6 h-full flex" >
            {allBlogData.map((item, idx: number) => (
            <Link href={`/discover/${item.categories[0].slug.current}/${item.slug.current}`} key={idx} className="w-[100%] h-full flex flex-col flex-1 justify-center px-2  md:px-5  items-center gap-6">
                <div className='w-full lg:h-[390px] papa relative h-[200px] sm:h-[250px] md:h-[290px] overflow-hidden  rounded-xl'>
                    <Image
                        src={urlFor(item.mainImage).url()}
                        width={400}
                        height={390}
                        className='w-full h-full object-cover object-center'
                        alt='service-image'
                    />
                      <div className="absolute p-5 flex flex-col lg:w-[80%]  w-full justify-start gap-5 z-10 lg:bottom-5 bottom-0 left-0 lg:left-5 rounded-xl rounded-b-none lg:rounded-b-xl bg-white bg-opacity-70 ">
                        <p className=" lg:text-[24px] text-[18px] leading-[18px] lg:leading-[24px] font-semibold text-customBlack">{item.title}</p>
                        <p className="hidden lg:block md:text-base lg:leading-[24px] text-sm leading-[20px] text-[#545454] font-medium">{item.description}</p>
                    </div>
                </div>
            </Link>
            ))}
        </Slider>
    </div>  
  )
}
