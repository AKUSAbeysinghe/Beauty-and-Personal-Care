
import React from "react";

// import AboutUs from "../components/About";
// import Visionair from "../components/VisionMission";
// import Specifications from "../components/Specifications";
// import Specificationair from "../components/Specificationiar";
// import ProductShowcase from "../components/Menu";
// import Features from "../components/OurChefs.jsx";
import Testimonials from "../components/Testimonials";
// import Galary from "./FoodGalary";
// import End from "../components/VisitUs.jsx";
// import CaseStories from "../components/ProductShowcase.jsx";
// import ChefSpecial from "../components/MenuItem.jsx";
import Hero from "../components/Hero.jsx";
import OurStorySection from "../components/OurStory.jsx";
// import CheafsImpression from "../components/ChefImpression.jsx";
// import ChefImpressiont from "../components/ChefImpressiont.jsx";
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
     
      {/* <ProductShowcase /> */}
      {/* <Features /> */}
      {/* <Galary /> */}
      {/* <ChefSpecial/> */}
      {/* <CaseStories/> */}
{/*     
      <CheafsImpression/> */}
      {/* <ChefImpressiont/> */}
        <Testimonials />
      {/* <End/> */}
     
    </div>
  );
}

export default Home;
