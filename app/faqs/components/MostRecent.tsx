import { urlFor } from "@/lib/client";
import { Post } from "@/type";
import Image from "next/image";
import Link from "next/link";

interface MostRecentProps {
    blogTypeContent: string,
    filteredBlogData: Post[]
}

export default function MostRecent({ blogTypeContent, filteredBlogData }: MostRecentProps) {


  return (
    <section className="w-[95%] mx-auto flex-col flex items- my-14 justify-center  gap-10">
        <div className="w-full flex justify-between items-center">
            <h3 className="leading-[24px] text-[36px] font-semibold text-customBlack">{blogTypeContent}</h3>
                <Link href={`/discover/`} className="text-mainColor cursor-pointer text-base hover:underline font-medium leading-[24px]">
                    View more
                </Link>
        </div>
        <div className="grid  items-start gap-4 grid-cols-1 gap-y-10 text-customBlack w-full md:grid-cols-2 lg:grid-cols-3">
            {
                filteredBlogData.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex flex-col items-start w-full justify-start gap-6">
                        <div className=" rounded-lg overflow-hidden w-full h-[241px]">
                            <Image
                                src={urlFor(item.mainImage).url()}
                                width={1000}
                                height={241}
                                alt={`${item.title}-main-blog-image`}
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="flex flex-col gap-4 items-start w-full">
                            <Link href={`/discover/${item.categories[0].slug.current}/${item.slug.current}`} className=" hover:text-mainColor transition-colors duration-150 font-semibold text-[24px] leading-[32px]">{item.title}</Link>
                            <p className=" text-base leading-[24px] font-semibold text-[#545454]">
                               {item.description}
                            </p>
                            {/* <p className=" text-sm leading-[24px] text-mainColor font-semibold">{item.ca}</p> */}
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}
