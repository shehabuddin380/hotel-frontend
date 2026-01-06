import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import RoomCard from "../components/RoomCard";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    api
      .get("rooms/")
      .then((res) => setRooms(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />

      <div className="px-16 py-16">
        <h2 className="text-3xl font-bold mb-10">All Rooms</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Rooms;
