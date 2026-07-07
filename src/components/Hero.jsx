const Hero = () => {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark gradient overlay for readability + brand feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <span className="inline-block bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-sm font-medium px-4 py-1 rounded-full mb-6">
          Bangladesh&apos;s Trusted Hotel Booking Platform
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Experience Luxury Stay
        </h1>

        <p className="mb-8 text-lg text-slate-200 max-w-xl mx-auto">
          Book premium rooms at affordable prices and enjoy your vacation
          with world-class comfort and service.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/rooms"
            className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-8 py-3 rounded-lg font-semibold transition duration-300"
          >
            Explore Rooms
          </a>
          <a
            href="#about"
            className="border border-white/30 hover:border-white/60 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;