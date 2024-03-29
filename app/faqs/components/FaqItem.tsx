"use client"

import { useRef, useState } from "react";
import { GoDotFill } from "react-icons/go";


interface FaqItemProps {
    question: string,
    answer: string,
}


  export const FaqItem = ({ question, answer }: FaqItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const answerRef = useRef<HTMLDivElement>(null);
  
    const toggleAnswer = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className=" bg-transparent  w-full ">
        <div
          className=" flex border-b border-[#D2D2D2]  px-7 py-4 justify-between items-center w-full cursor-pointer"
          onClick={toggleAnswer}
        >
          <h3 className="text-xl leading-[24px] text-[#545454] ">{question}</h3>
          <div className="relative w-6 h-6">
            <span
                className={`absolute bg-mainColor transition-transform ${
                isOpen ? 'rotate-90  opacity-0' : ''
                }`}
                style={{
                width: '2px',
                height: '16px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                }}
            />
            <span
                className={`absolute bg-mainColor transition-transform ${
                isOpen ? '' : ''
                }`}
                style={{
                width: '16px',
                height: '2px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                }}
            />
        </div>
        </div>
        <div
          ref={answerRef}
          className={`overflow-hidden transition-height ${isOpen && 'border-b border-[#D2D2D2]'}  px-3 w-full duration-500 ease-in-out ${
            isOpen ? 'h-auto' : 'h-0'
          }`}
          style={{ height: isOpen ? `${answerRef.current?.scrollHeight}px` : 0 }}
        >
         <div className="px-4 py-2 flex items-center gap-2 text-black text-lg font-medium leading-[19px]">
            <span className=" flex whitespace-nowrap flex-shrink-0">
                <GoDotFill color="#008080" /> 
            </span>
            {answer}
        </div>
        </div>
      </div>
    );
  };