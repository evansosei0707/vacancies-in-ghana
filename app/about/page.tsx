import { client, urlFor } from '@/lib/client'
import React from 'react'
import { aboutPageQuery } from '../lib/query'
import { aboutPageDataType } from '@/type';
import Image from 'next/image';
import CountUpClient from './components.tsx/CountUpClient';
import Leadership from './components.tsx/Leadership';

async function getData() {
    const query = await client.fetch(aboutPageQuery);

    return query;
}

export default async function aboutPage() {
    const aboutPageData: aboutPageDataType = await getData();

  return (
    <main className='w-full h-full flex flex-col justify-center items-center'>
        <div className=' w-full px-5 lg:px-10 md:w-[85%] lg:w-[75%] flex flex-col my-8 mb-3  md:mb-8  items-center justify-center gap-5'>
            <h1 className='lg:text-[64px] md:text-[50px] md:leading-[66px] lg:leading-[76px] text-[36px] leading-[46px] text-center font-bold text-customBlack'>{aboutPageData.bigTitle.bigText} <span className=' text-mainColor'>{aboutPageData.bigTitle.bigTextEdit}</span></h1>
            <p className=' md:text-[24px] md:leading-[29px] text-center text-xl leading-6 text-customBlack'>{aboutPageData.bigTitle.mediumText}</p>
        </div>
        <div className='w-full h-full flex flex-col mt-11  lg:px-11 md:px-8 px-6 lg:flex-row items-start justify-center gap-4'>
            <div className='flex flex-col items-start justify-start gap-3 w-full lg:w-1/2 '>
                <h2 className=' md:text-[40px]  md:leading-[48px] text-[34px] leading-[40px] text-customBlack font-semibold text-left'>About Us</h2>
                <p className=' md:text-[26px] text-[20px] leading-[28px] md:leading-[39px] text-left tracking-wide text-[#545454]'>
                    {aboutPageData.aboutUs.aboutUsPara}
                </p>
            </div>
            <div className='w-full h-[498px] lg:w-1/2 overflow-hidden'>
                <Image
                width={500}
                height={498}
                    src={urlFor(aboutPageData.aboutUs.image).url()}
                    alt='about us main image'
                    className='w-auto h-auto object-cover object-center'
                />
            </div> 
        </div>
        <CountUpClient jobStats={aboutPageData.jobStats} />
        <div className='flex flex-col items-center justify-start gap-16 w-full h-full'>
            <div className='w-full h-full flex flex-col mt-11  lg:px-11 md:px-8 px-6 lg:flex-row items-start justify-center gap-4 md:gap-12 lg:gap-14'>
                <div className='flex flex-col items-start justify-start gap-3 w-full  '>
                    <h2 className=' md:text-[40px]  md:leading-[48px] text-[34px] leading-[40px] text-customBlack font-semibold text-left'>Our Mission</h2>
                    <p className=' md:text-[26px] text-[20px] leading-[28px] md:leading-[39px] text-left tracking-wide text-[#545454]'>
                        {aboutPageData.ourMission.ourMissionPara}
                    </p>
                </div>
                <div className=' flex w-full  relative flex-col min-[410px]:flex-row items-center gap-3 md:gap-0 justify-center'>
                    <div className='w-full h-[386px] shadow-lg flex rounded-tl-lg rounded-bl-lg items-center justify-center  lg:w-1/2 z-20 overflow-hidden'>
                        <Image
                        width={276}
                        height={386}
                        src={urlFor(aboutPageData.ourMission.primaryImage).url()}
                        alt='about us main image'
                        className='w-full h-full object-cover object-center'
                        />
                    </div> 
                    <div className='w-full md:h-[308px] h-[386px] rounded-tr-lg rounded-br-lg shadow-lg rounded-lg lg:w-1/2 z-20 overflow-hidden'>
                        <Image
                        width={222}
                        height={386}
                        src={urlFor(aboutPageData.ourMission.secondaryImage).url()}
                        alt='about us main image'
                        className='w-full h-full object-cover object-center'
                        />
                    </div> 
                </div>
            </div>
            <div className='w-full h-full flex flex-col-reverse mt-11  lg:px-11 md:px-8 px-6 lg:flex-row items-start justify-center gap-4 md:gap-12 lg:gap-14'>
                <div className=' flex w-full  relative flex-col min-[410px]:flex-row items-center gap-3 md:gap-0 justify-center'>
                    <div className='w-full h-[386px] shadow-lg flex rounded-tl-lg rounded-bl-lg items-center justify-center  lg:w-1/2 z-20 overflow-hidden'>
                        <Image
                        width={276}
                        height={386}
                        src={urlFor(aboutPageData.ourVision.primaryImage).url()}
                        alt='our vision primary image'
                        className='w-full h-full object-cover object-center'
                        />
                    </div> 
                    <div className='w-full md:h-[308px] h-[386px] rounded-tr-lg rounded-br-lg shadow-lg rounded-lg lg:w-1/2 z-20 overflow-hidden'>
                        <Image
                        width={222}
                        height={386}
                        src={urlFor(aboutPageData.ourVision.secondaryImage).url()}
                        alt='our vision secondary image'
                        className='w-full h-full object-cover object-center'
                        />
                    </div> 
                </div>
                <div className='flex flex-col items-start justify-start gap-3 w-full  '>
                    <h2 className=' md:text-[40px]  md:leading-[48px] text-[34px] leading-[40px] text-customBlack font-semibold text-left'>Our Vision</h2>
                    <p className=' md:text-[26px] text-[20px] leading-[28px] md:leading-[39px] text-left tracking-wide text-[#545454]'>
                        {aboutPageData.ourVision.ourVisionPara}
                    </p>
                </div>
            </div>
           
        </div>
        <Leadership leadershipData={aboutPageData.leadershipAndTeam} />
        <div className='w-full items-center flex flex-col my-10 mt-12 justify-center gap-8'>
            <h2 className=' md:text-[40px] md:leading-[48px] text-[30px] leading-[35px] text-center text-customBlack'>{aboutPageData.challengeText}</h2>
            <button className=' md:w-[194px] md:h-[58px] w-[150px] h-[50px] rounded-lg  bg-mainColor text-white text-xl md:text-[24px] leading-[29px]'>
                Join our team
            </button>
        </div>
    </main>
  )
}
