"use client";

import { faqsData } from "@/app/lib/helper";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";



export default function QuestionsAndAnswers() {
  const [toggleFaq, setToggleFaq] = useState<null | number>(null);
  const [offAndOn, setOffAndOn] = useState(false);


  return (
    <div className="md:w-[70%] lg:w-[55%] flex px-7 flex-col w-full items-center gap-7 mx-auto mt-10 justify-center">
        {
          faqsData.map((item, idx) => (
            <div key={idx} className=" w-full flex gap-6 px-4 p-3 flex-col rounded-lg overflow-hidden items-center justify-center bg-mainColor/5 h-max">
              <div onClick={() => {
                setToggleFaq(item.id)
                setOffAndOn((prev) => !prev)
              }} className="flex cursor-pointer items-center h-12  rounded-lg justify-between w-full px-5">
                <p className="text-[#545454] text-lg leading-5 md:leading-[24px] md:text-[24px] font-medium">
                  {item.question}
                </p>
                <div style={{rotate: toggleFaq === idx && offAndOn ? '-180deg' : 'initial'}} className=" transition-all duration-200 transform ">
                  <IoIosArrowDown color="#636363" fontSize={30} />
                </div>
              </div>
              <div style={{ height: toggleFaq === idx && offAndOn ? '100px' : '0px'  }} className={` transition-all duration-300 px-8 flex items-center justify-center overflow-hidden bg-white rounded-2xl`}>
                 <p className=" text-customBlack/50 text-lg leading-6">{item.answers}</p>
              </div>
            </div>
          ))
        }
    </div>
  )
}
