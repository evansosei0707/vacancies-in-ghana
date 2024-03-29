import React from 'react'
import FaqsHeroSection from './components/FaqsHeroSection'
import Faqs from './components/Faqs'
import TopReads from '../discover/[careerCategory]/components/TopReads'
import { client } from '@/lib/client'
import { fagsDataQuery } from '../lib/query'
import { fagsDataType } from '@/type'
import BlogsRedirect from './components/BlogsRedirect'

async function getData() {
    const data = await client.fetch(fagsDataQuery);

    return data;
}

export default async function page() {

    const faqsData: fagsDataType  = await getData();
    
  return (
    <main className=' w-full mx-auto flex-col flex items-center justify-center h-full'>
       <FaqsHeroSection heroSectionData={faqsData.heroSection} />
       <Faqs faqs={faqsData.fags} />
       <BlogsRedirect />
    </main>
  )
}
