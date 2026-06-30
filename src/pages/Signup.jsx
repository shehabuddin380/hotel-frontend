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
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 shadow rounded w-[350px]"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

        {message && (
          <p className="text-green-600 text-center mb-3">{message}</p>
        )}

        {error && (
          <p className="text-red-600 text-center mb-3">{error}</p>
        )}

        <input
          name="first_name"
          placeholder="First Name"
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          name="last_name"
          placeholder="Last Name"
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
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          name="password2"
          type="password"
          placeholder="Confirm Password"
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