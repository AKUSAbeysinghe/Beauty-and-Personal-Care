// import React from 'react';
// import Chefone from "../assets/Chefs/Chef6.jpg";
// import Cheftwo from "../assets/Chefs/Chef5.jpg";
// import Cheffour from "../assets/Chefs/Chef8.jpg";

// const chefs = [
//   {
//     name: 'Marcus Rodriguez',
//     experience: '15 years Experience',
//     image: Cheftwo,
//     role: 'Executive Chef',
//     specialty: 'Modern American Cuisine',
//     bio: 'Award-winning chef at Maison Ember, specializing in contemporary American dishes with global influences. James Beard nominee.',
//     achievements: [
//       'James Beard Nominee',
//       'Culinary Institute Graduate',
//       'Michelin Star Experience',
//     ],
//   },
//   {
//     name: 'Isabella Chen',
//     experience: '12 years Experience',
//     image: Chefone,
//     role: 'Sous Chef',
//     specialty: 'Asian Fusion',
//     bio: 'Master of Asian fusion cuisine at Maison Ember, creating innovative dishes that blend traditional techniques with modern presentation.',
//     achievements: [
//       'Culinary Arts Degree',
//       'Asian Cuisine Specialist',
//       'Innovation Award Winner',
//     ],
//   },
//   {
//     name: 'Sophie Laurent',
//     experience: '10 years Experience',
//     image: Cheffour,
//     role: 'Pastry Chef',
//     specialty: 'French Pastries & Desserts',
//     bio: 'French pastry expert trained in Paris, creating exquisite desserts and artisanal baked goods for Maison Ember with classical techniques.',
//     achievements: [
//       'Le Cordon Bleu Graduate',
//       'French Pastry Certified',
//       'Dessert Competition Winner',
//     ],
//   },
// ];

// const CulinaryTeam = () => {
//   return (
//     <div className="bg-[#fcf8f3] py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-4xl md:text-5xl font-serif text-gray-800 tracking-wide">
//           Meet Our Culinary Team
//         </h2>
//         <p className="mt-2 text-gray-600 text-lg font-sans leading-relaxed">
//           Passionate chefs dedicated to creating exceptional dining experiences at Maison Ember with expertise from around the world
//         </p>
//         <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
//           {chefs.map((chef, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
//               <div className="relative p-6">
//                 <img
//                   src={chef.image}
//                   alt={chef.name}
//                   className="w-full h-80 object-cover rounded-md"
//                   onError={(e) => {
//                     e.target.src = "https://via.placeholder.com/150?text=No+Image";
//                     console.error(`Failed to load image: ${chef.image}`);
//                   }}
//                 />
//                 <div className="absolute bottom-4 left-4 bg-[#E55D3A] text-white text-sm font-sans font-semibold px-3 py-1 rounded-full">
//                   {chef.experience}
//                 </div>
//               </div>
//               <div className="p-6">
//                 <h3 className="text-2xl font-serif text-gray-800 tracking-wide mb-2">{chef.name}</h3>
//                 <h4 className="text-xl font-serif text-[#E55D3A] tracking-wide mb-1">{chef.role}</h4>
//                 <p className="text-base font-semibold text-gray-800 font-sans mb-2">
//                   Specialty: {chef.specialty}
//                 </p>
//                 <p className="text-gray-600 text-lg font-sans leading-relaxed mb-4">{chef.bio}</p>
//                 <div className="mb-4">
//                   <h5 className="text-base font-semibold text-gray-800 font-sans mb-2">Achievements:</h5>
//                   <div className="flex flex-wrap gap-2">
//                     {chef.achievements.map((achievement, achievementIndex) => (
//                       <span
//                         key={achievementIndex}
//                         className="bg-[#E55D3A] bg-opacity-10 text-[#E55D3A] text-sm font-sans font-medium px-2.5 py-0.5 rounded-full"
//                       >
//                         {achievement}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="flex items-center pt-4 border-t border-gray-200">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-[#E55D3A] mr-2 flex-shrink-0"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
//                   </svg>
//                   <span className="font-semibold text-gray-800 text-base font-sans">Signature Dish</span>
//                 </div>
//                 <a
//                   href={`https://wa.me/+1234567890?text=Hi%20${encodeURIComponent(chef.name)},%20I%20love%20your%20work%20at%20Maison%20Ember!`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mt-4 inline-block px-6 py-2 bg-[#E55D3A] text-white font-medium rounded-md shadow-md hover:bg-[#c94b2f] transition-colors font-sans"
//                 >
//                   Contact Chef
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CulinaryTeam;



