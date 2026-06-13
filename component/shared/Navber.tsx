export default function Navbar() {
  return (
    <nav className="w-full bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Left Logo Section */}
        <div className="flex items-center gap-4">

          {/* Logo 1 */}
          <div className="flex items-center gap-2">
            <img
              src="/logo1.png"
              alt="Alliance Sourcing"
              className="w-10 h-10 object-contain"
            />

           <div className="leading-5 text-black">
  <h1 className="font-bold text-[14px] uppercase">
    ALLIANCE
  </h1>
  <h1 className="font-bold text-[14px] uppercase">
    SOURCING BD
  </h1>
</div>
          </div>

          {/* Divider */}
          <div className="h-10 w-[1px] bg-gray-400"></div>

          {/* Logo 2 */}
          <div className="flex items-center gap-2">
            <img
              src="/logo2.png"
              alt="Alliance Apparels"
              className="w-16 object-contain"
            />

            <div className="leading-5 text-black">
              <h1 className="font-bold text-[14px] uppercase">
                ALLIANCE
              </h1>
              <h1 className="font-bold text-[14px] uppercase">
                APPARELS LTD.
              </h1>
            </div>
          </div>
        </div>

        {/* Menu */}
        <ul className="hidden lg:flex items-center gap-12 text-[18px] font-medium">
          <li>
            <a href="/" className="text-sky-500">
              Home
            </a>
          </li>

          <li>
            <a href="/about" className="text-black">
              About Us
            </a>
          </li>

          <li>
            <a href="/buying-house" className="text-black">
              Buying House
            </a>
          </li>

          <li>
            <a href="/factory-machinery" className="text-black">
              Factory & Machinery
            </a>
          </li>

          <li>
            <a href="/global-partners" className="text-black">
              Global Partners
            </a>
          </li>
        </ul>

        {/* Button */}
        <div>
          <button
            className="
            px-8
            py-4
            rounded-xl
            text-white
            text-xl
            font-semibold
            bg-gradient-to-r
            from-cyan-400
            to-blue-600
            shadow-[0_0_25px_rgba(59,130,246,0.6)]
            hover:scale-105
            duration-300
          "
          >
            Speck with us
          </button>
        </div>
      </div>
    </nav>
  );
}