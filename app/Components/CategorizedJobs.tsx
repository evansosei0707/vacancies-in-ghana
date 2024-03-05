import Link from "next/link";
import { jobCategory } from "../lib/helper";
import { HiArrowRight } from "react-icons/hi";



export default function CategorizedJobs() {
  return (
    <section className="w-full flex p-4 md:p-9  my-8 gap-9 flex-col items-start justify-start">
        <div className="flex flex-col items-start justify-center gap-4">
            <h2 className=" font-semibold text-[36px] leading-[24px] text-black">Browse jobs by category</h2>
            <div className=" flex items-center text-[17px] justify-start gap-2">
                <p className=" text-base">Looking for work?</p>
                <Link href='/jobs' className=" text-mainColor  hover:underline">Browse jobs</Link>
            </div>
        </div>
        <div className=" grid grid-cols-1 w-full sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 place-items-center">
            {
                jobCategory.map((item, idx) => (
                    <div key={idx} className=" bg-[#DAE8E833]/20 p-6 w-full flex flex-col items-center justify-center space-y-6 rounded-sm">
                        <h3 className="text-2xl leading-5 font-semibold text-customBlack">{item.category}</h3>
                        <p className=" text-customBlack/50 leading-5 text-center">{item.lowestLevel} - {item.highestLevel}</p>
                        <Link href={`/jobs/${item.category}`} className="flex parent-arrow items-center justify-center cursor-pointer font-medium gap-4 text-mainColor text-[17px] leading-5 w-full">
                            <span>{item.numberOfJobs} job openings</span>
                            <HiArrowRight className="child-arrow" color="#008080"  />
                        </Link>
                    </div>
                ))
            }
        </div>
    </section>
  )
}
