import Image from "next/image";
import contactImage from '@/public/contact-image.png'
import { GiRotaryPhone } from "react-icons/gi";
import { GoMail } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import ContactForm from "./components/ContactForm";



export default function page() {
  return (
    <main className=" w-full flex flex-col items-center justify-start gap-8">
        <div className=" w-full h-full  md:px-0">
            <div className="w-full h-[389px]  bg-slate-400 relative contact-hero">
                <Image
                    src={contactImage}
                    alt="contact page main image"
                    width={2000}
                    height={389}
                    className="w-full h-full object-cover"
                />
                <div className="absolute contact-hero-child top-0 left-0 text-white w-full h-full flex flex-col gap-4 items-start justify-end pl-8 pb-4">
                    <h3 className=" text-[40px] leading-[48px] font-semibold">Contact Information</h3>
                    <div className=" text-white flex justify-start items-center gap-4">
                        <GiRotaryPhone fontSize={25} />
                        <p className=" text-[22px] leading-[26px] font-medium">+233 23-293-3903</p>
                    </div>
                    <div className=" text-white flex justify-start items-center gap-4">
                        <GoMail fontSize={25} />
                        <p className=" text-xl leading-[24px] font-semibold">company email@gmail.com</p>
                    </div>
                    <div className=" text-white flex justify-start items-center gap-4">
                        <SlLocationPin fontSize={25} />
                        <p className=" text-xl leading-[24px] font-semibold">Kokompe, Koi st. 21, Greater accra, Ghana</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full h-full justify-start flex-col gap-9 mb-14 items-center">
            <h1 className=" md:text-[40px]  md:leading-[48px] text-[34px] leading-[40px] text-customBlack font-semibold text-center">Contact Us</h1>
            <div className="w-[90%] mx-auto flex items-center gap-12 flex-col mt-5 md:flex-row justify-start">
                <ContactForm />
                <div className="md:w-1/2 h-[450px] rounded-lg overflow-hidden w-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d127061.90613858895!2d-0.2725087688809543!3d5.613514781958512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra!3m2!1d5.5592846!2d-0.19743059999999998!4m5!1s0xfdf9d9b00b85e4b%3A0x267e3045426417b8!2sVacancies%20in%20Ghana%2C%20Haatso%2C%20Accra!3m2!1d5.6650798!2d-0.2017362!5e0!3m2!1sen!2sgh!4v1710248917849!5m2!1sen!2sgh" width="100%" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </main>
  )
}
