import Image from "next/image";
import { TfiStatsUp } from "react-icons/tfi";
import together from "@/public/together as one.png"
import GallerySlider from "./GallerySlider";
import { homeContentType } from "@/type";


interface HomeGalleryProps {
  homeContent: homeContentType
}

export default function HomeGallery({ homeContent }: HomeGalleryProps) {
  return (
    <section className="w-full bg-[#12192C] text-white flex p-4 lg:p-10 items-center pb-10 flex-col justify-start gap-6">
        <div className="flex flex-col items-start w-full justify-center gap-6 md:flex-row md:justify-between md:items-center">
            <div className="flex lg:text-[64px] md:text-5xl text-4xl w-full leading-10 md:leading-[50px] lg:leading-[76px] font-semibold items-center lg:w-[50%]">
                <p className="capitalize md:w-[85%] w-full">{homeContent.jobsGallery.bigText}</p>
            </div>
            <div className="flex items-center lg:w-[50%] w-full justify-start md:items-center">
                <p className=" md:w-[80%] w-full lg:text-[24px] text-lg md:text-xl leading-[28px]">{homeContent.jobsGallery.smallText}</p>
            </div> 
        </div>
        <GallerySlider />
    </section>
  )
}
