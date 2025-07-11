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
    description: 'Understand market trends and accurate property valuations tailored to your needs.',
  },
  {
    title: 'Property Management Solutions',
    description: 'Let us handle the day-to-day operations, so you can enjoy peace of mind.',
  },
  {
    title: 'Investment Portfolio Optimization',
    description: 'Strategically diversify and grow your assets with real estate investment planning.',
  },
  {
    title: 'Legal and Regulatory Compliance',
    description: 'Stay compliant and secure with our legal expertise throughout your journey.',
  },
];

const SHRINK_TARGET_SCALE = 0.85;
const SHRINK_TARGET_Y = -150;
const SHRINK_TARGET_OPACITY = 1;

const ITEM_VERTICAL_SPACE = 110;
const SCROLL_DISTANCE_PER_ITEM = 250;
const EXTRA_SCROLL_FOR_SHRINK = 800; // Adjust for more/less scroll for shrink

const ServiceAnimation = ({ onComplete }) => {
  const sectionRef = useRef(null);
  const itemsWrapperRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !itemsWrapperRef.current) {
      return;
    }

    const totalItems = services.length;
    const totalYMovement = -((totalItems - 1) * ITEM_VERTICAL_SPACE);
    const itemsScrollDuration = totalItems * SCROLL_DISTANCE_PER_ITEM;
    const totalScrollDuration = itemsScrollDuration + EXTRA_SCROLL_FOR_SHRINK;

    gsap.set(itemsWrapperRef.current, { y: 0 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          pinSpacing: 'margin',
          scrub: 1.5,
          start: 'top top',
          end: `+=${totalScrollDuration}`,
          invalidateOnRefresh: true,
        },
      });

      // Phase 1: Move items up as you scroll
      tl.to(
        itemsWrapperRef.current,
        {
          y: totalYMovement,
          ease: 'none',
        },
        0
      );

      // Phase 2: Shrink the entire section after items finish scrolling
      tl.to(
        sectionRef.current,
        {
          scale: SHRINK_TARGET_SCALE,
          y: SHRINK_TARGET_Y,
          opacity: SHRINK_TARGET_OPACITY,
          ease: 'none',
          transformOrigin: "top center",
        },
        itemsScrollDuration / totalScrollDuration // Start shrink after items scroll
      );
    }, sectionRef);

    

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
      ctx.revert();
    };
  }, [onComplete]);

  const maskStyle = {
    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50px, rgba(0,0,0,1) 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50px, rgba(0,0,0,1) 100%)',
  };

  return (
    <section
      ref={sectionRef}
      className="w-full relative rounded-b-2xl overflow-hidden bg-black"
      style={{
        willChange: 'transform, opacity',
        background: "linear-gradient(180deg, #568FC7 0%, #8DB5DB 56%, #C5E1FB 100%)"
      }}
    >
      <div className="container mx-auto px-6 md:px-20 py-20 relative z-10 ">
        <div className="mb-16 flex flex-col items-center text-center sm:items-start sm:text-left ">
          <div className="text-sm font-semibold text-white mb-2 tracking-widest flex items-center gap-2 ">
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

        <div className="relative h-[450px] mt-10 overflow-hidden" style={maskStyle}>
          <div className="absolute top-0 -left-[16px] lg:-left-[16px] sm:-left-[20px] h-full w-[2px] bg-white opacity-50 z-0" />

          <div ref={itemsWrapperRef} className="absolute top-0 left-0 w-full">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="relative w-full mb-4 py-2 pl-4"
                style={{ minHeight: `${ITEM_VERTICAL_SPACE}px` }}
              >
                <div className="absolute -left-[23px] top-2 w-4 h-4 bg-white rotate-45 z-10" />
                <h3 className="text-white font-semibold text-xl mb-2">{service.title}</h3>
                <p className="text-white max-w-xl">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <img
        src="/nek2.png"
        alt="Decorative Real Estate visual"
        className="absolute bottom-0 right-0 w-[70%] md:w-[60%] lg:w-[50%] h-auto opacity-40 pointer-events-none z-0"
      />
    </section>
  );
};

export default ServiceAnimation;