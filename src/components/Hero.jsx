const Hero = () => {
  return (
    <section className="h-[90vh] bg-[url('https://images.unsplash.com/photo-1501117716987-c8e1ecb210c3')] bg-cover bg-center flex items-center justify-center text-white">
      <div className="bg-black/60 p-10 rounded text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Experience Luxury Stay
        </h1>
        <p className="mb-6">
          Book premium rooms at affordable prices
        </p>
        <a
          href="/rooms"
          className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold"
        >
          Explore Rooms
        </a>
      </div>
    </section>
  );
};

export default Hero;
