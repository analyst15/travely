import Navbar from "@/components/navbar";
import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
    </main>
  );
}
