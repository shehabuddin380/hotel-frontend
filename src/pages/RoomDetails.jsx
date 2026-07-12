import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../api/axios";

const RoomDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const res = await api.get(`/hotels/rooms/${id}/`);
        setRoom(res.data);
      } catch (err) {
        console.error("Failed to load room", err);
        setError("Room not found or failed to load.");
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Loading room details...
      </div>
    );

  if (error || !room)
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center gap-4">
        <p className="text-red-400">{error}</p>
        <Link
          to="/rooms"
          className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-semibold px-6 py-2 rounded-lg transition"
        >
          Back to Rooms
        </Link>
      </div>
    );

  const imageUrl =
    room.image ||
    "https://images.unsplash.com/photo-1501117716987-c8e1ecb210c3?auto=format&fit=crop&w=1200&q=80";

  return (
    <section className="min-h-screen bg-slate-950 text-white px-6 md:px-20 py-16">
      <Link
        to="/rooms"
        className="text-yellow-400 hover:underline text-sm mb-6 inline-block"
      >
        &larr; Back to all rooms
      </Link>

      <div className="grid md:grid-cols-2 gap-10 mt-4">
        <img
          src={imageUrl}
          alt={room.name}
          className="w-full h-80 md:h-full object-cover rounded-xl border border-white/10"
        />

        <div>
          <h1 className="text-3xl font-bold mb-2">{room.name}</h1>
          {room.hotel_name && (
            <p className="text-slate-400 mb-4">📍 {room.hotel_name}</p>
          )}

          <p className="text-yellow-400 text-2xl font-bold mb-6">
            ৳{room.price} / night
          </p>

          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <p className="text-slate-300 leading-relaxed whitespace-pre-line mb-8">
            {room.description || "No description available for this room."}
          </p>

          <button
            onClick={() => navigate(`/buy/${room.id}`)}
            className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-semibold px-8 py-3 rounded-lg transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;