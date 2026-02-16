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

    try {
      await api.post("users/register/", {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
      });

      setMessage("Account created! Please check your email to activate account.");

      // Optional: Auto redirect after 3 sec
      setTimeout(() => {
        navigate("/login");
      }, 3000);

    } catch  {
      setError("Signup failed! Username or Email already exists.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 shadow rounded w-[350px]"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

        {/* Success Message */}
        {message && (
          <p className="text-green-600 text-center mb-3">
            {message}
          </p>
        )}

        {/* Error Message */}
        {error && (
          <p className="text-red-600 text-center mb-3">
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
          name="email"
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
          Create Account
        </button>

        <p className="text-sm text-center mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
