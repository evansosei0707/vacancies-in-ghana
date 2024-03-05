import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import CategorizedJobs from "./Components/CategorizedJobs";
import HomeVideo from "./Components/HomeVideo";
import RequestReview from "./Components/RequestReview";
import ChooseUs from "./Components/ChooseUs";
import HomeGallery from "./Components/HomeGallery";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full
     justify-start ">
       <HeroSection />
       <CategorizedJobs />
       <HomeVideo />
       <RequestReview />
       <HomeGallery />
       <ChooseUs />
    </main>
  );
}
