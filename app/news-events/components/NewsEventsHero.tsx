import React from 'react';
import groupImage from '@/public/libraryGirl.jpg'
import Image from 'next/image';

export default function NewsEventsHero() {
  return (
    <section className=' w-full bg-[#F5FBFF] px-4 md:px-8 lg:px-6 min-[1129px]:px-10 xl:px-12  flex py-14 flex-col items-center justify-start gap-12 '>
        <h1 className=' text-[22px] leading-[24px] font-medium md:pb-4 text-customBlack text-center'>Coperate news and events</h1>
        <div className=' w-full flex flex-col px-4 gap-10 md:gap-0 md:px-7  lg:px-3 items-center justify-start lg:items-start lg:justify-center lg:flex-row '>
            <div className=' flex flex-col justify-start items-start gap-6 w-full lg:w-1/2 lg:pt-7'>
                <h2 className=' md:text-[48px] text-[32px] leading-[40px] md:leading-[57px] text-customBlack font-medium'>Get the Latest Company News & Industry Insights</h2>
                <p className=' md:text-[24px] text-xl leading-[25px] md:leading-[28px] text-customBlack'>
                 Get the Latest Company News & Industry Insights, learn more about how we are revolutionizing the industry.
                </p>
            </div>
            <div className=' w-full lg:w-1/2 sm:mt-10 lg:mt-0 mx-auto'>
                <div className=' mx-auto flex trap-div md:h-[450px] h-[400] md:w-[600px]  justify-start overflow-hidden rounded-2xl items-start w-full sm:max-w-[600px] '>
                    <Image
                        className="w-full h-full trap-image overflow-hidden object-cover shadow-lg"
                        src={groupImage}
                        height={450}
                        width={600}
                        alt="Three people working on a laptop"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
