"use client";
import InvestAnimation from "./Components/Animation/InvestAnimation";
import ServiceAnimation from "./Components/Animation/ServiceAnimation";
import TrustAnimation from "./Components/Animation/TrustAnimation";
import HomePage from "./components/Home/HomePage";

import Advertise from "./components/Home/Advertise";
import Testimonial from "./components/Home/Testimonial";
import ContactPage from "./components/Home/ContactPage";
import AboutAnimation from "./components/Animation/AboutAnimation";
import AdvertiseAnimation from "./components/Animation/"
export default function Home() {
  return (
    <>
      <HomePage />
      <AboutAnimation />
      <ServiceAnimation />
      <TrustAnimation />
      <InvestAnimation />
      <AdvertiseAnimation/>
      <Testimonial />
      <ContactPage />


    </>
  );
}

