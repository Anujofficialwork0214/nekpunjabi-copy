import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageCom from "./ImageCom";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);
const HomePage = () => {
  const containerRef = useRef(null);
  const firstSectionRef = useRef(null);
  const textRef = useRef(null);
  const imageComContainerRef = useRef(null);
 useGSAP(() => {
    
    const imageElement = imageComContainerRef.current?.querySelector('img') || imageComContainerRef.current;

    if (!firstSectionRef.current || !textRef.current || !imageElement) {
      console.warn("GSAP target elements not found for HomePage animation.");
      return;
    }


    gsap.set(textRef.current, { opacity: 1, yPercent: 0 });
    gsap.set(imageComContainerRef.current, { opacity: 0, yPercent: 100 });
   const tl = gsap.timeline({
      scrollTrigger: {
        trigger: firstSectionRef.current,
        start: "top top",
        end: "+=150%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
     
          
      },
   });
   tl.to(
      textRef.current,
      {
        opacity: 0,
        yPercent: -20,
        ease: "power1.in",
      },
      0
    );

  
    tl.to(
      imageComContainerRef.current,
      {
        yPercent: 0,
        opacity: 1,
        ease: "power2.out",
      },
      0
    );

  }, { scope: containerRef });

  return (
    <>
    
      <div ref={containerRef}>
     
        <section
          ref={firstSectionRef}
          className="relative h-[100vh] flex flex-col items-center justify-center w-full overflow-hidden px-4"
 
           style={{ backgroundImage: "url('/bg.svg')" }}
        >
          
          {/* <div
            ref={textRef}
            className="text-white text-center z-10 relative"
          
          >
            <h1 className="text-5xl md:text-6xl font-semi-bold">
              Invest With <span className="italic font-bold">Confidence</span> <br />
              For Your <br /> Real Estate Future
            </h1>
            <p className="mt-4 mb-6">
              Submit your number to receive the best advice from our experts.
            </p>
            <div className="flex items-center justify-center gap-2 backdrop-blur-sm p-2 rounded">
              <input
                type="text"
                placeholder="Phone Number"
                className="px-4 py-2  outline-none border-1 border-white rounded-lg text-black placeholder-white"
              />
              <button className="bg-white text-[#99BDE5] text-lg font-medium px-6 py-2 rounded-full shadow-sm hover:shadow-md transition">
                Submit
              </button>
            </div>
          </div> */}
            <motion.div
      ref={textRef}
      className="text-white text-center z-10 relative"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.3, // delay between each child
          },
        },
      }}
    >
      <motion.h1
        className="text-xl md:text-7xl lg:text-6xl sm:text-3xl font-semibold lg:leading-[70px] md:leading-[60px] sm:leading-[30px] leading-[30px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Invest With <br /> <span className="italic font-bold">Confidence </span> 
         For Your <br /> Real Estate Future
      </motion.h1>

      <motion.p
        className="mt-4 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Submit your number to receive the best advice from our experts.
      </motion.p>

      <motion.div
        className="flex items-center justify-center gap-2 backdrop-blur-sm p-2 rounded"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <input
          type="text"
          placeholder="Phone Number"
          className="px-4 py-2  outline-none border-1 border-white rounded-lg text-black placeholder-white"
        />
        <button className="bg-white text-[#99BDE5] text-lg font-medium px-6 py-2 rounded-full shadow-sm hover:shadow-md transition">
          Submit
        </button>
      </motion.div>
    </motion.div>

          <div
            ref={imageComContainerRef}
           
            className="absolute inset-0 z-0 flex items-center justify-center  "
           
          >
      
            <ImageCom />
          
          </div>
          
       
        </section>
      </div>

    
    </>
  );
};



export default HomePage;
// working below
// import React, { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import ImageCom from "./ImageCom"; 
// import { motion } from "framer-motion";
// import About from "./About";
// import AboutAnimation from "../Animation/AboutAnimation";

// gsap.registerPlugin(ScrollTrigger);

// const HomePage = () => {
//   const containerRef = useRef(null);
//   const firstSectionRef = useRef(null);
//   const textRef = useRef(null);
//   const imageComContainerRef1 = useRef(null); 
//   const imageComContainerRef2 = useRef(null); 

