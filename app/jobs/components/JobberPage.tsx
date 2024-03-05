"use client"

import Filters from '@/app/Components/JobFilters'
import React, { useMemo, useState } from 'react'
import AllJobs from './AllJobs'
import { jobs } from '@/app/data/jobList'


export default function JobberPage() {

  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false)
  const [sortedJobs, setSortedJobs] = useState(jobs);


  /* Set selected filters i.e => {
  "type_of_employment": ["Full Time", "Part Time"],
  "experience_level": ["Senior Level"]
  ......
}
*/
  const handleFilterChange = (filterName: string, filterValue: string, isChecked: boolean) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters }; // Let the updated filters hold the previous filters
      if (isChecked) {
        updatedFilters[filterName] = [
          ...(prevFilters[filterName] || []),
          filterValue,
        ];
      } else {
        updatedFilters[filterName] = prevFilters[filterName].filter(
          (value) => value !== filterValue
        );
      }
      return updatedFilters;
    });
  }; " what  is new in the latest version of our code snippet when no is watching or looking at  the way things are done in our way "

  //  Filter through jobs that match the selected filters
  let filteredJobs = sortedJobs.filter((job) => {
    for (const [filterName, selectedValues] of Object.entries(
      selectedFilters
    )) {
      if (
        selectedValues.length > 0 &&
        !selectedValues.includes(job[filterName] as string)
      ) {
        return false;
      }
    }
    return true;
  });



  return (
    <div className='w-full h-full relative bg-[#ededed] flex items-start justify-center'>
      
        <Filters
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          handleFilterChange={handleFilterChange}
          isFilterMenuOpen={isFilterMenuOpen} 
          setIsFilterMenuOpen={setIsFilterMenuOpen}
        />
        <section className='flex flex-col items-start h-full text-black justify-center gap-2 w-full md:w-[78%]'>
            <AllJobs filteredJobs={filteredJobs} setSortedJobs={setSortedJobs} setIsFilterMenuOpen={setIsFilterMenuOpen} />
        </section>
    </div>
  )
}
