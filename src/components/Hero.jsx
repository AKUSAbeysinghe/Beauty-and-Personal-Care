import React from 'react';
import HeroImage from "../assets/Main/Hero_.jpg";

/**
 * A full-screen hero section for a beauty salon website.
 *
 * To use this component:
 * 1. Make sure you have React and Tailwind CSS set up in your project.
 * 2. Place the background image (e.g., 'salon-hero-bg.jpg') in your `public` folder.
 * 3. Update the `backgroundImage` URL in the style attribute below if your image
 * is located elsewhere.
 */
const BeautyHero = () => {
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
            <a
              href="#appointment"
              className="mt-2 inline-block text-base font-medium underline decoration-1 underline-offset-4 transition hover:opacity-80 md:text-lg"
            >
              Book an Appointment
            </a>
          </div>
        </div>

        {/* Large headline at the bottom */}
        <div className="w-full">
          <h1 className="text-6xl font-bold uppercase tracking-wide sm:text-7xl md:text-8xl lg:text-9xl">
            Beaxuty Salon
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BeautyHero;