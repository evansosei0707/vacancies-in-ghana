import signupPagePic from "@/public/sign-up_pic.jpg";
import SignUpForm from "@/app/account/components/SignUpForm";
import Image from "next/image"


export default function page() {
  return (
     <main  className="flex w-full items-start justify-center h-auto min-h-[100vh]">
        <div className="hidden lg:block  w-[30%] flex-1 lg:min-[100vh] h-full overflow-hidden">
            <Image
                src={signupPagePic}
                width={1000}
                height={1500}
                alt="main-behind-his-computer on the sign-up page"
            />
        </div>
        <SignUpForm />
     </main>
  )
}
