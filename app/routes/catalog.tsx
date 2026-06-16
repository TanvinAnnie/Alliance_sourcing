import {
  Shirt,
  Layers3,
  Package,
  ScanLine,
} from "lucide-react";

export default function ProductsServices() {
  const features = [
    {
      icon: Shirt,
      title: "Knitwear",
      description:
        "Sweaters, t-shirts, and knit garments made to order.",
    },
    {
      icon: ScanLine,
      title: "Denim and heavy fabrics",
      description:
        "Durable denim and canvas for pants and jackets.",
    },
    {
      icon: Layers3,
      title: "Woven fabrics",
      description:
        "Cotton, blends, and specialty woven materials in stock.",
    },
    {
      icon: Package,
      title: "Accessories and trims",
      description:
        "Buttons, zippers, labels, and finishing materials available.",
    },
  ];

  return (
    <section className="bg-[#f8f8f8] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Image */}
          <div>
            <img
              src="/cloth.png" // replace with your image path
              alt="Products"
              className="w-full h-[500px] object-cover rounded-md"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-xs font-medium text-black mb-4">
              Catalog
            </p>

            <h2 className="text-4xl md:text-5xl font-medium text-black leading-tight mb-8">
              Products and
              <br />
              services
            </h2>

            <p className="text-gray-700 text-base leading-8 max-w-xl mb-10">
              We source and manage everything you need for apparel
              production. From raw materials to finished goods,
              we handle it all.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8 mb-10">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <Icon
                      size={18}
                      className="text-blue-600 mt-1 flex-shrink-0"
                    />

                    <div>
                      <h3 className="font-medium text-black mb-1">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-500 leading-6">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Button */}
            <button className="px-6 py-3 border border-gray-300 rounded-md text-black">
              Browse
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}