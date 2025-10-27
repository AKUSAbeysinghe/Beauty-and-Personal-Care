

// import React, { useEffect, useState } from 'react';
// import { FaCheck, FaCut } from 'react-icons/fa';
// import {
//   ScissorsIcon,
//   SparklesIcon,
//   SunIcon,
//   HandThumbUpIcon,
//   CubeTransparentIcon,
//   EyeIcon,
//   PaintBrushIcon,
// } from '@heroicons/react/24/outline';
// import GroomingBaber from "../assets/Mains/Grooming&Baber.jpg";

// // Footer Icons
// const IconMail = ({ className }) => (
//   <svg
//     className={className}
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//     />
//   </svg>
// );

// const IconPhone = ({ className }) => (
//   <svg
//     className={className}
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
//     />
//   </svg>
// );

// // Static Additional Services (retained as fallback)
// const servicesData = [
//   { name: 'Eyelash Extensions', price: '65+', Icon: EyeIcon },
//   { name: 'Makeup Services', price: '75+', Icon: PaintBrushIcon },
//   { name: 'Manicure & Pedicure', price: '45+', Icon: HandThumbUpIcon },
//   { name: 'Body Wraps', price: '110+', Icon: CubeTransparentIcon },
//   { name: 'Waxing Services', price: '25+', Icon: SparklesIcon },
//   { name: 'Spray Tanning', price: '55+', Icon: SunIcon },
// ];

// // Fallback services for Barbershops & Grooming
// const fallbackServices = [
//   {
//     id: 1,
//     category_id: 3,
//     category_name: 'Barber & Grooming',
//     sub_category_id: 9,
//     sub_category_name: 'Barbershops',
//     name: 'Classic Haircut',
//     price: 1000,
//     description: 'Traditional barbershop haircut with precision styling',
//     image_url: 'https://via.placeholder.com/150?text=Classic+Haircut',
//     type: 'standard',
//   },
//   {
//     id: 2,
//     category_id: 3,
//     category_name: 'Barber & Grooming',
//     sub_category_id: 10,
//     sub_category_name: 'Grooming Services',
//     name: 'Hot Towel Shave',
//     price: 800,
//     description: 'Luxurious hot towel shave for a smooth finish',
//     image_url: 'https://via.placeholder.com/150?text=Hot+Towel+Shave',
//     type: 'standard',
//   },
//   {
//     id: 3,
//     category_id: 3,
//     category_name: 'Barber & Grooming',
//     sub_category_id: 11,
//     sub_category_name: 'Haircuts & Styling',
//     name: 'Fade Haircut',
//     price: 1200,
//     description: 'Modern fade haircut tailored to your style',
//     image_url: 'https://via.placeholder.com/150?text=Fade+Haircut',
//     type: 'standard',
//   },
//   {
//     id: 4,
//     category_id: 3,
//     category_name: 'Barber & Grooming',
//     sub_category_id: 12,
//     sub_category_name: 'Beard Grooming',
//     name: 'Beard Trim',
//     price: 600,
//     description: 'Professional beard trimming and shaping',
//     image_url: 'https://via.placeholder.com/150?text=Beard+Trim',
//     type: 'standard',
//   },
// ];

// const GroomingPage = () => {
//   const [services, setServices] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);

//   // Fetch services from backend
//   const fetchServices = async () => {
//     setLoading(true);
//     setError(''); // Reset error state
//     try {
//       console.log('Fetching services from http://localhost/skincare_db/get_services.php');
//       const res = await fetch('http://localhost/skincare_db/get_services.php', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       if (!res.ok) {
//         throw new Error(`HTTP error! Status: ${res.status}`);
//       }
//       const data = await res.json();
//       console.log('Backend response:', data);

//       if (data.success && Array.isArray(data.data)) {
//         // Filter services for "Barber & Grooming" (category_id: 3) and type: standard
//         const groomingServices = data.data.filter(
//           (s) => s.category_id === '3' && s.type === 'standard'
//         );
//         console.log('Filtered grooming services:', groomingServices);
//         if (groomingServices.length === 0) {
//           setError('⚠️ No Barbershops & Grooming services found in the database. Using fallback services.');
//           setServices(fallbackServices);
//         } else {
//           setServices(groomingServices);
//         }
//       } else {
//         throw new Error(data.message || 'Invalid response format');
//       }
//     } catch (e) {
//       console.error('Fetch error:', e.message);
//       setError(`⚠️ Could not fetch services: ${e.message}. Using fallback services.`);
//       setServices(fallbackServices);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   // Categorize services by sub_category_id
//   const barbershopServices = services
//     .filter((s) => s.sub_category_id === '9')
//     .map((s) => s.name);
//   const groomingServices = services
//     .filter((s) => s.sub_category_id === '10')
//     .map((s) => s.name);
//   const haircutServices = services
//     .filter((s) => s.sub_category_id === '11')
//     .map((s) => s.name);
//   const beardServices = services
//     .filter((s) => s.sub_category_id === '12')
//     .map((s) => s.name);

//   // Navigation and social links
//   const navLinks = [
//     { href: '#about', label: 'About Us' },
//     { href: '#services', label: 'Services' },
//     { href: '#blog', label: 'Blog' },
//     { href: '#contacts', label: 'Contacts' },
//   ];

//   const socialLinks = [
//     { href: 'https://instagram.com/lunaria', label: 'Instagram' },
//     { href: 'https://facebook.com/lunaria', label: 'Facebook' },
//     { href: 'https://twitter.com/lunaria', label: 'Twitter' },
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <div
//         className="relative flex items-center justify-center h-screen bg-cover bg-center"
//         style={{ backgroundImage: `url(${GroomingBaber})` }}
//       >
//         <div className="absolute inset-0 bg-black внедка bg-opacity-50" />
//         <div className="relative z-10 flex flex-col items-center text-center text-white p-6 max-w-4xl mx-auto">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             Barbershops & Grooming
//           </h1>
//           <p className="text-lg md:text-xl mb-8">
//             Expert grooming services for the modern gentleman with style and precision
//           </p>
//           <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-10 rounded-lg text-lg transition-colors duration-300 shadow-lg">
//             Book Your Appointment
//           </button>
//         </div>
//       </div>

//       {/* Error Message */}
//       {error && (
//         <div className="mb-6 p-4 rounded-lg bg-red-200 text-red-800 border-2 border-red-400 font-medium text-center max-w-7xl mx-auto mt-4">
//           {error}
//         </div>
//       )}

