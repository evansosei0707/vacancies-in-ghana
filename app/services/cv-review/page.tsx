import ChoosePlan from "./components/ChoosePlan";
import CvReview from "./components/CvReview";
import Faqs from "./components/Faqs";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full
     justify-start ">
        <CvReview />
        <ChoosePlan />
        <Faqs />
    </main>
  )
}
