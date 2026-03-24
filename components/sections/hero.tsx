export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay (important for readability) */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400/30 text-green-400 px-4 py-2 rounded-full text-sm mb-6">
          ● YOUR ADVENTURE AWAITS
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Journey Beyond <br /> the Ordinary
        </h1>

        {/* Description */}
        <p className="text-white/70 mb-8">
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-500 hover:bg-green-600 px-6 py-4 text-lg rounded-lg">
            Begin Your Trip
          </button>

          <button className="border border-white/30 hover:bg-white/10 px-6 py-4 text-lg rounded-lg">
            Browse Packages
          </button>
        </div>
      </div>
    </section>
  );
}