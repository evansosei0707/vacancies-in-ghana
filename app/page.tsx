import Image from "next/image";
import HeroSection from "./Components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full
     justify-start ">
       <HeroSection />
    </main>
  );
}
