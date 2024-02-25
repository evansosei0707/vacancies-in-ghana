"use client"

import Filters from '@/app/Components/JobFilters'
import React from 'react'
import AllJobs from './AllJobs'

export default function JobberPage() {
  return (
    <div className='w-full h-full flex items-start justify-center'>
        <Filters />
        <AllJobs />
    </div>
  )
}
