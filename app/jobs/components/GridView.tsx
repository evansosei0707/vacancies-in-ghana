"use client";

import { motion } from 'framer-motion';

import React from 'react';
import { jobs } from '@/app/data/jobList';
import Image from 'next/image';
import { CiBookmark } from "react-icons/ci";
import { RxDotFilled } from "react-icons/rx";
import Link from 'next/link';
import Skeleton from './Skeleton';

interface filteredJobsProps  {
  filteredJobs: jobListType[]
}

export default function GridViewPage({ filteredJobs }: filteredJobsProps) {

  function timeAgo(postedDate: string):string {
    // Convert the posted date string to a Date object
    const posted: Date = new Date(postedDate);

    // Get the current date
    const now: Date = new Date();
  
    // Calculate the time difference in milliseconds
    const timeDiff: number = Number(now) - Number(posted);
  
    // Calculate the time difference in seconds, minutes, hours, and days
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
  
    // Format the result based on the time difference
    if (years > 0) {
      return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    } else if (months > 0) {
      return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else if (days > 0) {
      return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else if (minutes > 0) {
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else {
      return `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;
    }
  }

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
              <div className='flex items-center justify-start'>
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
              </div>
              <div>
                <CiBookmark fontSize={22} color='#A0A0A0' />
              </div>
            </div>
            <div className='flex items-center justify-start'>
              <p className=' text-[#A0A0A0]/90 text-sm leading-5'>Job function: {item.company_name}</p>
            </div>
            <div className='flex items-center gap-3 justify-start w-full'>
              <p className='bg-[#f6f6f6] rounded-sm p-1 px-2 text-sm font-medium text-[#545454]/90'>{item.job_type}</p>
              <p className='bg-[#f6f6f6] rounded-sm p-1  px-2 text-sm font-medium text-[#545454]/90'>{item.work_location}</p>
              <p className='bg-[#f6f6f6] rounded-sm p-1  px-2 text-sm font-medium text-[#545454]/90'>{item.experience_level}</p>
            </div>
            <div className='flex items-center text-sm text-[#A0A0A0]/80 gap-1 justify-start'>
              <span className=' text-sm'>{timeAgo(item.time_posted)}</span>
              <RxDotFilled />
              <span className=' text-sm'>{item.applicants} applicants</span>
            </div>
            <div className='flex items-center w-full justify-between'>
              <p className=' text-base leading-6 text-mainColor'>{item.salary_range}</p>
              <Link className=' bg-mainColor rounded-md p-2 px-4 text-lg leading-[24px] text-white font-medium' href={`/jobs/${item.title}/${item.id}}`}> Apply now</Link>
            </div>
          </motion.div>
        ))
      }
    </div>
  )
}
