import { ShieldCheck, BadgeDollarSign, Clock3, KeyRound, Quote } from "lucide-react";

const stats = [
  { value: "500+", label: "Happy Guests" },
  { value: "50+", label: "Hotels Listed" },
  { value: "10+", label: "Cities Covered" },
  { value: "24/7", label: "Support" },
];

const features = [
  {
    icon: BadgeDollarSign,
    title: "Best Price Guarantee",
    desc: "Transparent pricing with no hidden fees, always the fairest rate.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Hotels",
    desc: "Every property is checked in person before it goes live on HotelLux.",
  },
  {
    icon: KeyRound,
    title: "Secure Payment",
    desc: "Your booking and payment details are encrypted end to end.",
  },
  {
    icon: Clock3,
    title: "Instant Confirmation",
    desc: "Get your booking confirmed in seconds, no waiting around.",
  },
];

const reviews = [
  {
    name: "Rafiq Ahmed",
    city: "Dhaka",
    quote: "Booking took two minutes and the hotel matched the photos exactly.",
  },
  {
    name: "Nusrat Jahan",
    city: "Chattogram",
    quote: "Prices were lower than anywhere else I checked. Will book again.",
  },
  {
    name: "Tanvir Hasan",
    city: "Sylhet",
    quote: "Support answered at midnight when I needed to change my dates.",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-slate-900 text-white">
      {/* Intro */}
      <div className="px-16 py-16">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="max-w-3xl text-slate-300">
          HotelLux offers premium hotel booking services with world-class
          amenities and comfort for your perfect vacation. From quiet hill
          resorts in Bandarban to beachfront getaways in Cox's Bazar, we bring
          together a handpicked collection of hotels across Bangladesh so you
          never have to compromise on quality, location, or price.
        </p>
        <p className="max-w-3xl text-slate-300 mt-4">
          What started as a simple idea — booking a hotel shouldn't feel
          complicated or risky — has grown into a platform trusted by
          hundreds of travelers every month. We personally verify every
          property listed on HotelLux, work directly with hotel owners to
          keep prices honest, and support every booking with a real team
          that's reachable around the clock.
        </p>
        <p className="max-w-3xl text-slate-300 mt-4">
          Our mission is simple: make hotel booking across Bangladesh easy,
          transparent, and reliable, so you can spend less time planning and
          more time enjoying your trip. Whether you're travelling for a
          weekend escape, a family vacation, or business, HotelLux is built
          to make finding the right room effortless — from the first search
          to the moment you check in.
        </p>
      </div>

      {/* Stats */}
      <div className="px-16 pb-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl font-bold text-yellow-400">{stat.value}</p>
            <p className="text-slate-400 mt-1 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="px-16 py-16 bg-slate-800/50">
        <h3 className="text-2xl font-bold mb-10 text-center">Why Choose Us</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="border border-white/10 rounded-lg p-6 hover:border-yellow-400/50 transition-colors"
            >
              <Icon className="w-8 h-8 text-yellow-400 mb-4" />
              <h4 className="font-semibold mb-2">{title}</h4>
              <p className="text-sm text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="px-16 py-16">
        <h3 className="text-2xl font-bold mb-10 text-center">
          What Our Guests Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-slate-800/50 border border-white/10 rounded-lg p-6"
            >
              <Quote className="w-6 h-6 text-yellow-400 mb-4" />
              <p className="text-slate-300 text-sm mb-4">"{review.quote}"</p>
              <p className="font-semibold text-sm">{review.name}</p>
              <p className="text-slate-500 text-xs">{review.city}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-16 pb-20 text-center">
        <a
          href="/rooms"
          className="inline-block bg-yellow-400 text-slate-900 font-semibold px-8 py-3 rounded-md hover:bg-yellow-300 transition-colors"
        >
          Explore Rooms
        </a>
      </div>
    </section>
  );
};

export default About;