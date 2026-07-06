import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FeaturedHotels from "../components/FeaturedHotels";
import About from "../components/About";

function Home() {
  return (
    <>
      <Hero />

      <About />

      <FeaturedHotels />

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