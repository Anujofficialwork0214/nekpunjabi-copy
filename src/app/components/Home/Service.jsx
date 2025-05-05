"use client";
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const services = [
  {
    title: 'Real Estate Consulting & Advisory',
    description: 'Navigate the market with confidence. We provide expert guidance tailored to your unique goals, ensuring informed decisions and optimal outcomes.',
  },
  {
    title: 'Market Analysis and Property Valuation',
    description: 'Navigate the market with confidence. We provide expert guidance tailored to your unique goals, ensuring informed decisions and optimal outcomes.',
  },
  {
    title: 'Property Management Solutions',
    description: 'Navigate the market with confidence. We provide expert guidance tailored to your unique goals, ensuring informed decisions and optimal outcomes.',
  },
  {
    title: 'Underwriting Projects with top Builders & Realtors',
    description: 'Navigate the market with confidence. We provide expert guidance tailored to your unique goals, ensuring informed decisions and optimal outcomes.',
  },
  {
    title: 'Real Estate Financing & Legal Support',
    description: 'Navigate the market with confidence. We provide expert guidance tailored to your unique goals, ensuring informed decisions and optimal outcomes.',
  },
  {
    title: 'Interior Design & Home Aesthetics',
    description: 'Navigate the market with confidence. We provide expert guidance tailored to your unique goals, ensuring informed decisions and optimal outcomes.',
  },
  {
    title: 'Real Estate Development & Construction Education',
    description: 'Navigate the market with confidence. We provide expert guidance tailored to your unique goals, ensuring informed decisions and optimal outcomes.',
  },
  {
    title: 'DIY Home Improvement & Renovation Guide',
    description: 'Navigate the market with confidence. We provide expert guidance tailored to your unique goals, ensuring informed decisions and optimal outcomes.',
  },
];


// --- Constants ---
const ITEM_VERTICAL_SPACE = 110;
const SCROLL_DISTANCE_PER_ITEM = 250;
// Define the viewport percentage range for the fade-in animation
const FADE_IN_START_VP = 90; // Start fade-in when item top reaches 90% from viewport top
const FADE_IN_END_VP = 65;   // Finish fade-in (fully opaque) when item top reaches 65% from viewport top

// --- Component ---
const RealEstateServices = () => {
  const sectionRef = useRef(null);
  const itemsWrapperRef = useRef(null);
  const tlRef = useRef(); // Ref for the main timeline

  useEffect(() => {
    if (!sectionRef.current || !itemsWrapperRef.current) return;

    const totalItems = services.length;
    const totalYMovement = -((totalItems - 1) * ITEM_VERTICAL_SPACE);
    const itemsScrollDuration = totalItems * SCROLL_DISTANCE_PER_ITEM;

    const serviceItems = gsap.utils.toArray(itemsWrapperRef.current.children);

    // Set initial state: all items start invisible
    gsap.set(serviceItems, { opacity: 0 });
    gsap.set(itemsWrapperRef.current, { y: 0 }); // Ensure wrapper starts at y=0

    const ctx = gsap.context(() => {
      // 1. Main Timeline: Pins section, scrolls wrapper
      tlRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          pinSpacing: 'margin',
          scrub: 1.0,
          start: 'top top',
          end: `+=${itemsScrollDuration}`,
          invalidateOnRefresh: true,
        },
      });

      tlRef.current.to(itemsWrapperRef.current, {
        y: totalYMovement,
        ease: 'none',
      }, 0);

      // 2. Individual Item Fade-In Animations
      serviceItems.forEach((item) => {
        // Animate each item TO opacity 1
        gsap.to(item, {
          opacity: 1, 
          ease: 'none',
          scrollTrigger: {
            trigger: item,
            containerAnimation: tlRef.current,
            start: `top ${FADE_IN_START_VP}%`, 
            end: `top ${FADE_IN_END_VP}%`,     
            scrub: 0.5, 
            invalidateOnRefresh: true,

          }
        });
      });

    }, sectionRef);

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      if (tlRef.current) {
        tlRef.current.kill();
      }
      ctx.revert();
    };
  }, []);


  return (
    <section 
      id='services'
     
      ref={sectionRef}
      className="scroll-mt-20 w-full relative bg-gradient-to-b from-[#6c9dce] to-blue-100 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-20 py-20 relative z-10">
  <div className="mb-16 flex flex-col items-center text-center sm:items-start sm:text-left">

           <div className="text-sm font-semibold text-white mb-2 tracking-widest flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-400 rounded-full" />
            SERVICES
          </div>
          <h2 className="text-4xl font-medium lg:font-semibold text-white mb-4">
            Unlock Your Real Estate Potential
          </h2>
          <p className="text-white max-w-2xl">
            From groundbreaking investments to crafting your dream home, we’re with you every step of the way.
          </p>
        </div>

        
        <div className="relative h-[500px] mt-10 overflow-hidden">
          {/* Vertical Line */}
          <div className="absolute top-0 left-4 h-full w-[2px] bg-white opacity-50 z-0" />

        
          <div ref={itemsWrapperRef} className="absolute top-0 left-0 w-full">
            {services.map((service) => (
              <div
                key={service.title}
                className="relative w-full mb-6 py-2 pl-10 service-item"
                style={{ minHeight: `${ITEM_VERTICAL_SPACE}px` }}
              >
                {/*  Marker */}
                <div className="absolute left-3 top-2 w-3 h-3 bg-white rotate-45 z-10" />
                <h3 className="text-white font-medium text-xl mb-2 italic">{service.title}</h3>
                <p className="text-white max-w-xl ">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        src="/nek2.png"
        alt="Decorative Real Estate visual"
        className="absolute bottom-0 right-0 w-[70%] md:w-[60%] lg:w-[70%] h-auto opacity-40 pointer-events-none z-0"
      />
    </section>
  );
};

export default RealEstateServices;