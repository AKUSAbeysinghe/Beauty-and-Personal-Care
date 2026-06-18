import React from "react";

const ProductShowcase = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-semibold text-center mb-12">Our Bikes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="border rounded-xl p-6 hover:shadow-lg transition duration-300"
          >
            <div className="h-60 bg-gray-200 mb-4 rounded-lg"></div>
            <h3 className="text-xl font-medium">Cowboy {item}</h3>
            <p className="text-gray-600 mt-2">A sleek, powerful e-bike built for the city.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
