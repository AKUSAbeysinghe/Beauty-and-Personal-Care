import React, { useEffect, useState } from 'react';
import {
  EyeIcon,
  PaintBrushIcon,
  SparklesIcon,
  SunIcon,
  HandThumbUpIcon,
  CubeTransparentIcon,
} from '@heroicons/react/24/outline';
import BeautyRetail from '../assets/Mains/BeautyRetail.jpg';

// Footer Icons
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

// Icon for Services
const IconSparkles = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036.259a3.375 3.375 0 002.455 2.456zM16.5 18.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L12.75 15l1.036.259a3.375 3.375 0 002.455 2.456L16.5 18.75z" />
  </svg>
);

// Additional Services (unchanged)
const servicesData = [
  { name: 'Eyelash Extensions', price: '65+', Icon: EyeIcon },
  { name: 'Makeup Services', price: '75+', Icon: PaintBrushIcon },
  { name: 'Manicure & Pedicure', price: '45+', Icon: HandThumbUpIcon },
  { name: 'Body Wraps', price: '110+', Icon: CubeTransparentIcon },
  { name: 'Waxing Services', price: '25+', Icon: SparklesIcon },
  { name: 'Spray Tanning', price: '55+', Icon: SunIcon },
];

// Fallback Services for Cosmetics Retail
const fallbackServices = [
  {
    id: 1,
    category_id: 2,
    category_name: 'Cosmetics Retail',
    sub_category_id: 5,
    sub_category_name: 'Cosmetics Retail',
    name: 'Premium Lipstick',
    price: 25,
    description: 'High-quality lipstick from top brands',
    image_url: 'http://localhost/skincare_db/Uploads/Services/default_lipstick.jpg',
    type: 'standard',
  },
  {
    id: 2,
    category_id: 2,
    category_name: 'Cosmetics Retail',
    sub_category_id: 6,
    sub_category_name: 'Sephora Brands',
    name: 'Sephora Foundation',
    price: 40,
    description: 'Long-lasting foundation from Sephora',
    image_url: 'http://localhost/skincare_db/Uploads/Services/default_foundation.jpg',
    type: 'standard',
  },
  {
    id: 3,
    category_id: 2,
    category_name: 'Cosmetics Retail',
    sub_category_id: 7,
    sub_category_name: 'Ulta Beauty Products',
    name: 'Ulta Mascara',
    price: 30,
    description: 'Volumizing mascara from Ulta Beauty',
    image_url: 'http://localhost/skincare_db/Uploads/Services/default_mascara.jpg',
    type: 'standard',
  },
  {
    id: 4,
    category_id: 2,
    category_name: 'Cosmetics Retail',
    sub_category_id: 8,
    sub_category_name: 'Makeup & Skincare',
    name: 'Skincare Serum',
    price: 50,
    description: 'Hydrating serum for radiant skin',
    image_url: 'http://localhost/skincare_db/Uploads/Services/default_serum.jpg',
    type: 'standard',
  },
];

