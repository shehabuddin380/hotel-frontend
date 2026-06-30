import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FeaturedHotels from "../components/FeaturedHotels";

function Home() {
  return (
    <>
      <Hero />
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide the best hotel booking experience in Bangladesh with
          premium rooms, affordable prices, and excellent customer service.
        </p>
      </section>

      <FeaturedHotels />

      <section className="py-16 bg-gray-100 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-2">Free Wifi</h3>
            <p className="text-gray-500">High-speed internet in all rooms</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-2">Luxury Rooms</h3>
            <p className="text-gray-500">Comfortable and modern design rooms</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
            <p className="text-gray-500">We are always here to help you</p>
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Book Your Stay?</h2>
        <a
          href="/rooms"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition"
        >
          Book Now
        </a>
      </section>

      <Footer />
    </>
  );
}

export default Home;