import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="DLEDFONT   container p-5 flex justify-around items-center bg-customGray">
        <div className="text-3xl text-black">
          <Link to="/">DLED</Link>
        </div>

        <div className="block md:hidden">
          <button className="text-black" aria-label="Menu" onClick={toggleMobileMenu}>
            &#9776;
          </button>
        </div>

        <div className="hidden md:flex space-x-8 text-lg">
          <Link
            to="/aboutus"
            className={`relative group ${isActive('/aboutus') ? 'text-black' : ''}`}
          >
            About us
            <span
              className={`absolute bottom-0 left-0 w-0 h-1 bg-black group-hover:w-full transition-all duration-300 ${isActive('/aboutus') ? 'w-full' : ''}`}
            ></span>
          </Link>
          <Link
            to="/labresearch"
            className={`relative group ${isActive('/labresearch') ? 'text-black' : ''}`}
          >
            Lab Research
            <span
              className={`absolute bottom-0 left-0 w-0 h-1 bg-black group-hover:w-full transition-all duration-300 ${isActive('/labresearch') ? 'w-full' : ''}`}
            ></span>
          </Link>
          <Link
            to="/lifeindled"
            className={`relative group ${isActive('/lifeindled') ? 'text-black' : ''}`}
          >
            LID
            <span
              className={`absolute bottom-0 left-0 w-0 h-1 bg-black group-hover:w-full transition-all duration-300 ${isActive('/lifeindled') ? 'w-full' : ''}`}
            ></span>
          </Link>
          <Link
            to="/contactus"
            className={`relative group ${isActive('/contactus') ? 'text-black' : ''}`}
          >
            Contact us
            <span
              className={`absolute bottom-0 left-0 w-0 h-1 bg-black group-hover:w-full transition-all duration-300 ${isActive('/contactus') ? 'w-full' : ''}`}
            ></span>
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-customGray p-5">
          <div className="space-y-4 text-lg">
            <Link to="/aboutus" className="block relative">
              About us
              <span
                className={`absolute bottom-0 left-0 w-0 h-1 bg-black hover:w-full transition-all duration-300 ${isActive('/aboutus') ? 'w-full' : ''}`}
              ></span>
            </Link>
            <Link to="/labresearch" className="block relative">
              Lab Research
              <span
                className={`absolute bottom-0 left-0 w-0 h-1 bg-black hover:w-full transition-all duration-300 ${isActive('/labresearch') ? 'w-full' : ''}`}
              ></span>
            </Link>
            <Link to="/lifeindled" className="block relative">
              LID
              <span
                className={`absolute bottom-0 left-0 w-0 h-1 bg-black hover:w-full transition-all duration-300 ${isActive('/lifeindled') ? 'w-full' : ''}`}
              ></span>
            </Link>
            <Link to="/contactus" className="block relative">
              Contact us
              <span
                className={`absolute bottom-0 left-0 w-0 h-1 bg-black hover:w-full transition-all duration-300 ${isActive('/contactus') ? 'w-full' : ''}`}
              ></span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
