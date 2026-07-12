import { useNavigate, Link } from "react-router-dom";

function RoomCard({ room }) {
  const navigate = useNavigate();

  if (!room) return null;

  const imageUrl = room.image
    ? room.image
    : "https://images.unsplash.com/photo-1501117716987-c8e1ecb210c3?auto=format&fit=crop&w=800&q=80";

  return (
    <div className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition duration-300">
      <img
        src={imageUrl}
        alt={room.name || "Room Image"}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 text-white">
          {room.name || "Room Name"}
        </h3>

        <p className="text-slate-400 mb-1 line-clamp-2">
          {room.description || "Luxury room with modern facilities"}
        </p>

        <Link
          to={`/rooms/${room.id}`}
          className="text-yellow-400 text-sm hover:underline mb-4 inline-block"
        >
          Read More
        </Link>

        <div className="flex justify-between items-center">
          <span className="text-yellow-400 font-bold text-lg">
            ৳{room.price || "0"} / night
          </span>

          <button
            onClick={() => navigate(`/buy/${room.id}`)}
            className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-4 py-2 rounded-lg font-semibold transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;