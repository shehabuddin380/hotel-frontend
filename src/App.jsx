import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Buy from "./pages/Buy";
import Success from "./pages/Success";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./auth/ProtectedRoute";
import Fail from "./pages/File";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/buy/:id" element={<Buy />} />
      <Route path="/success" element={<Success />} />
      <Route path="/fail" element={<Fail />} />
      {/* Protected Dashboard */}
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
