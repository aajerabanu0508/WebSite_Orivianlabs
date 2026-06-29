const services = [
  "Kubernetes Consulting",
  "CI/CD Consulting",
  "SRE Consulting",
  "Observability",
  "Infrastructure as Code",
  "Network & Storage",
  "Security Platform Engineering"
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl text-center font-bold mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service}
              className="bg-white p-6 rounded-lg shadow"
            >
              <h3 className="text-xl font-bold text-red-600">
                {service}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}