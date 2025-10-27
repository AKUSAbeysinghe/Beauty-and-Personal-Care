import React from 'react';

// Footer and CTA Icons
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

// Image Data
const images = {
  glamour1: 'https://images.unsplash.com/photo-1581338834647-b0fb40704e21?q=80&w=1887&auto=format&fit=crop',
  glamour2: 'https://images.unsplash.com/photo-1620921937406-3c52a65b7216?q=80&w=1887&auto=format&fit=crop',
  glamour3: 'https://images.unsplash.com/photo-1528994368334-f8a964a2b97f?q=80&w=1887&auto=format&fit=crop',
  glamour4: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop',
  glamour5: 'https://images.unsplash.com/photo-1617124345205-1a14587c664b?q=80&w=1887&auto=format&fit=crop',
  glamour6: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop',
  mainProject: 'https://images.unsplash.com/photo-1617922001433-418a1063c16a?q=80&w=1887&auto=format&fit=crop',
};

const PortfolioPage = () => {
  const navLinks = [
    { href: '/#about', label: 'About Us' },
    { href: '/#services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/#contacts', label: 'Contacts' },
  ];

  const socialLinks = [
    { href: 'https://instagram.com/lunaria', label: 'Instagram' },
    { href: 'https://facebook.com/lunaria', label: 'Facebook' },
    { href: 'https://twitter.com/lunaria', label: 'Twitter' },
  ];

  return (
    <div className="min-h-screen bg-[#957C62] font-serif text-[#4a4a4a] flex flex-col">
      {/* Main Content Section with Top Spacing */}
      <div className="flex flex-col md:flex-row w-full flex-grow pt-16">
        {/* Left Sidebar Column */}
        <aside className="w-full md:w-1/3 lg:w-1/4 flex flex-col items-center gap-8 p-8 md:py-16 border-b-2 md:border-b-0 md:border-r-2 border-gray-200 bg-[#957C62]">
          {/* Top two circular images */}
          <div className="flex gap-4">
            <img 
              src={images.glamour1} 
              alt="Model in sunglasses" 
              className="w-28 h-28 rounded-full object-cover shadow-sm" 
            />
            <img 
              src={images.glamour2} 
              alt="Woman holding a handbag" 
              className="w-28 h-28 rounded-full object-cover shadow-sm" 
            />
          </div>

          <h2 className="text-sm tracking-[0.2em] text-white">GLAMOUR FW20/21</h2>
          
          {/* Rectangular image */}
          <img 
            src={images.glamour3} 
            alt="Two models in traditional attire" 
            className="w-52 h-auto object-cover shadow-sm" 
          />
          
          {/* Two vertical images */}
          <div className="flex gap-4">
            <img 
              src={images.glamour4} 
              alt="Man in black coat in desert" 
              className="w-28 h-40 object-cover shadow-sm" 
            />
            <img 
              src={images.glamour5} 
              alt="Man standing near a domed building" 
              className="w-28 h-40 object-cover shadow-sm" 
            />
          </div>
          
          {/* Bottom circular image */}
          <img 
            src={images.glamour6} 
            alt="Woman's portrait" 
              className="w-28 h-28 rounded-full object-cover shadow-sm" 
            />
        </aside>

        {/* Main Content Area */}
        <main className="w-full md:w-2/3 lg:w-3/4 flex flex-col items-center justify-between p-8 md:p-16 bg-[#6B4E31]">
          <h1 className="text-xl tracking-[0.3em] font-light text-white">NEXT PROJECT</h1>
          
          {/* Large oval image in the center */}
          <div className="w-[22rem] h-[32rem] rounded-[50%] overflow-hidden my-8 shadow-md rounded-lg">
            <img 
              src={images.mainProject} 
              alt="Woman in a beige trench coat against a wall of flowers" 
              className="w-full h-full object-cover" 
            />
          </div>

          <p className="text-base tracking-[0.3em] font-light text-white">SAAZGRAM@GMAIL.COM</p>
        </main>
      </div>

    

      

    </div>
  );
};

export default PortfolioPage;