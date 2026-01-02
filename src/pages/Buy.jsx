import { useParams } from "react-router-dom";

const Buy = () => {
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order submitted → Payment Gateway");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow rounded w-[400px]"
      >
        <h2 className="text-2xl font-bold mb-6">Booking Room #{id}</h2>

        <input
          placeholder="Full Name"
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          placeholder="Phone Number"
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          placeholder="Address"
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <button className="w-full bg-black text-white py-2 rounded">
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default Buy;
