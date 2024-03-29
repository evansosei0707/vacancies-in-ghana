import React from 'react'
import NewsEventsHero from './components/NewsEventsHero'
import NewsHighlights from './components/NewsHighlights'
import NewsLetter from '../discover/[careerCategory]/components/NewsLetter'
import { allBlogPosts } from '@/app/lib/query';
import { client } from '@/lib/client';
import { Post } from '@/type';
import ArticlesType from '../faqs/components/ArticlesType';
import UpcomingEvents from './components/UpcomingEvents';


async function getAllBlogData() {
  const data = await client.fetch(allBlogPosts);

  return data;
} 


export default async function page() {
    const allBlogData: Post[] = await getAllBlogData();


  return (
    <main className="flex min-h-screen mx-auto justify-start flex-col h-full  items-center w-full">
        <NewsEventsHero />
        <NewsHighlights allBlogData={allBlogData} />
        <NewsLetter />
        <ArticlesType  blogTypeContent='Job market news'  filteredBlogData={allBlogData} categorySlug='employers-hub'/>
        <ArticlesType  blogTypeContent='Company anouncements'  filteredBlogData={allBlogData} categorySlug='job-hunt-guidance'/>
        <UpcomingEvents />
    </main>
  )
}