//       {/* Barbershops Section */}
//       <section className="bg-white py-16 sm:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
//               Our Barbershop Services
//             </h2>
//             <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//               Experience traditional and modern barbering techniques for a sharp, polished look
//             </p>
//           </div>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//             <div>
//               <img
//                 src="/images/grooming/barbershop-image.jpg"
//                 alt="Interior of a modern barbershop"
//                 className="rounded-2xl shadow-xl w-full h-auto object-cover"
//               />
//             </div>
//             <div className="flex flex-col">
//               <div className="flex items-center gap-4 mb-4">
//                 <span className="flex-shrink-0 bg-pink-500 text-white p-4 rounded-full">
//                   <FaCut className="h-6 w-6" />
//                 </span>
//                 <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
//                   Barbershops
//                 </h3>
//               </div>
//               <p className="text-gray-600 mb-6">
//                 Professional barbering services focusing on precision cuts and classic styles.
//               </p>
//               {loading ? (
//                 <p className="text-gray-600">Loading services...</p>
//               ) : (
//                 <ul className="space-y-3 mb-8">
//                   {barbershopServices.length > 0 ? (
//                     barbershopServices.map((service, index) => (
//                       <li key={index} className="flex items-center">
//                         <FaCheck className="text-pink-500 h-5 w-5 mr-3" />
//                         <span className="text-gray-700">{service}</span>
//                       </li>
//                     ))
//                   ) : (
//                     <li className="text-gray-600">No Barbershop services available</li>
//                   )}
//                 </ul>
//               )}
//               <div className="mt-auto flex items-center justify-between">
//                 <p className="text-2xl font-bold text-gray-800">
//                   From{' '}
//                   <span className="text-pink-600">
//                     Rs.
//                     {barbershopServices.length > 0
//                       ? Math.min(
//                           ...services
//                             .filter((s) => s.sub_category_id === '9')
//                             .map((s) => Number(s.price))
//                         ).toFixed(2)
//                       : '1000'}
//                   </span>
//                 </p>
//                 <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md">
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Grooming Services Section */}
//       <section className="bg-gray-50 py-16 sm:py-24">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
//             <div className="flex flex-col h-full">
//               <div className="flex items-center gap-4 mb-4">
//                 <span className="flex-shrink-0 bg-pink-500 text-white p-4 rounded-full">
//                   <ScissorsIcon className="h-6 w-6" />
//                 </span>
//                 <h2 className="text-3xl font-bold text-gray-900">Grooming Services</h2>
//               </div>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 Comprehensive grooming solutions for the modern gentleman, tailored to your needs.
//               </p>
//               {loading ? (
//                 <p className="text-gray-600">Loading services...</p>
//               ) : (
//                 <ul className="space-y-3 mb-8">
//                   {groomingServices.length > 0 ? (
//                     groomingServices.map((service, index) => (
//                       <li key={index} className="flex items-center">
//                         <FaCheck className="text-pink-500 h-5 w-5 mr-3" />
//                         <span className="text-gray-700">{service}</span>
//                       </li>
//                     ))
//                   ) : (
//                     <li className="text-gray-600">No Grooming services available</li>
//                   )}
//                 </ul>
//               )}
//               <div className="mt-auto flex items-center gap-6">
//                 <p className="text-xl font-medium text-gray-700">
//                   From{' '}
//                   <span className="font-bold text-2xl text-pink-500">
//                     Rs.
//                     {groomingServices.length > 0
//                       ? Math.min(
//                           ...services
//                             .filter((s) => s.sub_category_id === '10')
//                             .map((s) => Number(s.price))
//                         ).toFixed(2)
//                       : '800'}
//                   </span>
//                 </p>
//                 <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md">
//                   Book Now
//                 </button>
//               </div>
//             </div>
//             <div>
//               <img
//                 src="/images/grooming/grooming-service-image.jpg"
//                 alt="Gentleman receiving grooming services"
//                 className="rounded-2xl shadow-xl w-full h-auto object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Haircuts & Styling Section */}
//       <section className="bg-white py-16 sm:py-24">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
//             <div>
//               <img
//                 src="/images/grooming/haircut-image.jpg"
//                 alt="Stylist performing a haircut"
//                 className="rounded-2xl shadow-xl w-full h-auto object-cover"
//               />
//             </div>
//             <div className="flex flex-col h-full">
//               <div className="flex items-center gap-4 mb-4">
//                 <span className="flex-shrink-0 bg-pink-500 text-white p-4 rounded-full">
//                   <FaCut className="h-6 w-6" />
//                 </span>
//                 <h2 className="text-3xl font-bold text-gray-900">Haircuts & Styling</h2>
//               </div>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 Precision haircuts and styling to enhance your personal style and confidence.
//               </p>
//               {loading ? (
//                 <p className="text-gray-600">Loading services...</p>
//               ) : (
//                 <ul className="space-y-3 mb-8">
//                   {haircutServices.length > 0 ? (
//                     haircutServices.map((service, index) => (
//                       <li key={index} className="flex items-center">
//                         <FaCheck className="text-pink-500 h-5 w-5 mr-3" />
//                         <span className="text-gray-700">{service}</span>
//                       </li>
//                     ))
//                   ) : (
//                     <li className="text-gray-600">No Haircuts & Styling services available</li>
//                   )}
//                 </ul>
//               )}
//               <div className="mt-auto flex items-center gap-6">
//                 <p className="text-xl font-medium text-gray-700">
//                   From{' '}
//                   <span className="font-bold text-2xl text-pink-500">
//                     Rs.
//                     {haircutServices.length > 0
//                       ? Math.min(
//                           ...services
//                             .filter((s) => s.sub_category_id === '11')
//                             .map((s) => Number(s.price))
//                         ).toFixed(2)
//                       : '1200'}
//                   </span>
//                 </p>
//                 <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md">
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Beard Grooming Section */}
//       <section className="bg-gray-50 py-16 sm:py-24">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
//             <div className="flex flex-col h-full">
//               <div className="flex items-center gap-4 mb-4">
//                 <span className="flex-shrink-0 bg-pink-500 text-white p-4 rounded-full">
//                   <ScissorsIcon className="h-6 w-6" />
//                 </span>
//                 <h2 className="text-3xl font-bold text-gray-900">Beard Grooming</h2>
//               </div>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 Expert beard trimming and grooming for a refined, polished appearance.
//               </p>
//               {loading ? (
//                 <p className="text-gray-600">Loading services...</p>
//               ) : (
//                 <ul className="space-y-3 mb-8">
//                   {beardServices.length > 0 ? (
//                     beardServices.map((service, index) => (
//                       <li key={index} className="flex items-center">
//                         <FaCheck className="text-pink-500 h-5 w-5 mr-3" />
//                         <span className="text-gray-700">{service}</span>
//                       </li>
//                     ))
//                   ) : (
//                     <li className="text-gray-600">No Beard Grooming services available</li>
//                   )}
//                 </ul>
//               )}
//               <div className="mt-auto flex items-center gap-6">
//                 <p className="text-xl font-medium text-gray-700">
//                   From{' '}
//                   <span className="font-bold text-2xl text-pink-500">
//                     Rs.
//                     {beardServices.length > 0
//                       ? Math.min(
//                           ...services
//                             .filter((s) => s.sub_category_id === '12')
//                             .map((s) => Number(s.price))
//                         ).toFixed(2)
//                       : '600'}
//                   </span>
//                 </p>
//                 <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md">
//                   Book Now
//                 </button>
//               </div>
//             </div>
//             <div>
//               <img
//                 src="/images/grooming/beard-image.jpg"
//                 alt="Barber trimming a beard"
//                 className="rounded-2xl shadow-xl w-full h-auto object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Additional Services Section */}
//       <section className="bg-gray-50 py-16 sm:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//               Additional Services
//             </h2>
//             <p className="mt-4 text-lg leading-6 text-gray-500">
//               Enhance your grooming experience with our complementary services
//             </p>
//           </div>
//           <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {servicesData.map((service) => (
//               <div
//                 key={service.name}
//                 className="bg-white rounded-xl shadow-md overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-xl"
//               >
//                 <div className="p-6 flex items-center justify-between">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0 h-14 w-14 rounded-full bg-pink-100 flex items-center justify-center">
//                       <service.Icon className="h-7 w-7 text-pink-400" aria-hidden="true" />
//                     </div>
//                     <div className="ml-5">
//                       <p className="text-base font-medium text-gray-800">{service.name}</p>
//                     </div>
//                   </div>
//                   <div className="ml-4">
//                     <p className="text-base font-semibold text-pink-500">Rs.{service.price}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-rose-500">
//         <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
//             <span className="block">Ready to Elevate Your Style?</span>
//           </h2>
//           <p className="mt-4 text-lg leading-6 text-rose-100">
//             Book your appointment today and experience precision grooming at its finest
//           </p>
//           <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
//             <a
//               href="#pricing"
//               className="w-full sm:w-auto inline-block px-8 py-3 border border-transparent text-base font-semibold rounded-md shadow-md text-rose-600 bg-white hover:bg-rose-50 transition-colors duration-300"
//             >
//               View Pricing
//             </a>
//             <a
//               href="#booking"
//               className="w-full sm:w-auto inline-block px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white hover:bg-rose-400 transition-colors duration-300"
//             >
//               Book Appointment
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="relative bg-stone-900/90 text-white">
//         <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>
//         <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//             <div className="flex flex-col items-start">
//               <a href="#" className="text-2xl font-bold uppercase tracking-widest text-white">
//                 Lunaria
//               </a>
//               <p className="mt-4 max-w-xs text-sm text-gray-300">
//                 Your style begins here. Discover precision grooming crafted for the modern gentleman.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-sm font-bold uppercase tracking-wider text-gray-200">
//                 Explore
//               </h3>
//               <ul className="mt-4 space-y-2">
//                 {navLinks.map((link) => (
//                   <li key={link.label}>
//                     <a
//                       href={link.href}
//                       className="text-base font-medium uppercase text-white transition-colors hover:text-gray-300"
//                     >
//                       {link.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-sm font-bold uppercase tracking-wider text-gray-200">
//                 Contact Us
//               </h3>
//               <ul className="mt-4 space-y-2">
//                 <li className="flex items-center gap-2">
//                   <IconPhone className="h-5 w-5 text-gray-300" />
//                   <a href="tel:+1234567890" className="text-base text-white hover:text-gray-300">
//                     +1 (234) 567-890
//                   </a>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <IconMail className="h-5 w-5 text-gray-300" />
//                   <a href="mailto:info@lunaria.com" className="text-base text-white hover:text-gray-300">
//                     info@lunaria.com
//                   </a>
//                 </li>
//                 <li className="text-base text-gray-300"> Picardía">123 Groom Street, Serenity City</li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-sm font-bold uppercase tracking-wider text-gray-200">
//                 Connect
//               </h3>
//               <ul className="mt-4 space-y-2">
//                 {socialLinks.map((link) => (
//                   <li key={link.label}>
//                     <a
//                       href={link.href}
//                       className="text-base font-medium uppercase text-white transition-colors hover:text-gray-300"
//                     >
//                       {link.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//               <a
//                 href="#booking"
//                 className="mt-6 inline-block rounded-md bg-stone-700/50 px-5 py-2.5 text-sm font-semibold uppercase text-white shadow-sm backdrop-blur-sm transition-colors hover:bg-stone-600/50"
//               >
//                 Book an Appointment
//               </a>
//             </div>
//           </div>
//           <div className="mt-12 border-t border-gray-700 pt-6 text-center">
//             <p className="text-sm text-gray-300">
//               &copy; {new Date().getFullYear()} Lunaria. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default GroomingPage;



