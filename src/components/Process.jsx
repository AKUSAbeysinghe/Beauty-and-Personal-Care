// import React from 'react';

// const FoodPassionSection = () => {
//   return (
//     <div className="bg-gray-50 py-20 px-4">
//       <div className="max-w-4xl mx-auto text-center">
//         {/* Title */}
//         <h2 className="font-serif text-5xl font-normal text-gray-800 mb-6 italic">
//           Food made with love & passion
//         </h2>
        
//         {/* Description */}
//         <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
//           Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, lorem precipitur sortus ipsum dolor sit amet per inceptos.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default FoodPassionSection;







import React from 'react';

const FoodOrderSection = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white min-h-screen">
      {/* Left Section - Text Content */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
        <h2 className="text-orange-500 text-lg font-semibold mb-4 uppercase">
          You Order
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-6">
          Visit our website or use our app to order. Choose from main dishes, sides,
          salads, desserts and drinks. Healthy and tempting kids' meals, too. There's
          always something new to try. Lorem ipsum.
        </p>
        <p className="text-gray-600 text-sm">
          <span className="font-bold">Step: </span>1 of 3
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2">
        <img
          src="https://via.placeholder.com/800x600" {/* Replace with your actual image URL */}
          alt="Delicious food presentation"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default FoodOrderSection;






// import React from 'react';

// const FoodSection = () => {
//   return (
//     <div className="flex flex-col md:flex-row bg-white min-h-screen">
//       {/* Left Section - Image */}
//       <div className="w-full md:w-1/2 overflow-hidden">
//         <img
//           src="http://googleusercontent.com/file_content/0"
//           alt="Plates of food with fried eggs and other ingredients"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Right Section - Text Content */}
//       <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
//         <h2 className="text-orange-500 text-lg font-semibold mb-4 uppercase">
//           We Cook It
//         </h2>
//         <p className="text-gray-700 text-base leading-relaxed mb-6">
//           Our chefs create dishes they love. They slice and dice, chop and mix,
//           sauté and roast in our local kitchens, cooking up thoughtful, tempting
//           dishes. Each chef has their own style, with tons of variety. Lorem ipsum.
//         </p>
//         <p className="text-gray-600 text-sm">
//           <span className="font-bold">Step: </span>2 of 3
//         </p>
//       </div>
//     </div>
//   );
// };

// export default FoodSection;



// import React from 'react';

// const FoodDeliverySection = () => {
//   return (
//     <div className="flex flex-col md:flex-row bg-white min-h-screen">
//       {/* Left Section - Text Content */}
//       <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
//         <h2 className="text-orange-500 text-lg font-semibold mb-4 uppercase">
//           Food You Delivered
//         </h2>
//         <p className="text-gray-700 text-base leading-relaxed mb-6">
//           Dishes are fully cooked, chilled for maximum vestibulum at nulla iusto,
//           eget luctus freshness, and served in oven and microwave-safe containers for
//           easy heating in less than ten minutes. Lorem ipsum.
//         </p>
//         <p className="text-gray-600 text-sm">
//           <span className="font-bold">Step: </span>3 of 3
//         </p>
//       </div>

//       {/* Right Section - Image */}
//       <div className="w-full md:w-1/2 overflow-hidden">
//         <img
//           src="http://googleusercontent.com/file_content/0"
//           alt="Person eating a salad with flatbread"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default FoodDeliverySection;



// import React from 'react';

// const CardSection = () => {
//   const cards = [
//     {
//       title: 'Our Values',
//       heading: 'Naturally Delicious',
//       description:
//         'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin vel ante a orci tempus eleifend ut. Duis aliquet egestas purus in.',
//     },
//     {
//       title: 'Our Vision',
//       heading: 'Eating Healthy Is Easy',
//       description:
//         'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin vel ante a orci tempus eleifend ut. Duis aliquet egestas purus in.',
//     },
//     {
//       title: 'Gourmet Food',
//       heading: 'Simple, Tasty Recipes',
//       description:
//         'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin vel ante a orci tempus eleifend ut. Duis aliquet egestas purus in.',
//     },
//   ];

//   return (
//     <div className="bg-gray-100 py-16 px-4 md:px-16">
//       <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
//         {cards.map((card, index) => (
//           <div key={index} className="w-full md:w-1/3 p-4 flex flex-col items-start">
//             <h3 className="text-gray-500 text-sm font-medium uppercase mb-1">
//               {card.title}
//             </h3>
//             <div className="w-12 h-0.5 bg-orange-400 mb-4"></div>
//             <h4 className="text-orange-500 text-2xl font-semibold mb-4">
//               {card.heading}
//             </h4>
//             <p className="text-gray-700 text-base leading-relaxed mb-6">
//               {card.description}
//             </p>
//             <button className="bg-gray-800 text-white font-medium py-3 px-6 mt-auto">
//               VIEW MORE
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardSection;

