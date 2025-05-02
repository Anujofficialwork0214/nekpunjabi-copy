
"use client";
import { useEffect, useState } from "react";
import HomePage from "./components/Home/HomePage";
import AboutAnimation from "./components/Animation/AboutAnimation";

import TrustAnimation from "./components/Animation/TrustAnimation";
import InvestAnimation from "./components/Animation/InvestAnimation";
import AdvertiseAnimation from "./components/Animation/AdvertiseAnimation";
import TestinomialAnimation from "./components/Animation/TestimonialAnimation";
import HeroMobile from "./components/Home/HeroMobile";
import About from "./components/Home/About";
import Service from "./components/Home/Service";

import TrustMobile from "./components/Home/TrustMobile";
import Invest from "./components/Home/Invest";
import Advertise from "./components/Home/Advertise";
import Testinomial from "./components/Home/Testimonial";
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true); 

   
    const handleResize = debounce(() => {
       
        setIsMobile(window.innerWidth < 768);
        console.log("Resized, isMobile:", window.innerWidth < 768); 
    }, 150); 

   
    handleResize(); 

    window.addEventListener("resize", handleResize);

    // Cleanup 
    return () => {
        window.removeEventListener("resize", handleResize);
      
    }
  }, []); 

  if (!hasMounted) {
    return null; 
  }

  return (
    <>
      {isMobile ? (
        <div key="mobile-view"> 
          <HeroMobile />
          <About />
          <Service />
          <TrustMobile />
          <Invest />
          <Advertise />
          <Testinomial />
        </div>
      ) : (
        <div key="desktop-view"> 
          <HomePage />
          <AboutAnimation />
          <Service /> 
          <TrustAnimation />
          <InvestAnimation />
          <AdvertiseAnimation />
          <TestinomialAnimation />
        </div>
      )}
    </>
  );
}