import React from 'react';
import Endimge from "../assets/Foods/End.jpg";

const CallToAction = () => {
  return (
    <div
      className="relative w-full py-24 bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${Endimge})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">Ready to Order?</h2>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Get your first order with free delivery.
          Experience the best food delivery service in town!
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition duration-300">
            Explore Foods
          </button>
          <button className="px-8 py-4 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition duration-300">
            Order Online
          </button>
        </div>
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm md:text-base">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Explore Foods Throught the web</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Free delivery on first order</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>30 min or less</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
