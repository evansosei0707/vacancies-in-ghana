"use client"

import React, { useState } from 'react';
import SignUpFormStep1 from './SignUpFormStep1';
import SignUpFormStep2 from './SignUpFormStep2';
import Link from "next/link";
import Image from 'next/image';
import vigLogo from "@/public/Frame 22 (1).png";



const SignUpForm = () => {
   const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
      setCurrentStep(currentStep + 1);
      };

    return (
      <div className='w-full lg:w-[65%] items-center mt-6 flex flex-col h-full justify-center'>

        <div className='flex flex-col justify-start items-center gap-4'>
          <Link href="/" className=' w-[312px] h-[35px]'>
            <Image
              src={vigLogo}
              alt='vigLogo'
              width={312}
              height={35}
            />
          </Link>
          <p className=' md:text-[40px] text-[30px] font-semibold text-[#1A1A1A] leading-[48px]'>Create a Job Seeker Account</p>
          <p className=' text-[32px] leading-[40px] font-medium text-[#1A1A1AB2]/70'>Step {currentStep} of 2 </p>
        </div>
        <div  className='flex flex-col items-center w-full justify-center gap-4'>
          {currentStep === 1 && <SignUpFormStep1 handleNext={handleNext} />}
          {currentStep === 2 && <SignUpFormStep2  handleNext={handleNext} />}
        </div>
      </div>
       
    )
  }

export default SignUpForm;
