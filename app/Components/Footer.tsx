import Image from "next/image";
import Link from "next/link";
import logoWhite from "@/public/white_logo.png"
import { FiSend } from "react-icons/fi";
import { forCompanies, forJobSeekers, resources, vacancies } from "../lib/helper";
import instragramLogo from "@/public/Frame (3).png"
import tiktokLogo from "@/public/Frame (2).png"
import appleLogo from "@/public/Frame (4).png"
import playStoreLogo from "@/public/Frame (5).png"
import { FaLinkedinIn,FaFacebookF,FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {

    
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

  return (
    <footer className="w-full flex flex-col items-center justify-center  gap-6 bg-mainColor mx-auto text-white">
        <div className="flex flex-col min-[748px]:flex-row w-[95%] md:w-[90%] text-white py-11 border-white/80 items-start justify-center gap-8" >
            <div className="flex flex-col min-[1322px]:flex-row min-[1322px]:justify-between w-full  flex-1 text-white items-start justify-center gap-8">
                <div className="flex flex-col flex-1 justify-center w-full items-start  gap-4">
                    <div className="w-[268px] h-[41px]">
                        <Image
                            src={logoWhite}
                            width={268}
                            height={41}
                            alt="white vacancies in ghana logo"
                        />
                    </div>
                    <p className=" text-xl leading-[24px]  ">Post jobs , Review CV&lsquo;s or Resumes and view job employment opportunities.</p>
                    <form className="flex flex-col w-full justify-center mb-7 items-start gap-3">
                        <div className="flex items-center h-[55px] box-border px-4 w-max bg-[#E9E9E9] overflow-hidden justify-center rounded-lg gap-4">
                                <input 
                                    className=" text-black px-3 outline-none placeholder:text-base placeholder:leading-[24px] placeholder:text-[#6E6E6E] placeholder:font-normal bg-transparent  shrink h-full     py-4"
                                    type="email"
                                    placeholder="Suscribe to our newsletter"
                                />
                                <button
                                    type="submit"
                                    className=" rounded-full w-10  text-mainColor flex items-center justify-center h-10 bg-mainColor p-2"
                                >
                                    <FiSend fontSize={25} color="#ffffff" />
                                </button>
                        </div>
                    </form>
                </div>
                <div className="flex flex-col flex-1 justify-center  items-start whitespace-nowrap gap-4">
                    <p className="text-[22px] leading-[26px] font-medium text-white">For Job Seekers</p>
                    <div className="flex flex-col justify-center items-start font-kumb gap-4">
                        {
                            forJobSeekers.map((item,idx) => (
                                <Link key={idx} href={`/job-seeker/${item.link}`} className="text-white text-[16px] font-light leading-[20px] tracking-wide hover:underline transition-colors duration-100">
                                    {item.label}
                                </Link>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-1 min-[1024px]:flex-row  text-white min-[1024px]:justify-between items-start justify-center gap-8">

                <div className="flex flex-col flex-1 justify-center whitespace-nowrap items-start gap-4">
                    <p className="text-[22px] leading-[26px] font-medium text-white">For Companies</p>
                    <div className="flex flex-col justify-center items-start font-kumb gap-4">
                            {
                                forCompanies.map((item,idx) => (
                                    <Link key={idx} href={`/job-seeker/${item.link}`} className="text-white font-light text-[16px] leading-[20px] tracking-wide hover:underline transition-colors duration-100">
                                        {item.label}
                                    </Link>
                                ))
                            }
                    </div>
                </div>
                <div className="flex flex-col flex-1 justify-center whitespace-nowrap items-start gap-4">
                    <p className="text-[22px] leading-[26px] font-medium text-white">Resources</p>
                    <div className="flex flex-col justify-center items-start font-kumb gap-4">
                            {
                                resources.map((item,idx) => (
                                    <Link key={idx} href={`/job-seeker/${item.link}`} className="text-white font-light text-[16px] leading-[20px] tracking-wide hover:underline transition-colors duration-100">
                                        {item.label}
                                    </Link>
                                ))
                            }
                    </div>
                </div>
                <div className="flex flex-col flex-1 justify-center whitespace-nowrap items-start gap-4">
                    <p className="text-[22px] leading-[26px] font-medium text-white">Vacancies</p>
                    <div className="flex flex-col justify-center items-start font-kumb gap-4">
                            {
                                vacancies.map((item,idx) => (
                                    <Link key={idx} href={`/job-seeker/${item.link}`} className="text-white font-light text-[16px] leading-[20px] tracking-wide hover:underline transition-colors duration-100">
                                        {item.label}
                                    </Link>
                                ))
                            }
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-[95%] md:w-[90%]">
            <div className="flex lg:items-center flex-col lg:flex-row items-start gap-4 justify-center border-b border-white/60 pb-6 lg:justify-between w-full">
                <div className="flex items-center justify-start gap-6">
                    <p className=" text-xl leading-[24px] text-white ">follow us:</p>
                    <div className="flex items-center text-white justify-center gap-3">
                        <a href="#" target="_blank" rel="noreferrer">
                            <FaFacebookF fontSize={24} color="white" />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer">
                            <FaLinkedinIn fontSize={24} color="white" />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer">
                            <FaYoutube fontSize={24} color="white" />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer">
                            <FaXTwitter fontSize={24} color="white" />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer">
                            <Image
                                src={instragramLogo}
                                width={24}
                                height={24}
                                alt="vacancies in ghana linkedIn profile link"

                             />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer">
                            <Image
                                src={tiktokLogo}
                                width={24}
                                height={24}
                                alt="vacancies in ghana tiktok profile link"
                             />
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-start gap-6">
                    <p className=" text-xl leading-[24px] text-white ">Download the app:</p>
                    <div className="flex items-center text-white justify-center gap-3">
                        <a href="#" target="_blank" rel="noreferrer">
                            <Image
                                src={appleLogo}
                                width={24}
                                height={24}
                                alt="vacancies in ghana linkedIn profile link"

                             />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer">
                            <Image
                                src={playStoreLogo}
                                width={24}
                                height={24}
                                alt="vacancies in ghana tiktok profile link"
                             />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex md:items-center flex-col md:flex-row justify-start pt-2 gap-5 items-start mx-auto w-[95%] font-kumb  md:justify-between pb-11">
                    <div className="flex items-center justify-center gap-4">
                        <Link href='/privacy' className="text-[20px] font-normal tracking-wide leading-[24px]">
                            Privacy Policy
                        </Link>
                        <Link href='/privacy' className="text-[20px] leading-[24px]">
                            Terms
                        </Link>
                    </div>
                    <p className=" text-white text-[20px] leading-[24px] whitespace-nowrap ">
                         <span className=" text-[20px]">&copy;</span>2017 - {currentYear}. Vacancies in Ghana.</p>
                    <a href='/privacy' className="text-[20px] leading-[24px] text-white">info@vacanciesinghana.com</a>
            </div> 
        </div>
    </footer> 
  )
}
