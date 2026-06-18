import React from 'react';
import About1 from "../assets/Backgrounds/About1.jpg";
import About2 from "../assets/Backgrounds/About2.jpg";
import About3 from "../assets/Backgrounds/About3.jpg";

const OurStorySection = () => {
  return (
    <div className="bg-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
        
        {/* Image Grid Section */}
        <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">
          {/* Top Left Image - Span 2 columns */}
          <div className="col-span-2">
            <img 
              src={About1}
              alt="Plates of food being served" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Bottom Left Image - 1 column */}
          <div className="col-span-1">
            <img 
              src={About2}
              alt="Grilled meat on a plate" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Bottom Right Image - 1 column */}
          <div className="col-span-1">
            <img 
              src= {About3}
              alt="A table with a burger and fries" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-yellow-500 mb-4">Our Story</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Tucked away in the heart of the old town, the cafe offered a cozy retreat with its
            warm ambiance, expertly crafted coffee, and tempting pastries. It was a place
            where people came to relax, connect, and savor the simple joys of life.
          </p>
          <a 
            href="#" 
            className="text-white font-semibold hover:text-yellow-500 transition-colors duration-300"
          >
            More About us. . . .
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurStorySection;
