"use client";
import { useEffect, useState } from "react";
import HomePage from "./components/Home/HomePage";

import AboutAnimation from "./components/Animation/AboutAnimation";
import ServiceAnimation from "./components/Animation/ServiceAnimation";
import TrustAnimation from "./components/Animation/TrustAnimation";
import InvestAnimation from "./components/Animation/InvestAnimation";
import AdvertiseAnimation from "./components/Animation/AdvertiseAnimation";
import TestinomialAnimation from "./components/Animation/TestimonialAnimation";
import About from "./components/Home/About"; 
import Service from "./components/Home/Service"; 
import TrustSection from "./components/Home/TrustSection";
import Invest from "./components/Home/Invest"; 
import Advertise from "./components/Home/Advertise";
import Testinomial from "./components/Home/Testimonial"; 
import HeroMobile from "./components/Home/HeroMobile";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // page load hone ke saath bhi check ho jaye
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        // Mobile view
        <>
          <HeroMobile />
          <About />
          <Service />
          <TrustSection />
          <Invest />
          <Advertise />
          <Testinomial/>
      
        </>
      ) : (
        // Desktop view
        <>
          <HomePage />
          <AboutAnimation />
          <Service />
          <TrustAnimation />
          <InvestAnimation />
          <AdvertiseAnimation />
          <TestinomialAnimation />
        </>
      )}
    </>
  );
}
