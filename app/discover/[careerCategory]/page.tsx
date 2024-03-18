import React from 'react'
import FeaturedBlogs from './components/FeaturedBlogs';
import NewsLetter from './components/NewsLetter'
import TopReads from './components/TopReads'
import OtherCategory from './components/OtherCategory';
import { Metadata } from 'next';
import { client } from '@/lib/client';
import { BlogCategories } from '@/app/lib/query';
import { allBlogPosts } from '@/app/lib/query';
import { BlogCategoriesType, Post } from '@/type';


async function getAllBlogData() {
  const data = await client.fetch(allBlogPosts);

  return data;
}  



type Params = {
  params: {
      careerCategory : string
  }
}

export async function generateMetadata({params: { careerCategory }}: Params): Promise<Metadata> {


  function convertToTitleCase(str: string) {
    const words = str.split('-');
  
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  
    const result = capitalizedWords.join(' ');
  
    return result;
  }
 
  return {
    title: `${convertToTitleCase(careerCategory)} | Vacancies in Ghana`,
  };
}


export default async function careerCategory({params: { careerCategory }}: Params) {

  const allBlogData: Post[] = await getAllBlogData();
  const allBlogCatData: BlogCategoriesType[] = await client.fetch(BlogCategories);

  const filteredCategoryBlog :BlogCategoriesType[] = allBlogCatData.filter((item) => item.slug !== careerCategory);



  const filteredBlogData =  allBlogData.filter(item => item.categories.some(cat => cat.slug.current.includes(careerCategory)))

  const featuredBlogData = allBlogData.filter(item => item.featured)

  function convertToTitleCase(str: string) {
    const words = str.split('-');
  
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  
    const result = capitalizedWords.join(' ');
  
    return result;
  }
 
  return (
    <main className="flex min-h-screen mx-auto justify-start flex-col h-full  items-center w-full">
        <FeaturedBlogs featuredBlogData={featuredBlogData}  />
        <TopReads blogTypeContent='Top reads'  filteredBlogData={filteredBlogData} />
        <NewsLetter />
        {
          filteredCategoryBlog.map((item, idx) => (
            <OtherCategory key={idx} filteredBlogData={filteredBlogData} categorySlug={item.slug}  blogTypeContent={item.title} />
          ))
        }
    </main>
  )
}  

export async function generateStaticParams() {
  const allBlogCatData: Post[] = await client.fetch(BlogCategories);
  
  return allBlogCatData.map( blogCat => ({
    params: {
      careerCategory: blogCat.slug ,
    },
  }))

}

