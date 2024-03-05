import React from 'react'
import FeaturedBlogsSlider from '@/app/blog/components/FeaturedBlogsSlider'

export default function FeaturedBlogs() {
  return (
    <section className="flex flex-col my-10 mt-7 mx-auto justify-start  items-center w-full">
        <div className='flex flex-col py-6 pb-8 items-center justify-center w-full mx-auto gap-2 md:gap-4'>
            <p className=' md:text-[22px] text-xl leading-[22px] md:leading-[24px] font-medium'>The blog</p>
            <h2 className='md:text-[48px] text-[30px] leading-[35px] md:leading-[57px] font-semibold '>Writing from our team</h2>
            <h3 className=' text-[24px] leading-[28px] text-center text-lg'>Get the best resources to help elevate your career and make you an elite hire</h3>
        </div>
        <FeaturedBlogsSlider />
    </section>
  )
}
