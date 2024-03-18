import { jobs } from '@/app/data/jobList'
import Image from 'next/image';
import React from 'react'
import { RxDotFilled } from 'react-icons/rx';
import { CiBookmark } from 'react-icons/ci';
import { timeAgo } from '@/app/lib/function';
import Link from 'next/link';
import { jobListType } from '@/type';

interface SimilarJobsProps {
    singleJobData: jobListType
    jobDetails: string
}
export default function SimilarJobs({ singleJobData, jobDetails  }: SimilarJobsProps) {

    function createRegexPattern(currentJobTitle: string) {
        // Split the current job title into words
        const words = currentJobTitle.toLowerCase().split(' ');
      
        // Create a regex pattern that matches any of the words in any order
        const pattern = `(${words.join('|')})`;
      
        // Return the regex pattern
        return new RegExp(pattern, 'i');
      }


    function filterJobTitles(allJobs: jobListType[], currentJobTitle: string) {
        // Create a regex pattern from the current job title
        const pattern = createRegexPattern(currentJobTitle);
       // First, filter out the jobs with an exact title match
        const exactTitleMatch = allJobs.filter(job => job.title.toLowerCase() === currentJobTitle.toLowerCase());

        // Then, filter out the remaining jobs with partial title matches
        const partialTitleMatch = allJobs.filter(job => pattern.test(job.title.toLowerCase()) && job.title.toLowerCase() !== currentJobTitle.toLowerCase());

        // Combine the exact and partial matches, with exact matches first
        const filteredJobs = [...exactTitleMatch, ...partialTitleMatch];

        const similarJobsFiltered = filteredJobs.filter((job) => job.id.toString() !== jobDetails)

        return similarJobsFiltered;
    }

    const filteredJobs = filterJobTitles(jobs, singleJobData.title);



    const similarJobsData = jobs.filter(job => job.title.toLowerCase() === singleJobData.title.toLowerCase());
    const featuredJobsData = jobs.filter(job => job.featured);

    
    const jobsByCurrentCompany = jobs.filter(job => job.company_name.toLowerCase() === singleJobData.company_name.toLowerCase());

  return (
    <div className='lg:w-[40%] flex items-start justify-start gap-7 flex-col w-full'>
        <div className='w-full items-start justify-start flex flex-col gap-4'>
            {
                filteredJobs.length > 0 ? (
                    <>
                        <h3 className=' text-xl leading-[20px] font-medium mb-2'>Similar Jobs</h3>
                        {/* dfsdjfjdskjfkds */}
                        <div className='flex flex-col gap-4 items-center justify-center w-full h-full'>
                            {
                                filteredJobs.slice(0,3).map((item: jobListType, idx: number) => (
                                    <Link
                                        href={`/jobs/${item.jobFunction}/${item.title}/${item.id}`}
                                        key={idx} className=' border bg-white w-full flex-1 rounded-md flex flex-col items-start p-3 gap-4 justify-center'>
                                        <div className='flex items-center w-full justify-between'>
                                        <div className='flex items-center justify-start'>
                                            <div className='w-[38px] h-[38px]'>
                                            <Image
                                                src={item.logo_url}
                                                alt={`${item.company_name}-logo`}
                                                width={38}
                                                height={38}
                                            />
                                            </div>
                                            <div className='flex flex-col items-start justify-center gap-2'>
                                            <h2 className='text-xl leading-5 text-[#1A1A1A] font-medium'>{item.title}</h2>
                                            <div className=' text-sm flex items-center justify-center gap-1 text-[#545454]/90 leading-[14px]'>
                                                <span className=' text-mainColor'>{item.company_name}</span>
                                                <RxDotFilled color='#545454' />
                                                <span>{item.company_location}</span>
                                            </div>
                                            </div>
                                        </div>
                                        <div>
                                            <CiBookmark fontSize={22} color='#A0A0A0' />
                                        </div>
                                        </div>
                                        <div className='flex items-center justify-start'>
                                        <p className=' text-[#A0A0A0]/90 text-sm  leading-5'>Job function: {item.company_name}</p>
                                        </div>
                                        <div className='flex items-center gap-3 justify-start w-full'>
                                        <p className='bg-[#f6f6f6] rounded-sm p-1 px-2 text-sm font-medium text-[#545454]/90'>{item.job_type}</p>
                                        <p className='bg-[#f6f6f6] rounded-sm p-1  px-2 text-sm font-medium text-[#545454]/90'>{item.work_location}</p>
                                        <p className='bg-[#f6f6f6] rounded-sm p-1  px-2 text-sm font-medium text-[#545454]/90'>{item.experience_level}</p>
                                        </div>
                                        <div className='flex items-center text-sm text-[#A0A0A0]/80 gap-1 justify-start'>
                                        <span className=' text-sm'>{timeAgo(item.time_posted)}</span>
                                        <RxDotFilled  />
                                        <span className=' text-sm'>{item.applicants} applicants</span>
                                        </div>
                                        
                                    </Link>
                            ))}
                            {
                                filteredJobs.length > 3 && (
                                    <div className='w-full flex justify-end'>
                                        <Link href={`/jobs/${singleJobData.jobFunction}/${singleJobData.title}`} className='font-medium text-lg text-mainColor'>See more</Link>
                                    </div>
                                )
                            }
                        </div>
                    
                    </>
                ): (

                    <>
                        <h3 className=' text-xl leading-[20px] font-medium mb-2'>Featured Jobs</h3>
                        {/* dfsdjfjdskjfkds */}
                        <div className='flex flex-col gap-4 items-center justify-center w-full h-full'>
                            {
                                featuredJobsData.slice(0,3).map((item: jobListType, idx: number) => (
                                    <Link
                                        href={`/jobs/${item.jobFunction}/${item.title}/${item.id}`}
                                        key={idx} className=' border bg-white w-full flex-1 rounded-md flex flex-col items-start p-3 gap-4 justify-center'>
                                        <div className='flex items-center w-full justify-between'>
                                        <div className='flex items-center justify-start'>
                                            <div className='w-[38px] h-[38px]'>
                                            <Image
                                                src={item.logo_url}
                                                alt={`${item.company_name}-logo`}
                                                width={38}
                                                height={38}
                                            />
                                            </div>
                                            <div className='flex flex-col items-start justify-center gap-2'>
                                            <h2 className='text-xl leading-5 text-[#1A1A1A] font-medium'>{item.title}</h2>
                                            <div className=' text-sm flex items-center justify-center gap-1 text-[#545454]/90 leading-[14px]'>
                                                <span className=' text-mainColor'>{item.company_name}</span>
                                                <RxDotFilled color='#545454' />
                                                <span>{item.company_location}</span>
                                            </div>
                                            </div>
                                        </div>
                                        <div>
                                            <CiBookmark fontSize={22} color='#A0A0A0' />
                                        </div>
                                        </div>
                                        <div className='flex items-center justify-start'>
                                        <p className=' text-[#A0A0A0]/90 text-sm  leading-5'>Job function: {item.company_name}</p>
                                        </div>
                                        <div className='flex items-center gap-3 justify-start w-full'>
                                        <p className='bg-[#f6f6f6] rounded-sm p-1 px-2 text-sm font-medium text-[#545454]/90'>{item.job_type}</p>
                                        <p className='bg-[#f6f6f6] rounded-sm p-1  px-2 text-sm font-medium text-[#545454]/90'>{item.work_location}</p>
                                        <p className='bg-[#f6f6f6] rounded-sm p-1  px-2 text-sm font-medium text-[#545454]/90'>{item.experience_level}</p>
                                        </div>
                                        <div className='flex items-center text-sm text-[#A0A0A0]/80 gap-1 justify-start'>
                                        <span className=' text-sm'>{timeAgo(item.time_posted)}</span>
                                        <RxDotFilled  />
                                        <span className=' text-sm'>{item.applicants} applicants</span>
                                        </div>
                                        
                                    </Link>
                            ))}
                            {
                                filteredJobs.length > 3 && (
                                    <div className='w-full flex justify-end'>
                                        <Link href={`/jobs/${singleJobData.jobFunction}/${singleJobData.title}`} className='font-medium text-lg text-mainColor'>See more</Link>
                                    </div>
                                )
                            }
                        </div>
                    
                    </>
                )
            }
        </div>
        {
            jobsByCurrentCompany.length > 0 ? (

                <div className='w-full items-start justify-start flex flex-col gap-4'>
                    <h3 className=' text-xl leading-[20px] font-medium mb-2'>Jobs from {singleJobData.company_name}</h3>
                    {/* dfsdjfjdskjfkds */}
                    <div className='flex flex-col items-center gap-4 justify-center w-full h-full'>
                        {
                            jobsByCurrentCompany.slice(0,3).map((item: jobListType, idx: number) => (
                                <Link
                                    href={`/jobs/${item.jobFunction}/${item.title}/${item.id}`}
                                    key={idx} className=' border bg-white w-full flex-1 rounded-md flex flex-col items-start p-3 gap-4 justify-center'>
                                    <div className='flex items-center w-full justify-between'>
                                    <div className='flex items-center justify-start'>
                                        <div className='w-[38px] h-[38px]'>
                                        <Image
                                            src={item.logo_url}
                                            alt={`${item.company_name}-logo`}
                                            width={38}
                                            height={38}
                                        />
                                        </div>
                                        <div className='flex flex-col items-start justify-center gap-2'>
                                        <h2 className='text-xl leading-5 text-[#1A1A1A] font-medium'>{item.title}</h2>
                                        <div className=' text-sm flex items-center justify-center gap-1 text-[#545454]/90 leading-[14px]'>
                                            <span className=' text-mainColor'>{item.company_name}</span>
                                            <RxDotFilled color='#545454' />
                                            <span>{item.company_location}</span>
                                        </div>
                                        </div>
                                    </div>
                                    <div>
                                        <CiBookmark fontSize={22} color='#A0A0A0' />
                                    </div>
                                    </div>
                                    <div className='flex items-center justify-start'>
                                    <p className=' text-[#A0A0A0]/90 text-sm  leading-5'>Job function: {item.company_name}</p>
                                    </div>
                                    <div className='flex items-center gap-3 justify-start w-full'>
                                    <p className='bg-[#f6f6f6] rounded-sm p-1 px-2 text-sm font-medium text-[#545454]/90'>{item.job_type}</p>
                                    <p className='bg-[#f6f6f6] rounded-sm p-1  px-2 text-sm font-medium text-[#545454]/90'>{item.work_location}</p>
                                    <p className='bg-[#f6f6f6] rounded-sm p-1  px-2 text-sm font-medium text-[#545454]/90'>{item.experience_level}</p>
                                    </div>
                                    <div className='flex items-center text-sm text-[#A0A0A0]/80 gap-1 justify-start'>
                                    <span className=' text-sm'>{timeAgo(item.time_posted)}</span>
                                    <RxDotFilled  />
                                    <span className=' text-sm'>{item.applicants} applicants</span>
                                    </div>
                                    
                                </Link>
                        ))}
                        {
                            filteredJobs.length > 3 && (
                                <div className='w-full flex justify-end'>
                                    <Link href={`/jobs/${singleJobData.jobFunction}/${singleJobData.title}`} className='font-medium text-lg text-mainColor'>See more</Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            ): (
                ''
            )
        }
    </div>
  )
}
