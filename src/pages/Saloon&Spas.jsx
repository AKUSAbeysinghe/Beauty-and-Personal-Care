import React, { useEffect, useState } from 'react';
import {
  EyeIcon,
  PaintBrushIcon,
  SparklesIcon,
  SunIcon,
  HandThumbUpIcon,
  CubeTransparentIcon,
  ScissorsIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import Saloonspas from '../assets/Mains/SaloonSpas.jpg';

// Custom Massage Icon
const IconMassage = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75a9 9 0 00-7.757 4.468c-.37.63.112 1.532.84 1.532h13.834c.728 0 1.21-.902.84-1.532A9 9 0 0012 9.75zm-4.5 9.75c0 1.243 1.007 2.25 2.25 2.25h4.5c1.243 0 2.25-1.007 2.25-2.25" />
  </svg>
);

// Static Additional Services
const staticServicesData = [
  { name: 'Eyelash Extensions', price: '6500+', Icon: EyeIcon },
  { name: 'Makeup Services', price: '7500+', Icon: PaintBrushIcon },
  { name: 'Manicure & Pedicure', price: '4500+', Icon: HandThumbUpIcon },
  { name: 'Body Wraps', price: '11000+', Icon: CubeTransparentIcon },
  { name: 'Waxing Services', price: '2500+', Icon: SparklesIcon },
  { name: 'Spray Tanning', price: '5500+', Icon: SunIcon },
];

const SpaPage = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost/skincare_db";

  const fetchServices = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_URL}/api/get_products.php`);
      
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const result = await res.json();

      if (result.success && Array.isArray(result.data)) {
        const filtered = result.data.filter(s => String(s.category_id) === '1');
        setServices(filtered.length > 0 ? filtered : []);
      } else {
        setServices([]);
      }
    } catch (err) {
      console.error('Fetch failed:', err);
      setError('Failed to load services. Please try again later.');
      setServices([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Group by subcategory
  const salonServices = services.filter(s => String(s.sub_category_id) === '1');
  const spaServices = services.filter(s => String(s.sub_category_id) === '2');
  const facialServices = services.filter(s => String(s.sub_category_id) === '3');
  const massageServices = services.filter(s => String(s.sub_category_id) === '4');

  // Dynamic Image Fetch (Same as Beauty Retail & Grooming)
  const getImage = (list, fallback) => {
    const item = list.find((i) => i.image_url && !i.image_url.includes('placeholder'));
    if (item?.image_url) {
      return `${API_URL}/${item.image_url}`;
    }
    return fallback;
  };

  const getMinPrice = (arr) => {
    if (!arr.length) return 1500;
    const prices = arr.map((i) => Number(i.price) || 0).filter((p) => p > 0);
    return prices.length ? Math.min(...prices) : 1500;
  };

  // Sections with alternating layout
  const sections = [
    {
      title: "Beauty Salons",
      data: salonServices,
      fallbackImage: Saloonspas,
      isImageLeft: true,
      description: "Premium beauty services to enhance your natural radiance.",
      icon: ScissorsIcon,
    },
    {
      title: "Spas",
      data: spaServices,
      fallbackImage: Saloonspas,
      isImageLeft: false,
      description: "Tranquil spa experiences for ultimate relaxation and rejuvenation.",
      icon: HeartIcon,
    },
    {
      title: "Facials & Skincare",
      data: facialServices,
      fallbackImage: Saloonspas,
      isImageLeft: true,
      description: "Advanced treatments for radiant, healthy and glowing skin.",
      icon: SparklesIcon,
    },
    {
      title: "Massage Therapy",
      data: massageServices,
      fallbackImage: Saloonspas,
      isImageLeft: false,
      description: "Therapeutic massages to relieve stress and restore balance.",
      icon: IconMassage,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <div
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Saloonspas})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex flex-col items-center text-center text-white p-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Salons & Spas
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl">
            Indulge in luxurious spa treatments and rejuvenating beauty services
          </p>
          <button className="mt-8 bg-black text-white font-semibold py-3 px-10 rounded-lg text-lg hover:bg-gray-800 transition">
            Book Your Appointment
          </button>
        </div>
      </div>

      {/* ERROR MESSAGE */}
      {error && (
        <div className="max-w-7xl mx-auto mt-6 px-4">
          <div className="p-4 bg-amber-100 border border-amber-400 text-amber-700 rounded-lg text-center">
            {error}
          </div>
        </div>
      )}

      {/* DYNAMIC SECTIONS - ALTERNATING LAYOUT */}
      {sections.map((section, index) => (
        <section
          key={index}
          className={`py-16 sm:py-24 ${index % 2 === 1 ? "bg-gray-50" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black uppercase text-gray-900">
                {section.title}
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                {section.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image Left */}
              {section.isImageLeft && (
                <div>
                  <img
                    src={getImage(section.data, section.fallbackImage)}
                    alt={section.title}
                    className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
                    onError={(e) => { e.target.src = Saloonspas; }}
                  />
                </div>
              )}

              {/* Content */}
              <div className="flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex-shrink-0 bg-black text-white p-4 rounded-full">
                    <section.icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {section.title}
                  </h3>
                </div>

                {loading ? (
                  <p className="text-gray-600">Loading services...</p>
                ) : (
                  <ul className="space-y-3 mb-8">
                    {section.data.length > 0 ? (
                      section.data.map((item) => (
                        <li key={item.id} className="flex items-center">
                          <SparklesIcon className="text-black h-5 w-5 mr-3" />
                          <span className="text-gray-700 font-medium">{item.name}</span>
                        </li>
                      ))
                    ) : (
                      <li className="text-gray-500">No services available in this category</li>
                    )}
                  </ul>
                )}

                <div className="mt-auto flex items-center justify-between">
                  <p className="text-2xl font-bold text-gray-800">
                    From{" "}
                    <span className="text-black">Rs.{getMinPrice(section.data)}</span>
                  </p>
                  <button className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md">
                    Book Now
                  </button>
                </div>
              </div>

              {/* Image Right */}
              {!section.isImageLeft && (
                <div>
                  <img
                    src={getImage(section.data, section.fallbackImage)}
                    alt={section.title}
                    className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
                    onError={(e) => { e.target.src = Saloonspas; }}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* ADDITIONAL SERVICES SECTION */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase text-gray-900">
              Additional Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Complete your beauty experience with our complementary services
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {staticServicesData.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 flex items-start gap-5 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex-shrink-0 h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center">
                  <service.Icon className="h-7 w-7 text-black" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">{service.name}</p>
                  <p className="text-pink-600 font-bold mt-1">Rs.{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-black py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-black uppercase text-white tracking-tight">
            Ready to Transform Your Look?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Book your appointment today and experience the luxury you deserve
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-black transition font-semibold">
              View Pricing
            </button>
            <button className="px-10 py-4 bg-white text-black rounded-lg hover:bg-gray-100 transition font-semibold">
              Book Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpaPage;