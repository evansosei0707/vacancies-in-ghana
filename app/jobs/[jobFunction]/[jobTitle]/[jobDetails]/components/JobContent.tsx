import Image from 'next/image';
import React from 'react';
import tagImage from "@/public/tag.png"
import Link from 'next/link';
import { RxDotFilled } from 'react-icons/rx';
import JobContentDetails from './JobContentDetails';
import SimilarJobs from './SimilarJobs';
import { jobListType } from '@/type';

interface JobContentProps {
  singleJobData: jobListType 
  jobDetails: string,
}



export default function JobContent({ singleJobData, jobDetails }: JobContentProps) {
  return (
    <section className=' w-full bg-white flex-col gap-10 flex justify-start items-start h-full'>
        <div className='flex w-full justify-start py-6 px-4 md:px-7  lg:px-10 gap-4 flex-wrap items-center'>
          <div className=' whitespace-nowrap flex  items-center justify-start gap-2'>
            <span className=' w-[24px] h-[24px]'>
                <Image
                  src={tagImage}
                  alt='tag icon'
                  className='w-full h-full object-cover'
                />
            </span>
            <RxDotFilled color="black" /> 
          </div>
            <div className=' whitespace-nowrap flex items-center justify-start gap-2'>
              <Link className='text-mainColor text-base leading-[16px]' href={`/jobs/${singleJobData?.jobFunction}`}>{singleJobData.jobFunction}</Link>
              <RxDotFilled color="black" />
            </div>
            <div className=' whitespace-nowrap flex items-center justify-start gap-2'>
              <Link className='text-mainColor text-base leading-[16px]' href={`/jobs/${singleJobData?.jobFunction}/${singleJobData.title}`}>{singleJobData.title}</Link>
              <RxDotFilled color="black" />
            </div>
            <div className=' whitespace-nowrap flex items-center justify-start gap-2'>
              <Link className='text-mainColor text-base leading-[16px]' href={`/jobs/${singleJobData?.job_type}`}>{singleJobData.job_type}</Link>
              <RxDotFilled color="black" />
            </div>
            <div className=' whitespace-nowrap flex items-center justify-start gap-2'>
              <p className='text-mainColor text-base leading-[16px]' >{singleJobData?.experience_level}</p>
              <RxDotFilled color="black" />
            </div>
            <div className=' whitespace-nowrap flex items-center justify-start gap-2'>
              <Link className='text-mainColor text-base leading-[16px]' href={`/jobs/${singleJobData?.work_location}`}>{singleJobData.work_location}</Link>
              <RxDotFilled color="black" />
            </div>
            <div className=' whitespace-nowrap flex items-center justify-start gap-2'>
              <Link className='text-mainColor text-base leading-[16px]' href={`/jobs/${singleJobData?.company_location}`}>{singleJobData.company_location}</Link>
              <RxDotFilled color="black" />
            </div>
        </div>
        <div className='flex flex-col lg:flex-row w-full items-start gap-8 lg:gap-1 h-full px-4 md:px-7 lg:px-10 justify-start'>
          <JobContentDetails singleJobData={singleJobData} />
          <SimilarJobs jobDetails={jobDetails} singleJobData={singleJobData} />
        </div>
    </section>
  )
}
