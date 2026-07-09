import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

const ForgotPassword = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await api.post("users/password-reset/", {
        email: e.target.email.value,
      });

      setMessage("Reset link sent to your email!");
    } catch {
      setError("Email not found or server error!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-950 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 border border-white/10 p-8 shadow-lg rounded-xl w-[350px] text-white"
      >
        <h2 className="text-xl font-bold mb-4 text-center">
          Reset Password
        </h2>

        {message && (
          <p className="mb-3 text-green-400 text-center text-sm">
            {message}
          </p>
        )}

        {error && (
          <p className="mb-3 text-red-400 text-center text-sm">
            {error}
          </p>
        )}

        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          className="w-full mb-4 p-2 rounded-lg bg-slate-800 border border-white/10 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-semibold py-2 rounded-lg transition"
        >
          Send Reset Link
        </button>

        {message && (
          <div className="text-center mt-3">
            <Link
              to="/login"
              className="text-yellow-400 hover:underline text-sm"
            >
              Back to Login
            </Link>
          </div>
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;