// import React, { useEffect, useState } from 'react';
// import { FaCheck, FaCut } from 'react-icons/fa';
// import {
//   ScissorsIcon,
//   SparklesIcon,
//   SunIcon,
//   HandThumbUpIcon,
//   CubeTransparentIcon,
//   EyeIcon,
//   PaintBrushIcon,
// } from '@heroicons/react/24/outline';
// import GroomingBaber from '../assets/Mains/Grooming&Baber.jpg';

// // Footer Icons (unchanged)
// const IconMail = ({ className }) => (
//   <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
//   </svg>
// );

// const IconPhone = ({ className }) => (
//   <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
//   </svg>
// );

// // Static Additional Services (unchanged)
// const servicesData = [
//   { name: 'Eyelash Extensions', price: '65+', Icon: EyeIcon },
//   { name: 'Makeup Services', price: '75+', Icon: PaintBrushIcon },
//   { name: 'Manicure & Pedicure', price: '45+', Icon: HandThumbUpIcon },
//   { name: 'Body Wraps', price: '110+', Icon: CubeTransparentIcon },
//   { name: 'Waxing Services', price: '25+', Icon: SparklesIcon },
//   { name: 'Spray Tanning', price: '55+', Icon: SunIcon },
// ];

// // Fallback services (updated URLs)
// const fallbackServices = [
//   {
//     id: 1,
//     category_id: 3,
//     category_name: 'Barber & Grooming',
//     sub_category_id: 9,
//     sub_category_name: 'Barbershops',
//     name: 'Classic Haircut',
//     price: 1000,
//     description: 'Traditional barbershop haircut with precision styling',
//     image_url: 'http://localhost/skincare_db/Uploads/Services/default_haircut.jpg',
//     type: 'standard',
//   },
//   {
//     id: 2,
//     category_id: 3,
//     category_name: 'Barber & Grooming',
//     sub_category_id: 10,
//     sub_category_name: 'Grooming Services',
//     name: 'Hot Towel Shave',
//     price: 800,
//     description: 'Luxurious hot towel shave for a smooth finish',
//     image_url: 'http://localhost/skincare_db/Uploads/Services/default_shave.jpg',
//     type: 'standard',
//   },
//   {
//     id: 3,
//     category_id: 3,
//     category_name: 'Barber & Grooming',
//     sub_category_id: 11,
//     sub_category_name: 'Haircuts & Styling',
//     name: 'Fade Haircut',
//     price: 1200,
//     description: 'Modern fade haircut tailored to your style',
//     image_url: 'http://localhost/skincare_db/Uploads/Services/default_fade.jpg',
//     type: 'standard',
//   },
//   {
//     id: 4,
//     category_id: 3,
//     category_name: 'Barber & Grooming',
//     sub_category_id: 12,
//     sub_category_name: 'Beard Grooming',
//     name: 'Beard Trim',
//     price: 600,
//     description: 'Professional beard trimming and shaping',
//     image_url: 'http://localhost/skincare_db/Uploads/Services/default_beard.jpg',
//     type: 'standard',
//   },
// ];

