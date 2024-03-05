import React from 'react'
import FeaturedBlogs from "@/app/blog/components/FeaturedBlogs"
import NewsLetter from './components/NewsLetter'
import TopReads from './components/TopReads'

export default function page() {
  return (
    <main className="flex min-h-screen mx-auto justify-start flex-col h-full  items-center w-full">
        <FeaturedBlogs />
        <TopReads blogTypeContent='Top reads' />
        <NewsLetter />
        <TopReads blogTypeContent='Job Hunt Guidance' />
        <TopReads blogTypeContent='Corporate News' />
    </main>
  )
}
