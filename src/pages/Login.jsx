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

    const email = e.target.email.value;
    const password = e.target.password.value;
    const remember = e.target.remember.checked;

    try {
      const res = await api.post("users/login/", { email, password });

      const token = res.data.access || res.data.token;
      const refresh = res.data.refresh;

      if (remember) {
        localStorage.setItem("token", token);
        if (refresh) localStorage.setItem("refresh", refresh);
      } else {
        sessionStorage.setItem("token", token);
        if (refresh) sessionStorage.setItem("refresh", refresh);
      }

      navigate("/dashboard");
    } catch (err) {
      const data = err.response?.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        const firstMsg = Array.isArray(data[firstKey]) ? data[firstKey][0] : data[firstKey];
        setError(`${firstMsg}`);
      } else {
        setError("Invalid email or password");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-950 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-slate-900 border border-white/10 p-8 shadow-lg rounded-xl w-[350px] text-white"
      >
        <h2 className="text-2xl font-bold mb-5 text-center">
          Welcome Back
        </h2>

        {error && (
          <p className="mb-4 text-center text-red-400 text-sm font-medium">
            {error}
          </p>
        )}

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 rounded-lg bg-slate-800 border border-white/10 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 rounded-lg bg-slate-800 border border-white/10 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />

        <label className="flex items-center gap-2 mb-4 text-sm text-slate-300">
          <input type="checkbox" name="remember" />
          Remember Me
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-semibold py-2 rounded-lg transition disabled:bg-slate-600 disabled:text-slate-300"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-sm mt-3 text-center text-slate-400">
          No account?{" "}
          <Link to="/signup" className="text-yellow-400 hover:underline">
            Sign Up
          </Link>
        </p>

        <p className="text-sm mt-2 text-center text-slate-400">
          Forgot password?{" "}
          <Link to="/forgot" className="text-yellow-400 hover:underline">
            Reset
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;