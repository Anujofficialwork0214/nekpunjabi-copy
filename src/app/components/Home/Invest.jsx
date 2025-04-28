// 'use client';

// import { FiPhoneCall } from 'react-icons/fi';

// const WhyInvest = () => {
//   const items = [
//     { number: '1', title: 'Investment', subtitle: 'Opportunities' },
//     { number: '2', title: 'Exclusive', subtitle: 'Opportunities' },
//     { number: '3', title: 'Proven', subtitle: 'Track Record' },
//     { number: '4', title: 'Expert', subtitle: 'Management' },
//   ];

//   return (
//     <section className="bg-[#1c1c1c] text-white py-16 px-4 md:px-20">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
//         <div>
//           <h2 className="text-4xl md:text-5xl font-semibold">
//             Why <span className="text-[#f7931e] italic font-bold">Invest</span> with us?
//           </h2>
//           <p className="text-sm text-gray-300 mt-4 max-w-md">
//             Discover why thousands trust Nek Punjabi Estate <br />
//             for reliable and profitable real estate investments.
//           </p>
//         </div>

//         <button className="flex items-center gap-2 bg-white text-black font-medium py-2 px-4 rounded-lg mt-6 md:mt-0">
//           <FiPhoneCall className="text-sm" />
//           Contact us now
//         </button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16 border-t border-gray-600 pt-12">
//         {items.map((item) => (
//           <div key={item.number} className="flex flex-col items-center text-center">
//             <div className="w-12 h-12 rounded-full border-2 border-[#f7931e] bg-white text-[#f7931e] font-bold text-lg flex items-center justify-center shadow-md mb-4">
//               {item.number}
//             </div>
//             <p className="text-sm">
//               {item.title} <br /> {item.subtitle}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyInvest;



// 'use client';

// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { FiPhoneCall } from 'react-icons/fi';

// const WhyInvest = () => {
//   const headingRef = useRef(null);
//   const paragraphRef = useRef(null);
//   const buttonRef = useRef(null);
//   const itemsRef = useRef([]);

//   const items = [
//     { number: '1', title: 'Investment', subtitle: 'Opportunities' },
//     { number: '2', title: 'Exclusive', subtitle: 'Opportunities' },
//     { number: '3', title: 'Proven', subtitle: 'Track Record' },
//     { number: '4', title: 'Expert', subtitle: 'Management' },
//   ];

//   useEffect(() => {
//     gsap.from(headingRef.current, {
//       y: 50,
//       opacity: 0,
//       duration: 1,
//       ease: 'power3.out',
//     });

//     gsap.from(paragraphRef.current, {
//       y: 30,
//       opacity: 0,
//       delay: 0.4,
//       duration: 1,
//       ease: 'power3.out',
//     });

//     gsap.from(buttonRef.current, {
//       x: 100,
//       opacity: 0,
//       delay: 0.6,
//       duration: 1,
//       ease: 'power3.out',
//     });

//     itemsRef.current.forEach((el, index) => {
//       const [circle, text] = el.children;

//       gsap.from(circle, {
//         y: -30,
//         opacity: 0,
//         delay: 0.8 + index * 0.2,
//         duration: 0.8,
//         ease: 'power3.out',
//       });

//       gsap.from(text, {
//         y: 30,
//         opacity: 0,
//         delay: 1 + index * 0.2,
//         duration: 0.8,
//         ease: 'power3.out',
//       });
//     });
//   }, []);

//   return (
//     <section className="bg-[#1c1c1c] text-white py-16 px-4 md:px-20">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
//         <div>
//           <h2
//             ref={headingRef}
//             className="text-4xl md:text-5xl font-semibold"
//           >
//             Why{' '}
//             <span className="text-[#f7931e] italic font-bold">Invest</span>{' '}
//             with us?
//           </h2>
//           <p
//             ref={paragraphRef}
//             className="text-sm text-gray-300 mt-4 max-w-md"
//           >
//             Discover why thousands trust Nek Punjabi Estate <br />
//             for reliable and profitable real estate investments.
//           </p>
//         </div>

