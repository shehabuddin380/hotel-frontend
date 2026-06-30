const Hero = () => {
  return (
    <section className="h-[90vh] bg-[url('https://images.unsplash.com/photo-1501117716987-c8e1ecb210c3')] bg-cover bg-center flex items-center justify-center text-white">
      
      <div className="bg-black/60 p-10 md:p-16 rounded-xl text-center max-w-2xl">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Experience Luxury Stay
        </h1>

        <p className="mb-6 text-lg text-gray-200">
          Book premium rooms at affordable prices and enjoy your vacation
        </p>

        <a
          href="/rooms"
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold transition duration-300"
        >
          Explore Rooms
        </a>

      </div>

    </section>
  );
};

export default Hero;
