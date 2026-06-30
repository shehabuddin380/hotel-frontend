import { Link } from "react-router-dom";
import room1 from "../assets/room1.png";
import room2 from "../assets/room1.png";
import room3 from "../assets/room1.png";
// import room5 from "../assets/room1.png";
// import room6 from "../assets/room1.png";
const hotels = [
  {
    id: 1,
    name: "Sea View Resort",
    location: "Cox's Bazar",
    price: "$120/night",
    image: "room1.png",
  },
  {
    id: 2,
    name: "Mountain Inn",
    location: "Bandarban",
    price: "$90/night",
    image: "room2.png",
  },
  {
    id: 3,
    name: "City Palace Hotel",
    location: "Dhaka",
    price: "$150/night",
    image: "room3.png",
  },
  {
    id: 4,
    name: "Lakeview Retreat",
    location: "Sylhet",
    price: "$110/night",
    image: "room4.png",
  },
  {
    id: 5,
    name: "Royal Garden Hotel",
    location: "Chittagong",
    price: "$140/night",
    image: "https://images.unsplash.com/photo-1542317854-16a9720b0d48",
  },
  {
    id: 6,
    name: "Sunset Paradise",
    location: "Kuakata",
    price: "$100/night",
    image: "https://images.unsplash.com/photo-1505691723518-36a9d79f1db7",
  },
  {
    id: 7,
    name: "Hilltop Inn",
    location: "Rangamati",
    price: "$95/night",
    image: "https://images.unsplash.com/photo-1568495248636-6434a110d7c7",
  },
  {
    id: 8,
    name: "City Comfort Hotel",
    location: "Dhaka",
    price: "$130/night",
    image: "https://images.unsplash.com/photo-1535035225030-84f4b51de49b",
  },
  {
    id: 9,
    name: "Beachside Resort",
    location: "Cox's Bazar",
    price: "$125/night",
    image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210c3",
  },
  {
    id: 10,
    name: "Forest View Hotel",
    location: "Sylhet",
    price: "$115/night",
    image: "https://images.unsplash.com/photo-1582719478171-14a1e64ed45d",
  },
];

const FeaturedHotels = () => {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        Featured Hotels
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-20">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
              <p className="text-gray-500 mb-2">📍 {hotel.location}</p>
              <p className="text-blue-600 font-bold mb-4">{hotel.price}</p>

              <Link to={`/buy/${hotel.id}`}>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition font-semibold">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedHotels;
