import Link from "next/link";
import { FaqItem } from "./FaqItem";
import {  realFaqsType } from "@/type";

interface FaqsProps {
    faqs: realFaqsType
}

export const Faqs = ({ faqs }:FaqsProps) => {
  return (
    <div className="w-full px-8 flex flex-col items-start justify-center gap-5 my-10 py-8">
      <h2 className="md:text-[36px] md:leading-[43px] font-semibold text-[30px] leading-[35px] text-black ">FAQs</h2>
      <div className="flex flex-col w-full items-start justify-center gap-10 ">
        <div className="w-full flex flex-col items-start justify-center gap-4">
            <p className=" text-[24px] leading-[29px] font-medium text-[#444444]">Getting Started</p>
            <div className=" flex flex-col bg-[#F7F9F9] items-start justify-center w-full">
                {
                    faqs.gettingStartedFaqs.map((item, idx) => (
                        <FaqItem key={idx} question={item.question} answer={item.answer} />
                    ))
                }
            </div>
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-4">
            <p className=" text-[24px] leading-[29px] font-medium text-[#444444]">Posting Jobs</p>
            <div className=" flex flex-col bg-[#F7F9F9] items-start justify-center w-full">
                {
                    faqs.postingJobsFaqs.map((item, idx) => (
                        <FaqItem key={idx} question={item.question} answer={item.answer} />
                    ))
                }
            </div>
            <div className="flex justify-end justify-self-end ml-auto w-full">
                <Link href='' className=" hover:underline text-xl leading-[24px] text-mainColor">View more</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;