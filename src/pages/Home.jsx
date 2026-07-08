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

      <section className="py-16 text-center bg-slate-950 text-white">
        <h2 className="text-2xl font-bold mb-4">Ready to Book Your Stay?</h2>
        <a
          href="/rooms"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-semibold px-8 py-3 rounded-lg transition"
        >
          Book Now
        </a>
      </section>

      <Footer />
    </>
  );
}

export default Home;