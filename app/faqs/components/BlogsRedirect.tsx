import { allBlogPosts } from '@/app/lib/query';
import { client } from '@/lib/client';
import { Post } from '@/type';
import React from 'react'
import MostRecent from './MostRecent';
import ArticlesType from './ArticlesType';


async function getData() {
    const data = await client.fetch(allBlogPosts);
  
    return data;
  }  
  

export default async function BlogsRedirect() {
    const allBlogData: Post[] = await getData();

  return (
    <div className="flex mx-auto justify-start flex-col h-full  items-center w-full">
        <MostRecent blogTypeContent='Most recent article'  filteredBlogData={allBlogData} />
        <ArticlesType  blogTypeContent='Top articles for Employers'  filteredBlogData={allBlogData} categorySlug='employers-hub'/>
        <ArticlesType  blogTypeContent='Top articles for Job seekers'  filteredBlogData={allBlogData} categorySlug='job-hunt-guidance'/>
    </div>
  )
}
