import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white text-xl font-bold">My Website</div>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#home"
                className="text-white hover:text-gray-200 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white hover:text-gray-200 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-gray-200 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;