const BeautyRetailPage = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch services from backend
  const fetchServices = async () => {
    setLoading(true);
    setError('');
    try {
      console.log('Fetching services from http://localhost/skincare_db/get_services.php');
      const res = await fetch('http://localhost/skincare_db/get_services.php', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      console.log('Backend response:', data);

      if (data.success && Array.isArray(data.data)) {
        const retailServices = data.data.filter(
          (s) => s.category_id === '2' && s.type === 'standard'
        );
        console.log('Filtered cosmetics retail services:', retailServices);
        if (retailServices.length === 0) {
          setError('⚠️ No Cosmetics Retail services found in the database. Using fallback services.');
          setServices(fallbackServices);
        } else {
          setServices(retailServices);
        }
      } else {
        throw new Error(data.message || 'Invalid response format');
      }
    } catch (e) {
      console.error('Fetch error:', e.message);
      setError(`⚠️ Could not fetch services: ${e.message}. Using fallback services.`);
      setServices(fallbackServices);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Categorize services by sub_category_id
  const cosmeticsRetailServices = services.filter((s) => s.sub_category_id === '5');
  const sephoraServices = services.filter((s) => s.sub_category_id === '6');
  const ultaServices = services.filter((s) => s.sub_category_id === '7');
  const makeupSkincareServices = services.filter((s) => s.sub_category_id === '8');

  // Get the first valid image for each sub-category
  const getSubCategoryImage = (subCategoryServices) => {
    const serviceWithImage = subCategoryServices.find(
      (s) => s.image_url && !s.image_url.includes('placeholder.com')
    );
    if (!serviceWithImage) {
      console.warn(`No valid image found for sub-category: ${subCategoryServices[0]?.sub_category_name || 'Unknown'}`);
    }
    return serviceWithImage
      ? serviceWithImage.image_url
      : '/images/retail/default-image.jpg';
  };

  const navLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#blog', label: 'Blog' },
    { href: '#contacts', label: 'Contacts' },
  ];

  const socialLinks = [
    { href: 'https://instagram.com/lunaria', label: 'Instagram' },
    { href: 'https://facebook.com/lunaria', label: 'Facebook' },
    { href: 'https://twitter.com/lunaria', label: 'Twitter' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${BeautyRetail})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex flex-col items-center text-center text-white p-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
            Cosmetics Retail
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl">
            Shop premium beauty products from top brands like Sephora and Ulta Beauty
          </p>
          <button className="mt-8 bg-black text-white font-semibold py-3 px-10 rounded-lg text-lg transition-all duration-200 hover:bg-gray-800 shadow-lg">
            Start Shopping
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-200 text-red-800 border-2 border-red-400 font-medium text-center max-w-7xl mx-auto mt-4">
          {error}
        </div>
      )}

      {/* Cosmetics Retail Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase text-gray-900">
              Cosmetics Retail
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Discover an extensive collection of premium beauty products from world-renowned brands.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={getSubCategoryImage(cosmeticsRetailServices)}
                alt="Display of premium beauty products"
                className="rounded-lg shadow-md w-full h-auto object-cover"
                onError={(e) => {
                  console.error(`Failed to load image: ${e.target.src}`);
                  e.target.src = '/images/retail/default-image.jpg';
                }}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex-shrink-0 bg-black text-white p-3 rounded-full">
                  <IconSparkles className="h-6 w-6" />
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  General Cosmetics
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                {cosmeticsRetailServices.length > 0 && cosmeticsRetailServices[0].description
                  ? cosmeticsRetailServices[0].description
                  : 'Shop a wide range of high-quality beauty products for all your needs.'}
              </p>
              {loading ? (
                <p className="text-gray-600">Loading services...</p>
              ) : (
                <ul className="space-y-3 mb-8">
                  {cosmeticsRetailServices.length > 0 ? (
                    cosmeticsRetailServices.map((service, index) => (
                      <li key={index} className="flex items-center">
                        <IconSparkles className="text-black h-4 w-4 mr-3" />
                        <span className="text-gray-700">{service.name}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-600">No General Cosmetics products available</li>
                  )}
                </ul>
              )}
              <div className="mt-auto flex items-center justify-between">
                <p className="text-xl font-semibold text-gray-700">
                  From{' '}
                  <span className="font-bold text-black">
                    Rs.{cosmeticsRetailServices.length > 0
                      ? Math.min(...cosmeticsRetailServices.map((s) => Number(s.price))).toFixed(2)
                      : '25'}
                  </span>
                </p>
                <button className="bg-black text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-gray-800 shadow-md">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sephora Brands Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase text-gray-900">
              Sephora Brands
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore exclusive Sephora-branded products for premium beauty solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex-shrink-0 bg-black text-white p-3 rounded-full">
                  <IconSparkles className="h-6 w-6" />
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  Sephora Brands
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                {sephoraServices.length > 0 && sephoraServices[0].description
                  ? sephoraServices[0].description
                  : 'Discover Sephora’s exclusive range of makeup and skincare products.'}
              </p>
              {loading ? (
                <p className="text-gray-600">Loading services...</p>
              ) : (
                <ul className="space-y-3 mb-8">
                  {sephoraServices.length > 0 ? (
                    sephoraServices.map((service, index) => (
                      <li key={index} className="flex items-center">
                        <IconSparkles className="text-black h-4 w-4 mr-3" />
                        <span className="text-gray-700">{service.name}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-600">No Sephora Brands products available</li>
                  )}
                </ul>
              )}
              <div className="mt-auto flex items-center justify-between">
                <p className="text-xl font-semibold text-gray-700">
                  From{' '}
                  <span className="font-bold text-black">
                    Rs.{sephoraServices.length > 0
                      ? Math.min(...sephoraServices.map((s) => Number(s.price))).toFixed(2)
                      : '40'}
                  </span>
                </p>
                <button className="bg-black text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-gray-800 shadow-md">
                  Shop Now
                </button>
              </div>
            </div>
            <div>
              <img
                src={getSubCategoryImage(sephoraServices)}
                alt="Sephora branded products display"
                className="rounded-lg shadow-md w-full h-auto object-cover"
                onError={(e) => {
                  console.error(`Failed to load image: ${e.target.src}`);
                  e.target.src = '/images/retail/default-image.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ulta Beauty Products Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase text-gray-900">
              Ulta Beauty Products
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Shop Ulta Beauty’s curated selection of top-tier makeup and skincare products.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={getSubCategoryImage(ultaServices)}
                alt="Ulta Beauty products display"
                className="rounded-lg shadow-md w-full h-auto object-cover"
                onError={(e) => {
                  console.error(`Failed to load image: ${e.target.src}`);
                  e.target.src = '/images/retail/default-image.jpg';
                }}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex-shrink-0 bg-black text-white p-3 rounded-full">
                  <IconSparkles className="h-6 w-6" />
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  Ulta Beauty Products
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                {ultaServices.length > 0 && ultaServices[0].description
                  ? ultaServices[0].description
                  : 'Explore Ulta Beauty’s premium product lines for all your beauty needs.'}
              </p>
              {loading ? (
                <p className="text-gray-600">Loading services...</p>
              ) : (
                <ul className="space-y-3 mb-8">
                  {ultaServices.length > 0 ? (
                    ultaServices.map((service, index) => (
                      <li key={index} className="flex items-center">
                        <IconSparkles className="text-black h-4 w-4 mr-3" />
                        <span className="text-gray-700">{service.name}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-600">No Ulta Beauty products available</li>
                  )}
                </ul>
              )}
              <div className="mt-auto flex items-center justify-between">
                <p className="text-xl font-semibold text-gray-700">
                  From{' '}
                  <span className="font-bold text-black">
                    Rs.{ultaServices.length > 0
                      ? Math.min(...ultaServices.map((s) => Number(s.price))).toFixed(2)
                      : '30'}
                  </span>
                </p>
                <button className="bg-black text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-gray-800 shadow-md">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Makeup & Skincare Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase text-gray-900">
              Makeup & Skincare
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Achieve flawless beauty with our premium makeup and skincare products.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex-shrink-0 bg-black text-white p-3 rounded-full">
                  <IconSparkles className="h-6 w-6" />
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  Makeup & Skincare
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                {makeupSkincareServices.length > 0 && makeupSkincareServices[0].description
                  ? makeupSkincareServices[0].description
                  : 'High-performance makeup and skincare for a radiant look.'}
              </p>
              {loading ? (
                <p className="text-gray-600">Loading services...</p>
              ) : (
                <ul className="space-y-3 mb-8">
                  {makeupSkincareServices.length > 0 ? (
                    makeupSkincareServices.map((service, index) => (
                      <li key={index} className="flex items-center">
                        <IconSparkles className="text-black h-4 w-4 mr-3" />
                        <span className="text-gray-700">{service.name}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-600">No Makeup & Skincare products available</li>
                  )}
                </ul>
              )}
              <div className="mt-auto flex items-center justify-between">
                <p className="text-xl font-semibold text-gray-700">
                  From{' '}
                  <span className="font-bold text-black">
                    Rs.{makeupSkincareServices.length > 0
                      ? Math.min(...makeupSkincareServices.map((s) => Number(s.price))).toFixed(2)
                      : '50'}
                  </span>
                </p>
                <button className="bg-black text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-gray-800 shadow-md">
                  Shop Now
                </button>
              </div>
            </div>
            <div>
              <img
                src={getSubCategoryImage(makeupSkincareServices)}
                alt="Makeup and skincare products display"
                className="rounded-lg shadow-md w-full h-auto object-cover"
                onError={(e) => {
                  console.error(`Failed to load image: ${e.target.src}`);
                  e.target.src = '/images/retail/default-image.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase text-gray-900">
              Additional Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Complete your beauty routine with our complementary services
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <button
                key={service.name}
                className="flex items-start rounded-lg border border-gray-200 bg-white p-4 text-left transition-all duration-200 hover:border-gray-400 hover:shadow-md"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <service.Icon className="h-6 w-6 text-black" aria-hidden="true" />
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-semibold text-gray-800">{service.name}</p>
                    <p className="text-sm font-semibold text-gray-600">Rs.{service.price}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black uppercase text-white">
            Ready to Elevate Your Beauty Routine?
          </h2>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Shop premium products today and discover the luxury you deserve
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="w-full sm:w-auto px-8 py-3 border border-gray-200 text-base font-semibold rounded-lg text-white bg-transparent hover:bg-gray-800 transition-all duration-200"
            >
              View Pricing
            </a>
            <a
              href="#shop"
              className="w-full sm:w-auto px-8 py-3 border border-transparent text-base font-semibold rounded-lg text-black bg-white hover:bg-gray-200 transition-all duration-200"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default BeautyRetailPage;