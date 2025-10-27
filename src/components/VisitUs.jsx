import React from 'react';
import Main from "../assets/Backgrounds/hero-main.jpg"; // Ensure the image path is correct

const VisitUsSection = () => {
  return (
    <section className="bg-[#fcf8f3] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layout: Two-column grid, adjusted for responsiveness */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="max-w-lg">
            <h2 className="text-sm font-medium tracking-widest uppercase text-[#C94B2F] mb-3">
              Visit Us
            </h2>
            <h1 className="text-5xl font-serif text-gray-800 mb-6 leading-tight">
              Nestled in the Pearl District
            </h1>
            <p className="text-lg text-gray-600 font-light mb-8">
              Maison Ember resides in a restored warehouse, moments from the waterfront. We recommend arriving early to enjoy a cocktail from our fireside lounge. Valet service is available nightly.
            </p>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg font-medium text-gray-800">
                415 Ember Lane, Portland, OR 97205
              </p>
              <p className="text-base font-light">
                <span className="font-medium text-gray-700">Complimentary valet after 5pm</span> • Street parking available
              </p>
              <p className="text-base font-light">
                Gift experiences and chef's table bookings available upon request.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Image container with rounded corners and subtle shadow */}
            <div className="w-full max-w-lg">
              <img
                src={Main}
                alt="Plates of wood-fired cuisine"
                className="w-full h-80 sm:h-[400px] rounded-3xl object-cover shadow-2xl"
                style={{
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUsSection;