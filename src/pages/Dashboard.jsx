import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    api.get("dashboard/")
      .then(res => setStats(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow rounded">
            Total Rooms: {stats.total_rooms}
          </div>
          <div className="bg-white p-6 shadow rounded">
            Booked Rooms: {stats.booked_rooms}
          </div>
          <div className="bg-white p-6 shadow rounded">
            Available Rooms: {stats.available_rooms}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
