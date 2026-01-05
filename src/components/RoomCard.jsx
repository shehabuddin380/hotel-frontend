import { useNavigate } from "react-router-dom";

function RoomCard({ id }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      <img
        src="https://images.unsplash.com/photo-1501117716987-c8e1ecb2101d"
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold">Deluxe Room</h3>
        <p className="text-gray-500 mb-4">
          Luxury room with modern facilities
        </p>

        <div className="flex justify-between items-center">
          <span className="text-indigo-600 font-bold">
            ৳3500 / night
          </span>

          <button
            onClick={() => navigate(`/buy/${id}`)}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
