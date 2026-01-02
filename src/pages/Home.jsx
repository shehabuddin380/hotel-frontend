import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Rooms from "../components/Rooms";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Rooms />
      <Services />
      <About />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
