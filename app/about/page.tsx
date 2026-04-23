import Image from "next/image";
import StatsStrip from "@/components/sections/stats-strip";
import FeaturesGrid from "@/components/sections/features-grid";

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-100 w-full">
        <Image
          src="/images/about-hero.jpg"
          alt="About Hero"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">About</h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-gray-200">
            Esse dolorum voluptatem ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.
          </p>

          <div className="mt-3 text-sm text-gray-300">
            Home <span className="mx-2">/</span>{" "}
            <span className="text-green-400">About</span>
          </div>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT - IMAGES */}
          <div className="relative flex gap-6">
            {/* Image 1 */}
            <div className="w-1/2 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/about-1.jpg"
                alt="About 1"
                width={400}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Image 2 */}
            <div className="w-1/2 rounded-2xl overflow-hidden shadow-md mt-10">
              <Image
                src="/images/about-2.jpg"
                alt="About 2"
                width={400}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Badge */}
            <div className="absolute bottom-0 left-10 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg">
              <p className="text-2xl font-bold">8+</p>
              <p className="text-xs">Years of Excellence</p>
            </div>
          </div>

          {/* RIGHT - TEXT */}
          <div>
            <p className="text-green-500 font-semibold text-sm tracking-widest uppercase">
              Who We Are
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Building Memorable Adventures Since 2015
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>

            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
            </p>
          </div>
        </div>
      </section>
      <StatsStrip />
      <FeaturesGrid />
    </div>
  );
}