import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const username = e.target.username.value;
    const password = e.target.password.value;
    const remember = e.target.remember.checked;

    try {
      const res = await api.post("login/", { username, password });

      // Save JWT token
      if (remember) {
        localStorage.setItem("token", res.data.access);
      } else {
        sessionStorage.setItem("token", res.data.access);
      }

      navigate("/dashboard");
    } catch {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 shadow-lg rounded w-[350px]"
      >
        <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>

        {error && (
          <p className="mb-4 text-center text-red-600 font-medium">
            {error}
          </p>
        )}

        <input
          name="username"
          placeholder="Username"
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border rounded"
          required
        />

        {/* Remember Me */}
        <label className="flex items-center gap-2 mb-4 text-sm">
          <input type="checkbox" name="remember" />
          Remember Me
        </label>

        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
          Login
        </button>

        <p className="text-sm mt-3 text-center">
          No account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
