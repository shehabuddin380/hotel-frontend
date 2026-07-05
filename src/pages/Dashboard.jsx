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

  if (loading) return <div className="p-10">Loading Dashboard...</div>;
  if (error) return <div className="p-10 text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user?.email}</h1>

      {user?.is_admin ? (
        <div className="bg-red-100 p-6 rounded mb-8">
          <h2 className="font-bold text-lg">Admin Dashboard</h2>
          <p>Manage Rooms & Bookings</p>
        </div>
      ) : (
        <div className="bg-green-100 p-6 rounded mb-8">
          <h2 className="font-bold text-lg">User Dashboard</h2>
          <p>My Bookings</p>
        </div>
      )}

      {/* Room Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 shadow-lg rounded-xl">
          <h3 className="text-gray-500 text-sm mb-2">Total Rooms</h3>
          <p className="text-3xl font-bold text-indigo-600">{stats.total_rooms}</p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-xl">
          <h3 className="text-gray-500 text-sm mb-2">Booked Rooms</h3>
          <p className="text-3xl font-bold text-red-500">{stats.booked_rooms}</p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-xl">
          <h3 className="text-gray-500 text-sm mb-2">Available Rooms</h3>
          <p className="text-3xl font-bold text-green-600">{stats.available_rooms}</p>
          <button
            onClick={() => setShowAvailable(!showAvailable)}
            className="mt-3 text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
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
            <p className="text-gray-500">No rooms available</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.available_rooms_list?.map((room) => (
                <div key={room.id} className="bg-white p-4 rounded-xl shadow">
                  <h3 className="font-semibold text-lg">{room.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{room.description}</p>
                  <p className="text-indigo-600 font-bold">৳{room.price} / night</p>
                  <button
                    onClick={() => navigate(`/buy/${room.id}`)}
                    className="mt-2 w-full bg-indigo-600 text-white py-1 rounded hover:bg-indigo-700"
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
          <p className="text-gray-500">No bookings yet</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stats.my_bookings?.map((booking, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow">
                <h3 className="font-semibold">{booking.room_name}</h3>
                <p className="text-gray-500 text-sm">Amount: ৳{booking.amount}</p>
                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
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