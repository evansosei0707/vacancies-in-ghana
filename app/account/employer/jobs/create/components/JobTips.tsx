"use client";

import  Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HiOutlineLightBulb } from "react-icons/hi";


export default function JobTips() {

    const tipsData = [
        {
            title: "Attract the perfect candidate",
            description: "Tailor your job description to the specific position and required skills"
        },
        {
            title: "Attract the perfect candidate",
            description: "Tailor your job description to the specific position and required skills"
        },
        {
            title: "Attract the perfect candidate",
            description: "Tailor your job description to the specific position and required skills"
        },
    ]


    
    const settings = {
        dots: true,
        infinite: true,
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
                bottom: '15px',
                padding: "0px",
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
                top: '5px',
                color: "white",
                borderRadius: '50%',
                width: '8px',
                padding: '0px',
                marginRight: '0px',
                marginTop: '2rem',
                height: '8px',
                backgroundColor: '#D9D9D9'
              }}
            >
            </div>
          )
      };

  return (
    <div className=" bg-white p-3 px-7 rounded-lg relative gap-5 flex justify-start flex-col w-full">
        <div className=" justify-start items-center flex w-full gap-2 ">
            <HiOutlineLightBulb color="#008080"  fontSize={30} />
            <p className=" text-[20px] leading-[19px] font-medium text-[#545454]">Tips</p>
        </div>
        <Slider {...settings} className="w-[100%]  gap-6 h-full flex">
            {

                tipsData.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-start gap-2 pb-3 w-full justify-center">
                        <p className=" text-[20px] leading-[19px] font-medium pb-4 text-[#545454]">{item.title}</p>
                        <p className=" text-[19px] leading-[19px] font-light text-[#545454]">{item.description}</p>
                    </div>
                ))
            }
        </Slider>
    </div>
  )
}
