import { homeContentType } from "@/type"
import Link from "next/link"


interface HeroSectionProps {
  homeContent: homeContentType
}

export default function ChooseUs({ homeContent }: HeroSectionProps) {
  return (
    <div className="w-full flex p-4 md:p-9  my-8 gap-9 flex-col items-start md:justify-center md:items-center justify-start">
        <h3 className=" lg:text-[48px] text-[30px] lg:leading-[57px] leading-[40px] font-semibold">{homeContent.chooseUs.bigText}</h3>
        <p className=" text-left md:text-center text-[24px] w-[80%] leading-[28px]">
           {homeContent.chooseUs.bigText}
        </p>
        <Link href='/services/outsourcing' className="bg-mainColor rounded-md font-medium text-lg text-white px-10 py-2">
            Get Started
        </Link>
    </div>
  )
}
