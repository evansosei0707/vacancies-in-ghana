import { blogContents } from "@/app/lib/helper";
import Image from "next/image";
import Link from "next/link";

interface TopReadsProps {
    blogTypeContent: string
}

export default function TopReads({ blogTypeContent}: TopReadsProps) {
  return (
    <section className="w-[95%] mx-auto flex-col flex items- my-14 justify-center  gap-5">
        <div className="w-full flex justify-between items-center">
            <h3 className="leading-[24px] text-[36px] font-semibold text-customBlack">{blogTypeContent}</h3>
            <Link href='/blog/top-reads' className="text-mainColor text-base hover:underline font-medium leading-[24px]">
               View more 
            </Link>
        </div>
        <div className="grid place-items-center gap-4 grid-cols-1 text-customBlack w-full md:grid-cols-2 lg:grid-cols-3">
            {
                blogContents.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-start w-full justify-start gap-6">
                        <div className=" rounded-lg overflow-hidden w-full h-[241px]">
                            <Image
                                src={item.image}
                                alt="top reads image"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="flex flex-col gap-4 items-start w-full">
                            <p className=" font-semibold text-[24px] leading-[24px]">{item.title}</p>
                            <p className=" text-base leading-[24px] font-semibold text-[#545454]">
                               {item.des}
                            </p>
                            <p className=" text-sm leading-[24px] text-mainColor font-semibold">{item.category}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}
