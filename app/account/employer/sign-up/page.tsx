import signupPagePic from "@/public/employer-sign-up.png";
import EmployerSignUpForm from "../../components/EmployerSignUpForm";
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
        <EmployerSignUpForm />
     </main>
  )
}
