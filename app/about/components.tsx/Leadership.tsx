import { urlFor } from '@/lib/client'
import { leadershipAndTeamType } from '@/type'
import Image from 'next/image'
import React from 'react'

interface LeadershipProps {
    leadershipData: leadershipAndTeamType[]
}

export default function Leadership({ leadershipData }:LeadershipProps) {
  return (
    <section className=' w-full items-start gap-7 mt-12 h-full flex-col px-5 md:px-9 flex justify-start'>
        <h3 className=' text-[40px] leading-[48px] font-medium text-customBlack text-left'>Leadership and team</h3>
        <div className='grid place-items-start grid-cols-1  w-full sm:grid-cols-2 min-[900px]:grid-cols-3 lg:grid-cols-4 gap-6'>
            {
                leadershipData.map((item, idx) => (
                    <div key={idx} className=' border-[#D2D2D2] bg-[#fafcfc] border flex items-start flex-col justify-center gap-3 rounded-[5px] p-2'>
                        <div className=' w-full h-[227px] overflow-hidden'>
                            <Image
                                src={urlFor(item.workerImage).url()}
                                alt={`${item.name}-profile-image`}
                                width={500}
                                height={250}
                            />
                        </div>
                        <div className='flex flex-col py-6 pt-3 items-start justify-start gap-3'>
                            <p className=' text-[24px] leading-[28px] font-medium text-black'>{item.name}</p>
                            <p className=' text-xl leading-[24px] text-[#6E6E6E]'>{item.role}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}
