"use client";

import employer from "@/public/employer.png";
import seeker from "@/public/job_seeker.png";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


export default function AccountType() {
    const [toggleAccount, SetToggleAccount] = useState< {
        id: number;
        name: string;
        link: string;
        logo: any;
        message: string;
    }>();

    const accountTypes: {
        id: number;
        name: string;
        link: string;
        logo: any;
        message: string;
    }[] = [
        {
            id: 0,
            name: 'job seeker',
            link: '/Job-seeker/sign-up',
            logo: seeker,
            message: "I am a job seeker looking for work",
        },
        {
            id: 1,
            name: 'employer',
            link: '/employer/sign-up',
            logo: employer,
            message: `I'm an employer looking to hire`,
        },
    ]

  return (
    <div className="flex flex-col items-center justify-center gap-7 w-full h-full">
        <h1 className=" lg:text-[40px] text-[27px] leading-[30px] md:leading-[37px] md:text-[30px] lg:leading-[47px] font-semibold text-center w-[95%]">Join as a job seeker or an employer</h1>
        <div className="flex flex-col md:flex-row gap-10 items-center mt-3 md:mt-5 lg:mt-7 justify-center">
            {
                accountTypes.map((item, idx) => (
                    <div key={idx} onClick={() => SetToggleAccount(item)} className={`flex flex-col cursor-pointer items-center justify-start hover:border-mainColor transition-colors duration-100 border-2 ${toggleAccount?.id === item.id ? "border-[#008080]": "border-[#D0D5DD]"} border-[#008080] p-2 px-4 pt-5 border h-[182px] w-[80%] max-w-[414px] md:max-w-[35%] rounded-md gap-4`}>
                        <div className="flex items-center w-full justify-between ">
                            <Image
                                src={item.logo}
                                width={30}
                                height={30}
                                alt={item.message}
                            />
                            <span className={`border rounded-full p-3 transition-colors duration-75 ${ toggleAccount?.id === item.id ? 'bg-[#008080] shadow-sm shadow-[#008080]' : 'border-[#D0D5DD] bg-white shadow-none'} `}></span>
                        </div>
                        <p className=" text-[28px] text-[#000000] font-medium leading-[34px] ">{item.message}</p>
                    </div>
                ))
            }
        </div>

        {toggleAccount?.name ?  (
                <Link href={`/account${toggleAccount?.link}`}  className={`md:max-w-[223px] text-white w-[80%] max-w-[414px] h-[50px] pt-3 transition-all duration-100 rounded-sm ${toggleAccount ? 'bg-[#088080] ': 'bg-[#9AA4A4] outline-none cursor-not-allowed' } text-xl text-center leading-[24px]`} >Join as { toggleAccount.name }</Link>
        ) : 
        <button className={`md:max-w-[223px] text-white w-[80%] max-w-[414px] h-[50px] transition-all duration-100 rounded-sm ${toggleAccount ? 'bg-[#088080] ': 'bg-[#9AA4A4] cursor-not-allowed' } text-xl text-center leading-[24px]`}>Creat account</button>
        }


        <Link href={'/account/login'} className=" text-base font-medium mb-5 whitespace-nowrap text-[#6E6E6E]">
            Already have an account? <span className=" text-[#008080] hover:underline">Sign in</span>
        </Link>
       
    </div>
  )
}
