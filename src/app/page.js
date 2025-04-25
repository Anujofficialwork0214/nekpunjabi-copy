"use client";
import InvestAnimation from "./components/Animation/InvestAnimation";
import ServiceAnimation from "./components/Animation/ServiceAnimation";
import TrustAnimation from "./components/Animation/TrustAnimation";
import HomePage from "./components/Home/HomePage";

import AboutAnimation from "./components/Animation/AboutAnimation";
import AdvertiseAnimation from "./components/Animation/AdvertiseAnimation"
import TestinomialAnimation from './components/Animation/TestimonialAnimation'
export default function Home() {
  return (
    <>
      <HomePage />
      <AboutAnimation />
      <ServiceAnimation />
      <TrustAnimation />
      <InvestAnimation />
      <AdvertiseAnimation/>
      <TestinomialAnimation />
      {/* <ContactPage /> */}


    </>
  );
}

