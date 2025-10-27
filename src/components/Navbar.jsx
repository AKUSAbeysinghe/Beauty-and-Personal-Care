import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

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

  // Effect to disable scrolling when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

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

  return (
    <header className="absolute top-0 left-0 right-0 z-50 font-sans">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold uppercase tracking-widest text-white">
          Lunaria
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:gap-x-10">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              {link.dropdown ? (
                <>
                  <button
                    className="flex items-center text-sm font-medium uppercase tracking-wider text-white transition-colors hover:text-gray-300"
                  >
                    {link.label}
                    <IconChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute left-0 top-full mt-2 hidden w-48 rounded-md bg-stone-700/50 py-2 shadow-lg backdrop-blur-sm group-hover:block">
                    {link.dropdown.map((subLink) => (
                      <Link
                        key={subLink.label}
                        to={subLink.to}
                        className="block px-4 py-2 text-sm font-medium uppercase text-white hover:bg-white/10"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-4 px-6 pb-8 pt-2">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                      className="flex w-full items-center justify-center rounded-lg py-2 text-base font-semibold uppercase leading-7 text-white hover:bg-white/10"
                    >
                      {link.label}
                      <IconChevronDown className={`ml-2 h-5 w-5 transition-transform ${isServicesDropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isServicesDropdownOpen && (
                      <div className="mt-2 space-y-2 pl-4">
                        {link.dropdown.map((subLink) => (
                          <Link
                            key={subLink.label}
                            to={subLink.to}
                            className="block rounded-lg py-2 text-base font-medium uppercase leading-7 text-white hover:bg-white/10"
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
                    className="block rounded-lg py-2 text-base font-semibold uppercase leading-7 text-white hover:bg-white/10 text-center"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/booking"
              className="block rounded-lg py-3 text-base font-semibold uppercase leading-7 text-white hover:bg-white/10 text-center bg-stone-700/50 backdrop-blur-sm"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;