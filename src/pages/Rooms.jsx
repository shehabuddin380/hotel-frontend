import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import RoomCard from "../components/RoomCard";

const Rooms = () => {

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load Rooms From Django API
  useEffect(() => {

    const fetchRooms = async () => {

      try {

        const res = await api.get("/rooms/");

        // Django response safe check
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
    <>
      <Navbar />

      <section className="px-8 md:px-16 py-16 bg-gray-100 min-h-screen">

        <h2 className="text-3xl font-bold text-center mb-10">
          All Rooms
        </h2>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-500">
            Loading rooms...
          </p>
        )}

        {/* Error */}
        {error && (
          <p className="text-center text-red-500">
            {error}
          </p>
        )}

        {/* Rooms */}
        {!loading && !error && (

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            {rooms.map((room) => (

              <RoomCard
                key={room.id}
                room={room}
              />
            ))}
          </div>
        )}
        {/* No Rooms */}
        {!loading && rooms.length === 0 && !error && (
          <p className="text-center text-gray-500 mt-10">
            No rooms available
          </p>

        )}

      </section>

    </>
  );
};

export default Rooms;
