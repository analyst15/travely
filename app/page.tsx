import Navbar from "@/components/navbar";
import About from "@/components/sections/about";
import CTASection from "@/components/sections/cta-section";
import GetawayCTA from "@/components/sections/cta/getaway-cta";
import { FeaturedDestinations } from "@/components/sections/featured-destinations";
import Hero from "@/components/sections/hero";
import Testimonials from "@/components/sections/testimonials";
import FeaturedToursSection from "@/components/sections/tours/FeaturedToursSection";
import WhyChooseUs from "@/components/sections/why-choose-us";
import { OurPurpose } from "@/components/sections/our-purpose";
import Image from "next/image";
import Footer from "@/components/footer";

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
      <Testimonials />
      <CTASection />
      <OurPurpose />
      <Footer />
    </main>
  );
}
