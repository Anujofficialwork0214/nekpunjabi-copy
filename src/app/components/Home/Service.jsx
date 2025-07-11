"use client";
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion'

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

const ITEM_VERTICAL_SPACE = 110;
const SCROLL_DISTANCE_PER_ITEM = 250;
const SHRINK_TARGET_SCALE = 0.85;
const SHRINK_TARGET_Y = -150;
const SHRINK_TARGET_OPACITY = 1;
const EXTRA_SCROLL_FOR_SHRINK = 800; // px

const RealEstateServices = () => {
  const sectionRef = useRef(null);
  const itemsWrapperRef = useRef(null);
  const shrinkRef = useRef(null);
  const tlRef = useRef();

  useEffect(() => {
    if (!sectionRef.current || !itemsWrapperRef.current || !shrinkRef.current) return;

    const totalItems = services.length;
    const totalYMovement = -((totalItems - 1) * ITEM_VERTICAL_SPACE);
    const itemsScrollDuration = totalItems * SCROLL_DISTANCE_PER_ITEM;
    const totalScrollDuration = itemsScrollDuration + EXTRA_SCROLL_FOR_SHRINK;

    gsap.set(itemsWrapperRef.current, { y: 0 });

    const ctx = gsap.context(() => {
      tlRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          pinSpacing: 'margin',
          scrub: 1.0,
          start: 'top top',
          end: `+=${totalScrollDuration}`,
          invalidateOnRefresh: true,
        },
      });

      // 1. Scroll items up
      tlRef.current.to(itemsWrapperRef.current, {
        y: totalYMovement,
        ease: 'none',
        duration: itemsScrollDuration / totalScrollDuration,
      }, 0);

      // 2. Shrink the inner content after items finish scrolling
      tlRef.current.to(shrinkRef.current, {
        scale: SHRINK_TARGET_SCALE,
        y: SHRINK_TARGET_Y,
        opacity: SHRINK_TARGET_OPACITY,
        ease: 'none',
        transformOrigin: "top center",
        duration: EXTRA_SCROLL_FOR_SHRINK / totalScrollDuration,
      }, itemsScrollDuration / totalScrollDuration);

    }, sectionRef);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      if (tlRef.current) {
        tlRef.current.kill();
      }
      ctx.revert();
    };
  }, []);

  return (
    <>
      <section 
        id='services'
        ref={sectionRef}
        className="scroll-mt-20 w-full overflow-hidden -mt-1"
        style={{
          willChange: 'transform, opacity',
          
        }}
      >
        <div 
        ref={shrinkRef}
        >
        
          <div
          style={{
          willChange: 'transform, opacity',
          background: "linear-gradient(180deg, #568FC7 0%, #8DB5DB 56%, #C5E1FB 100%)"
        }}
           className=" px-6 md:px-20 py-20 relative z-10  rounded-b-3xl pointer-events-none  w-full ">

             <img
            src="/nek2.png"
            alt="Decorative Real Estate visual"
            className="absolute bottom-0 right-0 w-[70%] md:w-[60%] lg:w-[70%] h-auto opacity-40 pointer-events-none z-0 rounded-b-3xl "
          />
            <div className="mb-16 flex flex-col items-center text-center sm:items-start sm:text-left xl:-ml-7  2xl:-ml-10 ">
            
              <div className="text-sm font-semibold text-white mb-2 tracking-widest flex items-center gap-2  ">
              
                <div />
                <motion.div
                initial={{ y: 50, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                 viewport={{ once: true }}
                 className='-ml-2  flex items-center gap-2 !font-[500]'><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.4" y="0.4" width="17.2" height="17.2" rx="8.6" stroke="white" stroke-width="0.8"/>
                <rect x="3" y="3" width="12" height="12" rx="6" fill="#F58106"/>
                </svg>
                </motion.div>
                  <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                 viewport={{ once: true }}
                   className=' !font-[500]'> SERVICES</motion.div>
              </div>
              <motion.h2 
               initial={{ y: 10, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
                 viewport={{ once: true }}
              className="text-4xl font-medium lg:font-semibold text-white mb-4 !font-[600] mt-4">
                Unlock Your Real Estate Potential
              </motion.h2>
              <motion.p
               initial={{ y: -10, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
                 viewport={{ once: true }}
               className="text-white max-w-2xl">
                From groundbreaking investments to crafting your dream home, we’re with you every step of the way.
              </motion.p>
            </div>

           <div className="relative h-[500px] mt-10 overflow-hidden xl:-ml-10 2xl:-ml-13 ml-[-12px] sm:ml-0">

              {/* Vertical Line */}
              <motion.div 
               initial={{ y: 50, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                 viewport={{ once: true }}
              className="absolute top-0 left-4 h-full w-[2px] bg-white opacity-50 z-0 space-x-4" />

              <motion.div 
               initial={{ y: 50, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
                 viewport={{ once: true }}
              ref={itemsWrapperRef} className="absolute top-0 left-0 w-full gap-4">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="relative w-full mb-6 py-2 md:pl-16 pl-10 service-item gap-x-4  "
                    style={{ minHeight: `${ITEM_VERTICAL_SPACE}px` }}
                  >
                    {/*  Marker */}
                    <div className="absolute left-3 top-2 w-3 h-3 bg-white rotate-45 z-10 " />
                    <h3 className="text-white font-medium text-xl mb-2 italic !font-[600] -mt-2">{service.title}</h3>
                    <p className="text-white max-w-xl ">{service.description}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        
        </div>
      </section>
      {/* Spacer to allow the section to move up and not disappear abruptly */}
    
    </>
  );
};

export default RealEstateServices;