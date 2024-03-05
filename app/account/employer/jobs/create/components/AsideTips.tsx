import Image from 'next/image'
import React from 'react';
import MtnLogo from "@/public/image 26.png"
import JobTips from './JobTips';

export default function AsideTips() {
  return (
    <div className='w-full lg:w-[25%] flex flex-col bg-transparent items-start justify-start gap-6'>
            <div
                className=' bg-white w-full flex-1 rounded-md flex flex-col items-start p-4 gap-6 justify-center'>
                    <div className='flex items-center w-full justify-start'>
                        <div className='flex items-start gap-3 justify-start'>
                            <div className='w-[51px] h-[51px]'>
                                <Image
                                    src={MtnLogo}
                                    alt={`sample job ui preview-logo`}
                                    className='w-full h-full object-cover object-center'
                                />
                            </div>
                            <div className='flex flex-col items-start justify-center gap-1'>
                                <h2 className='text-[24px] leading-[24px] text-[#1A1A1A] font-medium'>Project Manager</h2>
                                <div className=' text-sm flex items-center justify-center gap-1 text-[#545454]/90 leading-[14px]'>
                                    <p className=' text-[20px] leading-[14px]'>MTN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-start'>
                            <p className=' text-[21px] leading-[14px] text-[#545454]'>Accra, Ghana</p>
                    </div>
                    <div className='flex items-center gap-3 justify-start w-full'>
                        <p className='bg-[#f6f6f6] rounded-sm p-1 px-2 text-[15px] font-medium text-[#545454]/90'>Full Time</p>
                        <p className='bg-[#f6f6f6] rounded-sm p-1  px-2  text-[15px] font-medium text-[#545454]/90'>Remote</p>
                        <p className='bg-[#f6f6f6] rounded-sm p-1  px-2  text-[15px] font-medium text-[#545454]/90'>2 - 3 years</p>
                    </div>
            </div>
            <JobTips />
        </div>
  )
}
