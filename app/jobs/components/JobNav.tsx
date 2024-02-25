
import gridIcon from "@/public/Frame (6).png"
import ListIcon from "@/public/Frame (7).png"
import Image from "next/image";
import Select from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { currentJobFunction, regionInGhana } from "@/app/lib/helper";
import { filterJobs } from "@/actions/jobsSearchFilter";




export default function JobNav() {

  return (
    <div className='bg-[#F7FAFA] flex items-center p-4 md:p-5 lg:p-5 justify-center w-full gap-5 flex-col'>
        <form action={filterJobs} className='flex items-center flex-col md:flex-row md:justify-between justify-center gap-4 md:gap-8 w-full'>
            <Input
                type="text"
                name="q"
     
                className="border py-1 w-full px-4 text-black placeholder:text-[#A0A0A0] placeholder:text-base  outline-none rounded-[8px] border-[#D0D5DD]"
                placeholder="Search jobs"
            />
            <div className="w-full">
                <Select
                    className="border py-2 w-full px-4  text-[#1A1A1A]/50 outline-none rounded-[8px] border-[#D0D5DD]"
                    name="region"
                    defaultValue=""
                >
                    <option value="" hidden>Select your region</option>
                    {regionInGhana.map((item, idx) => (
                        <option key={idx} value={item}>{item}</option>
                    ))}
                </Select>
            </div>
            <div className="w-full">
                <Select
                    className="border py-2 w-full px-4 outline-none  text-[#1A1A1A]/50 rounded-[8px] border-[#D0D5DD]"
                    name="job_function"
                    defaultValue=""
                >
                    <option className=" text-gray-400" value="" hidden> Select job function</option>
                    {currentJobFunction.map((item, idx) => (
                        <option key={idx} value={item}>{item}</option>
                    ))}
                </Select>
            </div>
            <button
                type="submit"
                className="border py-2 bg-[#9AA4A4] outline-none text-white text-lg leading-[24px]  px-6 rounded-[8px] border-[#D0D5DD]"
            >
                Search
            </button>
        </form>
        <div className="md:flex md:justify-between md:flex-row w-full flex-col items-center justify-center">
            <p className="text-base  text-[#1A1A1A]/70 leading-[16px] font-medium flex-now{rap flex items-center justify-center">Showing{' '}<span className=" text-[#1A1A1A] text-[17px] font-bold">{""}100</span> jobs <span className="  text-[#1A1A1A] text-[17px] font-bold ">UI/UX Designer</span> in <span className="  text-[#1A1A1A] text-[17px] font-bold">Accra</span></p>
            <div className="flex items-center justify-center gap-4">
                <p>Sort by</p>
                <select
                    className=" bg-transparent border rounded-md py-1 px-10"
                >
                </select>
                <div className="flex items-center justify-center gap-3">
                    <div className=" w-[24px] h-[24px]">
                        <Image 
                            src={gridIcon}
                            width={24}
                            height={24}
                            alt="grid-image-icon"
                        />
                    </div>
                    <div className=" w-[24px] h-[24px]">
                        <Image 
                            src={ListIcon}
                            width={24}
                            height={24}
                            alt="list-image-icon"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
