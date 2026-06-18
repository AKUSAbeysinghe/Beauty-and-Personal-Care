import React from 'react';

// Component for a single menu item/course
const CourseItem = ({ category, title, description, pairing, price, isLast }) => {
  return (
    <div className={`relative pl-10 sm:pl-16 ${isLast ? 'pb-0' : 'pb-12'}`}>
      {/* Timeline Circle */}
      <div className="absolute top-0 left-0 h-6 w-6 border-2 border-[#E55D3A] rounded-full bg-[#fcf8f3]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#E55D3A] rounded-full"></div>
      </div>

      {/* Course Content */}
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 ml-4 hover:shadow-md transition-shadow duration-300">
        {/* Category/Subtitle */}
        <p className="text-sm font-medium tracking-widest uppercase text-[#E55D3A] mb-2">
          {category}
        </p>
        
        {/* Title */}
        <h3 className="text-2xl font-serif text-gray-800 mb-3 leading-snug">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-base text-gray-600 font-light mb-4">
          {description}
        </p>

        {/* Pairing & Price */}
        <div className="flex justify-between items-center">
          <p className="text-base text-gray-600 font-medium">
            <span className="font-bold">Pairing:</span> {pairing}
          </p>
          <p className="text-xl font-bold text-[#E55D3A] font-serif">
            ₹{price}
          </p>
        </div>
      </div>

      {/* Vertical line connecting the timeline circles */}
      {!isLast && (
        <div className="absolute top-6 left-[11px] h-full w-[2px] bg-gray-200"></div>
      )}
    </div>
  );
};

const FinalCoursesSection = () => {
  const finalCourses = [
    {
      category: "Hearth",
      title: "Charcoal-Seared Venison",
      description: "Cocoa nib jus, embered beet lacquer, spruce tip oil, and caramelized shallot confit.",
      pairing: "Syrah, Columbia Valley",
      price: 1850,
    },
    {
      category: "Earth",
      title: "Truffle-Dusted Foie Gras",
      description: "Seared Hudson Valley foie gras, black truffle shavings, brioche toast, and aged balsamic reduction.",
      pairing: "Sauternes, Château d'Yquem",
      price: 2200,
    },
    {
      category: "Sea",
      title: "Lobster Thermidor",
      description: "Poached Maine lobster in a creamy cognac-mustard sauce, gratinéed with Parmesan and breadcrumbs.",
      pairing: "Chardonnay, Burgundy",
      price: 1950,
    },
    {
      category: "Flame",
      title: "Wagyu Beef Wellington",
      description: "Australian Wagyu tenderloin wrapped in mushroom duxelles and prosciutto, baked in puff pastry.",
      pairing: "Cabernet Sauvignon, Napa Valley",
      price: 2850,
    },
    {
      category: "Garden",
      title: "Heirloom Beet Symphony",
      description: "Roasted golden and candy-striped beets, goat cheese mousse, candied pecans, and balsamic pearls.",
      pairing: "Pinot Noir, Oregon",
      price: 1450,
    },
    {
      category: "Finale",
      title: "Burnt Honey Pavlova",
      description: "Smoked vanilla meringue, roasted fig, ember caramel, and bay leaf crème fraîche.",
      pairing: "Tokaji, 2016 Aszú",
      price: 950,
    },
  ];

  return (
    <section className="bg-[#fcf8f3] py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-800 mb-4">
            Signature Finale Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Our chef's most celebrated creations, designed to leave a lasting impression. 
            Each dish is a masterpiece of flavor and presentation.
          </p>
        </div>

        {/* Menu Timeline/List */}
        <div className="relative">
          {finalCourses.map((item, index) => (
            <CourseItem 
              key={index}
              category={item.category}
              title={item.title}
              description={item.description}
              pairing={item.pairing}
              price={item.price}
              isLast={index === finalCourses.length - 1}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-[#E55D3A] text-white font-semibold text-lg rounded-full hover:bg-[#d44d32] transition duration-300 shadow-lg">
            Reserve This Experience
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCoursesSection;