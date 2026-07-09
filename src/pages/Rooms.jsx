import { useEffect, useState } from "react";
import api from "../api/axios";
import RoomCard from "../components/RoomCard";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await api.get("/hotels/rooms/");
        setRooms(res.data || []);
      } catch (err) {
        console.error("Failed to load rooms", err);
        setError("Failed to load rooms");
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  return (
    <section className="px-8 md:px-16 py-16 bg-slate-950 min-h-screen text-white">
      <h2 className="text-3xl font-bold text-center mb-2">All Rooms</h2>
      <p className="text-slate-400 text-center mb-10">
        Browse every available room and book your stay
      </p>

      {loading && (
        <p className="text-center text-slate-400">Loading rooms...</p>
      )}

      {error && <p className="text-center text-red-400">{error}</p>}

      {!loading && !error && rooms.length > 0 && (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      )}

      {!loading && rooms.length === 0 && !error && (
        <p className="text-center text-slate-400 mt-10">No rooms available</p>
      )}
    </section>
  );
};

export default Rooms;