import React from 'react'
import FeaturedBlogs from './[careerCategory]/components/FeaturedBlogs';
import NewsLetter from './[careerCategory]/components/NewsLetter';
import TopReads from './[careerCategory]/components/TopReads';
import OtherCategory from './[careerCategory]/components/OtherCategory';
import { client } from '@/lib/client';
import { BlogCategories } from '@/app/lib/query';
import { allBlogPosts } from '@/app/lib/query';
import { BlogCategoriesType, Post } from '@/type';


async function getAllBlogData() {
  const data = await client.fetch(allBlogPosts);

  return data;
}  



export default async function careerCategory() {

  const allBlogData: Post[] = await getAllBlogData();
  const allBlogCatData: BlogCategoriesType[] = await client.fetch(BlogCategories);


  const featuredBlogData = allBlogData.filter(item => item.featured)

  
  return (
    <main className="flex min-h-screen mx-auto justify-start flex-col h-full  items-center w-full">
        <FeaturedBlogs featuredBlogData={featuredBlogData}  />
        <TopReads blogTypeContent='Top reads'  filteredBlogData={allBlogData} />
        <NewsLetter />
        {
          allBlogCatData.map((item, idx) => (
            <OtherCategory key={idx} filteredBlogData={allBlogData} categorySlug={item.slug}  blogTypeContent={item.title} />
          ))
        }
    </main>
  )
}  
