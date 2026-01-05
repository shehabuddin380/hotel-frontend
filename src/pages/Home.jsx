import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="h-[80vh] bg-gray-200 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Luxury Hotel Experience</h1>
      </section>

      {/* About */}
      <section className="p-10">
        <h2 className="text-2xl font-bold">About Us</h2>
        <p>Best hotel booking service in Bangladesh.</p>
      </section>

      {/* Features */}
      <section className="p-10 bg-gray-100 grid md:grid-cols-3 gap-4">
        <div className="p-6 bg-white shadow">Free Wifi</div>
        <div className="p-6 bg-white shadow">Luxury Rooms</div>
        <div className="p-6 bg-white shadow">24/7 Support</div>
      </section>

      {/* CTA */}
      <section className="p-10 text-center">
        <a href="/rooms" className="bg-blue-600 text-white px-6 py-3 rounded">
          Book Now
        </a>
      </section>

      <Footer />
    </>
  );
}

export default Home;
