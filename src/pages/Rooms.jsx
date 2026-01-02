import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <div className="px-16 py-16">
      <h2 className="text-3xl font-bold mb-10">All Rooms</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((id) => (
          <div key={id} className="shadow rounded">
            <img
              src="https://images.unsplash.com/photo-1501117716987-c8e1ecb2101f"
              className="h-52 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold">Deluxe Room</h3>
              <p>৳3500 / night</p>
              <Link
                to={`/buy/${id}`}
                className="inline-block mt-3 bg-black text-white px-4 py-2 rounded"
              >
                Buy Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
