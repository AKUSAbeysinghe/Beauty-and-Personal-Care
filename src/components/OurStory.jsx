import React from 'react';
import AboutB from "../assets/Main/M.jpg";




const LunariaStorySection = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center py-16 text-white md:py-24 lg:py-32"
      style={{ backgroundImage: `url(${AboutB})` }} // Use template literal with imported variable
    >
      {/* Overlay for better text readability */}
   
      <div className="absolute inset-0 bg-stone-800 bg-opacity-70"></div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-24">
        {/* Left Column - Empty for background image */}
        <div className="hidden lg:block"></div>

        {/* Right Column - Text Content */}
        <div>
          <h2 className="text-4xl font-extrabold uppercase leading-tight tracking-tight md:text-5xl lg:text-6xl">
            THE STORY
            <br />
            OF LUNARIA
          </h2>

          <p className="mt-8 max-w-lg text-base md:text-lg">
            Lunaria was born from a simple belief: beauty is most powerful when
            it reflects how you feel inside.
          </p>

          <p className="mt-6 max-w-lg text-base md:text-lg">
            Inspired by nature, light, and the soft rhythm of self-care, our
            studio was created as a gentle space where women could reconnect
            with themselves — not just enhance their appearance.
          </p>

          <h3 className="mt-12 text-sm font-semibold uppercase tracking-wider text-gray-300 md:text-base">
            LUNARIA IN NUMBERS
          </h3>

          {/* Stats Grid */}
          <div className="mt-6 grid grid-cols-3 gap-4 text-base md:text-lg">
            <div>
              <p className="text-gray-400">Years of experience:</p>
              <p className="text-3xl font-bold md:text-4xl">5</p>
            </div>
            <div>
              <p className="text-gray-400">Team:</p>
              <p className="text-3xl font-bold md:text-4xl">16</p>
            </div>
            <div>
              <p className="text-gray-400">Area:</p>
              <p className="text-3xl font-bold md:text-4xl">465 SQ.M.</p>
            </div>
          </div>

          <a
            href="#read-more"
            className="mt-10 inline-block text-base font-medium tracking-wide text-white underline underline-offset-4 transition-colors hover:text-gray-300"
          >
            Read More
          </a>
        </div>
      
      </div>
      
    </section>
    
  );
 
};

export default LunariaStorySection;