//         <button
//           ref={buttonRef}
//           className="flex items-center gap-2 bg-white text-black font-medium py-2 px-4 rounded-lg mt-6 md:mt-0"
//         >
//           <FiPhoneCall className="text-sm" />
//           Contact us now
//         </button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16 border-t border-gray-600 pt-12">
//         {items.map((item, index) => (
//           <div
//             key={item.number}
//             className="flex flex-col items-center text-center"
//             ref={(el) => (itemsRef.current[index] = el)}
//           >
//             <div className="w-12 h-12 rounded-full border-2 border-[#f7931e] bg-white text-[#f7931e] font-bold text-lg flex items-center justify-center shadow-md mb-4">
//               {item.number}
//             </div>
//             <p className="text-sm">
//               {item.title} <br /> {item.subtitle}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyInvest;
// 'use client';

// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { FiPhoneCall } from 'react-icons/fi';

// gsap.registerPlugin(ScrollTrigger);

// const WhyInvest = () => {
//   const sectionRef = useRef(null);
//   const headingRef = useRef(null);
//   const paragraphRef = useRef(null);
//   const buttonRef = useRef(null);
//   const itemsRef = useRef([]);

//   const items = [
//     { number: '1', title: 'Investment', subtitle: 'Opportunities' },
//     { number: '2', title: 'Exclusive', subtitle: 'Opportunities' },
//     { number: '3', title: 'Proven', subtitle: 'Track Record' },
//     { number: '4', title: 'Expert', subtitle: 'Management' },
//   ];

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Heading
//       gsap.from(headingRef.current, {
//         scrollTrigger: {
//           trigger: headingRef.current,
//           start: 'top 80%',
//         },
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         ease: 'power3.out',
//       });

//       // Paragraph
//       gsap.from(paragraphRef.current, {
//         scrollTrigger: {
//           trigger: paragraphRef.current,
//           start: 'top 80%',
//         },
//         y: 30,
//         opacity: 0,
//         delay: 0.2,
//         duration: 1,
//         ease: 'power3.out',
//       });

//       // Button
//       gsap.from(buttonRef.current, {
//         scrollTrigger: {
//           trigger: buttonRef.current,
//           start: 'top 80%',
//         },
//         x: 100,
//         opacity: 0,
//         delay: 0.4,
//         duration: 1,
//         ease: 'power3.out',
//       });

//       // Items
//       itemsRef.current.forEach((el, index) => {
//         const [circle, text] = el.children;

//         gsap.from(circle, {
//           scrollTrigger: {
//             trigger: el,
//             start: 'top 85%',
//           },
//           y: -30,
//           opacity: 0,
//           delay: index * 0.1,
//           duration: 0.8,
//           ease: 'power3.out',
//         });

