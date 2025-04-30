'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

import { MdOutlineWifiCalling3 } from "react-icons/md";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TrustSection = () => {
  const mainRef = useRef(null); // Reference for the main section container
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
  const contactRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768; // mobile detect

    // Use gsap.context for automatic cleanup
    const ctx = gsap.context(() => {
      // Only run animations on desktop
      if (!isMobile) {
        // Heading Animation
        gsap.from(headingRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            // markers: true, // Uncomment for debugging trigger points
          },
        });

        // Paragraph Animation
        gsap.from(paragraphRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          delay: 0.2, // Keep delays if desired
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: 'top 80%',
          },
        });

        // Image Animation
        gsap.from(imageRef.current, {
          y: 50, // Or maybe x: 50 for a slide-in from the side?
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
          },
        });

        // Contact Box Animation
        gsap.from(contactRef.current, {
          x: 50,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: contactRef.current, // Trigger based on the box itself
            start: 'top 90%', // Adjust as needed
          },
        });

        // Stats Animation
        gsap.from(statsRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: statsRef.current, // Trigger based on the stats container
            start: 'top 85%',
          },
        });
      }
    }, mainRef); // Scope the context to the main section element

    // Cleanup function
    return () => ctx.revert(); 

  }, []); 

  return (
  
    <section ref={mainRef} className="bg-white py-8 px-4 md:px-16 overflow-hidden "> 
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10  ">
        {/* Left Section */}
        <div className="flex-1 text-center lg:text-left">
          <h2
            ref={headingRef}
            className="text-3xl lg:text-[64px] md:text-4xl font-semibold text-black "
          >
            Trust of more than <br />
            <span className="text-[#f7931e] italic font-bold">9 lakh</span> people
          </h2>

          <p
            ref={paragraphRef}
            className="text-sm text-gray-500 mt-4 max-w-md mx-auto lg:mx-0"
          >
            Experience the strength of a community that has placed their confidence in us.
          </p>

          {/* Stats */}
          <div ref={imageRef} className="relative rounded-2xl mt-4 overflow-hidden shadow-lg h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-md">
          <Image
            src="/nek1.jpeg"
            alt="Buildings"
            width={500}
            height={600}
            className="object-cover w-full h-full"
            draggable="false"
          />

                      <div
  ref={contactRef}
  className="absolute top-4 left-1/2 -translate-x-1/2 bg-white text-[#525252] px-4 py-2 rounded-lg shadow flex items-center gap-2 text-sm font-medium"
>
  <MdOutlineWifiCalling3 className="text-xl" />
  <span className="whitespace-nowrap">
    Contact us now to get the <br /> best advice with our experts
  </span>
</div>

              </div>
        </div>


        <div
  ref={statsRef}
  className="mt-4 lg:mx-0 flex flex-col justify-start gap-y-8 px-2 items-start w-full"
>
  <div className="flex items-center border-b border-gray-300 w-full pb-4">
    <h3 className="text-4xl font-semibold text-[#292929]">500+</h3>
    <p className="ml-8 text-sm italic text-[#292929]">
      Clients <br /> Served
    </p>
  </div>

  <div className="flex items-center border-b  border-gray-300 w-full pb-4">
    <h3 className="text-4xl font-semibold text-[#292929]">10+</h3>
    <p className="ml-8 text-sm italic text-[#292929]">
      Years of <br /> Expertise
    </p>
  </div>

  <div className="flex items-center">
    <h3 className="text-4xl font-semibold text-[#292929]">400</h3>
    <p className="ml-8 text-sm italic text-[#292929]">
      Successful <br /> Investments
    </p>
  </div>
</div>

      </div>
    </section>
    

  );
};

export default TrustSection;