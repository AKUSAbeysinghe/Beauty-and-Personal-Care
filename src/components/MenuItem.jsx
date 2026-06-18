import React from 'react';
import Chefspecialone from "../assets/Foods/ChefsSpecial1.jpg";
import Chefspecialtwo from "../assets/Foods/ChefsSpecial2.jpg";
import Chefspecialthree from "../assets/Foods/SpecialIcecream.jpg";
import Chefspecialfour from "../assets/Foods/SpecialCake.jpg";

const signatureSpecials = [
  {
    image: Chefspecialone,
    name: 'Ember-Grilled Burger',
    price: 1700,
    description:
      'Juicy beef patty with smoked cheddar, caramelized onions, and house-made ember sauce on a brioche bun.',
    chef: 'Executive Chef Marcus Rodriguez',
  },
  {
    image: Chefspecialtwo,
    name: 'Seared Scallops',
    price: 3600,
    description:
      'Succulent scallops pan-seared to perfection, served with citrus beurre blanc and microgreens.',
    chef: 'Sous Chef Isabella Chen',
  },
  {
    image: Chefspecialthree,
    name: 'Burnt Honey Pavlova',
    price: 1200,
    description:
      'Smoked vanilla meringue, roasted fig, ember caramel, and bay leaf crème for a sweet finale.',
    chef: 'Pastry Chef Sophie Laurent',
  },
  {
    image: Chefspecialfour,
    name: 'Grilled Vegetable Tartine',
    price: 1500,
    description:
      'Vibrant garden-fresh vegetables on toasted artisan bread with herbed ricotta and balsamic drizzle.',
    chef: 'Sous Chef Isabella Chen',
  },
];

const ChefSpecials = () => {
  return (
    <div className="bg-[#fcf8f3] py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800">
          Chef's Signature Specialties
        </h2>
        <p className="mt-2 text-gray-600 font-sans">
          Masterfully crafted dishes that showcase our culinary team's expertise and creativity at Maison Ember
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {signatureSpecials.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150?text=No+Image";
                  console.error(`Failed to load image: ${item.image}`);
                }}
              />
              <span className="absolute top-2 left-2 bg-[#E55D3A] text-white text-xs font-sans font-semibold px-2 py-1 rounded-full">
                Chef's Special
              </span>
              <span className="absolute top-2 right-2 bg-[#E55D3A] bg-opacity-90 text-white text-sm font-sans font-bold px-3 py-1 rounded-full">
                Rs.{item.price}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif text-gray-800">{item.name}</h3>
              <p className="mt-2 text-gray-600 text-sm font-sans">{item.description}</p>
              <p className="mt-4 text-xs text-gray-600 font-sans">{item.chef}</p>
              {/* <a
                href={`https://wa.me/+1234567890?text=I%27d%20like%20to%20order%20${encodeURIComponent(item.name)}%20at%20Maison%20Ember`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full py-3 bg-[#E55D3A] text-white font-medium rounded-md shadow-md hover:bg-[#c94b2f] transition-colors font-sans"
              >
                Order Now
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefSpecials;