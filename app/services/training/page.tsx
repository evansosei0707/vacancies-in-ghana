import Image from 'next/image'
import React from 'react'
import banner from "@/public/trainingBanner.png"
import BlogCardComponent from '@/app/Components/BlogCardComponent'
import { client } from '@/lib/client';
import { allBlogPosts } from '@/app/lib/query';
import { Post } from '@/type';
import PartnerSection from './Component/PartnerSection';

async function getAllBlogData() {
  const data = await client.fetch(allBlogPosts);

  return data;
}  


export default async function Training() {
  const trainingData: Post[] = await getAllBlogData();
  
  return (
    <main className="flex min-h-screen mx-auto justify-start flex-col h-full items-center w-full">
      <div className='w-[98%] h-[475px] my-10 overflow-hidden rounded-[12px] relative bg-gray-400'>
        <Image fill src={banner} objectFit='cover' alt='training page banner' className=' object-cover object-center' sizes="100vw" />
        <div className='p-5 w-[90%] md:w-[60%] h-max rounded-lg z-10 mx-auto backdrop-blur-sm md:backdrop-blur-md bg-black/10 absolute bottom-4 left-1/2 -translate-x-1/2 md:bottom-4 md:left-4 md:translate-x-0 flex flex-col justify-center items-center md:items-start'>
          <div className='text-white flex items-start flex-col gap-4 text-center md:text-left'>
            <h1 className=' min-[430px]:text-[48px] text-[40px] md:text-[55px] lg:text-[64px] leading-[58px] md:leading-[60px] lg:leading-[76px] font-semibold'>Welcome to The Vacancies In Ghana Training Center!</h1>
            <p className=' text-[18px] md:text-[24px] leading-[22px] md:leading-[28px]'>We believe in empowering individuals with the skills and knowledge needed to excel in today&apos;s competitive job market.</p>
          </div>
        </div>
      </div>
      <div className=' w-full mx-auto px-4 my-8 md:my-10 lg:my-12 md:text-[40px] leading-[40px] text-[32px] md:leading-[48px] text-[#545454] md:px-8 lg:px-12 items-start justify-center'>
        <p className=' text-center md:px-8 md:w-[95%] mx-auto  lg:px-10'>
          Our <span className=' text-mainColor capitalize font-medium'>comprehensive training programs </span>are meticulously designed to equip you with the tools necessary for <span className='capitalize text-mainColor font-medium'>career success</span>.
        </p>
      </div>
      <BlogCardComponent filteredBlogData={trainingData}   blogTypeContent="Our Training Programs include" />
      <BlogCardComponent filteredBlogData={trainingData}   blogTypeContent="Why Choose Vacancies in Ghana Training?" />
      <PartnerSection />
    </main>
  )
}