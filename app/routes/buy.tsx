import {
  Package,
  ScanSearch,
  ShoppingBasket,
  Monitor,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Product development and sampling",
      description: "We create samples that match your vision exactly.",
      icon: Package,
      featured: true,
    },
    {
      title: "Supplier selection and evaluation",
      description: "We find manufacturers who meet your standards.",
      icon: ScanSearch,
    },
    {
      title: "Price negotiation and order placement",
      description: "We secure the best terms for your orders.",
      icon: ShoppingBasket,
    },
    {
      title: "Production follow-up and quality inspection",
      description: "We monitor every batch from loom to shipment.",
      icon: Monitor,
    },
  ];

  return (
    <section className="bg-[#f8f8f8] py-20">
      <div className="max-w-6xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm text-black mb-4">Services</p>

          <h2 className="text-4xl md:text-5xl font-medium text-black mb-5">
            Buying house services
          </h2>

          <p className="text-gray-700 text-base">
            We manage every step of your sourcing journey with precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`rounded-lg border p-8 min-h-[180px] flex flex-col justify-between transition-all duration-300
                  ${
                    service.featured
                      ? "bg-sky-500 border-sky-500 text-white"
                      : "bg-white border-gray-200 text-black"
                  }`}
              >
                <div>
                  <Icon
                    size={32}
                    className={
                      service.featured ? "text-white" : "text-black"
                    }
                  />
                </div>

                <div>
                  <h3
                    className={`text-2xl font-medium mb-3 leading-snug ${
                      service.featured ? "text-white" : "text-black"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-sm ${
                      service.featured
                        ? "text-white/90"
                        : "text-gray-600"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}