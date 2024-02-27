"use client";

import { useState } from "react";
import JobNav from "./JobNav";
import Jobs from "./GridView";
import GridView from "./GridView";
import ListView from "./ListView";

interface filteredJobsProps  {
  filteredJobs: jobListType[]
  setIsFilterMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSortedJobs: React.Dispatch<React.SetStateAction<jobListType[]>>;
}

export default function AllJobs({ filteredJobs, setIsFilterMenuOpen, setSortedJobs }: filteredJobsProps) {
    const [gridView, setGridView] = useState(true);

  return (
    <section className=' flex flex-col items-start h-full text-black justify-center gap-2 w-full md:w-[78%]'>
        <JobNav setSortedJobs={setSortedJobs} setIsFilterMenuOpen={setIsFilterMenuOpen} filteredJobs={filteredJobs} />
        {
            gridView ? <GridView filteredJobs={filteredJobs} /> : <ListView  />
        }
    </section>
  )
}
