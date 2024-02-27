"use client";

import { useState } from "react";
import { 
    typeOfEmployment,
    work_location,
    salaryExpectations,
    experienceLevel,
 } from "../data/jobFilters";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import { FiDelete } from "react-icons/fi";

interface FilterProps {
    handleFilterChange: (filterName: string, filterValue: string, isChecked: boolean) => void;
    selectedFilters: { [key: string]: string[] };
    isFilterMenuOpen: boolean;
    setIsFilterMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedFilters: React.Dispatch<React.SetStateAction< { [key: string]: string[] }>>
}

const Filters = ({ selectedFilters, handleFilterChange, setSelectedFilters, isFilterMenuOpen, setIsFilterMenuOpen }: FilterProps)  => {
    const [toggleSingleFilter, setToggleSingleFilter] = useState<number | null>(null);
    const [onAndOff, setOnAndOff] = useState({
        employmentType: false,
        experienceLevel: false,
        work_location: false,
    });

    const handleResetFilter = () => {
        setSelectedFilters({});
    }

   
  return (
    <section  className={`filter-dialog overflow-y-auto ${isFilterMenuOpen && "open"}`} >
        <div className=" w-full flex items-center justify-between">
            <div className="flex justify-between flex-col md:flex-row pb-6 gap-3 mx-auto w-[93%] border-b items-start ">
                <p className="text-xl font-medium leading-5" >Filter</p>
                <p className="text-lg text-mainColor cursor-pointer font-medium" onClick={handleResetFilter}>Reset</p>
            </div>
            <div onClick={() => setIsFilterMenuOpen(false)} className="flex cursor-pointer md:hidden items-center justify-center">
                <FiDelete fontSize={25} />
            </div>
        </div>
        <div className="flex items-center justify-center gap-2 flex-col w-full mx-auto">
                <div className=" flex flex-col transition-all duration-100 ease-in-out items-start overflow-hidden  mx-auto w-[93%] justify-start gap-2 border-b">
                    <div onClick={() => {
                        setOnAndOff((prevState) => ({
                            ...prevState,
                            employmentType: !prevState.employmentType
                          }))
                    } } className="flex items-center p-3 cursor-pointer justify-between w-full"
                    >
                        <p className="text-lg leading-5 font-medium capitalize">{typeOfEmployment.label}</p>
                        {
                             onAndOff.employmentType  ? <IoIosArrowDown color="#1A1A1AB2" /> : <IoIosArrowUp />
                        }
                    </div>
                    <div  style={{ height:  onAndOff.employmentType ? '0' : '150px' }} className={` flex flex-col items-start justify-start px-3 transition-all duration-150 ease-in-out gap-3`}>
                            {typeOfEmployment.filters.map((filterValue) => (
                                <div className="" key={filterValue}>
                                    <div className="flex items-center justify-start">
                                    <div className="input-check flex gap-5">
                                        <input
                                            type="checkbox"
                                            id={filterValue}
                                            value={filterValue}
                                            checked={(selectedFilters[typeOfEmployment.name] || []).includes(
                                              filterValue
                                            )}
                                            className=" border"
                                            onChange={(e) => handleFilterChange(
                                                typeOfEmployment.name,
                                                filterValue,
                                                e.target.checked
                                            )}
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
                <div className=" flex flex-col transition-all duration-100 ease-in-out items-start overflow-hidden  mx-auto w-[93%] justify-start gap-2 border-b">
                    <div onClick={() => {
                         setOnAndOff((prevState) => ({
                            ...prevState,
                            work_location: !prevState.work_location
                          }))
                    } } className="flex items-center p-3 cursor-pointer justify-between w-full"
                    > 
                        <p className="text-lg leading-5 font-medium capitalize">{work_location.label}</p>
                        {
                             onAndOff.work_location  ? <IoIosArrowDown color="#1A1A1AB2" /> : <IoIosArrowUp />
                        }
                    </div>
                    <div  style={{ height: onAndOff.work_location ? '0' : '100px' }} className={` flex flex-col items-start justify-start px-3 transition-all duration-150 ease-in-out gap-3`}>
                            {work_location.filters.map((filterValue) => (
                                <div className="" key={filterValue}>
                                    <div className="flex items-center justify-start">
                                    <div className="input-check flex gap-5">
                                        <input
                                            type="checkbox"
                                            id={filterValue}
                                            value={filterValue}
                                            checked={(selectedFilters[work_location.name] || []).includes(
                                                filterValue
                                              )}
                                              className=" border"
                                              onChange={(e) => handleFilterChange(
                                                  work_location.name,
                                                  filterValue,
                                                  e.target.checked
                                              )}
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
                <div className=" flex flex-col transition-all duration-100 ease-in-out items-start overflow-hidden  mx-auto w-[93%] justify-start gap-2 border-b">
                    <div onClick={() => {
                         setOnAndOff((prevState) => ({
                            ...prevState,
                            experienceLevel: !prevState.experienceLevel
                          }))
                    } } className="flex items-center p-3 cursor-pointer justify-between w-full"
                    > 
                        <p className="text-lg leading-5 font-medium capitalize">{experienceLevel.label}</p>
                        {
                             onAndOff.experienceLevel  ? <IoIosArrowDown color="#1A1A1AB2" /> : <IoIosArrowUp />
                        }
                    </div>
                    <div  style={{ height: onAndOff.experienceLevel ? '0' : '300px' }} className={` flex overflow-y-auto flex-col items-start justify-start px-3 transition-all duration-150 ease-in-out gap-3`}>
                            {experienceLevel.filters.map((filterValue) => (
                                <div className="" key={filterValue}>
                                    <div className="flex items-center justify-start">
                                    <div className="input-check flex gap-5">
                                        <input
                                            type="checkbox"
                                            id={filterValue}
                                            value={filterValue}
                                            checked={(selectedFilters[experienceLevel.name] || []).includes(
                                                filterValue
                                              )}
                                              className=" border"
                                              onChange={(e) => handleFilterChange(
                                                  experienceLevel.name,
                                                  filterValue,
                                                  e.target.checked
                                              )}
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
                
                {/*<div className=" flex flex-col transition-all duration-100 ease-in-out items-start overflow-hidden  mx-auto w-[93%] justify-start gap-2 border-b" key={filter.name}>
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
                </div> */}
        </div>
    </section>
  )
};

export default Filters;
