import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const username = e.target.username.value;
    const password = e.target.password.value;
    const remember = e.target.remember.checked;

    try {
      const res = await api.post("users/login/", { username, password });

      const token = res.data.token; 

      // Save token
      if (remember) {
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("token", token);
      }

      navigate("/dashboard");
    } catch {
      setError("Invalid username or password");
    } finally {
      setLoading(false);
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

        <label className="flex items-center gap-2 mb-4 text-sm">
          <input type="checkbox" name="remember" />
          Remember Me
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 disabled:bg-gray-500"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-sm mt-3 text-center">
          No account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>

        <p className="text-sm mt-2 text-center">
          Forgot password?{" "}
          <Link to="/forgot" className="text-blue-600 hover:underline">
            Reset
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
