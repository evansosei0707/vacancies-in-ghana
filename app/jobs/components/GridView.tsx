"use client";

import { motion } from 'framer-motion';
import { jobListType } from "@/type";

import React from 'react';
import { jobs } from '@/app/data/jobList';
import Image from 'next/image';
import { CiBookmark } from "react-icons/ci";
import { RxDotFilled } from "react-icons/rx";
import Link from 'next/link';
import Skeleton from './Skeleton';
import { timeAgo } from '@/app/lib/function';

interface filteredJobsProps  {
  filteredJobs: jobListType[]
}

export default function GridViewPage({ filteredJobs }: filteredJobsProps) {

 

if (!filteredJobs) {
  return (
    <Skeleton />
  )
}

  return (
    <div className='grid min-[1050px]:grid-cols-3 gap-4 w-full h-full bg-[#ededed] place-items-center md:grid-cols-2 p-6 grid-cols-1'>
      {
        filteredJobs.map((item, idx) => (
          <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.6, opacity: 0 }}
          transition={{ duration: 0.2 }}
            key={idx} className=' bg-white w-full flex-1 rounded-md flex flex-col items-start p-3 gap-4 justify-center'>
            <div className='flex items-center w-full justify-between'>
              <Link href={`/jobs/${item.jobFunction}/${item.title}/${item.id}`} className='flex items-center justify-start'>
                <div className='w-[38px] h-[38px]'>
                  <Image
                    src={item.logo_url}
                    alt={`${item.company_name}-logo`}
                    width={38}
                    height={38}
                  />
                </div>
                <div className='flex flex-col items-start justify-center gap-1'>
                  <h2 className='text-xl leading-5 text-[#1A1A1A] font-medium'>{item.title}</h2>
                  <div className=' text-sm flex items-center justify-center gap-1 text-[#545454]/90 leading-[14px]'>
                    <span>{item.company_name}</span>
                    <RxDotFilled color='#545454' />
                    <span>{item.company_location}</span>
                  </div>
                </div>
              </Link>
              <div>
                <CiBookmark fontSize={22} color='#A0A0A0' />
              </div>
            </div>
            <div className='flex items-center justify-start'>
              <p className=' text-[#A0A0A0]/90 text-sm leading-5'>Job function: {item.jobFunction}</p>
            </div>
            <div className='flex items-center gap-3 justify-start w-full'>
              <p className='bg-[#f6f6f6] rounded-sm p-1 px-2 text-sm font-medium text-[#545454]/90'>{item.job_type}</p>
              <p className='bg-[#f6f6f6] rounded-sm p-1  px-2 text-sm font-medium text-[#545454]/90'>{item.work_location}</p>
              <p className='bg-[#f6f6f6] rounded-sm p-1  px-2 text-sm font-medium text-[#545454]/90'>{item.experience_level}</p>
            </div>
            <div className='flex items-center text-sm text-[#A0A0A0]/80 gap-1 justify-start'>
              <span className=' text-sm'>{timeAgo(item.time_posted)}</span>
              <RxDotFilled  />
              <span className=' text-sm'>{item.applicants} applicants</span>
            </div>
            <div className='flex items-center w-full justify-between'>
              <p className=' text-base leading-6 text-mainColor'>{item.salary_range}</p>
              <Link className=' bg-mainColor rounded-md p-2 px-4 text-lg leading-[24px] text-white font-medium' href={`/jobs/${item.jobFunction}/${item.title}/${item.id}`}> Apply now</Link>
            </div>
          </motion.div>
        ))
      }
    </div>
  )
}
