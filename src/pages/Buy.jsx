import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

const Buy = () => {
  const { id } = useParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("payments/payment/", {
        room_id: id,
        name: e.target.name.value,
        phone: e.target.phone.value,
        address: e.target.address.value,
      });

      window.location.href = res.data.payment_url;
    } catch (err) {
      setError(
        err.response?.data?.detail ||
          "Something went wrong while starting payment. Please try again."
      );
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 border border-white/10 p-8 md:p-12 rounded-xl shadow-lg w-full max-w-md text-white"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Complete Your Booking
        </h2>

        <p className="text-sm text-slate-400 mb-6 text-center">
          Booking ID: <span className="font-semibold text-yellow-400">{id}</span>
        </p>

        {error && (
          <p className="text-red-400 text-sm text-center mb-4">{error}</p>
        )}

        <div className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-slate-800 border border-white/10 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 rounded-lg bg-slate-800 border border-white/10 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />

          <textarea
            name="address"
            placeholder="Address"
            className="w-full p-3 rounded-lg bg-slate-800 border border-white/10 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-slate-900 py-3 rounded-lg transition font-semibold disabled:bg-slate-600 disabled:text-slate-300"
          >
            {loading ? "Processing..." : "Proceed to Payment"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Buy;