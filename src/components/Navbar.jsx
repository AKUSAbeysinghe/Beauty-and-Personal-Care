import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// --- Helper Components for Icons ---
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

  // Disable scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Close dropdown when clicking outside (desktop)
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
    <header className="absolute top-0 left-0 right-0 z-50 font-sans">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold uppercase tracking-widest text-white">
          Lunaria
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:gap-x-10" ref={dropdownRef}>
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    className="flex items-center text-sm font-medium uppercase tracking-wider text-white transition-colors hover:text-gray-300"
                  >
                    {link.label}
                    <IconChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isServicesDropdownOpen && (
                    <div className="absolute left-0 top-full mt-2 w-48 rounded-md bg-stone-700/50 py-2 shadow-lg backdrop-blur-sm">
                      {link.dropdown.map((subLink) => (
                        <Link
                          key={subLink.label}
                          to={subLink.to}
                          onClick={() => setIsServicesDropdownOpen(false)}
                          className="block px-4 py-2 text-sm font-medium uppercase text-white hover:bg-white/10"
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
                  className="text-sm font-medium uppercase tracking-wider text-white transition-colors hover:text-gray-300"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Book Appointment Button */}
        <div className="hidden lg:flex">
          <Link
            to="/booking"
            className="rounded-md bg-stone-700/50 px-5 py-2.5 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition-colors hover:bg-stone-600/50"
          >
            Book an Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? <IconX className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* ==================== IMPROVED MOBILE MENU ==================== */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="flex flex-col min-h-screen bg-stone-900 pt-20 pb-12 px-6">
            <div className="space-y-6 mx-auto w-full max-w-md">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-white/10 pb-2 last:border-none">
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        className="flex w-full items-center justify-between py-4 text-left text-lg font-semibold uppercase tracking-wider text-white hover:text-gray-300 transition-colors"
                      >
                        {link.label}
                        <IconChevronDown className={`h-6 w-6 transition-transform ${isServicesDropdownOpen ? "rotate-180" : ""}`} />
                      </button>

                      {isServicesDropdownOpen && (
                        <div className="pl-4 space-y-3 mt-2">
                          {link.dropdown.map((subLink) => (
                            <Link
                              key={subLink.label}
                              to={subLink.to}
                              onClick={closeMobileMenu}
                              className="block py-3 text-base font-medium uppercase text-white hover:text-gray-300 transition-colors"
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
                      onClick={closeMobileMenu}
                      className="block py-4 text-lg font-semibold uppercase tracking-wider text-white hover:text-gray-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Book Appointment Button in Mobile */}
              <Link
                to="/booking"
                onClick={closeMobileMenu}
                className="mt-8 block w-full rounded-xl bg-stone-700 py-4 text-center text-lg font-semibold uppercase tracking-wider text-white hover:bg-stone-600 transition-colors"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;