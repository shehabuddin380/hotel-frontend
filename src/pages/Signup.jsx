import { useState } from "react";
import api from "../api/axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const password = e.target.password.value;
    const password2 = e.target.password2.value;

    try {
      await api.post("users/register/", {
        first_name: e.target.first_name.value,
        last_name: e.target.last_name.value,
        email: e.target.email.value,
        password: password,
        password2: password2,
      });

      setMessage("Account created! Please check your email to activate account.");

      setTimeout(() => {
        navigate("/login");
      }, 3000);

    } catch (err) {
      const data = err.response?.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        const firstMsg = Array.isArray(data[firstKey]) ? data[firstKey][0] : data[firstKey];
        setError(`${firstKey}: ${firstMsg}`);
      } else {
        setError("Signup failed! Something went wrong.");
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-950 px-4">
      <form
        onSubmit={handleSignup}
        className="bg-slate-900 border border-white/10 p-8 shadow-lg rounded-xl w-[350px] text-white"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>

        {message && (
          <p className="text-green-400 text-center mb-3 text-sm">{message}</p>
        )}

        {error && (
          <p className="text-red-400 text-center mb-3 text-sm">{error}</p>
        )}

        <input
          name="first_name"
          placeholder="First Name"
          className="w-full mb-3 p-2 rounded-lg bg-slate-800 border border-white/10 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />

        <input
          name="last_name"
          placeholder="Last Name"
          className="w-full mb-3 p-2 rounded-lg bg-slate-800 border border-white/10 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />

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

        <input
          name="password2"
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-4 p-2 rounded-lg bg-slate-800 border border-white/10 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />

        <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-semibold py-2 rounded-lg transition">
          Create Account
        </button>

        <p className="text-sm text-center mt-3 text-slate-400">
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-400 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;