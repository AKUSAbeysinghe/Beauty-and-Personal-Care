import React from 'react';
import TestB1 from "../assets/Testimonials/Before1.jpg";
import TestA1 from "../assets/Testimonials/After1.jpg";
import TestB2 from "../assets/Testimonials/Before2.jpg";
import TestA2 from "../assets/Testimonials/After2.jpg";

// --- Data ---
const testimonials = [
  {
    id: 1,
    rating: 4.9,
    review: "My favorite stress reliever. There's nothing like ending the month with a visit to Lunaria. The atmosphere is so calming, the staff are always attentive, and I leave feeling like a new person. If I could come every week, I would!",
    images: [TestB1, TestA1], // Fixed: Use direct image references
    name: 'Mellisa P.',
    service: 'Enzyme Exfoliation',
    date: 'Jun 28th, 2025',
  },
  {
    id: 2,
    rating: 4.9,
    review: "My skin has never looked this radiant. One facial at Lunaria erased the dullness and gave me the confidence to go makeup-free. The care felt truly personal — I'm already booking my next visit.",
    images: [TestB2, TestA2], // Fixed: Use direct image references
    name: 'Sophie L.',
    service: 'Glow Revival Facial',
    date: 'Jul 6th, 2025',
  },
];

// --- Icon Components ---
const IconStar = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
  </svg>
);

const IconArrowRight = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

// --- Annotation Component for Heading ---
const HeadingAnnotation = ({ text }) => (
  <span className="relative -top-3 mx-1 inline-flex h-0 flex-col text-left align-middle text-[10px] font-semibold uppercase leading-none tracking-wider text-black sm:-top-4">
    <span>’</span>
    <span className="my-px whitespace-nowrap">{text}</span>
  </span>
);

// --- Testimonial Card Component ---
const TestimonialCard = ({ testimonial }) => (
  <div className="flex flex-col border border-gray-200 p-6 sm:p-8">
    <div className="flex items-center">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <IconStar key={i} className="h-5 w-5 text-black" />
        ))}
      </div>
      <span className="ml-3 text-sm font-bold">{testimonial.rating}</span>
    </div>
    <p className="mt-6 flex-grow text-base text-gray-800">{testimonial.review}</p>
    <div className="mt-6 flex gap-3">
      <img src={testimonial.images[0]} alt={`Before shot for ${testimonial.name}`} className="h-24 w-24 object-cover" />
      <img src={testimonial.images[1]} alt={`After shot for ${testimonial.name}`} className="h-24 w-24 object-cover" />
    </div>
    <div className="mt-6">
      <p className="font-bold text-black">{testimonial.name}</p>
      <p className="text-sm text-gray-600">
        {testimonial.service}, {testimonial.date}
      </p>
    </div>
  </div>
);

// --- Main Section Component ---
const TestimonialsSection = () => {
  return (
    <section className="bg-white font-sans">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h2 className="text-center text-5xl font-black uppercase leading-none tracking-tighter text-black sm:text-6xl md:text-left md:text-7xl">
          REAL
          <HeadingAnnotation text="4.9 AVERAGE RATING" />
          RESULTS
          <br />
          <span className="md:ml-20">NO FILTERS NO RETOUCHING</span>
          <br />
          JUST
          <HeadingAnnotation text="1.456K REVIEWS" />
          REAL PEOPLE
        </h2>

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="mt-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="block h-2 w-2 bg-black"></span>
            <span className="block h-2 w-2 rounded-full bg-gray-300"></span>
            <span className="block h-2 w-2 rounded-full bg-gray-300"></span>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-black transition-colors hover:bg-gray-100">
            <span className="sr-only">Next testimonial</span>
            <IconArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;