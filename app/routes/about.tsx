import {
  HiOutlineCube,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2";
import { IoWaterOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

const cards = [
  {
    icon: <HiOutlineCube />,
    title: "Quality assurance",
    description: "Rigorous testing at every production stage",
    color: "text-[#E79A4B]",
  },
  {
    icon: <IoWaterOutline />,
    title: "Ethical sourcing",
    description: "Fair wages and safe working conditions",
    color: "text-[#1565C0]",
  },
  {
    icon: <HiOutlineCurrencyDollar />,
    title: "On-time delivery",
    description: "Your deadlines are our commitments",
    color: "text-[#118C22]",
  },
  {
    icon: <TbWorld />,
    title: "Global network",
    description: "Connected across Bangladesh and beyond",
    color: "text-[#1565C0]",
  },
];

export default function About() {
  return (
    <section className="w-full bg-[#F5F5F5] py-20 lg:py-28">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-16">

        {/* Heading */}

        <div className="text-center">
          <p className="text-[20px] font-semibold text-black">
            Why
          </p>

          <h1 className="mt-6 text-[50px] md:text-[70px] lg:text-[82px] leading-none font-medium text-black">
            What sets us apart
          </h1>

          <p className="mt-10 text-[22px] md:text-[28px] text-[#222]">
            We stand behind every garment
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-24">

          {cards.map((item, index) => (
            <div
              key={index}
              className="
              border
              border-[#D8D8D8]
              rounded-2xl
              bg-[#F5F5F5]
              p-10
              min-h-[430px]
              transition-all
              duration-300
              hover:shadow-lg
              "
            >
              <div
                className={`text-[54px] ${item.color} mb-20`}
              >
                {item.icon}
              </div>

              <h2 className="text-[36px] leading-[1.2] font-medium text-black">
                {item.title}
              </h2>

              <p className="mt-10 text-[20px] leading-[1.7] text-[#222]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>


  );
}