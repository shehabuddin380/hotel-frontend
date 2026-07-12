import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import {
  BedDouble,
  CalendarCheck,
  CalendarX,
  ShieldCheck,
  UserRound,
} from "lucide-react";

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

  const initial = user?.email ? user.email[0].toUpperCase() : "?";

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-10">
      {/* Profile summary */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 border border-white/10 rounded-xl p-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-yellow-400 text-slate-900 flex items-center justify-center text-xl font-bold">
            {initial}
          </div>
          <div>
            <h1 className="text-xl font-bold">{user?.email}</h1>
            <span
              className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full mt-1 ${
                user?.is_admin
                  ? "bg-red-400/10 text-red-400 border border-red-400/30"
                  : "bg-green-400/10 text-green-400 border border-green-400/30"
              }`}
            >
              {user?.is_admin ? (
                <>
                  <ShieldCheck className="w-3 h-3" /> Admin
                </>
              ) : (
                <>
                  <UserRound className="w-3 h-3" /> Guest
                </>
              )}
            </span>
          </div>
        </div>

        <Link
          to="/rooms"
          className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-semibold px-5 py-2 rounded-lg transition text-center"
        >
          Browse Rooms
        </Link>
      </div>

      {/* Room Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-900 border border-white/10 p-6 rounded-xl">
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
            <BedDouble className="w-4 h-4" /> Total Rooms
          </div>
          <p className="text-3xl font-bold text-yellow-400">{stats.total_rooms}</p>
        </div>

        <div className="bg-slate-900 border border-white/10 p-6 rounded-xl">
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
            <CalendarX className="w-4 h-4" /> Booked Rooms
          </div>
          <p className="text-3xl font-bold text-red-400">{stats.booked_rooms}</p>
        </div>

        <div className="bg-slate-900 border border-white/10 p-6 rounded-xl">
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
            <CalendarCheck className="w-4 h-4" /> Available Rooms
          </div>
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
          <div className="bg-slate-900 border border-white/10 rounded-xl p-8 text-center">
            <p className="text-slate-400 mb-4">
              You haven&apos;t booked a room yet.
            </p>
            <Link
              to="/rooms"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-semibold px-6 py-2 rounded-lg transition"
            >
              Browse Rooms
            </Link>
          </div>
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