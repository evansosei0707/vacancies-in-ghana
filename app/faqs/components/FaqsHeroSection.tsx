import Image from "next/image";
import { urlFor } from "@/lib/client";
import { fagsDataType } from '@/type'



interface FaqsHeroSectionProps {
    faqsData: fagsDataType
}

export default function FaqsHeroSection({ faqsData }:FaqsHeroSectionProps) {

  return (
    <section className="bg-[#F5FBFF] w-full flex flex-col lg:flex-row justify-start items-start lg:justify-between lg:items-center gap-9 p-4 md:p-10 lg:pt-14 pb-4 ">
        <div className="flex flex-col items-start  justify-start lg:justify-center gap-4 pt-2 md:pt-8 lg:pt-2  w-full lg:w-1/2">
            <h1 className="w-full lg:text-[48px] text-[35px] sm:text-[49px] sm:leading-[40px] leading-[42px] lg:leading-[58px] font-medium">
                {faqsData.bigText}
            </h1>
            <p className="sm:text-[24px] text-xl leading-[24px]  w-[90%] lg:w-full sm:leading-[28px] text-customBlack">
                {faqsData.mediumText}
            </p>
            <div className=" rounded-lg lg:w-[80%] w-[90%] mt-4 flex items-center justify-center bg-white p-2">
                <input 
                    type="text"
                    className=" border-none flex flex-1 placeholder:text-base placeholder:leading-[15px]  placeholder:text-[#1A1A1A80]/50   outline-none p-2 "
                    placeholder="Search articles, guides or FAQ&apos;s here"
                 />
                 <button className=" bg-mainColor text-white text-lg hover:bg-customBlack py-3 px-8 rounded-lg leading-[24px]">Search</button> 
            </div>
        </div>
        <div className="flex items-start  justify-start lg:justify-center gap-4 w-full lg:w-1/2">
            <div className=" w-full h-full md:w-[530px] md:h-[600px]">
                <Image
                    src={urlFor(faqsData.heroImage).url()}
                    width={540}
                    height={600}
                    alt="hero section image"
                />
            </div>
        </div>
    </section>
  )
}
