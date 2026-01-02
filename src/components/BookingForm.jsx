function BookingForm() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow rounded">
      <h2 className="text-xl font-bold mb-4">Book Room</h2>

      <input className="w-full mb-3 p-2 border rounded" placeholder="Name" />
      <input className="w-full mb-3 p-2 border rounded" placeholder="Email" />
      <input type="date" className="w-full mb-3 p-2 border rounded" />
      <input type="date" className="w-full mb-3 p-2 border rounded" />

      <button className="w-full bg-green-600 text-white py-2 rounded">
        Confirm Booking
      </button>
    </div>
  );
}

export default BookingForm;