//         gsap.from(text, {
//           scrollTrigger: {
//             trigger: el,
//             start: 'top 85%',
//           },
//           y: 30,
//           opacity: 0,
//           delay: 0.2 + index * 0.1,
//           duration: 0.8,
//           ease: 'power3.out',
//         });
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-[#1c1c1c] text-white py-16 px-4 md:px-20"
//     >
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
//         <div>
//           <h2
//             ref={headingRef}
//             className="text-4xl lg:text-[70px] md:text-5xl font-semibold leading[70px] lg:leading-[70px]"
//           >
//             Why{' '}
//             <span className="text-[#f7931e] italic font-bold">Invest</span>{' '}
//             with us?
//           </h2>
//           <p
//             ref={paragraphRef}
//             className="text-[15px] text-gray-300 mt-4 max-w-md leading-[23px]"
//           >
//             Discover why thousands trust Nek Punjabi Estate <br />
//             for reliable and profitable real estate investments.
//           </p>
//         </div>

//         <button
//           ref={buttonRef}
//           className="flex items-center gap-2 bg-white text-black font-medium py-2 px-4 rounded-lg mt-6 md:mt-0"
//         >
//           <FiPhoneCall className="text-sm" />
//           Contact us now
//         </button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16 border-t border-gray-600 pt-12">
//         {items.map((item, index) => (
//           <div
//             key={item.number}
//             className="flex flex-col items-center text-center"
//             ref={(el) => (itemsRef.current[index] = el)}
//           >
         
//             <div className="w-12 h-12 rounded-full border-2 border-[#f7931e] bg-white text-[#f7931e] font-bold text-lg flex items-center justify-center shadow-md mb-4">
//               {item.number}
//             </div>
//             <p className="text-sm">
//               {item.title} <br /> {item.subtitle}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyInvest;





'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
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
            y: -30,                
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
               scrub: true, 
            },
            y: 30,                 
            opacity: 0,
            delay: 0.2 + index * 0.1, 
            duration: 0.8,
            ease: 'power3.out',
          });
        }
      });

      // --- Timeline Line Animation ---
     
      if (lineRef.current && gridContainerRef.current) {
        gsap.from(lineRef.current, {
          scrollTrigger: {
              trigger: gridContainerRef.current, 
              start: 'top 80%',             
             
          },
          scaleX: 0,                   
          transformOrigin: 'left center', 
          duration: 1.2,               
          ease: 'power3.out',
          delay: 0.3                   
        });
      }

    }, sectionRef); 

    
    return () => ctx.revert();

  }, [items.length]); 

 
  return (
    <section
      ref={sectionRef}
      className="bg-[#1c1c1c] text-white py-16 px-4 md:px-20 overflow-hidden" // Added overflow-hidden to contain animations if needed
    >
     
      {/* <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
  
        <div>
          <h2
            ref={headingRef}
            className="text-4xl lg:text-[70px] md:text-5xl font-semibold leading[70px] lg:leading-[70px]" // Typo in leading, should be leading-[70px] or similar
          >
            Why{' '}
            <span className="text-[#f7931e] italic font-bold">Invest</span>{' '}
            with us?
          </h2>
          <p
            ref={paragraphRef}
            className="text-[15px] text-gray-300 mt-4 max-w-md leading-[23px]"
          >
            Discover why thousands trust Nek Punjabi Estate <br />
            for reliable and profitable real estate investments.
          </p>
        </div>

        
        <button
          ref={buttonRef}
          className="flex items-center gap-2 bg-white text-black font-medium py-2 px-4 rounded-lg mt-6 md:mt-0 hover:bg-opacity-90 transition-colors"
        >
          <FiPhoneCall className="text-sm" />
          Contact us now
        </button>
      </div> */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-16 text-center md:text-left">
  <div>
    <h2
      ref={headingRef}
      className="text-3xl lg:text-[70px] md:text-5xl font-semibold leading-[70px] lg:leading-[70px] sm:leading-[32px]"
    >
      Why{' '}
      <span className="text-[#f7931e] italic font-bold">Invest</span>{' '}
      with us?
    </h2>
    <p
      ref={paragraphRef}
      className="text-[15px] text-gray-300 mt-4 max-w-md leading-[23px] "
    >
      Discover why thousands trust Nek Punjabi Estate <br />
      for reliable and profitable real estate investments.
    </p>
  </div>

  {/* Right Side: Contact Button */}
  <button
    ref={buttonRef}
    className="flex items-center gap-2 bg-white text-black font-medium py-2 px-4 rounded-lg mt-6 md:mt-0 hover:bg-opacity-90 transition-colors"
  >
    <FiPhoneCall className="text-sm" />
    Contact us now
  </button>
</div>


      {/* Timeline Section */}
     
<div className="pt-12">
  <div
    ref={gridContainerRef}
    className="relative px-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8"
  >
    {/* Timeline line: hidden on mobile, visible md+ */}
    <div
      ref={lineRef}
      className="timeline-line absolute top-4 h-px bg-gray-600 z-0 hidden md:block"
      style={{ left: '4.5%', right: '23.5%' }}
      aria-hidden="true"
    />

    {items.map((item, index) => (
      <div
        key={item.number}
        ref={el => (itemsRef.current[index] = el)}
        className="relative flex flex-col items-center lg:items-start text-center z-50"
      >
        <div className="w-12 h-12 z-30 rounded-full border-2 p-2 border-white bg-[#FEE6CC] text-[#f7931e] font-bold text-lg flex items-center justify-center shadow-md mb-4">
          {item.number}
        </div>
        <p className="text-sm text-gray-300 leading-snug">
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