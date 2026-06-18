// import React, { useEffect, useState } from 'react';

// // Footer and CTA Icons
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

// const PortfolioPage = () => {
//   const [mainImage, setMainImage] = useState('');
//   const [supportImages, setSupportImages] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchGallery = async () => {
//       try {
//         const res = await fetch('http://localhost/skincare_db/get_gallery_images.php');
//         const data = await res.json();

//         const main = data.find(img => img.category === 'main');
//         const supports = data.filter(img => img.category === 'support');

//         setMainImage(main?.image_url || 'https://images.unsplash.com/photo-1617922001433-418a1063c16a?q=80&w=1887&auto=format&fit=crop');
//         setSupportImages(supports.map(s => s.image_url));
//         setLoading(false);
//       } catch (err) {
//         console.error("Failed to load gallery:", err);
//         setLoading(false);
//       }
//     };

//     fetchGallery();
//   }, []);

//   const navLinks = [
//     { href: '/#about', label: 'About Us' },
//     { href: '/#services', label: 'Services' },
//     { href: '/blog', label: 'Blog' },
//     { href: '/#contacts', label: 'Contacts' },
//   ];

//   const socialLinks = [
//     { href: 'https://instagram.com/lunaria', label: 'Instagram' },
//     { href: 'https://facebook.com/lunaria', label: 'Facebook' },
//     { href: 'https://twitter.com/lunaria', label: 'Twitter' },
//   ];

//   return (
//     <>
//       {/* Font Import */}
//       <style>
//         {`
//           @font-face {
//             font-family: 'Playfair Display';
//             src: url('/fonts/PlayfairDisplay.ttf') format('truetype');
//             font-weight: normal;
//             font-style: normal;
//           }
//           .font-playfair { font-family: 'Playfair Display', serif; }
//         `}
//       </style>

//       <div className="min-h-screen bg-[#1a1a1a] font-playfair text-white flex flex-col">
//         {/* Main Content Section */}
//         <div className="flex flex-col md:flex-row w-full flex-grow pt-16">
//           {/* Left Sidebar */}
//           <aside className="w-full md:w-1/3 lg:w-1/4 flex flex-col items-center gap-8 p-8 md:py-16 border-b-2 md:border-b-0 md:border-r-2 border-gray-700 bg-[#1a1a1a]">
//             {supportImages.slice(0, 6).map((src, i) => {
//               const isCircle = i === 0 || i === 1 || i === 5;
//               const isRect = i === 2;
//               const isTall = i === 3 || i === 4;

//               return (
//                 <img
//                   key={i}
//                   src={src}
//                   alt={`Support ${i + 1}`}
//                   className={`
//                     ${isCircle ? 'w-28 h-28 rounded-full' : ''}
//                     ${isRect ? 'w-52 h-auto' : ''}
//                     ${isTall ? 'w-28 h-40' : ''}
//                     object-cover shadow-lg border-2 border-gray-600
//                   `}
//                 />
//               );
//             })}
//             <h2 className="text-sm tracking-[0.3em] text-white mt-4">GLAMOUR FW20/21</h2>
//           </aside>

//           {/* Main Content Area */}
//           <main className="w-full md:w-2/3 lg:w-3/4 flex flex-col items-center justify-between p-8 md:p-16 bg-[#1a1a1a]">
//             <h1 className="text-2xl tracking-[0.4em] font-light text-white">NEXT PROJECT</h1>
            
//             {/* Large Oval Main Image */}
//             <div className="w-[22rem] h-[32rem] rounded-[50%] overflow-hidden my-8 shadow-2xl border-4 border-gray-700">
//               {loading ? (
//                 <div className="w-full h-full bg-gray-800 animate-pulse" />
//               ) : (
//                 <img 
//                   src={mainImage} 
//                   alt="Main Project" 
//                   className="w-full h-full object-cover"
//                 />
//               )}
//             </div>

//             <p className="text-base tracking-[0.3em] font-light text-white">SAAZGRAM@GMAIL.COM</p>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PortfolioPage;






import React, { useEffect, useState } from 'react';

// Icons
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

const PortfolioPage = () => {
  const [mainImage, setMainImage] = useState('');
  const [supportImages, setSupportImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // CLEAN + STABLE SKINCARE IMAGES (no broken links)
  const skincareFallbacks = {
    main: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",

    support: [
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    ]
  };

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch('http://localhost/skincare_db/get_gallery_images.php');
        if (!res.ok) throw new Error('Fetch failed');

        const data = await res.json();

        const main = data.find(img => img.category === 'main');
        const supports = data.filter(img => img.category === 'support');

        const selectedMain = main?.image_url || skincareFallbacks.main;
        setMainImage(selectedMain);

        const finalSupports =
          supports.length > 0
            ? supports.map(s => s.image_url)
            : skincareFallbacks.support;

        setSupportImages(finalSupports);
        setLoading(false);
      } catch (err) {
        console.error("Gallery load failed:", err);

        setMainImage(skincareFallbacks.main);
        setSupportImages(skincareFallbacks.support);
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return (
    <>
      <style>
        {`
          @font-face {
            font-family: 'Playfair Display';
            src: url('/fonts/PlayfairDisplay.ttf') format('truetype');
          }
          .font-playfair { font-family: 'Playfair Display', serif; }
        `}
      </style>

      <div className="min-h-screen bg-[#1a1a1a] font-playfair text-white flex flex-col">

        <div className="flex flex-col md:flex-row w-full flex-grow pt-16">

          {/* LEFT SIDE */}
          <aside className="w-full md:w-1/3 lg:w-1/4 flex flex-col items-center gap-6 p-6 border-r border-gray-700">

            {supportImages.slice(0, 6).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`skincare-${i}`}
                className="w-28 h-28 object-cover rounded-full shadow-md border border-gray-600 hover:scale-105 transition"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = skincareFallbacks.support[i % skincareFallbacks.support.length];
                }}
              />
            ))}

            <h2 className="text-xs tracking-[0.4em] mt-4">LUNARIA SKINCARE</h2>
          </aside>

          {/* MAIN */}
          <main className="w-full md:w-2/3 lg:w-3/4 flex flex-col items-center justify-center p-10">

            <h1 className="text-2xl tracking-[0.4em] mb-6">NEXT PROJECT</h1>

            {/* MAIN IMAGE */}
            <div className="w-[24rem] h-[34rem] rounded-[45%] overflow-hidden border border-[#d4af37] shadow-2xl">

              {loading ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-800">
                  Loading...
                </div>
              ) : (
                <img
                  src={mainImage}
                  alt="main skincare"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = skincareFallbacks.main;
                  }}
                />
              )}
            </div>

            <p className="mt-6 tracking-[0.3em] text-sm">
              SAAZGRAM@GMAIL.COM
            </p>

          </main>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;