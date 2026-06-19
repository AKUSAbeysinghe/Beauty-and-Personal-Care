import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// ==================== HEADER / NAVBAR ====================
const IconMenu = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const IconX = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const IconChevronDown = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    {
      label: "Services",
      dropdown: [
        { to: "/salons-spas", label: "Salons & Spas" },
        { to: "/cosmetics-retail", label: "Cosmetics Retail" },
        { to: "/barber-grooming", label: "Barber & Grooming" },
      ],
    },
    { to: "/gallery", label: "Gallery" },
    { to: "/about", label: "About Us" },
  ];

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans bg-white border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

        <Link to="/" className="text-2xl font-bold uppercase tracking-widest text-black">
          Lunaria
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex lg:gap-x-10" ref={dropdownRef}>
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    className="flex items-center text-sm font-medium uppercase tracking-wider text-black hover:text-gray-600"
                  >
                    {link.label}
                    <IconChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isServicesDropdownOpen && (
                    <div className="absolute left-0 top-full mt-2 w-56 rounded-xl bg-white py-3 shadow-xl border border-gray-100">
                      {link.dropdown.map((subLink) => (
                        <Link
                          key={subLink.label}
                          to={subLink.to}
                          onClick={() => setIsServicesDropdownOpen(false)}
                          className="
                            block px-6 py-3
                            font-sans uppercase tracking-wider
                            text-sm font-medium text-black
                            hover:bg-gray-50 hover:text-gray-700
                          "
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.to}
                  className="text-sm font-medium uppercase tracking-wider text-black hover:text-gray-600"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex">
          <Link
            to="/booking"
            className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Book an Appointment
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-black"
          >
            {isMenuOpen ? <IconX className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>

      </nav>
    </header>
  );
};

export default Header;