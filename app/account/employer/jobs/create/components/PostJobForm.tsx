"use client"

import React, { useState } from 'react';
import PostFormStep1 from './PostFormStep1';
import PostFormStep2 from './PostFormStep2';
import Link from "next/link";
import vigLogo from "@/public/Frame 22 (1).png";
import Image from 'next/image';
import employerProfilePic from "@/public/Rectangle 122.png";



const PostJobForm = () => {
   const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
      setCurrentStep(currentStep + 1);
      };

    return (
      <div className='w-full  bg-white rounded-lg flex flex-col items-start  h-full justify-start'>
        <div className=' border-b border-[#D2D2D2] w-full flex justify-between py-2 px-5'>
            <div className='flex gap-5 justify-center items-center'>
                <div className='flex items-center flex-col md:flex-row justify-center gap-2'>
                    <div className=' h-[32px] w-[32px] overflow-hidden rounded-md'>
                        <Image
                            src={employerProfilePic}
                            alt='employer profile picture'
                            className='w-full h-full object-cover object-center'
                        />
                    </div>
                    <p className=' text-[24px] whitespace-nowrap leading-[24px] font-medium text-[#444444]'>John Doe</p>
                </div>
                <div className='flex items-start flex-col justify-center '>
                    <h5 className='text-xs leading-[24px] text-[#6E6E6E]'>Role</h5>
                    <p className=' text-base leding-[24px] font-medium text-[#6E6E6E]'>Chief Executive Office</p>
                </div>
            </div>
            <Link href='/' className=' border border-mainColor rounded px-7 my-auto text-sm text-center flex items-center h-8 tracking-wide leading-[24px] font-medium text-mainColor'>
                Draft
            </Link>
        </div>
        {currentStep === 1 && <PostFormStep1 handleNext={handleNext} />}
        {currentStep === 2 && <PostFormStep2  handleNext={handleNext} />}
      </div>
       
    )
  }

export default PostJobForm;
