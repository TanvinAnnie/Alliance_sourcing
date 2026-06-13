export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              ALLIANCE SOURCING
            </h2>
            <p className="text-gray-400">
              We provide creative digital solutions for your business growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="/services" className="hover:text-white">
                  Services
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Contact
            </h3>

            <p className="text-gray-400">
              Email: info@alliancesourcing.com
            </p>

            <p className="text-gray-400">
              Phone: +880 1234-567890
            </p>

            <p className="text-gray-400">
              Dhaka, Bangladesh
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-5 text-center text-gray-500">
          © 2026 Alliance Sourcing. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}