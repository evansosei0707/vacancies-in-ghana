import Image from 'next/image'
import React from 'react'
import eventsPic from '@/public/Rectangle 153.png'
import Link from 'next/link'

export default function UpcomingEvents() {

  const eventsData = [
    {
      date: '5 Mar, 2024',
      startTime: '12:00 am',
      endTime: '5:00 pm',
      mainImage: eventsPic,
      title: 'Conference',
      description: 'It’s hard to learn things on an empty Stomach. Breakfast, snacks and unlimited tea and coffee are all part of the ticket price',

    },
    {
      date: '5 Mar, 2024',
      startTime: '12:00 am',
      endTime: '5:00 pm',
      mainImage: eventsPic,
      title: 'Conference',
      description: 'It’s hard to learn things on an empty Stomach. Breakfast, snacks and unlimited tea and coffee are all part of the ticket price',

    },
    {
      date: '5 Mar, 2024',
      startTime: '12:00 am',
      endTime: '5:00 pm',
      mainImage: eventsPic,
      title: 'Conference',
      description: 'It’s hard to learn things on an empty Stomach. Breakfast, snacks and unlimited tea and coffee are all part of the ticket price',

    },
    {
      date: '5 Mar, 2024',
      startTime: '12:00 am',
      endTime: '5:00 pm',
      mainImage: eventsPic,
      title: 'Conference',
      description: 'It’s hard to learn things on an empty Stomach. Breakfast, snacks and unlimited tea and coffee are all part of the ticket price',

    },
  ]


  return (
    <div className=' w-full flex justify-center items-center px-2 md:px-5 lg:px-8 my-10 md:mb-28 flex-col gap-6'>
        <h3 className=' md:text-[36px] md:leading-[43px] text-[30px] leading-[37px] text-black font-medium text-center md:py-6'>Upcoming Events</h3>
        <div className=' flex flex-col bg-transparent gap-7 md:gap-0 md:bg-[#E9F1F2] items-start px-4 md:p-7 md:px-12 mx-auto rounded-md w-full'>
            {
              eventsData.map((item, idx) => (
              <div key={idx} className=' md:flex-row md:items-center border-b pb-5 border-[#D2D2D2]  flex flex-col justify-start w-full items-start py-5 md:py-9 gap-6 md:gap-[40px] '>
                <div className=' hidden md:flex md:flex-col md:items-start md:justify-start gap-6 justify-start  text-xl leading-[24px] text-black items-center'>
                    <p>{item.date}</p>
                    <p className='min-[800px]:whitespace-nowrap'>
                      <span className='whitespace-nowrap'>{item.startTime}</span> - <span  className='whitespace-nowrap'>{item.endTime}</span>
                    </p>
                  </div>
                  <div className='w-full h-[250px] sm:h-[300px] md:w-[234px] md:h-[101px] bg-[#D9D9D9] rounded-[6px] overflow-hidden'>
                      <Image
                        src={eventsPic}
                        alt='events main image'
                        className='w-full h-full object-cover object-center'
                      />
                  </div>
                  <div className=' flex flex-col items-start justify-center gap-6 w-full'>
                    <p className=' text-[26px] text-left font-medium leading-[20px] text-black'>{item.title}</p>
                    <p className=' text-xl text-left md:text-base md:leading-[19px] leading-[24px] text-[#545454]'>
                      {item.description}
                    </p>
                  </div>
                  <div className=' flex gap-6 md:hidden justify-start  text-xl leading-[24px] text-black items-center w-full'>
                    <p>{item.date}</p>
                    <p>
                      <span>{item.startTime}</span> - <span>{item.endTime}</span>
                      
                    </p>
                  </div>
                  <Link href='#' className=' bg-mainColor rounded-[6px] whitespace-nowrap flex items-center justify-center md:py-5 md:px-14 md:text-[18px] md:w-[118px] h-[34px] text-white transition-colors duration-200 hover:bg-customBlack md:rounded-[8px] w-full py-[18px] px-14 tracking-wide text-[19px] leading-[24px] font-medium text-center'>
                        Read more
                  </Link>
              </div>
              ))
            }
        </div>
    </div>
  )
}
