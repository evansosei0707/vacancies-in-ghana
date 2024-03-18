
export default function NewsLetter() {
  return (
    <section className=" bg-[#E9F1F2] w-[95%] mx-auto rounded-xl p-8 lg:p-12 overflow-hidden flex items-center my-14 justify-center  gap-5">
        <form className=" flex flex-col w-full items-start lg:items-center  justify-center gap-5">
            <h2 className=" lg:text-[40px] md:text-[31px] font-semibold leading-[20px] md:leading-[2px] text-[25px] lg:leading-[24px] text-customBlack">Suscribe to our news letter</h2>
            <p className=" text-[#545454]">
                Join our newsletter and get the latest job listings and career insights delivered straight to your inbox.
            </p>
            <input 
                type="email"
                placeholder="Type your email here"
                className="rounded-lg bg-[#E9E9E9] px-5 placeholder:text-customBlack py-3 w-full lg:w-1/2"
            />
            <button
                type="submit"
                className="bg-mainColor rounded-lg px-10 py-4 text-lg leading-[24px] font-semibold text-white"
            >
                Suscribe
            </button>
        </form>

    </section>
  )
}