import React, { useState, useEffect } from "react";

const CulinaryTeam = () => {
  const [chefs, setChefs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchChefs = async () => {
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost/food_and_restaurant/get_chefs.php", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error(`Network response was not ok: ${res.status}`);
      const data = await res.json();
      if (Array.isArray(data)) {
        // Parse achievements from string to array if stored as comma-separated
        const parsedData = data.map((chef) => ({
          ...chef,
          achievements: chef.achievements ? chef.achievements.split(",").map((item) => item.trim()) : [],
          bio: chef.bio.includes("Maison Ember") ? chef.bio : `${chef.bio} at Maison Ember`, // Ensure bio references Maison Ember
        }));
        setChefs(parsedData);
      } else {
        setError("⚠️ Could not fetch chefs: Invalid response format");
        setChefs([]);
      }
    } catch (e) {
      setError("⚠️ Could not fetch chefs: " + e.message);
      setChefs([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchChefs();
  }, []);

  return (
    <div className="bg-[#fcf8f3] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 tracking-wide">
          Meet Our Culinary Team
        </h2>
        <p className="mt-2 text-gray-600 text-lg font-sans leading-relaxed">
          Passionate chefs dedicated to creating exceptional dining experiences at Maison Ember with expertise from around the world
        </p>
        {error && (
          <div className="mt-6 p-4 rounded-lg bg-[#E55D3A] bg-opacity-10 text-[#E55D3A] border-2 border-[#E55D3A] font-medium font-sans">
            {error}
          </div>
        )}
        {isLoading && (
          <div className="mt-6 text-gray-600 font-sans">
            Loading chefs...
          </div>
        )}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {chefs.length === 0 && !isLoading ? (
            <p className="text-center text-gray-600 font-sans col-span-full">
              No chefs available
            </p>
          ) : (
            chefs.map((chef) => (
              <div key={chef.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="relative p-6">
                  <img
                    src={chef.image_url || "https://via.placeholder.com/150?text=No+Image"}
                    alt={chef.name}
                    className="w-full h-80 object-cover rounded-md"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/150?text=No+Image";
                      console.error(`Failed to load image: ${chef.image_url}`);
                    }}
                  />
                  <div className="absolute bottom-4 left-4 bg-[#E55D3A] text-white text-sm font-sans font-semibold px-3 py-1 rounded-full">
                    {chef.experience}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-gray-800 tracking-wide mb-2">{chef.name}</h3>
                  <h4 className="text-xl font-serif text-[#E55D3A] tracking-wide mb-1">{chef.role}</h4>
                  <p className="text-base font-semibold text-gray-800 font-sans mb-2">
                    Specialty: {chef.specialty}
                  </p>
                  <p className="text-gray-600 text-lg font-sans leading-relaxed mb-4">{chef.bio}</p>
                  <div className="mb-4">
                    <h5 className="text-base font-semibold text-gray-800 font-sans mb-2">Achievements:</h5>
                    <div className="flex flex-wrap gap-2">
                      {chef.achievements.map((achievement, achievementIndex) => (
                        <span
                          key={achievementIndex}
                          className="bg-[#E55D3A] bg-opacity-10 text-[#E55D3A] text-sm font-sans font-medium px-2.5 py-0.5 rounded-full"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center pt-4 border-t border-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#E55D3A] mr-2 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold text-gray-800 text-base font-sans">Signature Dish</span>
                  </div>
                  <a
                    href={`https://wa.me/+1234567890?text=Hi%20${encodeURIComponent(chef.name)},%20I%20love%20your%20work%20at%20Maison%20Ember!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-6 py-2 bg-[#E55D3A] text-white font-medium rounded-md shadow-md hover:bg-[#c94b2f] transition-colors font-sans"
                  >
                    Contact Chef
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CulinaryTeam;