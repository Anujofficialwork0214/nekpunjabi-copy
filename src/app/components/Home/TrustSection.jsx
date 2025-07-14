'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { MdOutlineWifiCalling3 } from "react-icons/md";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TrustSection = () => {
  const mainRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
  const contactRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const ctx = gsap.context(() => {
      if (!isMobile) {

        gsap.from(headingRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            // markers: true, 
          },
        });

        // Paragraph Animation
        gsap.from(paragraphRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: 'top 80%',
          },
        });

        // Image Animation
        gsap.from(imageRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
          },
        });
        gsap.from(contactRef.current, {
          x: 50,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 90%',
          },
        });

        gsap.from(statsRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
          },
        });
      }
    }, mainRef);

    // Cleanup function
    return () => ctx.revert();

  }, []);

  return (

    <section ref={mainRef} className="bg-white py-8 px-4 md:px-16 overflow-hidden">
     <div className="flex flex-col lg:flex-row items-start justify-between gap-10">


        <div className="flex-1 text-center lg:text-left">
          <h2
            ref={headingRef}
            className="text-3xl lg:text-[64px] md:text-4xl font-semibold text-black custom-tablet-trust1 custom-ml-trust   "
          >
            Trust of more than <br />
            <span className="text-[#f7931e] italic font-bold">9 lakh</span> people
          </h2>

          <p
            ref={paragraphRef}
            className="text-sm text-gray-500 mt-4 max-w-md mx-auto lg:mx-0 custom-tablet-trust1 custom-ml-trust "
          >
            Experience the strength of a community that has placed their confidence in us.
          </p>

          {/* Stats */}
     <div
  ref={statsRef}
  className="mt-30 mx-auto lg:mx-0 flex flex-col gap-y-8 px-1 custom-tablet-trust2 custom-ml-trust  "
>
  <div className="flex items-start w-[75%] border-b border-[#E0E0E0] pb-10 gap-x-14 " >
    <h3 className="text-4xl !font-[500] text-[#292929] w-20">500+</h3>
    <p className="text-sm italic text-[#292929] !font-[500] custom-ml-trust8 ">
      Clients <br /> Served
    </p>
  </div>

  <div className="flex items-start w-[75%] border-b border-[#E0E0E0] pb-10 gap-x-14">
    <h3 className="text-4xl !font-[500] text-[#292929] w-20">10+</h3>
    <p className="text-sm italic text-[#292929] !font-[500] custom-ml-trust9">
      Years of <br /> Expertise
    </p>
  </div>

  <div className="flex items-start gap-x-14">
    <h3 className="text-4xl !font-[500] text-[#292929] w-20">400</h3>
    <p className="text-sm italic text-[#292929] !font-[500] custom-ml-trust6">
      Successful <br /> Investments
    </p>
  </div>
</div>


        </div>
        <div
  ref={imageRef}
  className="relative rounded-2xl overflow-hidden shadow-lg w-[581px] h-[602px] custom-tablet-trust3"
>
  <Image
    src="/nek1.jpeg"
    alt="Buildings"
    width={581}
    height={602}
    className="object-cover w-full h-full"
    draggable="false"
  />

  <div
    ref={contactRef}
    className="absolute top-4 right-4 sm:right-4 sm:left-auto sm:translate-x-0 left-1/2 -translate-x-1/2 bg-white text-[#525252] px-4 py-2 rounded-lg shadow flex items-center gap-2 text-sm font-medium"
  >
    <MdOutlineWifiCalling3 className="text-xl" />
    <span>
      Contact us now to get the <br className="hidden sm:block" /> best advice with our experts
    </span>
  </div>
</div>

      </div>
    </section>
  );
};

export default TrustSection;