// const GroomingPage = () => {
//   const [services, setServices] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);

//   // Fetch services from backend
//   const fetchServices = async () => {
//     setLoading(true);
//     setError('');
//     try {
//       console.log('Fetching services from http://localhost/skincare_db/get_services.php');
//       const res = await fetch('http://localhost/skincare_db/get_services.php', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       if (!res.ok) {
//         throw new Error(`HTTP error! Status: ${res.status}`);
//       }
//       const data = await res.json();
//       console.log('Backend response:', data);

//       if (data.success && Array.isArray(data.data)) {
//         const groomingServices = data.data.filter(
//           (s) => s.category_id === '3' && s.type === 'standard'
//         );
//         console.log('Filtered grooming services:', groomingServices);
//         if (groomingServices.length === 0) {
//           setError('⚠️ No Barbershops & Grooming services found in the database. Using fallback services.');
//           setServices(fallbackServices);
//         } else {
//           setServices(groomingServices);
//         }
//       } else {
//         throw new Error(data.message || 'Invalid response format');
//       }
//     } catch (e) {
//       console.error('Fetch error:', e.message);
//       setError(`⚠️ Could not fetch services: ${e.message}. Using fallback services.`);
//       setServices(fallbackServices);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   // Categorize services by sub_category_id
//   const barbershopServices = services.filter((s) => s.sub_category_id === '9');
//   const groomingServices = services.filter((s) => s.sub_category_id === '10');
//   const haircutServices = services.filter((s) => s.sub_category_id === '11');
//   const beardServices = services.filter((s) => s.sub_category_id === '12');

//   // Get the first valid image for each sub-category
//   const getSubCategoryImage = (subCategoryServices) => {
//     const serviceWithImage = subCategoryServices.find(
//       (s) => s.image_url && !s.image_url.includes('placeholder.com')
//     );
//     if (!serviceWithImage) {
//       console.warn(`No valid image found for sub-category: ${subCategoryServices[0]?.sub_category_name || 'Unknown'}`);
//     }
//     return serviceWithImage
//       ? serviceWithImage.image_url
//       : '/images/grooming/default-image.jpg';
//   };

//   // Navigation and social links (unchanged)
//   const navLinks = [
//     { href: '#about', label: 'About Us' },
//     { href: '#services', label: 'Services' },
//     { href: '#blog', label: 'Blog' },
//     { href: '#contacts', label: 'Contacts' },
//   ];

//   const socialLinks = [
//     { href: 'https://instagram.com/lunaria', label: 'Instagram' },
//     { href: 'https://facebook.com/lunaria', label: 'Facebook' },
//     { href: 'https://twitter.com/lunaria', label: 'Twitter' },
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <div
//         className="relative flex items-center justify-center h-screen bg-cover bg-center"
//         style={{ backgroundImage: `url(${GroomingBaber})` }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50" />
//         <div className="relative z-10 flex flex-col items-center text-center text-white p-6 max-w-4xl mx-auto">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             Barbershops & Grooming
//           </h1>
//           <p className="text-lg md:text-xl mb-8">
//             Expert grooming services for the modern gentleman with style and precision
//           </p>
//           <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-10 rounded-lg text-lg transition-colors duration-300 shadow-lg">
//             Book Your Appointment
//           </button>
//         </div>
//       </div>

//       {/* Error Message */}
//       {error && (
//         <div className="mb-6 p-4 rounded-lg bg-red-200 text-red-800 border-2 border-red-400 font-medium text-center max-w-7xl mx-auto mt-4">
//           {error}
//         </div>
//       )}

