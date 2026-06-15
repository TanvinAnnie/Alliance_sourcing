import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { FaHandshake, FaAward } from "react-icons/fa6";

const processData = [
  {
    icon: <HiOutlineChatBubbleBottomCenterText />,
    title: "Consultation",
    description:
      "We listen to your needs and understand your specifications",
    color: "text-orange-500",
  },
  {
    icon: <FaHandshake />,
    title: "Supplier match",
    description:
      "We match you with manufacturers who meet your standards",
    color: "text-orange-500",
  },
  {
    icon: <HiOutlineShoppingCart />,
    title: "Order management",
    description:
      "We negotiate terms and oversee production from start to finish",
    color: "text-gray-500",
  },
  {
    icon: <FaAward />,
    title: "Quality check",
    description:
      "Every batch is tested against your specifications and standards",
    color: "text-gray-500",
  },
];

export default function Process() {
  return (
    <section className="w-full bg-[#f5f5f5] py-20">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-14">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left Side */}

          <div>
            <p className="text-xl font-semibold text-black">
              Process
            </p>

          <h1 className="text-5xl md:text-7xl font-medium mt-8 leading-none text-black">
  How we work
</h1>
            <button
              className="
              mt-16
              border
              border-black-300
              rounded-xl
              px-8
              py-4
              text-black
              font-2xl
              hover:bg-black
              hover:text-gray-400
              duration-300
              "
            >
              Discuss
            </button>
          </div>

          {/* Right Side */}

          <div className="relative">

            {processData.map((item, index) => (
              <div
                key={index}
                className="relative flex gap-10 pb-16"
              >
                {/* Timeline */}

                <div className="relative flex flex-col items-center">

                  <div
                    className={`
                    w-14
                    h-14
                    rounded-full
                    bg-white
                    flex
                    items-center
                    justify-center
                    text-4xl
                    shadow-sm
                    ${item.color}
                    `}
                  >
                    {item.icon}
                  </div>

                  {index !== processData.length - 1 && (
                    <div className="w-[2px] h-36 bg-gray-300 mt-2"></div>
                  )}
                </div>

                {/* Content */}

                <div className="pt-1">
                  <h2 className="text-4xl font-medium">
                    {item.title}
                  </h2>

                  <p className="mt-6 text-2xl text-gray-800 leading-10 max-w-[550px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}