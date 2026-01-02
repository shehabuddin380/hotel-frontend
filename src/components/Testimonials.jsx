const Testimonials = () => {
  return (
    <section className="px-16 py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Our Guests Say
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 shadow rounded">
          ⭐⭐⭐⭐⭐ <br />
          Amazing service & beautiful rooms!
        </div>
        <div className="bg-white p-6 shadow rounded">
          ⭐⭐⭐⭐⭐ <br />
          Best hotel experience ever.
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
