import { Post } from '@/type';
import { Metadata } from 'next';
import React from 'react'
import { singleBlogQuery, allBlogPosts } from '@/app/lib/query';
import { client, urlFor } from '@/lib/client';
import { RxDotFilled } from 'react-icons/rx';
import Image from 'next/image';
import { formatDateTime } from '@/app/lib/function';
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { PortableText } from "@portabletext/react"
import { RichText } from './components/RichText';

async function getData(slug: string) {
    const data = await client.fetch(singleBlogQuery(slug));

    return data;
} 


type Params = {
    params: {
        blogDetails : string
    }
  }


  export async function generateMetadata({params: { blogDetails }}: Params): Promise<Metadata> {
    const singleBlogData: Post = await getData(blogDetails);
    
  
    if(!singleBlogData) {
      return {
        title: 'No Blog Found'
      }
    }
  
    return {
      title: singleBlogData.title,
      description: singleBlogData.description,
    };
  }
  

export default async function BlogDetailsPage({params: { blogDetails }}: Params) {
    const singleBlogData: Post = await getData(blogDetails);


  return (
    <main className='w-full h-full items-center max-w-5xl mx-auto justify-center'>
        <div className='flex flex-col w-full items-center mt-14 px-2 justify-center gap-7'>
            <h1 className='lg:leading-[80px] text-customBlack lg:text-[80px] md:text-[55px] md:leading-[60px] text-[40px] leading-[45px] font-medium text-center'>{singleBlogData.title}</h1>
            <div className=' bg-[#EBEFEF] flex items-center gap-4 justify-center rounded-3xl px-5 py-3'>
                <p className=' md:text-xl text-lg leading-5 md:leading-[24px] text-mainColor'>{singleBlogData.categories[0].title}</p>
                <RxDotFilled />
                <p className=' md:text-xl text-lg leading-5 md:leading-[24px] text-black'>{formatDateTime(singleBlogData.publishedAt)}</p>
            </div>
            <div className='flex items-end justify-center gap-4'>
                <a href="#" target="_blank" rel="noreferrer" className=' text-[#A0A0A0] hover:text-mainColor transition-colors duration-100 cursor-pointer'>
                    <FaFacebookF fontSize={24} />
                </a>
                <a href="#" target="_blank" rel="noreferrer" className=' text-[#A0A0A0] hover:text-mainColor transition-colors duration-100 cursor-pointer'>
                    <FaLinkedinIn fontSize={24} />
                </a>
                <a href="#" target="_blank" rel="noreferrer" className=' text-[#A0A0A0] hover:text-mainColor transition-colors duration-100 cursor-pointer'>
                    <FaXTwitter fontSize={24}  />
                </a>
            </div>
        </div>
        <div className='w-full flex flex-col justify-start items-center px-8 mt-10 h-full gap-5'>
            <div className=' rounded-xl overflow-hidden w-full h-[526px]'>
                <Image
                    src={urlFor(singleBlogData.mainImage).url()}
                    alt={`${singleBlogData.title} main blog Image`}
                    width={1000}
                    height={526}
                    className='w-full h-full object-cover'
                />
            </div>
            <p className=' text-[24px] leading-[48px] text-[#444444] font-medium w-full'>{singleBlogData.description}</p>
            <div className='w-full items-start  justify-start flex flex-col'>
                <PortableText value={singleBlogData?.body} components={RichText} />
            </div>
        </div>
    </main>
  )
}


export async function generateStaticParams() {
    const allBlogPostData: Post[] = await client.fetch(allBlogPosts);
  
    return allBlogPostData.map( blogCat => ({
      params: {
        blogDetails: blogCat.slug.current,
      },
    }))
  
  }