//       {/* Barbershops Section */}
//       <section className="bg-white py-16 sm:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
//               Our Barbershop Services
//             </h2>
//             <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//               {barbershopServices.length > 0 && barbershopServices[0].description
//                 ? barbershopServices[0].description
//                 : 'Experience traditional and modern barbering techniques for a sharp, polished look'}
//             </p>
//           </div>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//             <div>
//               <img
//                 src={getSubCategoryImage(barbershopServices)}
//                 alt="Interior of a modern barbershop"
//                 className="rounded-2xl shadow-xl w-full h-auto object-cover"
//                 onError={(e) => {
//                   console.error(`Failed to load image: ${e.target.src}`);
//                   e.target.src = '/images/grooming/default-image.jpg';
//                 }}
//               />
//             </div>
//             <div className="flex flex-col">
//               <div className="flex items-center gap-4 mb-4">
//                 <span className="flex-shrink-0 bg-pink-500 text-white p-4 rounded-full">
//                   <FaCut className="h-6 w-6" />
//                 </span>
//                 <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
//                   Barbershops
//                 </h3>
//               </div>
//               {loading ? (
//                 <p className="text-gray-600">Loading services...</p>
//               ) : (
//                 <ul className="space-y-3 mb-8">
//                   {barbershopServices.length > 0 ? (
//                     barbershopServices.map((service, index) => (
//                       <li key={index} className="flex items-center">
//                         <FaCheck className="text-pink-500 h-5 w-5 mr-3" />
//                         <span className="text-gray-700">{service.name}</span>
//                       </li>
//                     ))
//                   ) : (
//                     <li className="text-gray-600">No Barbershop services available</li>
//                   )}
//                 </ul>
//               )}
//               <div className="mt-auto flex items-center justify-between">
//                 <p className="text-2xl font-bold text-gray-800">
//                   From{' '}
//                   <span className="text-pink-600">
//                     Rs.
//                     {barbershopServices.length > 0
//                       ? Math.min(...barbershopServices.map((s) => Number(s.price))).toFixed(2)
//                       : '1000'}
//                   </span>
//                 </p>
//                 <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md">
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Grooming Services Section */}
//       <section className="bg-gray-50 py-16 sm:py-24">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
//             <div className="flex flex-col h-full">
//               <div className="flex items-center gap-4 mb-4">
//                 <span className="flex-shrink-0 bg-pink-500 text-white p-4 rounded-full">
//                   <ScissorsIcon className="h-6 w-6" />
//                 </span>
//                 <h2 className="text-3xl font-bold text-gray-900">Grooming Services</h2>
//               </div>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 {groomingServices.length > 0 && groomingServices[0].description
//                   ? groomingServices[0].description
//                   : 'Comprehensive grooming solutions for the modern gentleman, tailored to your needs.'}
//               </p>
//               {loading ? (
//                 <p className="text-gray-600">Loading services...</p>
//               ) : (
//                 <ul className="space-y-3 mb-8">
//                   {groomingServices.length > 0 ? (
//                     groomingServices.map((service, index) => (
//                       <li key={index} className="flex items-center">
//                         <FaCheck className="text-pink-500 h-5 w-5 mr-3" />
//                         <span className="text-gray-700">{service.name}</span>
//                       </li>
//                     ))
//                   ) : (
//                     <li className="text-gray-600">No Grooming services available</li>
//                   )}
//                 </ul>
//               )}
//               <div className="mt-auto flex items-center gap-6">
//                 <p className="text-xl font-medium text-gray-700">
//                   From{' '}
//                   <span className="font-bold text-2xl text-pink-500">
//                     Rs.
//                     {groomingServices.length > 0
//                       ? Math.min(...groomingServices.map((s) => Number(s.price))).toFixed(2)
//                       : '800'}
//                   </span>
//                 </p>
//                 <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md">
//                   Book Now
//                 </button>
//               </div>
//             </div>
//             <div>
//               <img
//                 src={getSubCategoryImage(groomingServices)}
//                 alt="Gentleman receiving grooming services"
//                 className="rounded-2xl shadow-xl w-full h-auto object-cover"
//                 onError={(e) => {
//                   console.error(`Failed to load image: ${e.target.src}`);
//                   e.target.src = '/images/grooming/default-image.jpg';
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Haircuts & Styling Section */}
//       <section className="bg-white py-16 sm:py-24">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
//             <div>
//               <img
//                 src={getSubCategoryImage(haircutServices)}
//                 alt="Stylist performing a haircut"
//                 className="rounded-2xl shadow-xl w-full h-auto object-cover"
//                 onError={(e) => {
//                   console.error(`Failed to load image: ${e.target.src}`);
//                   e.target.src = '/images/grooming/default-image.jpg';
//                 }}
//               />
//             </div>
//             <div className="flex flex-col h-full">
//               <div className="flex items-center gap-4 mb-4">
//                 <span className="flex-shrink-0 bg-pink-500 text-white p-4 rounded-full">
//                   <FaCut className="h-6 w-6" />
//                 </span>
//                 <h2 className="text-3xl font-bold text-gray-900">Haircuts & Styling</h2>
//               </div>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 {haircutServices.length > 0 && haircutServices[0].description
//                   ? haircutServices[0].description
//                   : 'Precision haircuts and styling to enhance your personal style and confidence.'}
//               </p>
//               {loading ? (
//                 <p className="text-gray-600">Loading services...</p>
//               ) : (
//                 <ul className="space-y-3 mb-8">
//                   {haircutServices.length > 0 ? (
//                     haircutServices.map((service, index) => (
//                       <li key={index} className="flex items-center">
//                         <FaCheck className="text-pink-500 h-5 w-5 mr-3" />
//                         <span className="text-gray-700">{service.name}</span>
//                       </li>
//                     ))
//                   ) : (
//                     <li className="text-gray-600">No Haircuts & Styling services available</li>
//                   )}
//                 </ul>
//               )}
//               <div className="mt-auto flex items-center gap-6">
//                 <p className="text-xl font-medium text-gray-700">
//                   From{' '}
//                   <span className="font-bold text-2xl text-pink-500">
//                     Rs.
//                     {haircutServices.length > 0
//                       ? Math.min(...haircutServices.map((s) => Number(s.price))).toFixed(2)
//                       : '1200'}
//                   </span>
//                 </p>
//                 <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md">
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Beard Grooming Section */}
//       <section className="bg-gray-50 py-16 sm:py-24">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
//             <div className="flex flex-col h-full">
//               <div className="flex items-center gap-4 mb-4">
//                 <span className="flex-shrink-0 bg-pink-500 text-white p-4 rounded-full">
//                   <ScissorsIcon className="h-6 w-6" />
//                 </span>
//                 <h2 className="text-3xl font-bold text-gray-900">Beard Grooming</h2>
//               </div>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 {beardServices.length > 0 && beardServices[0].description
//                   ? beardServices[0].description
//                   : 'Expert beard trimming and grooming for a refined, polished appearance.'}
//               </p>
//               {loading ? (
//                 <p className="text-gray-600">Loading services...</p>
//               ) : (
//                 <ul className="space-y-3 mb-8">
//                   {beardServices.length > 0 ? (
//                     beardServices.map((service, index) => (
//                       <li key={index} className="flex items-center">
//                         <FaCheck className="text-pink-500 h-5 w-5 mr-3" />
//                         <span className="text-gray-700">{service.name}</span>
//                       </li>
//                     ))
//                   ) : (
//                     <li className="text-gray-600">No Beard Grooming services available</li>
//                   )}
//                 </ul>
//               )}
//               <div className="mt-auto flex items-center gap-6">
//                 <p className="text-xl font-medium text-gray-700">
//                   From{' '}
//                   <span className="font-bold text-2xl text-pink-500">
//                     Rs.
//                     {beardServices.length > 0
//                       ? Math.min(...beardServices.map((s) => Number(s.price))).toFixed(2)
//                       : '600'}
//                   </span>
//                 </p>
//                 <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md">
//                   Book Now
//                 </button>
//               </div>
//             </div>
//             <div>
//               <img
//                 src={getSubCategoryImage(beardServices)}
//                 alt="Barber trimming a beard"
//                 className="rounded-2xl shadow-xl w-full h-auto object-cover"
//                 onError={(e) => {
//                   console.error(`Failed to load image: ${e.target.src}`);
//                   e.target.src = '/images/grooming/default-image.jpg';
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Additional Services Section (unchanged) */}
//       <section className="bg-gray-50 py-16 sm:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//               Additional Services
//             </h2>
//             <p className="mt-4 text-lg leading-6 text-gray-500">
//               Enhance your grooming experience with our complementary services
//             </p>
//           </div>
//           <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {servicesData.map((service) => (
//               <div
//                 key={service.name}
//                 className="bg-white rounded-xl shadow-md overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-xl"
//               >
//                 <div className="p-6 flex items-center justify-between">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0 h-14 w-14 rounded-full bg-pink-100 flex items-center justify-center">
//                       <service.Icon className="h-7 w-7 text-pink-400" aria-hidden="true" />
//                     </div>
//                     <div className="ml-5">
//                       <p className="text-base font-medium text-gray-800">{service.name}</p>
//                     </div>
//                   </div>
//                   <div className="ml-4">
//                     <p className="text-base font-semibold text-pink-500">Rs.{service.price}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section (unchanged) */}
//       <section className="bg-rose-500">
//         <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
//             <span className="block">Ready to Elevate Your Style?</span>
//           </h2>
//           <p className="mt-4 text-lg leading-6 text-rose-100">
//             Book your appointment today and experience precision grooming at its finest
//           </p>
//           <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
//             <a
//               href="#pricing"
//               className="w-full sm:w-auto inline-block px-8 py-3 border border-transparent text-base font-semibold rounded-md shadow-md text-rose-600 bg-white hover:bg-rose-50 transition-colors duration-300"
//             >
//               View Pricing
//             </a>
//             <a
//               href="#booking"
//               className="w-full sm:w-auto inline-block px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white hover:bg-rose-400 transition-colors duration-300"
//             >
//               Book Appointment
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Footer Section (unchanged) */}
//       <footer className="relative bg-stone-900/90 text-white">
//         <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>
//         <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//             <div className="flex flex-col items-start">
//               <a href="#" className="text-2xl font-bold uppercase tracking-widest text-white">
//                 Lunaria
//               </a>
//               <p className="mt-4 max-w-xs text-sm text-gray-300">
//                 Your style begins here. Discover precision grooming crafted for the modern gentleman.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-sm font-bold uppercase tracking-wider text-gray-200">
//                 Explore
//               </h3>
//               <ul className="mt-4 space-y-2">
//                 {navLinks.map((link) => (
//                   <li key={link.label}>
//                     <a
//                       href={link.href}
//                       className="text-base font-medium uppercase text-white transition-colors hover:text-gray-300"
//                     >
//                       {link.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-sm font-bold uppercase tracking-wider text-gray-200">
//                 Contact Us
//               </h3>
//               <ul className="mt-4 space-y-2">
//                 <li className="flex items-center gap-2">
//                   <IconPhone className="h-5 w-5 text-gray-300" />
//                   <a href="tel:+1234567890" className="text-base text-white hover:text-gray-300">
//                     +1 (234) 567-890
//                   </a>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <IconMail className="h-5 w-5 text-gray-300" />
//                   <a href="mailto:info@lunaria.com" className="text-base text-white hover:text-gray-300">
//                     info@lunaria.com
//                   </a>
//                 </li>
//                 <li className="text-base text-gray-300">123 Groom Street, Serenity City</li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-sm font-bold uppercase tracking-wider text-gray-200">
//                 Connect
//               </h3>
//               <ul className="mt-4 space-y-2">
//                 {socialLinks.map((link) => (
//                   <li key={link.label}>
//                     <a
//                       href={link.href}
//                       className="text-base font-medium uppercase text-white transition-colors hover:text-gray-300"
//                     >
//                       {link.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//               <a
//                 href="#booking"
//                 className="mt-6 inline-block rounded-md bg-stone-700/50 px-5 py-2.5 text-sm font-semibold uppercase text-white shadow-sm backdrop-blur-sm transition-colors hover:bg-stone-600/50"
//               >
//                 Book an Appointment
//               </a>
//             </div>
//           </div>
//           <div className="mt-12 border-t border-gray-700 pt-6 text-center">
//             <p className="text-sm text-gray-300">
//               &copy; {new Date().getFullYear()} Lunaria. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default GroomingPage;



