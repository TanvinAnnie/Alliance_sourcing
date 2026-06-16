import {
  Factory,
  Cog,
  Wrench,
  Users,
  Settings,
} from "lucide-react";

export default function FactoryCapabilities() {
  const features = [
    {
      icon: Cog,
      title: "Garment production support",
      description:
        "Full-scale manufacturing with quality control at each stage.",
    },
    {
      icon: Settings,
      title: "Maintenance and technical support",
      description:
        "Our team keeps machines running smoothly year-round.",
    },
    {
      icon: Wrench,
      title: "Machinery supply and installation",
      description:
        "We source and install equipment tailored to your needs.",
    },
    {
      icon: Users,
      title: "Production optimization",
      description:
        "We improve efficiency and reduce waste on every line.",
    },
  ];

  return (
    <section className="bg-[#EEE0D1] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div>
            {/* Top Icon */}
            <div className="mb-8">
              <Factory
                size={42}
                className="text-[#F97316] stroke-[1.8]"
              />
            </div>

            {/* Heading */}
            <h2 className="text-[42px] md:text-[56px] leading-[1.05] font-medium text-black mb-8">
              Factory and
              <br />
              machinery
              <br />
              capabilities
            </h2>

            {/* Description */}
            <p className="text-gray-800 text-lg leading-8 max-w-xl mb-12">
              We work with modern facilities equipped for
              precision production. Our network includes mills
              and factories with the latest technology.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8 mb-12">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <Icon
                      size={18}
                      className="text-[#F97316] mt-1 flex-shrink-0"
                    />

                    <div>
                      <h3 className="font-medium text-black mb-2 leading-6">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-600 leading-6">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Button */}
            <button className="px-6 py-3 bg-white border border-gray-300 rounded-md text-black hover:bg-black hover:text-white transition duration-300">
              Details
            </button>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/machine.png" // replace with your image
              alt="Factory Machinery"
              className="w-full h-[500px] md:h-[650px] object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}