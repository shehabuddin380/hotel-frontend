const HotelCard = ({ room }) => {
  return (
    <div className="flex gap-4 bg-white shadow-md rounded-xl overflow-hidden">
      
      <img src={room.img} className="w-48 object-cover" />

      <div className="p-4 flex flex-col justify-between w-full">
        <div>
          <h2 className="text-xl font-bold">{room.name}</h2>
          <p className="text-gray-500">Dhaka, Bangladesh</p>
          <p className="text-green-600 font-semibold mt-1">Excellent ⭐ 8.5</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">${room.price}</p>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;