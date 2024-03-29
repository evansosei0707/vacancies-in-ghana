import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import topMatchImage from '@/public/topMatch.png'
import TopMatchForm from './components/TopMatchForm'
import { IoMdCheckmarkCircle } from "react-icons/io";
import one from '@/public/oneTwo.png'
import two from '@/public/twoOne.png'
import NewsLetter from '@/app/discover/[careerCategory]/components/NewsLetter'


export default function page() {

    const topMatchFeatures = [
        {
            title: 'Efficiency',
            description: ' Saves time and resources by quickly identifying candidates who closely match the job criteria',
        },
        {
            title: 'Speed',
            description: 'Accelerates the hiring process by presenting a curated list of top candidates within a short timeframe',
        },
        {
            title: 'Enhanced Visibility',
            description: ' Increases the visibility of job ads, attracting a larger pool of qualified candidates.',
        },
        {
            title: 'Quality',
            description: '  Ensures high-quality candidates by thoroughly evaluating their capabilities.',
        },
    ]

  return (
    <main className='w-full  mx-auto flex flex-col items-start justify-center'>
        <div className=' flex w-full flex-col my-7 md:py-12 min-[890px]:flex-row px-4 md:px-8 lg:px-11 mx-auto justify-start items-center gap-8 md:items-center md:justify-center'>
            <div className='flex flex-col lg:w-[55%] items-start justify-start gap-5 w-full'>
                <h1 className=' lg:text-[48px] text-[36px] md:leading-[57px] leading-[40px] lg:w-[95%] text-customBlack font-semibold'>Efficiently identify and prioritize qualified candidates.</h1>
                <p className=' text-[24px] leading-[28px] lg:w-[60%] text-customBlack'>Streamlined Candidate Selection to Rapidly Identify Top Talent</p>
                <Link href='/contact-us'  className='bg-mainColor text-white text-lg leading-[24px] font-semibold rounded-[8px] px-[28px] py-[16px] text-center'>
                    Get Started
                </Link>
            </div>
            <div className='w-full mx-auto lg:w-[45%] flex items-center justify-center '>
            <div className='w-full md:w-[498px]  h-[497px]'>
                <Image
                    src={topMatchImage}
                    height={500}
                    width={700}
                    className='w-full h-full'
                    alt='top match main image'
                />
            </div>
        </div>
        </div>
        <div className=' w-full px-4 my-8 mx-auto md:my-10 lg:my-16 md:text-[40px] leading-[40px] text-[32px] md:leading-[48px] text-[#545454] md:px-8 lg:px-12 items-start flex justify-center'>
            <p className='md:text-[32px] text-[28px] leading-[33px] md:leading-[38px] w-full lg:w-[60%] text-customBlack font-semibold text-center'>
                Fast-Track Talent Discovery by Strategic Approach to Prioritizing Top Candidates
            </p>
        </div>
        <div className='flex flex-col w-full my-5 min-[868px]:my-10 lg:my-16 min-[868px]:flex-row px-4 min-[868px]:px-8 lg:px-11 justify-center items-center gap-10 md:gap-6'>
            <TopMatchForm />
            <div className='bg-white md:px-8 lg:px-14 w-full flex flex-col items-start justify-center gap-5'>
                {
                    topMatchFeatures.map((item, idx) => (
                        <div key={idx} className='flex items-start justify-start gap-2 w-full'>
                            <span className='whitespace-nowrap'>
                                <IoMdCheckmarkCircle fontSize={30} color='#48b02c' />
                            </span>
                            <p className='text-[24px] leading-[30px] text-customBlack/80'>
                                <span className='font-medium text-black'>{item.title}:</span>
                                {item.description}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="w-full lg:w-full flex p-4  rounded-lg lg:rounded-none mx-auto  my-8 gap-9 flex-col lg:flex-row items-center justify-center">
        <div className="flex items-center justify-center gap-10 md:gap-6  lg:flex-row flex-col w-full md:w-[90%]">

            <div className="flex flex-1 w-full h-[411px] overflow-hidden lg:w-1/2 rounded-lg ">
                <iframe width="100%" height="411" src="https://www.youtube.com/embed/YldXMrwyFy0?si=o8dS-4lkKPV42sUg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div> 
            <div className="flex items-start px-4 md:px-8 lg:px-11 justify-center flex-col gap-5 w-full lg:w-1/2">
                <h2 className=" md:text-[40px] text-[34px] leading-[40px] md:leading-[48px] text-text-black font-medium ">
                    How Top Match works
                </h2>
                <p className=" text-xl leading-[24px] text-black">
                    Our Matching System analyzes your job description, filtering candidates who closely align with your criteria and evaluating them rigorously for capability. This ensures you attract top-tier talent with enhanced job ad visibility. Within 10 working days, you receive a curated list of the top 10 qualified and tested candidates.
                </p>
                <div className=' flex justify-start gap-4 items-center w-full'>
                    <div className='w-[50px] h-[50px] overflow-hidden'>
                        <Image
                            src={one}
                            alt='first image'
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className='flex items-start flex-col gap-1 w-full'>
                        <p className=' text-[20px] leading-[24px] font-semibold text-black'>Quality Assurance and Speed</p>
                        <p className=' text-lg leading-[21px] text-[#444444]'>Thorough evaluation and prominent ads attract top candidates fast.</p>
                    </div>
                </div>
                <div className=' flex justify-start gap-4 items-center w-full'>
                    <div className='w-[50px] h-[50px] overflow-hidden'>
                        <Image
                            src={two}
                            alt='first image'
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className='flex items-start flex-col gap-1 w-full'>
                        <p className=' text-[20px] leading-[24px] font-semibold text-black'>Efficiency in Candidate Selection</p>
                        <p className=' text-lg leading-[21px] text-[#444444]'>Efficient selection via thorough matching and testing.</p>
                    </div>
                </div>
              
            </div>
        </div>
    </div>
    <NewsLetter />
    </main>
  )
}