//   useGSAP(() => {
   
//     const imageContainer1 = imageComContainerRef1.current;
//     const imageContainer2 = imageComContainerRef2.current;
//     const textElement = textRef.current;
//     const sectionElement = firstSectionRef.current;

//     if (!sectionElement || !textElement || !imageContainer1 || !imageContainer2) {
//       console.warn("GSAP target elements not found for HomePage animation.");
//       return;
//     }

    
//     gsap.set(textElement, { opacity: 1, yPercent: 0 });
//     gsap.set(imageContainer1, { opacity: 0, yPercent: 100, zIndex: 5 }); 
//     gsap.set(imageContainer2, { opacity: 0, yPercent: 100, zIndex: 10 });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionElement,
//         start: "top top",
       
//         end: "+=300%",
//         scrub: 1,
//         pin: true,
//         pinSpacing: true, 

//       },
//     });

  
//     tl.to(
//       textElement,
//       {
//         opacity: 0,
//         yPercent: -20, 
//         ease: "power1.in",
//       },
//       0
//     );

//     tl.to(
//       imageContainer1,
//       {
//         yPercent: 0, 
//         opacity: 1,
//         ease: "power2.out",
//       },
//       0 
//     );

  
//     tl.to(
//       imageContainer1,
//       {
//         opacity: 0,
//         yPercent: -10, 
//         ease: "power1.in",
//       },
//       ">0.2"
//     );

//     tl.to(
//       imageContainer2,
//       {
//         yPercent: 0, 
//         opacity: 1,
//         ease: "power2.out",
//       },
//       "<" 
//     );

//   }, { scope: containerRef }); 

//   return (
//     <>
//       <div ref={containerRef}>
//         <section
//           ref={firstSectionRef}
//           className="relative h-screen flex flex-col items-center justify-center w-full overflow-hidden px-4"
//           style={{ backgroundImage: "url('/bg.svg')" }}
//         >
         
//           <motion.div
//             ref={textRef}
//             className="text-white text-center z-20 relative" // Ensure text is initially above images
//             // Framer Motion animations run on load, GSAP handles scroll
//              initial="hidden"
//              animate="visible"
//              variants={{
//                hidden: {},
//                visible: {
//                  transition: {
//                    staggerChildren: 0.3,
//                  },
//                },
//              }}
//           >
//             <motion.h1
//               className="text-5xl md:text-6xl font-semibold leading-[60px]"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               Invest With <br /> <span className="italic font-bold">Confidence </span>
//               For Your <br /> Real Estate Future
//             </motion.h1>

//             <motion.p
//               className="mt-4 mb-6"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//             >
//               Submit your number to receive the best advice from our experts.
//             </motion.p>

//             <motion.div
//               className="flex items-center justify-center gap-2 backdrop-blur-sm p-2 rounded"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//             >
//               <input
//                 type="text"
//                 placeholder="Phone Number"
//                 className="px-4 py-2 outline-none border-1 border-white rounded-lg text-black placeholder-white" // Consider text color if bg is white
//               />
//               <button className="bg-white text-[#99BDE5] text-lg font-medium px-6 py-2 rounded-full shadow-sm hover:shadow-md transition">
//                 Submit
//               </button>
//             </motion.div>
//           </motion.div>

//           {/* First Image Container - Fades in, then fades out */}
//           <div
//             ref={imageComContainerRef1}
//             className="absolute inset-0 flex items-center justify-center"
//             style={{ willChange: 'opacity, transform' }} // Performance hint
//             // z-index is set via GSAP initially
//           >
//             {/* You might want different props or sources for each ImageCom */}
//             <ImageCom /* source="/image1.jpg" */ />
//           </div>

          
//           <div
//             ref={imageComContainerRef2}
//             className="absolute inset-0 flex items-center justify-center"
//             style={{ willChange: 'opacity, transform' }} 
            
//           >
            
//             <AboutAnimation/>
//           </div>

//         </section>
       
//       </div>
//     </>
//   );
// };

// export default HomePage;



