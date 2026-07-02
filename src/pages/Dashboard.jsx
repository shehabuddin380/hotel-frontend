import { useEffect, useState } from "react";
import api from "../api/axios";

const Dashboard = () => {
  const [stats, setStats] = useState({
    total_rooms: 0,
    booked_rooms: 0,
    available_rooms: 0,
  });

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  if (loading) {
    return <div className="p-10">Loading Dashboard...</div>;
  }

  if (error) {
    return <div className="p-10 text-red-600">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {/* Welcome */}
      <h1 className="text-3xl font-bold mb-6">
        Welcome, {user?.email}
      </h1>

      {/* Admin vs User Section */}
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow-lg rounded-xl">
          <h3 className="text-gray-500 text-sm mb-2">Total Rooms</h3>
          <p className="text-3xl font-bold text-indigo-600">
            {stats.total_rooms}
          </p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-xl">
          <h3 className="text-gray-500 text-sm mb-2">Booked Rooms</h3>
          <p className="text-3xl font-bold text-red-500">
            {stats.booked_rooms}
          </p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-xl">
          <h3 className="text-gray-500 text-sm mb-2">Available Rooms</h3>
          <p className="text-3xl font-bold text-green-600">
            {stats.available_rooms}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;