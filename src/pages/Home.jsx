
import React from "react";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero.jsx";
import OurStorySection from "../components/OurStory.jsx";
import About from "../components/About.jsx";
import Service from "../components/Services.jsx";
import Menu from "../components/Menu.jsx";
import Gallery from "../components/Showcase.jsx";

function Home() {
  return (
    <div>
      <Hero/>
      <OurStorySection/>
      <About />
      <Menu/>
      <Service/>
      <Gallery/>
      <Testimonials />
     
     
    </div>
  );
}

export default Home;
