import { urlFor } from '@/lib/client'
import { partnerWithUsType } from '@/type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface PartnerWithUsProps {
    partnerData: partnerWithUsType
}

export default function PartnerWithUs({ partnerData }: PartnerWithUsProps) {
  return (
    <div className='w-full h-full flex flex-col mt-11  lg:px-11 md:px-8 px-6 lg:flex-row items-start  justify-start gap-4 md:gap-12 lg:gap-14'>
        <div className='w-full flex flex-col items-start gap-10'>
            <div className='flex flex-col items-start justify-start gap-3 w-full'>
                <h3 className=' text-[40px] leading-[48px] font-medium text-customBlack'>{partnerData.partnerTitle}</h3>
                <p className=' md:text-[26px] text-[24px] leading-[29px] md:leading-[31px] text-left tracking-wide text-[#545454]'>{partnerData.partnerPara1}</p>
            </div>
            <div className='flex flex-col items-start gap-6 bg-[#e9e9e9] rounded-[8px] w-full p-3 justify-center'>
                <p className=' text-[26px] leading-[31px] text-[#545454]'>{partnerData.partnerPara2}</p>
                <Link href='/contact-us' className=' bg-mainColor flex items-center justify-center text-white text-[20px] leading-[24px]  font-semibold rounded-[8px] w-[182px] h-[44px]'>Contact us</Link>
            </div>
        </div>
        <div className=' flex w-full  relative flex-col min-[410px]:flex-row items-center gap-3 md:gap-0 justify-center'>
            <div className='w-full h-[386px] shadow-lg flex rounded-tl-lg rounded-bl-lg items-center justify-center  lg:w-1/2 z-20 overflow-hidden'>
                <Image
                width={450}
                height={550}
                src={urlFor(partnerData.primaryImage).url()}
                alt='about us main image'
                className='w-full h-full object-cover object-center'
                />
            </div> 
            <div className='w-full md:h-[308px] h-[386px] rounded-tr-lg rounded-br-lg shadow-lg rounded-bl-none rounded-tl-none rounded-lg lg:w-1/2 overflow-hidden'>
                <Image
                width={400}
                height={500}
                src={urlFor(partnerData.secondaryImage).url()}
                alt='about us main image'
                className='w-full h-full object-cover object-center'
                />
            </div> 
        </div>
    </div>
  )
}
