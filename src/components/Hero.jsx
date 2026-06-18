import React from 'react';
import HeroImage from "../assets/Main/Hero_.jpg";

const BeautyHero = () => {
  const whatsappNumber = "94771234567"; // Remove + sign and spaces
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Lunaria,%20I%20would%20like%20to%20book%20an%20appointment`;

  return (
    <div
      className="relative flex h-screen items-end bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full flex-col p-8 sm:p-12 md:p-16">
        {/* Centered informational text */}
        <div className="flex grow items-center max-w-lg">
          <div>
            <p className="text-base md:text-lg">
              Your glow begins here. Welcome to Lunaria.
            </p>
            
            {/* Updated WhatsApp Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-base font-medium underline decoration-1 underline-offset-4 transition hover:opacity-80 md:text-lg"
            >
              Book an Appointment
            </a>
          </div>
        </div>

        {/* Large headline at the bottom */}
        <div className="w-full">
          <h1 className="text-6xl font-bold uppercase tracking-wide sm:text-7xl md:text-8xl lg:text-9xl">
            Beauty Salon
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BeautyHero;