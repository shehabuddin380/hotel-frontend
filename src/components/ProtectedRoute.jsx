import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Check token from both storages
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  // If no token → redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
