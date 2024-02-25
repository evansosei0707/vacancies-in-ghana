"use client";

import { useState } from "react";
import { filters } from "../data/jobFilters";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";


const Filters = () => {
    const [toggleSingleFilter, setToggleSingleFilter] = useState<number | null>(null);
    const [onAndOff, setOnAndOff] = useState(true);


  return (
    <section className="w-[22%] hidden md:flex flex-col py-6 border items-start mx-auto gap-4">
        <div className="flex justify-between pb-6 mx-auto w-[93%] border-b items-start ">
            <p className="text-xl font-medium leading-5">Filter</p>
            <p className="text-lg text-mainColor font-medium">Reset</p>
        </div>
      {filters.map((filter: jobFiltersType, idx:number) => (
        <div className=" flex flex-col transition-all duration-100 ease-in-out items-start overflow-hidden  mx-auto w-[93%] justify-start gap-2 border-b" key={filter.name}>
            <div onClick={() => {
                setToggleSingleFilter(idx)
                setOnAndOff((prev) => !prev)
            } } className="flex items-center p-3 cursor-pointer justify-between w-full"
            >
                <p className="text-lg leading-5 font-medium capitalize">{filter.label}</p>
                {
                       toggleSingleFilter === idx && onAndOff  ? <IoIosArrowDown color="#1A1A1AB2" /> : <IoIosArrowUp />
                }
            </div>
            <div  style={{ height: toggleSingleFilter === idx && onAndOff ? '0' : '210px' }} className={` flex flex-col items-start justify-start px-3 transition-all duration-150 ease-in-out gap-3`}>
                    {filter.filters.map((filterValue) => (
                        <div className="" key={filterValue}>
                            <div className="flex items-center justify-start">
                            <div className="input-check flex gap-5">
                                <input
                                    type="checkbox"
                                    id={filterValue}
                                    value={filterValue}
                                    className=" border"
                                />
                                <label htmlFor={filterValue} className=" text-lg leading-[16px] text-[#1A1A1AE5]">
                                    {filterValue}
                                </label>
                            </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
      ))}
    </section>
  )
};

export default Filters;