import React, { useEffect, useState } from 'react';
import {
  EyeIcon,
  PaintBrushIcon,
  SparklesIcon,
  SunIcon,
  HandThumbUpIcon,
  CubeTransparentIcon,
  ScissorsIcon,
} from '@heroicons/react/24/outline';
import GroomingBaber from '../assets/Mains/Grooming&Baber.jpg';

// Footer Icons
const IconMail = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const IconPhone = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

// Icon for Services
const IconSparkles = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036.259a3.375 3.375 0 002.455 2.456zM16.5 18.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L12.75 15l1.036.259a3.375 3.375 0 002.455 2.456L16.5 18.75z" />
  </svg>
);

// Static Additional Services (updated to Rs.)
const servicesData = [
  { name: 'Eyelash Extensions', price: '6500+', Icon: EyeIcon },
  { name: 'Makeup Services', price: '7500+', Icon: PaintBrushIcon },
  { name: 'Manicure & Pedicure', price: '4500+', Icon: HandThumbUpIcon },
  { name: 'Body Wraps', price: '11000+', Icon: CubeTransparentIcon },
  { name: 'Waxing Services', price: '2500+', Icon: SparklesIcon },
  { name: 'Spray Tanning', price: '5500+', Icon: SunIcon },
];

// Fallback Services (unchanged from your update)
const fallbackServices = [
  {
    id: 1,
    category_id: 3,
    category_name: 'Barber & Grooming',
    sub_category_id: 9,
    sub_category_name: 'Barbershops',
    name: 'Classic Haircut',
    price: 1000,
    description: 'Traditional barbershop haircut with precision styling',
    image_url: 'http://localhost/skincare_db/Uploads/Services/default_haircut.jpg',
    type: 'standard',
  },
  {
    id: 2,
    category_id: 3,
    category_name: 'Barber & Grooming',
    sub_category_id: 10,
    sub_category_name: 'Grooming Services',
    name: 'Hot Towel Shave',
    price: 800,
    description: 'Luxurious hot towel shave for a smooth finish',
    image_url: 'http://localhost/skincare_db/Uploads/Services/default_shave.jpg',
    type: 'standard',
  },
  {
    id: 3,
    category_id: 3,
    category_name: 'Barber & Grooming',
    sub_category_id: 11,
    sub_category_name: 'Haircuts & Styling',
    name: 'Fade Haircut',
    price: 1200,
    description: 'Modern fade haircut tailored to your style',
    image_url: 'http://localhost/skincare_db/Uploads/Services/default_fade.jpg',
    type: 'standard',
  },
  {
    id: 4,
    category_id: 3,
    category_name: 'Barber & Grooming',
    sub_category_id: 12,
    sub_category_name: 'Beard Grooming',
    name: 'Beard Trim',
    price: 600,
    description: 'Professional beard trimming and shaping',
    image_url: 'http://localhost/skincare_db/Uploads/Services/default_beard.jpg',
    type: 'standard',
  },
];

