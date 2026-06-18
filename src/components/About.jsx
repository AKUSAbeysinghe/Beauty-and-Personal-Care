import React from 'react';
// import OurStory from "../components/OurStory.jsx";

/**
 * A small helper component for the styled "ABOUT US" text annotation.
 * This makes the main component cleaner and easier to read.
 */
const AboutUsAnnotation = () => {
  return (
    <span 
      className="relative -top-3 mx-1 inline-flex h-0 flex-col text-center align-middle text-[10px] font-semibold uppercase leading-none tracking-wider text-black sm:-top-4"
      aria-hidden="true"
    >
      <span>’</span>
      <span className="my-px">About Us</span>
      <span>’</span>
    </span>
  );
};

/**
 * The main "About Us" section component.
 * To use this, ensure you have Tailwind CSS configured in your project.
 */
const AboutSection = () => {
  return (
    <section className="bg-white font-sans">
     {/* <OurStory/>  */}
      <div className="mx-auto max-w-5xl py-20 px-4 text-center sm:py-24 md:py-32">
        {/* Main Heading */}
        <h2 className="text-5xl font-extrabold uppercase leading-none tracking-tighter text-black sm:text-6xl md:text-7xl">
          WE
          <AboutUsAnnotation />
          HELP CREATE
          <br />
          MOMENTS OF BEAUTY
          <br />
          FOR YOU
          <AboutUsAnnotation />
          AND
          <br />
          YOUR GLOW
          <AboutUsAnnotation />
        </h2>

        {/* Description Paragraph */}
        <p className="mx-auto mt-12 max-w-2xl text-base leading-relaxed text-black md:text-lg">
          Lunaria is a premium beauty studio for women, offering expert care for skin, body, and hair. We provide personalized consultations to select treatments that precisely address each client's individual needs.
        </p>

        {/* Read More Link */}
        <a
          href="#"
          className="mt-10 inline-block text-base font-medium tracking-wide text-black underline underline-offset-4 transition-colors hover:text-gray-600"
        >
          Read More
        </a>
      </div>
    </section>
  );
};

export default AboutSection;