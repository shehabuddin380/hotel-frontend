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
      // no unused err → eslint error gone
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

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Send Reset Link
        </button>

        {/* Back to login after success */}
        {message && (
          <div className="text-center mt-3">
            <Link
              to="/login"
              className="text-blue-600 hover:underline"
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
