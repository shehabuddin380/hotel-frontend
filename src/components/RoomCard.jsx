import { useNavigate } from "react-router-dom";

function RoomCard({ room }) {
  const navigate = useNavigate();

  // safety check (important)
  if (!room) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      <img
        src={
          room.image
            ? room.image
            : "https://images.unsplash.com/photo-1501117716987-c8e1ecb2101d"
        }
        alt={room.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">
          {room.name}
        </h3>

        <p className="text-gray-500 mb-4">
          {room.description || "Luxury room with modern facilities"}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-indigo-600 font-bold text-lg">
            ৳{room.price} / night
          </span>

          <button
            onClick={() => navigate(`/buy/${room.id}`)}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
