import { client } from "@/lib/client";
import ChoosePlan from "./components/ChoosePlan";
import CvReview from "./components/CvReview";
import Faqs from "./components/Faqs";
import { cvReviewQuery } from "@/app/lib/query";
import { cvReviewDataType } from "@/type";


async function getData() {
  const data = await client.fetch(cvReviewQuery);

  return data;
}

export default async function page() {
  const cvReviewData: cvReviewDataType = await getData()

  return (
    <main className="flex min-h-screen flex-col items-center w-full
     justify-start ">
        <CvReview cvReviewData={cvReviewData} />
        <ChoosePlan cvReviewData={cvReviewData} />
        <Faqs cvReviewData={cvReviewData} />
    </main>
  )
}
