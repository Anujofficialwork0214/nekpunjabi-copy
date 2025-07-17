'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiPhoneCall } from 'react-icons/fi';


gsap.registerPlugin(ScrollTrigger);

const WhyInvest = () => {

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const itemsRef = useRef([]);
  const gridContainerRef = useRef(null);
  const lineRef = useRef(null);

  const items = [
    { number: '1', title: 'Investment', subtitle: 'Opportunities' },
    { number: '2', title: 'Exclusive', subtitle: 'Opportunities' },
    { number: '3', title: 'Proven', subtitle: 'Track Record' },
    { number: '4', title: 'Expert', subtitle: 'Management' },
  ];


  useEffect(() => {

    const ctx = gsap.context(() => {


      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // --- Paragraph Animation ---
      gsap.from(paragraphRef.current, {
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        delay: 0.2,
        duration: 1,
        ease: 'power3.out',
      });

      // --- Button Animation ---
      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: buttonRef.current,
          start: 'top 80%',
        },
        x: 100,
        opacity: 0,
        delay: 0.4,
        duration: 1,
        ease: 'power3.out',
      });


      itemsRef.current = itemsRef.current.slice(0, items.length);

      itemsRef.current.forEach((el, index) => {
        if (!el) return;

        const [circle, text] = el.children;

        // Animate the circle
        if (circle) {
          gsap.from(circle, {
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              scrub: true,
            },
            // y: -30,
            opacity: 1,
            delay: index * 0.1,
            duration: 0.8,
            ease: 'power3.out',
          });
        }


        if (text) {
          gsap.from(text, {
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
            y: 30,
            opacity: 0,
            delay: 0.2,
            duration: 0.8,
            ease: 'power3.out',
          });
        }
      });

      // Timeline Line Animation 

      if (lineRef.current && gridContainerRef.current) {
        gsap.from(lineRef.current, {
          scrollTrigger: {
            trigger: gridContainerRef.current,
            start: 'top 85%',


          },
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.3,

        });
      }

    }, sectionRef);


    return () => ctx.revert();

  }, [items.length]);


  return (
    <section
      ref={sectionRef}
      className="bg-[#1F1F1F] text-white py-16 px-4 md:px-10  overflow-hidden"
    >
      <div className="flex flex-col md:flex-row justify-between items-center   md:mb-16 text-center md:text-left">
        <div>
          <h2
            ref={headingRef}
            className="text-[28px] md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl font-semibold lg:leading-[70px]  leading-[32px]"
          >
            Why{' '}
            <span className="text-[#F58106] italic ">Invest</span>{' '}
            with us?
          </h2>
          <p
            ref={paragraphRef}
            className=" text-[12px] md:text-[14px] xl:text-[16px] 3xl:text-2xl text-[#FFFFFF] mt-4 md:mt-2 lg:pl-4  leading-[23px] "
          >
            Discover why thousands trust Nek Punjabi Estate <br />
            for reliable and profitable real estate investments.
          </p>
        </div>

        {/* Right Side: Contact Button */}
        <Link
          href="/getAdvice"
          ref={buttonRef}
          className=" hidden md:flex items-center  justify-center gap-2 bg-white text-[#3D3D3D] hover:text-[#5C5C5C] font-medium md:h-[40px] md:w-[170px] lg:h-[52px] lg:w-[203px] rounded-[15.56px]  mt-6 md:mt-0 hover:bg-opacity-90 transition-colors"
        >
          <FiPhoneCall className="text-sm  3xl:text-lg w-[14.35px] h-[13.62px] " />
          <p className="text-[16px]  lg:text-[17.5px] 3xl:text-[20px]">Contact us now </p>
        </Link>
      </div>
      <div className="pt-12">
        <div
          ref={gridContainerRef}
          className="relative px-4 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8"
        >
          <div
            ref={lineRef}
            className=" absolute top-8 h-px bg-[#3D3D3D]  z-0 hidden lg:block"
            style={{ left: '4.5%', right: '20.5%' }}
            aria-hidden="true"
          />
          <div
            ref={lineRef}
            className="absolute top-8 h-px bg-[#3D3D3D] z-0 hidden md:block lg:hidden"
            style={{ left: '10.5%', right: '10.5%' }}
            aria-hidden="true"
          />

          {items.map((item, index) => (
            <div
              key={item.number}
              ref={el => (itemsRef.current[index] = el)}
              className="relative flex flex-col items-center lg:items-start  justify-evenly text-center "
            >
              <span className='rounded-full bg-[#FEE6CC] p-0.5 mb-2 md:mb-4'>
                <div className="w-10 h-10 md:w-14 md:h-14 z-30 rounded-full border-2  border-[#1F1F1F] bg-[#FEE6CC] text-[#F58106] text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center justify-center shadow-md ">
                  {item.number}
                </div>
              </span>
              <p className="text-[10px] md:text-sm lg:text-lg 2xl:text-xl  3xl:text-2xl text-[#FFFFFF]  text-center lg:text-left">
                {item.title}
                <br />
                {item.subtitle}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;