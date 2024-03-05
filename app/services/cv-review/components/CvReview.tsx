import Image from "next/image";
import cvHeroImage from "@/public/Rectangle 113.png"
import cvHeroImage2 from "@/public/Rectangle 114.png"


export default function CvReview() {
  return (
    <section className="bg-[#F5FBFF] w-full flex flex-col justify-start items-start lg:pb-16 pb-11  gap-9 p-4 md:p-10 ">
        <div className="flex md:justify-between items-start md:items-center gap w-full flex-col md:flex-row justify-start gap-6">
            <div className=" w-full md:w-1/2 px-4">
                <h1 className=" text-[28px] lg:text-[48px] md:text-[36px] md:leading-[39px] leading-[33px] lg:leading-[51px] font-semibold text-customBlack">Unlock Your Potential! Upload your CV now for a comprehensive review by our expert team.</h1>
            </div>
            <div className=" w-full md:w-1/2 flex flex-col px-4 md:px-7 gap-6 items-start">
                <h3 className=" text-xl leading-[30px] lg:text-[24px] lg:leading-[35px] font-medium text-customBlack">
                Elevate your career prospects with personalized feedback and valuable insights. Take the first step towards a stronger, standout resume today!
                </h3>
                <button className=" text-lg leading-[24px] font-semibold text-white bg-mainColor rounded-md px-8 py-3">
                    Submit CV/Resume
                </button>
            </div>
        </div>
        <div className="flex flex-col md:flex-row w-full items-center justify-center gap-6">
            <div className="w-full md:w-1/2 h-[400px] md:h-[493px] overflow-hidden rounded-xl">
                <Image
                    src={cvHeroImage}
                    alt="cv-review/resume review image 1"
                    className=" object-cover h-full w-full"
                />
            </div>
            <div className="w-full md:w-1/2 h-[400px] md:h-[493px] overflow-hidden rounded-xl">
                <Image
                    src={cvHeroImage2}
                    alt="cv-review/resume review image 1"
                    className=" object-cover h-full w-full"
                />
            </div>
        </div>
    </section>

  )
}
