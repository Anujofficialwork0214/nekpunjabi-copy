"use client";
import { useEffect, useState } from "react";
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

import HomePage from "./components/Home/HomePage";
import AboutAnimation from "./components/Animation/AboutAnimation";
import TrustAnimation from "./components/Animation/TrustAnimation";
import InvestAnimation from "./components/Animation/InvestAnimation";
import AdvertiseAnimation from "./components/Animation/AdvertiseAnimation";
import TestinomialAnimation from "./components/Animation/TestimonialAnimation";
import HeroMobile from "./components/Home/HeroMobile";
import About from "./components/Home/About";
import Service from "./components/Home/Service";
import Invest from "./components/Home/Invest";
import Advertise from "./components/Home/Advertise";
import Testinomial from "./components/Home/Testimonial";
import TrustMobile from "./components/Home/TrustMobile";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const handleResize = debounce(() => {
      setIsMobile(window.innerWidth < 768);
    }, 150);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const hash = window.location.hash;
    if (hash) {
      const scrollToHash = () => {
        const el = document.getElementById(hash.substring(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          setTimeout(scrollToHash, 200);
        }
      };

      setTimeout(scrollToHash, 300);
    }
  }, [hasMounted]);

  if (!hasMounted) return null;

  return (
    <>
      {isMobile ? (
        <div key="mobile-view">
          <HeroMobile />
          <AboutAnimation />
          <Service />
          <TrustMobile />
          {/* <Invest /> */}
          <InvestAnimation />
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
