import DestinationsSection from "@/components/destinations/destinations-section";
import Image from "next/image";

export default function DestinationsPage() {
    return (
        <div className="w-full">
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
                        <span className="text-green-400">Destinations</span>
                    </div>
                </div>
            </section>
            <DestinationsSection />
        </div>
    );
}