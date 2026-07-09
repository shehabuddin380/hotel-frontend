import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showAvailable, setShowAvailable] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await api.get("users/profile/");
        setUser(userRes.data);

        const statsRes = await api.get("users/dashboard/");
        setStats(statsRes.data);

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load dashboard data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen bg-slate-950 text-white p-10">
        Loading Dashboard...
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen bg-slate-950 text-red-400 p-10">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user?.email}</h1>

      {user?.is_admin ? (
        <div className="bg-red-400/10 border border-red-400/30 p-6 rounded-xl mb-8">
          <h2 className="font-bold text-lg text-red-400">Admin Dashboard</h2>
          <p className="text-slate-300">Manage Rooms &amp; Bookings</p>
        </div>
      ) : (
        <div className="bg-green-400/10 border border-green-400/30 p-6 rounded-xl mb-8">
          <h2 className="font-bold text-lg text-green-400">User Dashboard</h2>
          <p className="text-slate-300">My Bookings</p>
        </div>
      )}

      {/* Room Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-900 border border-white/10 p-6 rounded-xl">
          <h3 className="text-slate-400 text-sm mb-2">Total Rooms</h3>
          <p className="text-3xl font-bold text-yellow-400">{stats.total_rooms}</p>
        </div>

        <div className="bg-slate-900 border border-white/10 p-6 rounded-xl">
          <h3 className="text-slate-400 text-sm mb-2">Booked Rooms</h3>
          <p className="text-3xl font-bold text-red-400">{stats.booked_rooms}</p>
        </div>

        <div className="bg-slate-900 border border-white/10 p-6 rounded-xl">
          <h3 className="text-slate-400 text-sm mb-2">Available Rooms</h3>
          <p className="text-3xl font-bold text-green-400">{stats.available_rooms}</p>
          <button
            onClick={() => setShowAvailable(!showAvailable)}
            className="mt-3 text-sm bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-semibold px-3 py-1 rounded-lg transition"
          >
            {showAvailable ? "Hide" : "Show Rooms"}
          </button>
        </div>
      </div>

      {/* Available Rooms List */}
      {showAvailable && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Available Rooms</h2>
          {stats.available_rooms_list?.length === 0 ? (
            <p className="text-slate-400">No rooms available</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.available_rooms_list?.map((room) => (
                <div
                  key={room.id}
                  className="bg-slate-900 border border-white/10 p-4 rounded-xl"
                >
                  <h3 className="font-semibold text-lg">{room.name}</h3>
                  <p className="text-slate-400 text-sm mb-2">{room.description}</p>
                  <p className="text-yellow-400 font-bold">৳{room.price} / night</p>
                  <button
                    onClick={() => navigate(`/buy/${room.id}`)}
                    className="mt-2 w-full bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-semibold py-1 rounded-lg transition"
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* My Bookings */}
      <div>
        <h2 className="text-xl font-bold mb-4">My Bookings</h2>
        {stats.my_bookings?.length === 0 ? (
          <p className="text-slate-400">No bookings yet</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stats.my_bookings?.map((booking, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-white/10 p-4 rounded-xl"
              >
                <h3 className="font-semibold">{booking.room_name}</h3>
                <p className="text-slate-400 text-sm">Amount: ৳{booking.amount}</p>
                <span className="text-xs bg-red-400/10 text-red-400 border border-red-400/30 px-2 py-1 rounded">
                  Booked
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;