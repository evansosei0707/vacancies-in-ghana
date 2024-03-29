import Image from 'next/image'
import React from 'react'
import girlMusic from '@/public/girlMusic.jpg'
import libraryGuy from "@/public/libraryGuy.jpg"
import libraryGirl from "@/public/libraryGirl.jpg"
import officeChat from '@/public/officeChat.jpg'

export default function CategoryHero() {
  return (
    <section className=' w-full px-4 md:px-6 flex my-10 py-4 flex-col items-center justify-start gap-12 lg:px-10'>
        <h1 className=' text-[22px] leading-[24px] font-medium md:pb-4 text-customBlack text-center'>Career Development</h1>
        <div className=' w-full flex flex-col items-center justify-start gap-8 lg:items-start lg:justify-center lg:flex-row '>
            <div className=' flex flex-col justify-start items-start gap-6 w-full lg:w-1/2 lg:pt-7'>
                <h2 className=' md:text-[48px] text-[32px] leading-[40px] md:leading-[57px] text-customBlack font-semibold'>Empower Your Future, One Step at a Time.</h2>
                <p className=' md:text-[24px] text-xl leading-[25px] md:leading-[28px] text-customBlack'>
                    Discover free resources, expert advice, and personalized tools to help you navigate your career path. Start building your dream career today.
                </p>
            </div>
            <div className=' grid grid-cols-2 place-items-center md:max-w-[510px] gap-2 w-full lg:w-1/2'>
                <div className=' rounded-l-full w-full h-[200px] overflow-hidden'>
                    <Image
                        src={girlMusic}
                        height={200}
                        width={500}
                        alt='girl listening to music'
                        className=' w-full h-full object-cover'
                    />
                </div>
                <div className='  w-full h-[200px] pr-0 lg:pr-5 overflow-hidden'>
                    <Image
                        src={libraryGirl}
                        height={200}
                        width={500}
                        alt='library girl'
                        className=' w-full h-full object-cover'
                    />
                </div>
                <div className='  w-full lg:pl-5 pl-0 h-[200px]  overflow-hidden'>
                    <Image
                        src={libraryGuy}
                        height={200}
                        width={500}
                        alt='library guy'
                        className=' w-full h-full object-cover'
                    />
                </div>
                <div className=' rounded-r-full w-full h-[200px] overflow-hidden'>
                    <Image
                        src={officeChat}
                        height={200}
                        width={500}
                        alt='girl listening to music'
                        className=' w-full h-full object-cover'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
