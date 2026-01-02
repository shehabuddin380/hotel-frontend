import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow rounded">
            Total Rooms: 20
          </div>
          <div className="bg-white p-6 shadow rounded">
            Booked Rooms: 8
          </div>
          <div className="bg-white p-6 shadow rounded">
            Available Rooms: 12
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
