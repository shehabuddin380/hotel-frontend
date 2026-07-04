import { useParams } from "react-router-dom";
import api from "../api/axios";

const Buy = () => {
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await api.post("payments/payment/", {
      room_id: id,
      name: e.target.name.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
    });

    window.location.href = res.data.payment_url;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 md:p-12 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Complete Your Booking
        </h2>

        <p className="text-sm text-gray-500 mb-6 text-center">
          Booking ID: <span className="font-semibold">{id}</span>
        </p>

        <div className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            name="address"
            placeholder="Address"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition font-semibold"
          >
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Buy;
