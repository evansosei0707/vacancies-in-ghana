import Link from "next/link"
import Image from "next/image"
import uploadCvImage from "@/public/Rectangle 127.png"
import QuestionsAndAnswers from "./QuestionsAndAnswers"
import { cvReviewDataType } from "@/type"
import { urlFor } from "@/lib/client"

interface  CvReviewProps {
    cvReviewData: cvReviewDataType
}

export default function Faqs({ cvReviewData }: CvReviewProps) {
  return (
    <section className="w-full flex flex-col py-10  bg-[#f5f7f8] items-center justify-start gap-5 mx-auto ">
        <div className="flex flex-col items-center gap-6 justify-center w-full">
            <h2 className=" md:text-[40px] text-[30px] leading-[24px] font-semibold text-customBlack">Frequently Asked Questions</h2>
            <p className="md:text-[20px] text-lg leading-[20px] md:leading-[16px] text-center text-customBlack">{cvReviewData.fags.faqsDescription}<Link className="text-mainColor hover:underline" href='/contact'>Contact Us</Link></p>
        </div>
        <QuestionsAndAnswers cvReviewData={cvReviewData} />
        <button className=" text-lg leading-[24px] bg-mainColor text-white rounded-lg font-semibold px-7 py-3">See more</button>

        <div className=" bg-mainColor rounded-lg lg:w-[88%] w-[95%] mt-14 flex-col-reverse p-5 flex  items-start justify-start gap-4 min-[800px]:flex-row">
            <div className="flex flex-col items-start text-white gap-6 lg:gap-10 justify-start w-full">
                <h2 className=" lg:text-[40px] text-[30px] leading-[35px] lg:leading-[50px] font-semibold">{cvReviewData.uploadCV.biggerText}</h2>
                <p className=" text-lg leading-[24px] w-[95%] font-medium">
                   {cvReviewData.uploadCV.smallerText}
                </p>
                <button className=" text-lg px-10 py-3 rounded-lg leading-[24px] bg-white text-mainColor font-semibold">Upload CV</button>
            </div>
            <div className="grid place-items-center w-full h-full min-[800px]:w-[50%] pr-">
                <div className="rounded-lg w-full min-[800px]:w-[378px] min-[800px]:h-full h-[263px]  overflow-hidden">
                    <Image
                        src={urlFor(cvReviewData.uploadCV.image).url()}
                        alt="upload cv image"
                        height={263}
                        width={378}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