const GroomingPage = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch services from backend
  const fetchServices = async () => {
    setLoading(true);
    setError('');
    try {
      console.log('Fetching services from http://localhost/skincare_db/get_services.php');
      const res = await fetch('http://localhost/skincare_db/get_services.php', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      console.log('Backend response:', data);

      if (data.success && Array.isArray(data.data)) {
        const groomingServices = data.data.filter(
          (s) => s.category_id === '3' && s.type === 'standard'
        );
        console.log('Filtered grooming services:', groomingServices);
        if (groomingServices.length === 0) {
          setError('⚠️ No Barbershops & Grooming services found in the database. Using fallback services.');
          setServices(fallbackServices);
        } else {
          setServices(groomingServices);
        }
      } else {
        throw new Error(data.message || 'Invalid response format');
      }
    } catch (e) {
      console.error('Fetch error:', e.message);
      setError(`⚠️ Could not fetch services: ${e.message}. Using fallback services.`);
      setServices(fallbackServices);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Categorize services by sub_category_id
  const barbershopServices = services.filter((s) => s.sub_category_id === '9');
  const groomingServices = services.filter((s) => s.sub_category_id === '10');
  const haircutServices = services.filter((s) => s.sub_category_id === '11');
  const beardServices = services.filter((s) => s.sub_category_id === '12');

  // Get the first valid image for each sub-category
  const getSubCategoryImage = (subCategoryServices) => {
    const serviceWithImage = subCategoryServices.find(
      (s) => s.image_url && !s.image_url.includes('placeholder.com')
    );
    if (!serviceWithImage) {
      console.warn(`No valid image found for sub-category: ${subCategoryServices[0]?.sub_category_name || 'Unknown'}`);
    }
    return serviceWithImage
      ? serviceWithImage.image_url
      : '/images/grooming/default-image.jpg';
  };

  // Navigation and social links
  const navLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#blog', label: 'Blog' },
    { href: '#contacts', label: 'Contacts' },
  ];

  const socialLinks = [
    { href: 'https://instagram.com/lunaria', label: 'Instagram' },
    { href: 'https://facebook.com/lunaria', label: 'Facebook' },
    { href: 'https://twitter.com/lunaria', label: 'Twitter' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${GroomingBaber})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex flex-col items-center text-center text-white p-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
            Barbershops & Grooming
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl">
            Expert grooming services for the modern gentleman with style and precision
          </p>
          <button className="mt-8 bg-black text-white font-semibold py-3 px-10 rounded-lg text-lg transition-all duration-200 hover:bg-gray-800 shadow-lg">
            Book Your Appointment
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-200 text-red-800 border-2 border-red-400 font-medium text-center max-w-7xl mx-auto mt-4">
          {error}
        </div>
      )}

      {/* Barbershops Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase text-gray-900">
              Barbershops
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              {barbershopServices.length > 0 && barbershopServices[0].description
                ? barbershopServices[0].description
                : 'Experience traditional and modern barbering techniques for a sharp, polished look'}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={getSubCategoryImage(barbershopServices)}
                alt="Interior of a modern barbershop"
                className="rounded-lg shadow-md w-full h-auto object-cover"
                onError={(e) => {
                  console.error(`Failed to load image: ${e.target.src}`);
                  e.target.src = '/images/grooming/default-image.jpg';
                }}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex-shrink-0 bg-black text-white p-3 rounded-full">
                  <ScissorsIcon className="h-6 w-6" />
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  Barbershops
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                {barbershopServices.length > 0 && barbershopServices[0].description
                  ? barbershopServices[0].description
                  : 'Professional barbering services focusing on precision cuts and classic styles.'}
              </p>
              {loading ? (
                <p className="text-gray-600">Loading services...</p>
              ) : (
                <ul className="space-y-3 mb-8">
                  {barbershopServices.length > 0 ? (
                    barbershopServices.map((service, index) => (
                      <li key={index} className="flex items-center">
                        <IconSparkles className="text-black h-4 w-4 mr-3" />
                        <span className="text-gray-700">{service.name}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-600">No Barbershop services available</li>
                  )}
                </ul>
              )}
              <div className="mt-auto flex items-center justify-between">
                <p className="text-xl font-semibold text-gray-700">
                  From{' '}
                  <span className="font-bold text-black">
                    Rs.{barbershopServices.length > 0
                      ? Math.min(...barbershopServices.map((s) => Number(s.price))).toFixed(2)
                      : '1000'}
                  </span>
                </p>
                <button className="bg-black text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-gray-800 shadow-md">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grooming Services Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase text-gray-900">
              Grooming Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive grooming solutions tailored for the modern gentleman.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex-shrink-0 bg-black text-white p-3 rounded-full">
                  <ScissorsIcon className="h-6 w-6" />
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  Grooming Services
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                {groomingServices.length > 0 && groomingServices[0].description
                  ? groomingServices[0].description
                  : 'Luxurious grooming services for a refined appearance.'}
              </p>
              {loading ? (
                <p className="text-gray-600">Loading services...</p>
              ) : (
                <ul className="space-y-3 mb-8">
                  {groomingServices.length > 0 ? (
                    groomingServices.map((service, index) => (
                      <li key={index} className="flex items-center">
                        <IconSparkles className="text-black h-4 w-4 mr-3" />
                        <span className="text-gray-700">{service.name}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-600">No Grooming services available</li>
                  )}
                </ul>
              )}
              <div className="mt-auto flex items-center justify-between">
                <p className="text-xl font-semibold text-gray-700">
                  From{' '}
                  <span className="font-bold text-black">
                    Rs.{groomingServices.length > 0
                      ? Math.min(...groomingServices.map((s) => Number(s.price))).toFixed(2)
                      : '800'}
                  </span>
                </p>
                <button className="bg-black text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-gray-800 shadow-md">
                  Book Now
                </button>
              </div>
            </div>
            <div>
              <img
                src={getSubCategoryImage(groomingServices)}
                alt="Gentleman receiving grooming services"
                className="rounded-lg shadow-md w-full h-auto object-cover"
                onError={(e) => {
                  console.error(`Failed to load image: ${e.target.src}`);
                  e.target.src = '/images/grooming/default-image.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Haircuts & Styling Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase text-gray-900">
              Haircuts & Styling
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Precision haircuts and styling to enhance your personal style.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={getSubCategoryImage(haircutServices)}
                alt="Stylist performing a haircut"
                className="rounded-lg shadow-md w-full h-auto object-cover"
                onError={(e) => {
                  console.error(`Failed to load image: ${e.target.src}`);
                  e.target.src = '/images/grooming/default-image.jpg';
                }}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex-shrink-0 bg-black text-white p-3 rounded-full">
                  <ScissorsIcon className="h-6 w-6" />
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  Haircuts & Styling
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                {haircutServices.length > 0 && haircutServices[0].description
                  ? haircutServices[0].description
                  : 'Modern and classic haircuts tailored to your preferences.'}
              </p>
              {loading ? (
                <p className="text-gray-600">Loading services...</p>
              ) : (
                <ul className="space-y-3 mb-8">
                  {haircutServices.length > 0 ? (
                    haircutServices.map((service, index) => (
                      <li key={index} className="flex items-center">
                        <IconSparkles className="text-black h-4 w-4 mr-3" />
                        <span className="text-gray-700">{service.name}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-600">No Haircuts & Styling services available</li>
                  )}
                </ul>
              )}
              <div className="mt-auto flex items-center justify-between">
                <p className="text-xl font-semibold text-gray-700">
                  From{' '}
                  <span className="font-bold text-black">
                    Rs.{haircutServices.length > 0
                      ? Math.min(...haircutServices.map((s) => Number(s.price))).toFixed(2)
                      : '1200'}
                  </span>
                </p>
                <button className="bg-black text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-gray-800 shadow-md">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beard Grooming Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase text-gray-900">
              Beard Grooming
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Expert beard trimming and grooming for a polished look.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex-shrink-0 bg-black text-white p-3 rounded-full">
                  <ScissorsIcon className="h-6 w-6" />
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  Beard Grooming
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                {beardServices.length > 0 && beardServices[0].description
                  ? beardServices[0].description
                  : 'Professional beard care for a refined appearance.'}
              </p>
              {loading ? (
                <p className="text-gray-600">Loading services...</p>
              ) : (
                <ul className="space-y-3 mb-8">
                  {beardServices.length > 0 ? (
                    beardServices.map((service, index) => (
                      <li key={index} className="flex items-center">
                        <IconSparkles className="text-black h-4 w-4 mr-3" />
                        <span className="text-gray-700">{service.name}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-600">No Beard Grooming services available</li>
                  )}
                </ul>
              )}
              <div className="mt-auto flex items-center justify-between">
                <p className="text-xl font-semibold text-gray-700">
                  From{' '}
                  <span className="font-bold text-black">
                    Rs.{beardServices.length > 0
                      ? Math.min(...beardServices.map((s) => Number(s.price))).toFixed(2)
                      : '600'}
                  </span>
                </p>
                <button className="bg-black text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-gray-800 shadow-md">
                  Book Now
                </button>
              </div>
            </div>
            <div>
              <img
                src={getSubCategoryImage(beardServices)}
                alt="Barber trimming a beard"
                className="rounded-lg shadow-md w-full h-auto object-cover"
                onError={(e) => {
                  console.error(`Failed to load image: ${e.target.src}`);
                  e.target.src = '/images/grooming/default-image.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase text-gray-900">
              Additional Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Enhance your grooming experience with our complementary services
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <button
                key={service.name}
                className="flex items-start rounded-lg border border-gray-200 bg-white p-4 text-left transition-all duration-200 hover:border-gray-400 hover:shadow-md"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <service.Icon className="h-6 w-6 text-black" aria-hidden="true" />
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-semibold text-gray-800">{service.name}</p>
                    <p className="text-sm font-semibold text-gray-600">Rs.{service.price}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black uppercase text-white">
            Ready to Elevate Your Style?
          </h2>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Book your appointment today and experience precision grooming at its finest
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="w-full sm:w-auto px-8 py-3 border border-gray-200 text-base font-semibold rounded-lg text-white bg-transparent hover:bg-gray-800 transition-all duration-200"
            >
              View Pricing
            </a>
            <a
              href="#booking"
              className="w-full sm:w-auto px-8 py-3 border border-transparent text-base font-semibold rounded-lg text-black bg-white hover:bg-gray-200 transition-all duration-200"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default GroomingPage;