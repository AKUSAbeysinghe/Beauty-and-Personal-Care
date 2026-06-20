import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// --- Icons ---
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

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
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

  const whatsappNumber = "94771234567";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Lunaria,%20I%20would%20like%20to%20book%20an%20appointment`;

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 font-sans bg-gradient-to-b from-black/70 to-transparent">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold uppercase tracking-widest text-white">
          Lunaria
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-10" ref={dropdownRef}>
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    className="flex items-center gap-1 text-sm font-medium uppercase tracking-wider text-white hover:text-gray-300 transition-colors"
                  >
                    {link.label}
                    <IconChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${isServicesDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isServicesDropdownOpen && (
                    <div className="absolute left-0 top-full mt-3 w-56 rounded-xl bg-stone-700/90 py-3 shadow-2xl backdrop-blur-md border border-white/10">
                      {link.dropdown.map((subLink) => (
                        <Link
                          key={subLink.label}
                          to={subLink.to}
                          onClick={() => setIsServicesDropdownOpen(false)}
                          className="block px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
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
                  className="text-sm font-medium uppercase tracking-wider text-white hover:text-gray-300 transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA Button - Shape from first code + Color from second code */}
        <div className="hidden lg:block">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-stone-700/50 px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-white shadow-sm backdrop-blur-md hover:bg-stone-600/50 transition-all active:scale-95 border border-white/10"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <IconX className="h-7 w-7" /> : <IconMenu className="h-7 w-7" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-md z-50 lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="max-w-md mx-auto w-full flex-1 flex flex-col">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-white/10 last:border-none">
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        className="flex w-full items-center justify-between py-5 text-left text-xl font-semibold uppercase tracking-wider text-white"
                      >
                        {link.label}
                        <IconChevronDown
                          className={`h-6 w-6 transition-transform duration-200 ${isServicesDropdownOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <div
                        className={`pl-6 overflow-hidden transition-all duration-300 ${
                          isServicesDropdownOpen ? "max-h-48" : "max-h-0"
                        }`}
                      >
                        <div className="space-y-4 py-3">
                          {link.dropdown.map((subLink) => (
                            <Link
                              key={subLink.label}
                              to={subLink.to}
                              onClick={closeMobileMenu}
                              className="block text-lg font-medium text-white/90 hover:text-white transition-colors"
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.to}
                      onClick={closeMobileMenu}
                      className="block py-5 text-xl font-semibold uppercase tracking-wider text-white hover:text-gray-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile CTA Button - Shape from first code + Color from second code */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="mt-10 block w-full rounded-2xl bg-stone-700 py-5 text-center text-xl font-semibold uppercase tracking-wider text-white hover:bg-stone-600 transition-all active:scale-[0.985]"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;