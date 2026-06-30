import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Page Content */}
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Outlet />
        </div>
      </div>
    </>
  );
}