import { useParams } from "react-router-dom";
import { useState } from "react";

const Buy = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Booking Data:", {
      room_id: id,
      ...formData,
    });

    alert("Booking submitted → Redirecting to Payment Gateway");
    // এখানে পরে SSLCommerz API call হবে
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-lg rounded-xl w-[420px]"
      >
        <h2 className="text-2xl font-bold mb-2 text-center">
          Book Your Room
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Room ID: #{id}
        </p>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows="3"
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default Buy;
