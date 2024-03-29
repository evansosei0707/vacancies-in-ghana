import Image from "next/image";
import { urlFor } from "@/lib/client";
import { homeContentType } from "@/type";
import group from '@/public/Group 4.png';
import ecobankImage from '@/public/image 26.png';
import gcbImage from '@/public/Frame 15.png';
import shaqLogo from '@/public/shaq_logo.png';

interface HeroSectionProps {
    homeContent: homeContentType
}

export default function HeroSection({ homeContent }: HeroSectionProps) {
  return (
    <section className="bg-[#F5FBFF] w-full flex flex-col lg:flex-row justify-start items-start lg:justify-between lg:items-start gap-9 p-4 md:p-10 ">
        <div className="flex flex-col items-start  justify-start gap-5 pt-2 md:pt-8 w-full lg:w-1/2">
            <h1 className="w-full lg:text-[64px] text-[36px] sm:text-[46px] sm:leading-[48px] leading-[35px] lg:leading-[64px] font-semibold">
                {homeContent.bigTitle}
            </h1>
            <p className="sm:text-xl text-lg   lg:w-[80%] w-[90%] leading-[24px] text-[#1A1A1A80]/50">
                {homeContent.mainPara}
            </p>
            <div className=" rounded-lg lg:w-[70%] w-[90%] mt-4 flex items-center justify-center bg-white p-2">
                <input 
                    type="text"
                    className=" border-none flex flex-1 placeholder:text-base placeholder:leading-[15px]  placeholder:text-[#1A1A1A80]/50   outline-none p-2 "
                    placeholder="Search job or company name here"
                 />
                 <button className=" bg-mainColor text-white text-lg py-3 px-8 rounded-lg leading-[24px]">Search</button> 
            </div>
        </div>
        <div className="flex flex-col items-center  justify-start gap-4 w-full lg:w-1/2">
            <div className=" lg:w-[415px] w-[380px] h-[490px] relative lg:h-[531px]">
                <Image
                    src={urlFor(homeContent.mainImage).url()}
                    width={415}
                    height={531}
                    alt="hero section image"
                />
                <div className=" absolute z-10  -left-[51px] top-[225px]  rounded-lg bg-white p-2 flex items-center justify-center gap-2">
                    <div className="h-[30px] w-[30px] ">
                        <Image 
                            src={group}
                            alt="image for all jobs at vacancies in ghana"
                            width={30}
                            height={30}
                        />
                    </div>
                    <div className=" flex flex-col items-center justify-center ">
                        <span className=" text-[10px] capitalize leading-[16px] text-customBlack/50">Everyday</span>
                        <p className=" text-sm text-customBlack font-medium">+100 jobs</p>
                    </div>
                </div>
                <div className=" absolute rounded-[7px] border-2 border-white h-[46px] w-[43px] right-[115px] top-[250px]">
                    <Image 
                        src={ecobankImage}
                        width={43}
                        height={46}
                        alt="ecobank image at vacancies in Ghana"

                    />
                </div>
                <div className=" absolute rounded-[7px] h-[46px] w-[43px] -left-[20px] bottom-[30px] ">
                    <Image 
                        src={gcbImage}
                        width={42}
                        height={46}
                        alt="gcb image at vacancies in Ghana"

                    />
                </div>
                <div className=" absolute -bottom-5 rounded-[8px] overflow-hidden right-0 flex items-center justify-center border-2 border-white gap-2 bg-purple-500 px-3 py-2 bg-opacity-30 ">
                    <div className=" h-[43px] bg-white w-[40px] flex items-center rounded-[7px] overflow-hidden">
                        <Image
                            src={shaqLogo}
                            alt="shaq express logo"
                            width={40}
                            height={43}
                        />
                    </div>
                    <div className="flex items-start gap-1 flex-col justify-center">
                        <p className=" text-base leading-[15px] font-medium text-customBlack/70">Sales manager</p>
                        <p className=" text-xs leading-[10px] text-customBlack/50 ">Haatso - Onsite</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  ) 
}
