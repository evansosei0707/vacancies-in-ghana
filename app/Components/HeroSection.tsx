import Image from "next/image";
import HeroImage from "@/public/heroImage.png"

export default function HeroSection() {
  return (
    <section className="bg-[#F5FBFF] w-full flex flex-col lg:flex-row justify-start items-start lg:justify-between lg:items-start gap-9 p-4 md:p-10 ">
        <div className="flex flex-col items-start  justify-start gap-5 pt-2 md:pt-8 w-full lg:w-1/2">
            <h1 className="w-full lg:text-[64px] text-[36px] sm:text-[46px] sm:leading-[48px] leading-[35px] lg:leading-[64px] font-semibold">
                Job search simplified: Landing dream jobs or hiring stars.
            </h1>
            <p className="sm:text-xl text-lg   lg:w-[80%] w-[90%] leading-[24px] text-[#1A1A1A80]/50">
            Craft a CV using expert tips and stand out to hiring managers. Leverage our matching algorithm to connect with qualified candidates in Ghana.
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
            <div className=" lg:w-[415px] w-[380px] h-[490px] lg:h-[531px]">
                <Image
                    src={HeroImage}
                    width={415}
                    height={531}
                    alt="hero section image"
                />
            </div>
        </div>
    </section>
  )
}
