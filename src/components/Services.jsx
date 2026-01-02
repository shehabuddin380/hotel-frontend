const Services = () => {
  return (
    <section className="px-16 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

      <div className="grid md:grid-cols-4 gap-6 text-center">
        {["Free Wifi", "Restaurant", "Swimming Pool", "24/7 Support"].map(
          (service) => (
            <div
              key={service}
              className="p-6 bg-white shadow rounded hover:shadow-lg"
            >
              <h3 className="font-semibold text-lg">{service}</h3>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Services;
