import React from 'react'

export default function HomeVideo() {
  return (
    <section className="w-full flex p-4 md:p-9  my-6 gap-9 flex-col items-center justify-start">
        <h2 className=' text-[40px] leading-[40px] text-center font-semibold text-customBlack'>Choose us for all your hiring processes</h2>
        <div className=' md:w-[80%] w-full flex items-center  justify-center rounded-xl overflow-hidden'>
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/O0fyl_uv7xg?si=bMB8Nd7tm7-kX4sy" title="YouTube video player" frameBorder="20" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                
            </iframe>
        </div>
    </section>
  )
}
