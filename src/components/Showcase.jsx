import React from 'react';
import Product1 from "../assets/ProductShowcase/Pic1.jpg";
import Product2 from "../assets/ProductShowcase/Pic2.jpg";
import Product3 from "../assets/ProductShowcase/Pic3.jpg";
import Product4 from "../assets/ProductShowcase/Pic4.jpg";
import Product5 from "../assets/ProductShowcase/Pic5.jpg";

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

const galleryImages = {
  abstractBars: Product1,
  skyscraper: Product2,
  hallway: Product3,
  clouds1: Product4,
  clouds2: Product5,
};

const ArtisticGallery = () => {
  const navLinks = [
    { href: '/#about', label: 'About Us' },
    { href: '/#services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/#contacts', label: 'Contacts' },
  ];

  const socialLinks = [
    { href: 'https://instagram.com/lunaria', label: 'Instagram' },
    { href: 'https://facebook.com/lunaria', label: 'Facebook' },
    { href: 'https://twitter.com/lunaria', label: 'Twitter' },
  ];

  return (
    <div className="min-h-screen bg-[#f8f8f8] font-sans flex flex-col">
      {/* Main Gallery Section */}
      <div className="flex-grow flex flex-col">
        {/* GALLERY Title Above Images */}
        <div className="text-center py-8">
          <h1 
            className="text-7xl sm:text-8xl lg:text-[12rem] font-black text-gray-900 tracking-widest"
            aria-hidden="true"
          >
            GALLERY
          </h1>
        </div>

        {/* Image Section */}
        <div className="flex flex-grow">
          {/* Left Sidebar */}
          <div className="w-12 md:w-24 bg-black flex-shrink-0"></div>
          {/* Alternative: Match PortfolioPage brown */}
          {/* <div className="w-12 md:w-24 bg-[#957C62] flex-shrink-0"></div> */}
          {/* Alternative: Remove sidebar */}
          {/* <div className="hidden"></div> */}

          {/* Central Content Area */}
          <div className="flex-grow flex justify-center items-center overflow-hidden p-4 sm:p-6">
            {/* Image Collage */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8">
              <img 
                src={galleryImages.abstractBars} 
                alt="Abstract light bars" 
                className="h-32 md:h-48 object-cover" 
              />
              <img 
                src={galleryImages.skyscraper} 
                alt="Twisted modern skyscraper" 
                className="h-52 md:h-72 object-cover" 
              />
              <img 
                src={galleryImages.hallway} 
                alt="Dark, empty hallway" 
                className="h-44 md:h-64 object-cover" 
              />
              <img 
                src={galleryImages.clouds1} 
                alt="Dramatic cloudscape" 
                className="h-36 md:h-48 object-cover" 
              />
              <img 
                src={galleryImages.clouds2} 
                alt="Dense, moody clouds" 
                className="h-48 md:h-64 object-cover" 
              />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-12 md:w-24 bg-black flex-shrink-0"></div>
          {/* Alternative: Match PortfolioPage brown */}
          {/* <div className="w-12 md:w-24 bg-[#957C62] flex-shrink-0"></div> */}
          {/* Alternative: Remove sidebar */}
          {/* <div className="hidden"></div> */}
        </div>
      </div>

      {/* Footer Section */}
     
    </div>
  );
};

export default ArtisticGallery;