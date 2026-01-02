function Order() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow rounded mt-20">
      <input className="w-full border p-2 mb-3" placeholder="Name" />
      <input className="w-full border p-2 mb-3" placeholder="Phone" />
      <input className="w-full border p-2 mb-3" placeholder="Address" />
      <button className="bg-green-600 text-white w-full py-2">
        Proceed to Payment
      </button>
    </div>
  );
}

export default Order;
