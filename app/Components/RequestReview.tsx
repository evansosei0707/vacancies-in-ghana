import Image from "next/image";
import homeReviewImage from "@/public/review-image.png"
import Link from "next/link";

export default function RequestReview() {
  return (
    <section className="w-[95%] lg:w-full flex p-4 md:p-9 bg-[#F2F7F5] rounded-lg lg:rounded-none mx-auto  my-8 gap-9 flex-col lg:flex-row items-center justify-center">
        <div className="flex items-center justify-center gap-6  lg:flex-row flex-col w-full md:w-[80%]">

            <div className="flex flex-1 w-full  lg:w-1/2 rounded-lg ">
                <Image
                    src={homeReviewImage}
                    width={437}
                    height={395}
                    alt="cv/resume review image on the homepage"
                />    
            </div> 
            <div className="flex items-start justify-start flex-col md:gap-5 gap-3 space-y-4 md:space-y-2 w-full lg:w-1/2">
                <p className=" lg:text-2xl md:text-xl leading-5 md:leading-6 lg:leading-[28px] text-lg text-customBlack/70 font-semibold">CV Review</p>
                <p className=" lg:text-[52px] text-[32px] md:text-[37px] leading-[40px] md:leading-[45px] font-semibold lg:leading-[60px] text-black">
                This is how <span className="text-mainColor">good companies find you a good company.</span>
                </p>
                <p className=" lg:text-2xl text-xl md:leading-5 leading-[28px]">Get access to CV reviews from the top recruiters in the country. Get noticed by potential employers.</p>
                <Link href='/services/cv-review' className=" bg-mainColor px-6 py-2 rounded-md text-white text-lg font-semibold leading-[24px]">Request review</Link>
            </div>
        </div>
    </section>
  )
}
