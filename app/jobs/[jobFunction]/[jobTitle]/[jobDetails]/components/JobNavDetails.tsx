import { Input } from "@/components/ui/input";
import CustomSelect from "@/components/ui/select";
import { filterJobs } from "@/actions/jobsSearchFilter";
import { currentJobFunction, regionInGhana } from "@/app/lib/helper";
import FormSubmitButton from "@/components/FormSubmitButton";



export default function JobNavDetails() {
  return (
    <div className='bg-[#F7FAFA] flex items-center p-4 md:p-5 lg:p-9 justify-center w-full gap-5 flex-col'>
         <form action={filterJobs} className='flex items-center flex-col md:flex-row md:justify-between  justify-center gap-4 md:gap-8 w-full'>
            <div className="flex items-center md:hidden lg:flex justify-center">
                <p className=" text-xl font-medium leading-[20px] whitespace-nowrap text-[#545454]">Find a job</p>
            </div>
            <div className="w-full flex items-center justify-center flex-col gap-4 lg:flex-row">
                    <div className="w-full">
                        <CustomSelect
                            className="border py-2 w-full px-4  text-[#1A1A1A]/50 outline-none rounded-[8px] border-[#D0D5DD]"
                            name="region"
                            defaultValue=""
                        >
                            <option value="" hidden>Select your region</option>
                            {regionInGhana.map((item, idx) => (
                                <option key={idx} value={item}>{item}</option>
                            ))}
                        </CustomSelect>
                    </div>
                    <div className="w-full">
                        <CustomSelect
                            className="border py-2 w-full px-4  text-[#1A1A1A]/50 outline-none rounded-[8px] border-[#D0D5DD]"
                            name="region"
                            defaultValue=""
                        >
                            <option value="" hidden>Select your region</option>
                            {regionInGhana.map((item, idx) => (
                                <option key={idx} value={item}>{item}</option>
                            ))}
                        </CustomSelect>
                    </div>
            </div>
            <div className="w-full flex items-center justify-center flex-col gap-4 lg:flex-row">
                <div className="w-full">
                    <CustomSelect
                        className="border py-2 w-full px-4  text-[#1A1A1A]/50 outline-none rounded-[8px] border-[#D0D5DD]"
                        name="region"
                        defaultValue=""
                    >
                        <option value="" hidden>Select your region</option>
                        {regionInGhana.map((item, idx) => (
                            <option key={idx} value={item}>{item}</option>
                        ))}
                    </CustomSelect>
                </div>
                <div className="w-full">
                    <CustomSelect
                        className="border py-2  w-full px-4 outline-none  text-[#1A1A1A]/50 rounded-[8px] border-[#D0D5DD]"
                        name="job_function"
                        defaultValue=""
                    >
                        <option className=" text-gray-400" value="" hidden>Select job function</option>
                        {currentJobFunction.map((item, idx) => (
                            <option key={idx} value={item}>{item}</option>
                        ))}
                    </CustomSelect>
                </div>
            </div>
            <div className="flex flex-col gap-5 w-full md:w-max items-center h-full justify-between">
                <div className="items-center hidden md:flex lg:hidden justify-center">
                    <p className=" text-xl font-medium leading-[20px] whitespace-nowrap text-[#545454]">Find a job</p>
                </div>
                <FormSubmitButton
                    type="submit"
                    className="border py-3 h-[45px] bg-[#9AA4A4] w-full md:w-auto outline-none text-white text-lg leading-[24px]  px-6 rounded-[8px] border-[#D0D5DD]"
                >
                    Search
                </FormSubmitButton>
            </div>
        </form>
    </div>
  )
}
