import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          {/* Left Side */}
          <div>
            {/* Logo & Company Name */}
            <div className="flex items-center gap-4 mb-12">
              <img
                src="/logo.png"
                alt="Alliance Sourcing BD"
                className="w-16 h-16 bg-white p-1 object-contain"
              />

              <div>
                <h2 className="text-2xl font-bold leading-tight">
                  ALLIANCE
                </h2>
                <h2 className="text-2xl font-bold leading-tight">
                  SOURCING BD
                </h2>
              </div>
            </div>

            {/* Address */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-3">
                Address
              </h3>

              <p className="text-lg text-gray-300">
                Asha Plaza (2nd floor), Hemayetpur,
                Savar, Dhaka, Bangladesh.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-3">
                Contact
              </h3>

              <a
                href="tel:01716054044"
                className="block underline text-lg"
              >
                01716054044
              </a>

              <a
                href="mailto:faroque71@gmail.com"
                className="block underline text-lg"
              >
                faroque71@gmail.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 text-3xl">
              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaXTwitter />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>

              <a href="#">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:text-right">
            <h2 className="text-4xl font-medium mb-10">
              Quick Links
            </h2>

            <ul className="space-y-5 text-xl font-semibold">
              <li>
                <a href="/about">About us</a>
              </li>

              <li>
                <a href="/services">Our services</a>
              </li>

              <li>
                <a href="/factory-network">
                  Factory network
                </a>
              </li>

              <li>
                <a href="/quality-control">
                  Quality control
                </a>
              </li>

              <li>
                <a href="/contact">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-16"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-lg text-gray-300">
            © 2026 Alliance Sourcing BD
          </p>

          <div className="flex flex-wrap gap-8 text-lg">
            <a href="#" className="underline">
              Privacy policy
            </a>

            <a href="#" className="underline">
              Terms of service
            </a>

            <a href="#" className="underline">
              Cookie settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}