import React from 'react';
import BodyTreatment from "../assets/Menu/BodyThreatment.jpg";
import HairTreatment from "../assets/Menu/Hair.jpg";
import SkinCare from "../assets/Menu/SkinCare.jpg";

// Data for the service cards.
// Replace image URLs with the paths to your actual images.
const services = [
  {
    name: 'SKIN CARE',
    count: '24 services',
    imageUrl: SkinCare, // Example path
    href: '#skin-care',
  },
  {
    name: 'BODY RITUALS',
    count: '18 services',
    imageUrl: BodyTreatment, // Example path
    href: '#body-rituals',
  },
  {
    name: 'HAIR TREATMENTS',
    count: '12 services',
    imageUrl: HairTreatment, // Example path
    href: '#hair-treatments',
  },
];

// A simple X icon component
const IconX = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);


const ServicesSection = () => {
  return (
    <section className="bg-gray-50 font-sans">
      <div className="mx-auto max-w-7xl py-16 px-4 text-center sm:py-24 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-3xl font-extrabold uppercase tracking-widest text-black sm:text-4xl">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="mx-auto mt-12 grid max-w-lg gap-8 md:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <a
              key={service.name}
              href={service.href}
              className="group relative block overflow-hidden"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={service.imageUrl}
                  alt={`Image for ${service.name}`}
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-end justify-between p-6 text-white">
                <div>
                  <h3 className="text-lg font-bold uppercase">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-200">{service.count}</p>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/50 bg-white/20 transition-transform group-hover:rotate-90">
                    <IconX className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Link */}
        <a
          href="#all-services"
          className="mt-16 inline-block text-base font-medium text-black underline underline-offset-4 transition-colors hover:text-gray-600"
        >
          View All
        </a>
      </div>
    </section>
  );
};

export default ServicesSection;