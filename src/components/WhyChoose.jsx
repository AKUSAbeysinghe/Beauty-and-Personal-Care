import React from 'react';

const featuresData = [
  {
    id: 1,
    title: 'Menu for every taste',
    description: 'Dolor sit amet, consectetur adipiscing elit et molestias possimus',
    icon: (
      <svg className="w-16 h-16 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Always fresh ingredients',
    description: 'Assumenda possimus eaque illa iste, autem. Porro eveniet autem',
    icon: (
      <svg className="w-16 h-16 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4.354a4 4 0 110 5.292M15 15h3a2 2 0 002-2V8a2 2 0 00-2-2h-3m-6 6V8a2 2 0 012-2h2a2 2 0 012 2v4m-2 4h-2a2 2 0 01-2-2v-4m-2 4h-2a2 2 0 01-2-2V8a2 2 0 012-2h2m4 4h2a2 2 0 002-2V8a2 2 0 00-2-2h-2m-2 4h2a2 2 0 002-2V8a2 2 0 00-2-2h-2" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Experienced chefs',
    description: 'Rolorem, beatae dolorum, praesentium itaque et quam quaerat',
    icon: (
      <svg className="w-16 h-16 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4.354a4 4 0 110 5.292M15 15h3a2 2 0 002-2V8a2 2 0 00-2-2h-3m-6 6V8a2 2 0 012-2h2a2 2 0 012 2v4m-2 4h-2a2 2 0 01-2-2v-4m-2 4h-2a2 2 0 01-2-2V8a2 2 0 012-2h2m4 4h2a2 2 0 002-2V8a2 2 0 00-2-2h-2m-2 4h2a2 2 0 002-2V8a2 2 0 00-2-2h-2" />
      </svg>
    ),
  },
];

const Features = () => {
  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-sm uppercase text-gray-600 font-medium mb-2">Features</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Why people choose us?</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Porro eveniet, autem vitae consequatut
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuresData.map((feature) => (
            <div key={feature.id} className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;