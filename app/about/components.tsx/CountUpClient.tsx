"use client";

import { jobStatsType } from '@/type';
import React from 'react'
import CountUp, { useCountUp } from 'react-countup'

interface CountUpClientProps {
  jobStats: jobStatsType
}

export default function CountUpClient({ jobStats }:CountUpClientProps) {

  const dataString = jobStats.applicantsPerPost;

// Split the string by the "-" character
  const numbers = dataString.split("-");

// Convert each element to a number and assign to separate variables
  const num1 = Number(numbers[0]);
  const num2 = Number(numbers[1]);

  return (
    <div className=' bg-[#e5f1f2] w-full grid grid-cols-1 md:py-7 py-4 md:my-24 sm:grid-cols-2 gap-9 lg:gap-4 lg:grid-cols-4 place-items-center px-2 '>
        <div className=' flex items-center  flex-col justify-center text-[40px] text-mainColor gap-1 w-full'>
          <span className='font-semibold'>
            <CountUp
              end={jobStats.jobsPosted}
              suffix="+"
              delay={0}
              duration={3.75}
              start={0}
              enableScrollSpy
            />
          </span>
          <p className=' text-[30px] leading-[37px] text-[#545454]'>Jobs Posted</p>
        </div>
        <div className=' flex items-center flex-col justify-center text-[40px] text-mainColor gap-1 w-full'>
          <span className='font-semibold flex items-center justify-between '>
            <CountUp
              end={num1}
              delay={0}
              duration={3.75}
              start={0}
              enableScrollSpy
            />
            -
            <CountUp
              end={num2}
              delay={3.75}
              duration={3.75}
              start={0}
              enableScrollSpy
            />
          </span>
          <p className=' text-[30px] leading-[37px] text-[#545454]'>Applicants per post</p>
        </div>
        <div className=' flex items-center flex-col justify-center text-[40px] text-mainColor gap-1 w-full'>
          <span className='font-semibold'>
            <CountUp
              end={jobStats.jobMatches}
              suffix="+"
              delay={0}
              duration={3.75}
              start={0}
              enableScrollSpy
            />
          </span>
          <p className=' text-[30px] leading-[37px] text-[#545454]'>Jobs Matches</p>
        </div>
        <div className=' flex items-center flex-col justify-center text-[40px] text-mainColor gap-1 w-full'>
          <span className='font-semibold'>
            <CountUp
              end={jobStats.members}
              delay={0}
              duration={2.75}
              start={0}
              enableScrollSpy
            />
          </span>
          <p className=' text-[30px] leading-[37px] text-[#545454]'>Members</p>
        </div>
        
    </div>
  )
}
