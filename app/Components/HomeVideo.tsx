import React from 'react';
import { homeContentType } from "@/type";


interface HomeVideoProps {
  homeContent: homeContentType,
}

export default function HomeVideo({ homeContent }: HomeVideoProps) {
  return (
    <section className="w-full flex p-4 md:p-9  my-6 gap-9 flex-col items-center justify-start">
        <h2 className=' text-[40px] leading-[40px] text-center font-semibold text-customBlack'>Choose us for all your hiring processes</h2>
        <div className=' md:w-[80%] w-full flex items-center bg-gray-400  justify-center rounded-xl overflow-hidden'>
            <iframe width="100%" height="400" src={homeContent.youtubeVideo} title="YouTube video player" frameBorder="20" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                
            </iframe>
        </div>   
    </section>
  )
}
