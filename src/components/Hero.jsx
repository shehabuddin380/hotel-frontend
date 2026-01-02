const Hero = () => {
  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945')] bg-cover bg-center h-[90vh] flex items-center">
      <div className="bg-black/60 w-full h-full flex items-center px-16">
        <div className="text-white max-w-xl">
          <h1 className="text-5xl font-bold mb-4">
            Luxury Hotel Booking
          </h1>
          <p className="mb-6 text-lg">
            Book your perfect stay with comfort & luxury
          </p>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded shadow hover:bg-yellow-500">
            Explore Rooms
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
