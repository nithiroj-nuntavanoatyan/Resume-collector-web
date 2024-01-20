import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); //false
  };

  return (
    <nav style={{ backgroundColor: "#2B5E53", padding: "1rem" }}>
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <a href="">Resume Collector</a>
        </div>

        {/*Toggle menu button*/}
        <div className="md:hidden">
          <button id="menu-toggle" className="text-white" onClick={toggleMenu}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="#" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Resume
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Search
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Login
            </a>
          </li>
        </ul>
      </div>
      {/* Mobile Menu*/}
      {isMenuOpen ? (
        <ul className="flex-col md:hidden flex">
          <li className="py-2">
            <a href="#" className="text-white">
              Home
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="text-white">
              Resume
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Search
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="text-white">
              About us
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="text-white">
              Login
            </a>
          </li>
        </ul>
      ) : null}
    </nav>
  );
}

export default Navbar;
