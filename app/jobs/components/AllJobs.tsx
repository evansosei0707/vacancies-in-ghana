"use client";

import { useState } from "react";
import JobNav from "./JobNav";
import Jobs from "./GridView";
import GridView from "./GridView";
import ListView from "./ListView";

export default function AllJobs() {
    const [gridView, setGridView] = useState(true);


  return (
    <section className=' flex flex-col items-start h-full text-black justify-center gap-2 w-full md:w-[78%]'>
        <JobNav />
        {
            gridView ? <GridView /> : <ListView />
        }
    </section>
  )
}
