import React from 'react';
import { PiShareNetworkLight } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';
import { RxDotFilled } from 'react-icons/rx';
import { IoLocationOutline } from "react-icons/io5";
import { timeAgo } from '@/app/lib/function';
import descriptionSample from "@/public/linkedinJobs.png"
import { jobListType } from '@/type';



interface JobContentDetailsProps {
    singleJobData: jobListType
}

export default function JobContentDetails({ singleJobData }: JobContentDetailsProps) {
  return (
    <div className=' w-full  h-full flex-col  lg:px-2 items-start lg:pr-10 justify-start'>
        <div className='flex w-full items-start sm:justify-between flex-col md:justify-start justify-start gap-3 sm:flex-row  md:flex-col'>
            <div className='flex w-full sm:w-max md:w-full md:justify-between md:flex-row gap-4 flex-col justify-start items-start'>
                <h1 className=' md:text-[32px] text-[27px] leading-[27px] md:leading-[32px] font-medium text-customBlack'>{singleJobData.title}</h1>
                <div className='flex items-start justify-center gap-3'>
                    <Link href={`/`} className=' w-[124px] flex items-center justify-center h-[44px] text-white rounded-[8px] font-medium bg-mainColor text-lg leading-[24px]'>
                        Apply now
                    </Link>
                    <div className=' border h-[44px] text-mainColor cursor-pointer px-3 rounded  p-2'>
                        <FaBookmark fontSize={22} />
                    </div>
                    <div className=' border h-[44px] cursor-pointer px-3 rounded p-2'>
                        <PiShareNetworkLight fontSize={22} />
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-start items-center gap-1'>
                <div className='w-[90px] h-[90px]'>
                    <Image
                        src={singleJobData.logo_url}
                        alt={`${singleJobData.company_name}-profile picture `}
                        width={90}
                        height={90}
                        className='flex w-full h-full object-cover object-center'
                    />
                </div>
                <div className='flex flex-col items-start justify-start gap-2'>
                    <div className=' text-sm flex items-center justify-center gap-1 text-[#545454]/90 leading-[14px]'>
                        <Link href={`/company/${singleJobData.company_name}`} className='text-[24px] md:text-xl leading-[22px] md:leading-[24px] font-medium text-mainColor'>{singleJobData.company_name}</Link>
                        <RxDotFilled color='#545454' />
                        <Link href={`/jobs/${singleJobData.company_location}`} className='flex justify-start gap-2 items-center'>
                            <IoLocationOutline />
                            {singleJobData.work_location === "Remote" ? (
                                <p className='text-sm leading-4' >Remote</p>
                            ): (
                                <p className='text-sm leading-4'>{singleJobData.company_location}</p>
                            )}
                        </Link>
                    </div>
                    <div className='flex items-center gap-3 justify-start w-full'>
                        <p className='bg-[#f6f6f6] rounded-sm p-1 px-2 text-sm font-medium text-[#545454]/90'>{singleJobData.job_type}</p>
                        <p className='bg-[#f6f6f6] rounded-sm p-1  px-2 text-sm font-medium text-[#545454]/90'>{singleJobData.work_location}</p>
                        <p className='bg-[#f6f6f6] rounded-sm p-1  px-2 text-sm font-medium text-[#545454]/90'>{singleJobData.experience_level}</p>
                    </div>
                    <div className='flex items-center text-sm text-[#A0A0A0]/80 gap-1 justify-start'>
                        <p className=' text-base leading-6 pr-2 text-mainColor'>{singleJobData.salary_range}</p>
                        <span className=' text-sm'>{timeAgo(singleJobData.time_posted)}</span>
                        <RxDotFilled  />
                        <span className=' text-sm'>{singleJobData.applicants} applicants</span>
                    </div>
                </div>
            </div>
        </div>
        <div className=' w-full py-8 min-h-[400px]'>
            <Image 
                alt='job description image sample'
                src={descriptionSample}
                className='h-full w-max'

            />
        </div>
        <div className='flex items-end w-full h-full justify-start'>
            <div className='flex items-start justify-center gap-3'>
                <Link href={`/`} className=' w-[124px] flex items-center justify-center h-[44px] text-white rounded-[8px] font-medium bg-mainColor text-lg leading-[24px]'>
                    Apply now
                </Link>
                <div className=' border h-[44px] text-mainColor rounded  p-2'>
                    <FaBookmark fontSize={22} />
                </div>
                <div className=' border h-[44px] rounded p-2'>
                    <PiShareNetworkLight fontSize={22} />
                </div>
            </div>
        </div>
    </div>
  )
}
