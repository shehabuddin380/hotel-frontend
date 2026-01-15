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
      await api.post("password-reset/", {
        email: e.target.email.value,
      });

      setMessage("Reset link sent to your email!");
    } catch {
      setError("Email not found or server error!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-lg rounded w-[350px]"
      >
        <h2 className="text-xl font-bold mb-4 text-center">
          Reset Password
        </h2>

        {/* Success Message */}
        {message && (
          <p className="mb-3 text-green-600 text-center">
            {message}
          </p>
        )}

        {/* Error Message */}
        {error && (
          <p className="mb-3 text-red-600 text-center">
            {error}
          </p>
        )}

        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
          Send Reset Link
        </button>

        {/* Back to Login Button */}
        {message && (
          <Link to="/login" className="flex justify-center">
            <button
              type="button"
              className="mt-3 bg-slate-700 text-white px-4 py-2 rounded"
            >
              Back to Login
            </button>
          </Link>
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;
