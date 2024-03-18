import Image from 'next/image'
import gridImage1 from "@/public/doctor.jpg";
import gridImage2 from "@/public/vig.png";
import React from 'react'
import { GiSoundWaves } from "react-icons/gi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { client, urlFor } from '@/lib/client';
import { outsourcingPageQuery } from '@/app/lib/query';
import { listingType, outSourceDataType, servicesListingType } from '@/type';

async function getData() {
    const data =  await client.fetch(outsourcingPageQuery);

    return data;
}

export default async function outsourcePage() {
    const outsourceData: outSourceDataType = await getData();

  return (
    <main className='w-full flex items-center flex-col justify-start h-full'>
        <section className=' bg-[#F5FBFF] lg:px-12 px-4 md:px-8 py-8 w-full min-h-[536px] flex flex-col min-[850px]:flex-row items-start justify-start min-[850px]:justify-center min-[850px]:items-center gap-8'>
            <div className='flex flex-col items-start justify-center gap-4 w-full min-[850px]:w-1/2'>
                <h1 className=' lg:text-[80px] text-[45px] md:text-[58px] md:leading-[65px] leading-[55px] lg:leading-[96px] uppercase text-black font-semibold'>{outsourceData.bigTitle.bigText}</h1>
                <p className=' text-[#545454] pr-10 md:pr-5 lg:pr-0 text-[24px] leading-[36px]'>{outsourceData.bigTitle.mediumText}</p>
            </div>
            <div className=' relative flex min-[850px]:w-1/2 w-full items-end gap-4 min-h-[424px] min-[850px]:min-w-[542px]'>
                <div className=' bg-mainColor absolute max-w-[295px] top-2 right-4 p-2 rounded-md text-white text-[32px] leading-[30px] font-medium'>
                    <p>{outsourceData.bigTitle.smallText}</p>
                </div>
                <div className='flex flex-col w-full min-[850px]:w-[60%] items-end justify-start gap-2 '>
                    <div className='rounded-lg overflow-hidden h-[306px] w-full'>
                        <Image
                            src={urlFor(outsourceData.bigTitle.image1).url()}
                            alt='outsourcing main image'
                            width={298}
                            height={306}
                            className='w-full h-full object-cover object-center'
                        />
                    </div>
                    <div className=' bg-[#e6e9eb] w-[80%] flex items-center justify-center gap-5 h-[72px] rounded-lg '>
                        <span className=' border-2 border-black p-2 rounded-full'>
                            <TfiHeadphoneAlt fontSize={26} />
                        </span>
                        <GiSoundWaves fontSize={100} />
                    </div>
                </div>
                <div className='flex items-end  w-[40%] justify-center'>
                    <div className='rounded-lg flex justify-self-end overflow-hidden h-[260px] w-full'>
                        <Image
                            src={urlFor(outsourceData.bigTitle.image2).url()}
                            alt='outsourcing secondary image'
                            width={222}
                            height={260}
                            className='w-full h-full object-cover object-center'
                        />
                    </div>
                </div>
            </div>
        </section>
        <section className='flex flex-col items-center justify-start py-11 gap-16 w-full h-full'>
            <div className='w-full h-full flex flex-col mt-11  lg:px-11 md:px-8 px-6 lg:flex-row items-center justify-center gap-4 md:gap-12 lg:gap-14'>
                <div className='flex flex-col items-center justify-center gap-3 w-full  '>
                    <p className=' md:text-[26px] text-[24px] leading-[48px] md:leading-[48px] text-left tracking-wide text-[#444444]'>
                        {outsourceData.beneathOutsource.BOPara}
                    </p>
                </div>
                <div className=' flex w-full  relative flex-col min-[410px]:flex-row items-center gap-3 md:gap-0 justify-center'>
                    <div className='w-full h-[386px] shadow-lg flex rounded-tl-lg rounded-bl-lg items-center justify-center  lg:w-1/2 z-20 overflow-hidden'>
                        <Image
                        width={276}
                        height={386}
                        src={urlFor(outsourceData.beneathOutsource.primaryImage).url()}
                        alt='outsourcing image'
                        className='w-full h-full object-cover object-center'
                        />
                    </div> 
                    <div className='w-full md:h-[308px] h-[386px] rounded-tr-lg rounded-br-lg shadow-lg rounded-lg lg:w-1/2 z-20 overflow-hidden'>
                        <Image
                        width={222}
                        height={386}
                        src={urlFor(outsourceData.beneathOutsource.secondaryImage).url()}
                        alt='outsourcing  image'
                        className='w-full h-full object-cover object-center'
                        />
                    </div> 
                </div>
            </div>
            <div className='flex w-full md:w-[90%] lg:w-[85%] my-10 flex-col px-5 md:px-8 lg:px-14 items-center justify-center gap-8 mx-auto'>
                <h2 className=' text-[32px] leading-[48px] text-customBlack font-semibold'>{outsourceData.chooseOutsource.chooseQuestion}</h2>
                <div className=' grid grid-cols-1 my-6 w-full gap-x-12  place-items-center md:grid-cols-2 gap-8'>
                    {
                        outsourceData.chooseOutsource.listing.map((item: listingType, idx) => (
                            <div key={idx} className=' rounded-sm border w-full min-h-[170px] bg-[#FAFCFC] flex justify-start items-start gap-4 p-3'>
                                <div className=' border border-mainColor p-2 rounded-full overflow-hidden h-[75px] w-[84px]'>
                                    <div className='w-full h-full rounded-full overflow-hidden'>
                                        <Image
                                        src={urlFor(item.listLogo).url()}
                                        height={73}
                                        width={82}
                                        alt={`${item.title}-image in outsourcing jobs`}
                                        className='w-full h-full object-contain'
                                        />
                                    </div>
                                </div>
                                <div className=' flex flex-col justify-start gap-2 items-start w-full'>
                                        <p className=' text-[32px] leading-[38px] font-medium text-[#545454]'>{item.title}</p>
                                        <p className=' text-[24px] leading-[29px] text-[#545454]'>{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="w-full flex p-4 md:p-9  my-8 mt-5 gap-9 flex-col items-center justify-start">
                    <h2 className=" font-semibold text-[32px] text-center leading-[38px] text-black">{outsourceData.outsourceServices.servicesHeaderText}</h2>
                <div className=" grid grid-cols-1 w-full md:grid-cols-2 gap-6 lg:grid-cols-3 justify-start">
                    {
                        outsourceData.outsourceServices.servicesListing.map((item: servicesListingType, idx) => (
                            <div key={idx} className=" bg-[#DAE8E833]/20 p-6 w-full flex flex-col items-start justify-center space-y-6 rounded-sm">
                                <h3 className="text-[24px] text-left leading-5 font-semibold text-customBlack">{item.title}</h3>
                                <p className=' text-base text-left text-customBlack/50 font-medium leading-5'>{item.description}</p>
                                <Link href={``} className="flex parent-arrow items-center justify-end cursor-pointer font-medium gap-4 text-mainColor text-[17px] leading-5 w-full">
                                    <span>Read more</span>
                                    <HiArrowRight className="child-arrow" color="#008080"  />
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='w-full h-full flex flex-col mt-11  lg:px-11 md:px-8 px-6 lg:flex-row items-start  justify-start gap-4 md:gap-12 lg:gap-14'>
                <div className='w-full flex flex-col items-start gap-10'>
                    <div className='flex flex-col items-start justify-start gap-3 w-full'>
                        <h3 className=' text-[40px] leading-[48px] font-medium text-customBlack'>{outsourceData.partnerWithUs.partnerTitle}</h3>
                        <p className=' md:text-[26px] text-[24px] leading-[29px] md:leading-[31px] text-left tracking-wide text-[#545454]'>{outsourceData.partnerWithUs.partnerPara1}</p>
                    </div>
                    <div className='flex flex-col items-start gap-6 bg-[#e9e9e9] rounded-[8px] w-full p-3 justify-center'>
                        <p className=' text-[26px] leading-[31px] text-[#545454]'>{outsourceData.partnerWithUs.partnerPara2}</p>
                        <Link href='/contact-us' className=' bg-mainColor flex items-center justify-center text-white text-[20px] leading-[24px]  font-semibold rounded-[8px] w-[182px] h-[44px]'>Contact us</Link>
                    </div>
                </div>
                <div className=' flex w-full  relative flex-col min-[410px]:flex-row items-center gap-3 md:gap-0 justify-center'>
                    <div className='w-full h-[386px] shadow-lg flex rounded-tl-lg rounded-bl-lg items-center justify-center  lg:w-1/2 z-20 overflow-hidden'>
                        <Image
                        width={276}
                        height={386}
                        src={urlFor(outsourceData.partnerWithUs.primaryImage).url()}
                        alt='about us main image'
                        className='w-full h-full object-cover object-center'
                        />
                    </div> 
                    <div className='w-full md:h-[308px] h-[386px] rounded-tr-lg rounded-br-lg shadow-lg rounded-lg lg:w-1/2 overflow-hidden'>
                        <Image
                        width={222}
                        height={386}
                        src={urlFor(outsourceData.partnerWithUs.secondaryImage).url()}
                        alt='about us main image'
                        className='w-full h-full object-cover object-center'
                        />
                    </div> 
                </div>
            </div>
        </section>
    </main>
  )
}
