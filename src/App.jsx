import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Buy from "./pages/Buy";
import Success from "./pages/Success";
import Fail from "./pages/Fail";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/buy/:id" element={<Buy />} />
      <Route path="/success" element={<Success />} />
      <Route path="/fail" element={<Fail />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot" element={<ForgotPassword />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
