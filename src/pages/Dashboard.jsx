import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [stats, setStats] = useState({
    total_rooms: 0,
    booked_rooms: 0,
    available_rooms: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("dashboard/")
      .then((res) => {
        setStats(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load dashboard data");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

        {loading && (
          <p className="text-gray-600">Loading dashboard...</p>
        )}

        {error && (
          <p className="text-red-600">{error}</p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Rooms */}
            <div className="bg-white p-6 shadow-lg rounded-xl">
              <h3 className="text-gray-500 text-sm mb-2">
                Total Rooms
              </h3>
              <p className="text-3xl font-bold text-indigo-600">
                {stats.total_rooms}
              </p>
            </div>

            {/* Booked Rooms */}
            <div className="bg-white p-6 shadow-lg rounded-xl">
              <h3 className="text-gray-500 text-sm mb-2">
                Booked Rooms
              </h3>
              <p className="text-3xl font-bold text-red-500">
                {stats.booked_rooms}
              </p>
            </div>

            {/* Available Rooms */}
            <div className="bg-white p-6 shadow-lg rounded-xl">
              <h3 className="text-gray-500 text-sm mb-2">
                Available Rooms
              </h3>
              <p className="text-3xl font-bold text-green-600">
                {stats.available_rooms}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Dashboard;
