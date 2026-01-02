const Rooms = () => {
  return (
    <section className="px-16 py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Our Rooms</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((room) => (
          <div key={room} className="bg-white rounded shadow">
            <img
              src="https://images.unsplash.com/photo-1501117716987-c8e1ecb2101f"
              className="rounded-t h-56 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold">Deluxe Room</h3>
              <p className="text-gray-600 my-2">
                Luxury room with modern facilities
              </p>
              <p className="font-bold mb-4">৳3500 / night</p>
              <button className="bg-slate-900 text-white px-4 py-2 rounded hover:bg-slate-700">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;
