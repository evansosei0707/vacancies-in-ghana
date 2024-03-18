"use client";

import { useState } from "react";
import JobNav from "./JobNav";
import GridView from "./GridView";
import ListView from "./ListView";
import { FiChevronsLeft, FiChevronsRight, FiDelete } from 'react-icons/fi'
import ReactPaginate from 'react-paginate'
import { jobListType } from "@/type";

interface filteredJobsProps  {
  filteredJobs: jobListType[]
  setIsFilterMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSortedJobs: React.Dispatch<React.SetStateAction<jobListType[]>>;
}

export default function AllJobs({ filteredJobs, setIsFilterMenuOpen, setSortedJobs }: filteredJobsProps) {
    const [gridView, setGridView] = useState(true);

      // Pagination-----------------------------------------------------------------------------------------------------
  const [offset, setOffset] = useState(0);
  const jobsPerPage = 10;

  const endOffset = offset + jobsPerPage;
  const currentJobs = filteredJobs.slice(offset, endOffset);
  const pageCount = Math.ceil(filteredJobs.length / jobsPerPage);

  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * jobsPerPage) % filteredJobs.length;
    setOffset(newOffset);
  };




  return (
    <section className=' flex flex-col items-start h-full text-black justify-center gap-2 w-full mb-5 md:w-full'>
        <JobNav setSortedJobs={setSortedJobs} setIsFilterMenuOpen={setIsFilterMenuOpen} filteredJobs={filteredJobs} />
        {
            gridView ? <GridView filteredJobs={currentJobs} /> : <ListView  />
        }
         <ReactPaginate
              breakLabel="..."
              nextLabel={<FiChevronsRight color="#008080" />}
              onPageChange={handlePageClick}
              pageRangeDisplayed={2}
              pageCount={pageCount}
              previousLabel={<FiChevronsLeft color="#008080" />}
              renderOnZeroPageCount={null}
              containerClassName="wb-pagination"
              pageClassName="pagination-item"
              pageLinkClassName="pagination-link"
              activeClassName="pagination-link-active"
              previousLinkClassName="prev"
              nextLinkClassName="next"
              disabledClassName="disabled"
            />
    </section>
  )
}
