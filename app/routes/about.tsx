import {
  HiOutlineCube,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2";
import { IoWaterOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

const features = [
  {
    icon: <HiOutlineCube />,
    title: "Quality assurance",
    description: "Rigorous testing at every production stage",
    color: "text-orange-400",
  },
  {
    icon: <IoWaterOutline />,
    title: "Ethical sourcing",
    description: "Fair wages and safe working conditions",
    color: "text-blue-600",
  },
  {
    icon: <HiOutlineCurrencyDollar />,
    title: "On-time delivery",
    description: "Your deadlines are our commitments",
    color: "text-green-600",
  },
  {
    icon: <TbWorld />,
    title: "Global network",
    description: "Connected across Bangladesh and beyond",
    color: "text-blue-600",
  },
];

export default function About() {
  return (
    <section className="w-full bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <p className="text-lg font-semibold">
            Why
          </p>

          <h1 className="text-5xl md:text-7xl font-medium mt-4">
            What sets us apart
          </h1>

          <p className="text-2xl mt-8">
            We stand behind every garment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

          {features.map((item, index) => (
            <div
              key={index}
              className="border rounded-2xl p-8 bg-white"
            >
              <div className={`text-5xl mb-12 ${item.color}`}>
                {item.icon}
              </div>

              <h2 className="text-4xl font-medium">
                {item.title}
              </h2>

              <p className="mt-8 text-xl">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}