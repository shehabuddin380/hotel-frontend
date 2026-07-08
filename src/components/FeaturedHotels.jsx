import { Link } from "react-router-dom";

const hotels = [
  {
    id: 1,
    name: "Sea View Resort",
    location: "Cox's Bazar",
    price: "$120/night",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Mountain Inn",
    location: "Bandarban",
    price: "$90/night",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "City Palace Hotel",
    location: "Dhaka",
    price: "$150/night",
    image:
      "https://images.unsplash.com/photo-1551776235-dde6d482980b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Lakeview Retreat",
    location: "Sylhet",
    price: "$110/night",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Royal Garden Hotel",
    location: "Chittagong",
    price: "$140/night",
    image:
      "https://images.unsplash.com/photo-1542317854-16a9720b0d48?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Sunset Paradise",
    location: "Kuakata",
    price: "$100/night",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a9d79f1db7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Hilltop Inn",
    location: "Rangamati",
    price: "$95/night",
    image:
      "https://images.unsplash.com/photo-1568495248636-6434a110d7c7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "City Comfort Hotel",
    location: "Dhaka",
    price: "$130/night",
    image:
      "https://images.unsplash.com/photo-1535035225030-84f4b51de49b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Beachside Resort",
    location: "Cox's Bazar",
    price: "$125/night",
    image:
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb210c3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Forest View Hotel",
    location: "Sylhet",
    price: "$115/night",
    image:
      "https://images.unsplash.com/photo-1582719478171-14a1e64ed45d?auto=format&fit=crop&w=800&q=80",
  },
];

const FeaturedHotels = () => {
  return (
    <section className="py-16 bg-slate-950">
      <h2 className="text-3xl font-bold text-center mb-2 text-white">
        Featured Hotels
      </h2>
      <p className="text-slate-400 text-center mb-10">
        Handpicked stays across Bangladesh's best destinations
      </p>

      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-20">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-slate-900 border border-white/10 rounded-xl overflow-hidden hover:border-yellow-400/50 transition duration-300"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-white">
                {hotel.name}
              </h3>
              <p className="text-slate-400 mb-2">📍 {hotel.location}</p>
              <p className="text-yellow-400 font-bold mb-4">{hotel.price}</p>

              <Link to={`/buy/${hotel.id}`}>
                <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-slate-900 py-2 rounded-lg transition font-semibold">
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