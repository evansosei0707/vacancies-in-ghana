import FaqsHeroSection from './components/FaqsHeroSection'
import Faqs from './components/Faqs'
import { client } from '@/lib/client'
import { fagsDataQuery } from '../lib/query'
import { fagsDataType } from '@/type'
import BlogsRedirect from './components/BlogsRedirect'

async function getData() {
    const data = await client.fetch(fagsDataQuery);

    return data;
}

export default async function FaqsPage() {
    const faqsData: fagsDataType  = await getData();

    console.log(faqsData);
    
  return (
    <main className=' w-full mx-auto flex-col flex items-center justify-center h-full'>
       <FaqsHeroSection faqsData={faqsData} />
       <Faqs faqs={faqsData.fags} />
       <BlogsRedirect />
    </main>
  )
}
