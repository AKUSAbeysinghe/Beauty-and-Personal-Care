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

        <div className="hidden lg:flex lg:gap-x-10" ref={dropdownRef}>
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    className="flex items-center text-sm font-medium uppercase tracking-wider text-black transition-colors hover:text-gray-600"
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
                          className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
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
                  className="text-sm font-medium uppercase tracking-wider text-black transition-colors hover:text-gray-600"
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
            className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Book an Appointment
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-black"
          >
            {isMenuOpen ? <IconX className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="flex flex-col min-h-screen bg-white pt-20 pb-12 px-6 text-black">
            <div className="space-y-6 mx-auto w-full max-w-md">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-gray-200 pb-2 last:border-none">
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        className="flex w-full items-center justify-between py-4 text-left text-lg font-semibold uppercase tracking-wider hover:text-gray-600"
                      >
                        {link.label}
                        <IconChevronDown className={`h-6 w-6 transition-transform ${isServicesDropdownOpen ? "rotate-180" : ""}`} />
                      </button>

                      {isServicesDropdownOpen && (
                        <div className="pl-6 space-y-4 mt-2">
                          {link.dropdown.map((subLink) => (
                            <Link
                              key={subLink.label}
                              to={subLink.to}
                              onClick={closeMobileMenu}
                              className="block py-3 text-base font-medium uppercase hover:text-gray-600"
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
                      className="block py-4 text-lg font-semibold uppercase tracking-wider hover:text-gray-600"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              <Link
                to="/booking"
                onClick={closeMobileMenu}
                className="mt-8 block w-full rounded-2xl bg-black py-4 text-center text-lg font-semibold uppercase tracking-wider text-white hover:bg-gray-800"
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

// ==================== THEME-BASED CONTACT ICONS ====================
const IconMail = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const IconPhone = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

// ==================== PORTFOLIO PAGE ====================
const PortfolioPage = () => {
  const [mainImage, setMainImage] = useState("");
  const [supportImages, setSupportImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const blackWhiteFallbacks = {
    main: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    support: [
      "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    ]
  };

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch("http://localhost/skincare_db/get_gallery_images.php");
        if (!res.ok) throw new Error("Server not responding");

        const data = await res.json();

        const main = data?.find(img => img.category === "main");
        const supports = data?.filter(img => img.category === "support") || [];

        setMainImage(main?.image_url || blackWhiteFallbacks.main);
        setSupportImages(
          supports.length > 0
            ? supports.map(s => s.image_url)
            : blackWhiteFallbacks.support
        );
      } catch (err) {
        console.error("Gallery fetch failed:", err);
        setMainImage(blackWhiteFallbacks.main);
        setSupportImages(blackWhiteFallbacks.support);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap');
          .font-playfair { font-family: 'Playfair Display', serif; }
        `}
      </style>

      <Header />

      <div className="pt-20" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* LEFT SIDEBAR */}
          <aside className="lg:w-5/12 xl:w-2/5 bg-zinc-950 text-white p-10 rounded-3xl flex-shrink-0">
            <div className="flex flex-col items-center gap-8 sticky top-24">
              <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl">
                <img
                  src={supportImages[0] || blackWhiteFallbacks.support[0]}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                  onError={(e) => (e.target.src = blackWhiteFallbacks.support[0])}
                  alt="Lunaria Signature"
                />
              </div>

              <div className="grid grid-cols-3 gap-4 w-full">
                {supportImages.slice(1, 7).map((img, i) => (
                  <div key={i} className="aspect-square rounded-xl overflow-hidden border border-white/20">
                    <img
                      src={img}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                      onError={(e) => (e.target.src = blackWhiteFallbacks.support[i % blackWhiteFallbacks.support.length])}
                      alt={`Portfolio ${i + 1}`}
                    />
                  </div>
                ))}
              </div>

              <div className="text-center mt-6">
                <p className="text-xs tracking-[0.4em] text-gray-400">LUNARIA</p>
                <h3 className="text-lg font-medium tracking-wider mt-1">PORTFOLIO • 2025</h3>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="flex-1 flex flex-col items-center justify-center">
            <div className="max-w-2xl text-center">
              <h1 className="font-playfair text-6xl md:text-7xl leading-none tracking-tighter mb-6">
                SIGNATURE<br />LOOKS
              </h1>

              <p className="text-xl text-gray-600 tracking-wide mb-16">
                TIMELESS BEAUTY • CRAFTED IN BLACK &amp; WHITE
              </p>

              <div className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-[3rem] overflow-hidden border border-gray-200 shadow-2xl mb-16">
                {loading ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <p className="text-gray-400 tracking-widest text-sm">LOADING GALLERY...</p>
                  </div>
                ) : (
                  <img
                    src={mainImage}
                    className="w-full h-full object-cover"
                    onError={(e) => (e.target.src = blackWhiteFallbacks.main)}
                    alt="Lunaria Signature Look"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
              </div>

              {/* Updated Contact Section with SVG Icons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm mb-12">
                <a href="mailto:hello@lunaria.com" className="flex items-center gap-3 hover:text-gray-600 transition-colors group">
                  <IconMail className="w-5 h-5 text-black group-hover:text-gray-600 transition" />
                  HELLO@LUNARIA.COM
                </a>
                <a href="tel:+94771234567" className="flex items-center gap-3 hover:text-gray-600 transition-colors group">
                  <IconPhone className="w-5 h-5 text-black group-hover:text-gray-600 transition" />
                  +94 77 123 4567
                </a>
              </div>

              <Link
                to="/booking"
                className="inline-block px-14 py-5 border border-black hover:bg-black hover:text-white transition-all duration-300 tracking-[0.125em] text-sm uppercase font-medium"
              >
                BOOK YOUR SESSION
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;