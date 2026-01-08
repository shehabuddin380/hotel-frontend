import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import RoomCard from "../components/RoomCard";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/rooms/")
      .then((res) => {
        setRooms(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load rooms", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div className="px-16 py-16 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold mb-10 text-center">
          All Rooms
        </h2>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-500">Loading rooms...</p>
        )}

        {/* Rooms Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* No rooms */}
        {!loading && rooms.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No rooms available
          </p>
        )}
      </div>
    </>
  );
};

export default Rooms;
