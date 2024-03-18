import { jobs } from "@/app/data/jobList";
import JobNavDetails from "./components/JobNavDetails";
import { Metadata } from "next";
import JobContent from "./components/JobContent";
import { jobListType } from "@/type";

type Params = {
  params: {
      jobDetails : string
  }
}

export async function generateMetadata({params: { jobDetails }}: Params): Promise<Metadata> {
  

  // fetch data
  const filteredJobData =  jobs.find((item) => item.id.toString() === jobDetails)

  return {
    title: filteredJobData?.title,
    description: filteredJobData?.work_location,
  };
}


export default function page({params: { jobDetails }}: Params) {

  const filteredJobData =  jobs.find((item) => item.id.toString() === jobDetails) as jobListType


  return (
    <main className="w-full h-full flex items-center flex-col justify-center">
        <JobNavDetails />
        <JobContent singleJobData={filteredJobData} jobDetails={jobDetails} />
    </main>
  )
}


export  function generateStaticParams() {
  // const allServiceData: serviceDetailResponse[] = await getData();

  return jobs.map( job => ({
    params: {
      jobDetails: job.id,
    },
  }))

}