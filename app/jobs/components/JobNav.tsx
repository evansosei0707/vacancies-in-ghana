"use client";
import gridIcon from "@/public/Frame (6).png"
import ListIcon from "@/public/Frame (7).png"
import Image from "next/image";
import Select from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { currentJobFunction, regionInGhana } from "@/app/lib/helper";
import { filterJobs } from "@/actions/jobsSearchFilter";
import { LuFilter } from "react-icons/lu";



interface JobNavProps  {
    filteredJobs: jobListType[],
    setIsFilterMenuOpen:  React.Dispatch<React.SetStateAction<boolean>>,
    setSortedJobs: React.Dispatch<React.SetStateAction<jobListType[]>>;
  }

export default function JobNav({ filteredJobs, setIsFilterMenuOpen, setSortedJobs }: JobNavProps) {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = e.target.value;
    
        if (selectedOption === 'newest') {
          // Filter jobs to include only the newest ones within the last two weeks
          const twoWeeksAgo = new Date();
          twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
    
          const filtered = filteredJobs.filter((job) => new Date(job.time_posted) > twoWeeksAgo);
          setSortedJobs(filtered);
        }else if (selectedOption === 'popular') {
            setSortedJobs([]);
            // Sort jobs by the number of applicants in descending order
         const sorted = filteredJobs.slice().sort((a, b) => b.applicants - a.applicants);
         setSortedJobs(sorted)
        } else {
          // Render jobs as they came from the source
          setSortedJobs(filteredJobs);
        }
      };


  return (
    <div className='bg-[#F7FAFA] flex items-center p-4 md:p-5 lg:p-5 justify-center w-full gap-5 flex-col'>
        <form action={filterJobs} className='flex items-center flex-col md:flex-row md:justify-between  justify-center gap-4 md:gap-8 w-full'>
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
                    className="border py-2  w-full px-4 outline-none  text-[#1A1A1A]/50 rounded-[8px] border-[#D0D5DD]"
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
                className="border py-2 bg-[#9AA4A4] w-full md:w-auto outline-none text-white text-lg leading-[24px]  px-6 rounded-[8px] border-[#D0D5DD]"
            >
                Search
            </button>
        </form>
        <div className="flex md:justify-between md:flex-row w-full flex-col-reverse gap-4 items-center justify-center">
            <div className="text-base flex  justify-start items-center gap-2  text-[#1A1A1A]/70 leading-[16px] font-medium flex-now{rap flex items-center justify-center">
                <span>showing</span>
                <span className=" text-[#1A1A1A] text-[17px] font-bold">{filteredJobs.length}</span>
                <span>vacancies</span>
                {/* <span className="  text-[#1A1A1A] text-[17px] font-bold ">UI/UX Designer</span> */}
                <span>in</span>
                <span className="  text-[#1A1A1A] text-[17px] font-bold">Ghana</span>
            </div>
            <div className="flex w-full md:w-auto  items-center justify-between justify-self-end gap-4">
                <div onClick={() => setIsFilterMenuOpen((prev) => !prev)} className="flex cursor-pointer bg-white rounded-md p-3 md:hidden">
                    <LuFilter fontSize={25} />
                </div>
                <div className="flex items-center justify-center gap-3">
                    <p>Sort by</p>
                    <select
                        onChange={handleChange}
                        className=" bg-transparent border rounded-md py-1 px-10"
                        defaultValue=""
                    >
                        <option className=" text-gray-400" value="" hidden>Newest</option>
                        <option className=" text-gray-400" value="newest" >Newest</option>
                        <option className=" text-gray-400" value="popular" >Popular</option>
                    </select>
                </div>
                <div className="hidden md:flex items-center justify-center gap-3">
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
