function Services() {
  const services = [
    "Responsive Website Design",
    "Landing Page Development",
    "Website Maintenance",
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service}
              className="bg-white p-8 rounded-2xl shadow hover:-translate-y-2 transition"
            >
              <h3 className="font-bold text-xl mb-3">{service}</h3>

              <p className="text-gray-600">
                Professional and responsive web solutions.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
