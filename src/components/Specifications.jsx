import React from 'react';

const benefits = [
  {
    icon: '🍽️', // Placeholder, use an SVG or proper icon library in a real app
    title: 'Expert Chefs',
    description:
      'Our team of professional chefs brings years of culinary expertise and passion to every dish.',
  },
  {
    icon: '🌿', // Placeholder
    title: 'Fresh Ingredients',
    description:
      'We source only the finest, freshest ingredients from local farms and trusted suppliers.',
  },
  {
    icon: '⚡', // Placeholder
    title: 'Quick Service',
    description:
      'Efficient service without compromising quality. Your satisfaction is our priority.',
  },
];

const WhyChoose = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-cormorant tracking-wide">Why Choose FoodieHub?</h2>
        <p className="mt-2 text-gray-600 text-xl font-poppins leading-relaxed">
          We make food ordering easy, fast, and enjoyable with our premium features
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center p-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 text-3xl">
                {/* Replace with a proper SVG icon */}
                {benefit.icon === '🍽️' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.586a2 2 0 010 2.828L11.828 15H9v-2.828l8.586-8.586a2 2 0 012.828 0z" />
                  </svg>
                )}
                {benefit.icon === '🌿' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {benefit.icon === '⚡' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-gray-800 font-cormorant tracking-wide">{benefit.title}</h3>
              <p className="mt-2 text-gray-600 text-lg font-poppins leading-relaxed text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;