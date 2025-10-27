import React from 'react';

// --- Icon Components (re-used from ServicesPage) ---
const IconStar = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
  </svg>
);

const IconX = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const IconClock = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);


const ServiceDetailPopup = ({ isOpen, onClose, treatment }) => {
  if (!isOpen || !treatment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70" onClick={onClose}></div>

      {/* Popup Content */}
      <div className="relative z-10 w-full max-w-xl overflow-hidden rounded-lg bg-white shadow-xl md:max-w-2xl lg:max-w-md"
        // Applying the background image to the main popup container
        style={{ backgroundImage: `url(${treatment.popupImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
        >
          <span className="sr-only">Close</span>
          <IconX className="h-6 w-6" />
        </button>

        {/* Content Area - Overlayed for readability */}
        <div className="relative bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 pt-24 text-white md:p-8 md:pt-32">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <IconStar key={i} className="h-5 w-5 text-yellow-400" />
            ))}
            <span className="ml-2 text-sm font-semibold">{treatment.rating}</span>
          </div>

          <h2 className="mt-4 text-3xl font-bold uppercase md:text-4xl">{treatment.title}</h2>
          
          <div className="mt-4 flex items-center gap-4 text-lg font-semibold">
            <span>{treatment.price}</span>
            <div className="flex items-center gap-1 text-gray-200">
              <IconClock className="h-5 w-5" />
              <span>{treatment.duration}</span>
            </div>
          </div>

          <p className="mt-4 text-base text-gray-300">{treatment.description}</p>

          {treatment.idealFor && (
            <div className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-200">IDEAL FOR:</h3>
              <ul className="mt-2 list-inside list-disc space-y-1 text-base text-gray-300">
                {treatment.idealFor.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {treatment.whatsInvolved && (
            <div className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-200">WHAT'S INVOLVED:</h3>
              <ul className="mt-2 space-y-3">
                {treatment.whatsInvolved.map((item, i) => (
                  <li key={i}>
                    <span className="font-semibold text-white">&bull; {item.step}</span>
                    <span className="block text-sm text-gray-300">{item.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 flex gap-4">
            <button className="flex-1 rounded-md bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800">
              Book Now
            </button>
            <button className="flex-1 rounded-md border border-gray-400 px-4 py-2 text-white transition-colors hover:bg-gray-700">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPopup;