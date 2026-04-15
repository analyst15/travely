import Navbar from "@/components/navbar";
import About from "@/components/sections/about";
import GetawayCTA from "@/components/sections/cta/getaway-cta";
import { FeaturedDestinations } from "@/components/sections/featured-destinations";
import Hero from "@/components/sections/hero";
import FeaturedToursSection from "@/components/sections/tours/FeaturedToursSection";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <FeaturedDestinations />
      <GetawayCTA />
      <FeaturedToursSection />
    </main>
  );
}
