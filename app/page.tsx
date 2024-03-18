import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import CategorizedJobs from "./Components/CategorizedJobs";
import HomeVideo from "./Components/HomeVideo";
import RequestReview from "./Components/RequestReview";
import ChooseUs from "./Components/ChooseUs";
import HomeGallery from "./Components/HomeGallery";
import { client } from "@/lib/client";
import { homeDataQuery } from "./lib/query";
import { homeContentType } from "@/type";

export default async function Home() {

  const homeContent:homeContentType = await client.fetch(homeDataQuery);

  return (
    <main className="flex min-h-screen flex-col items-center w-full
     justify-start ">
       <HeroSection homeContent={homeContent} />
       <CategorizedJobs />
       <HomeVideo homeContent={homeContent} />
       <RequestReview homeContent={homeContent} />
       <HomeGallery homeContent={homeContent} />
       <ChooseUs homeContent={homeContent} />
    </main>
  );
}
