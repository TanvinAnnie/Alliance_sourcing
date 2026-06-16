import {
  HiOutlineUserGroup,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";
import { TbShoppingBagCheck } from "react-icons/tb";

export default function Services() {
  return (
    <section className="w-full bg-[#F2E4D7] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side Image */}

          <div>
            <img
              src="/store_pic.webp"
              alt="Service"
              className="w-full h-[600px] object-cover rounded-xl"
            />
          </div>

          {/* Right Side */}

          <div>

            <p className="text-xl font-semibold text-black">
              Services
            </p>

            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] text-black">
              Professional buying
              <br />
              house services
            </h1>

            <p className="mt-10 text-[20px] leading-10 text-gray-900 max-w-[700px]">
              We handle the complexity of sourcing so you can focus
              on your business. Our buying house team brings years
              of experience in connecting buyers with the right
              manufacturers.
            </p>

            <div className="mt-12 space-y-8">

              <div className="flex items-center gap-5">
                <HiOutlineUserGroup className="text-3xl text-black" />

                <p className="text-2xl text-black">
                  Product development and sampling
                </p>
              </div>

              <div className="flex items-center gap-5">
                <HiOutlineBuildingOffice2 className="text-3xl text-black" />

                <p className="text-2xl text-black">
                  Supplier selection and evaluation
                </p>
              </div>

              <div className="flex items-center gap-5">
                <TbShoppingBagCheck className="text-3xl text-black" />

                <p className="text-2xl text-black">
                  Price negotiation and order placement
                </p>
              </div>

            </div>

            <button
              className="
              mt-12
              px-10
              py-4
              border
              border-gray-300
              rounded-xl
              text-2xl
              bg-white
              
              text-black
              duration-300
              "
            >
              Explore
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}