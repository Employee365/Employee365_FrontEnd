import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Partner from "./Partner";
import Demo from "./Demo";
import Possibilities from "./Possibilities";
import Footer from "./Footer";
import Testimonial from "./Testimonial";
import RDemo from "./RDemo";

const LandingPage = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <HeroSection />
        <Partner />
        <Demo />
        <Possibilities />
        <Testimonial />
        <RDemo />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
