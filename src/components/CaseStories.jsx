
import React from 'react';
import Soup from "../assets/Foods/Salad.jpg";
import MenuP from "../assets/Foods/Menu.jpg";
import MenuLeft from "../assets/Foods/MenuLeft.jpg";
import Veg from "../assets/Foods/VegSalad.jpg";
import Dish from "../assets/Foods/Dish.jpg";
import Chicken from "../assets/Foods/Chicken.jpg";
import Foody from "../assets/Foods/Fish.jpg";
import CDish from "../assets/Foods/CDish.jpg";



const CaseStudies = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">
            CASE STORIES
          </h2>
          <p className="text-3xl font-bold text-gray-900 sm:text-4xl">for restaurant Montis</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src={MenuP}
              alt="Restaurant Menu"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white">
              <h3 className="text-4xl font-bold mb-2">EXCLUSIVE</h3>
              <h2 className="text-6xl font-bold">MENU</h2>
              <p className="text-lg">FOODIEHUB</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={MenuLeft}
                alt="Montis Interior"
                className="w-full h-full object-cover"
              />
              {/* Optional: Add overlay if needed */}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src={Soup}
                  alt="Meat Dishes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
                  <h3 className="text-lg font-semibold">VEG</h3>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src={Foody}
                  alt="Seafood Dishes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
                  <h3 className="text-lg font-semibold">SEA</h3>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src={Chicken}
                  alt="Vegan Dishes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
                  <h3 className="text-lg font-semibold">MEAT</h3>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg flex items-center justify-center shadow-md">
                <p className="text-center text-gray-600 italic text-sm">
                 Relish tender, juicy cuts grilled to perfection, infused with bold, smoky flavors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4"> RUSTIC MEAT MEDLEY</h3>
            <p className="text-gray-600 mb-4">
            Enjoy succulent meats paired with rich seasonings for a soul-warming experience.
            </p>
            <div className="relative rounded-lg overflow-hidden shadow-sm mb-4">
              <img
                src={CDish}
                alt="Sea Food Dish"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-600 text-sm mb-2">
            Relish tender, juicy cuts grilled to perfection, infused with bold, smoky flavors.
            </p>
            <div className="flex justify-end text-sm text-gray-700">
              <span>Foodie Hub</span> | <span>Foodie</span>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Green Gourmet Delight</h3>
            <p className="text-gray-600 mb-4">Indulge in plant-based creations, where every bite celebrates nature’s finest ingredients.</p>
            <div className="relative rounded-lg overflow-hidden shadow-sm mb-4">
              <div className="grid grid-cols-2 gap-2">
                <img
                  src={Dish}
                  alt="Meat Dish 1"
                  className="w-full h-full object-cover"
                />
                <img
                  src= {Veg}
                  alt="Meat Dish 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-2">
                Freshly Picked Bliss<br />
                Savor vibrant, garden-fresh vegetables crafted into dishes that burst with flavor and color.
            </p>
            <div className="flex justify-end text-sm text-gray-700">
              <span>FoodieHub</span> | <span>Foodie</span>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="text-center py-6 text-gray-500 text-sm">
        <p>@foodie</p>
      </div>
    </div>
  );
};

export default CaseStudies;