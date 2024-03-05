import { pricingPackages } from "@/app/lib/helper";
import { GiCheckMark } from "react-icons/gi";
import Link from "next/link";



export default function ChoosePlan() {
  return (
    <section className=" w-full flex flex-col text-customBlack bg-[#f5f7f8] py-14 items-center justify-center p-10">
        <div className="flex justify-center flex-col items-center gap-4 w-full">
            <h3 className=" lg:text-[60px] text-[35px] leading-[40px] md:text-[52px] md:leading-[55px] lg:leading-[72px] font-semibold">
                Choose your plan
            </h3>
            <p className=" md:text-[24px] text-center text-xl leading-[27px] mb-6 md:leading-[35px]">
                With your newfound insights, choose from our packages that cater to your unique needs.
            </p>
            <p className="bg-[#F0F0F0] text-black rounded-3xl px-8 py-2">
                ₵ Pricing
            </p>
        </div>
        <div className=" flex items-center only-of-type:after:first:bg-mainColor/5  flex-col md:flex-row flex-wrap mt-12  justify-center md:w-full gap-5 w-[90%]  ">
            {
                pricingPackages.map((item, idx) => (
                    <div key={idx} className={` ${item.packageName === 'Silver' ? 'bg-mainColor/5': 'bg-white'}  relative min-w-[280px] max-w-[340px] md:max-w-[350px]  w-full rounded-xl p-8 gap-5 py-14 flex-col flex items-center justify-center `}>
                        {
                            item.packageName === 'Silver' && (
                                <p className=" absolute -top-5 text-lg bg-mainColor  z-20 leading-[24px] rounded-md text-white px-6 py-3 font-semibold">Popular</p>
                            )
                        }
                        <p className=" text-[32px] leading-[35px] font-medium text-customBlack">{item.packageName}</p>
                        <p className="text-[36px] leading-[35px] font-medium text-customBlack">
                            {item.price}
                        </p>
                        <div className="flex items-center mx-auto w-full justify-center gap-5">
                            <div className="flex items-start h-[350px] flex-col justify-start gap-4 w-full mx-auto">
                                {
                                    item.benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-center justify-center gap-3">
                                            <GiCheckMark color="#008080" />
                                            <p className=" text-xl leading-[24px] text-black">{benefit}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <Link href={`/pricing/${item.packageName}`} className="bg-mainColor text-center mx-auto w-[70%] px-6 py-3 text-white font-semibold rounded-xl">Get Started</Link>
                    </div>

                ))
            }
        </div>
    </section>
  )
}
