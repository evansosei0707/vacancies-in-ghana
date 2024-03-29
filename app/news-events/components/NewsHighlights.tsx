import React from 'react'
import News from './News'
import { Post } from '@/type';

 
interface NewsHighlightsProps {
  allBlogData: Post[]
}

export default async function NewsHighlights({ allBlogData }: NewsHighlightsProps) {

  return (
    <section className=' flex flex-col justify-start w-full items-start py-5 md:py-9 pb-3  '>
      <h2 className=' lg:text-[40px] text-[25px] leading-[29px] sm:leading-[41px] sm:text-[30px] lg:leading-[48px] text-left mx-auto w-[90%] md:w-[65%] md:text-center md:py-14 py-8 text-customBlack font-medium'>Unveiling What Matters, Explore Hot topics, Leadership & Company Updates</h2>
      <div className=' flex flex-col justify-start w-full items-start py-9 px-4 '>
        <h2 className='  text-[36px] pl-2 pb-6 text-left leading-[24px] font-medium text-customBlack'>News Highlights</h2>
        <News allBlogData={allBlogData} />
      </div>
    </section>
  )
}
