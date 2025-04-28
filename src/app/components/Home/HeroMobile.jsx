// import React, { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import ImageCom from "./ImageCom";
// import Image from 'next/image';
// import { motion } from "framer-motion";
// gsap.registerPlugin(ScrollTrigger);
// const HomePage = () => {
//   const containerRef = useRef(null);
//   const firstSectionRef = useRef(null);
//   const textRef = useRef(null);
//   const imageComContainerRef = useRef(null);
//  useGSAP(() => {
    
//     const imageElement = imageComContainerRef.current?.querySelector('img') || imageComContainerRef.current;

//     if (!firstSectionRef.current || !textRef.current || !imageElement) {
//       console.warn("GSAP target elements not found for HomePage animation.");
//       return;
//     }


//     gsap.set(textRef.current, { opacity: 1, yPercent: 0 });
//     gsap.set(imageComContainerRef.current, { opacity: 0, yPercent: 100 });
//    const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: firstSectionRef.current,
//         start: "top top",
//         end: "+=150%",
//         scrub: 1,
//         pin: true,
//         pinSpacing: true,
     
          
//       },
//    });
//    tl.to(
//       textRef.current,
//       {
//         opacity: 0,
//         yPercent: -20,
//         ease: "power1.in",
//       },
//       0
//     );

  
//     tl.to(
//       imageComContainerRef.current,
//       {
//         yPercent: 0,
//         opacity: 1,
//         ease: "power2.out",
//       },
//       0
//     );

//   }, { scope: containerRef });

//   return (
//     <>
    
//       <div ref={containerRef}>
     
//         <section
//           ref={firstSectionRef}
//           className="relative h-screen flex flex-col items-center justify-center w-full overflow-hidden px-4"
 
//            style={{ backgroundImage: "url('/bg.svg')" }}
//         >
//              <motion.div
//       ref={textRef}
//       className="text-white text-center z-10 relative"
//       initial="hidden"
//       animate="visible"
//       variants={{
//         hidden: {},
//         visible: {
//           transition: {
//             staggerChildren: 0.3, // delay between each child
//           },
//         },
//       }}
//     >
//       <motion.h1
//         className="text-xl md:text-7xl lg:text-6xl sm:text-3xl font-semibold lg:leading-[70px] md:leading-[60px] sm:leading-[30px] leading-[30px]"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Invest With <br /> <span className="italic font-bold">Confidence </span>
//          For Your <br /> Real Estate Future
//       </motion.h1>

//       <motion.p
//         className="mt-4 mb-6"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.3 }}
//       >
//         Submit your number to receive the best advice from our experts.
//       </motion.p>

//       <motion.div
//         className="flex items-center justify-center gap-2 backdrop-blur-sm p-2 rounded"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.6 }}
//       >
//         <input
//           type="text"
//           placeholder="Phone Number"
//           className="px-4 py-2  outline-none border-1 border-white rounded-lg text-black placeholder-white"
//         />
//         <button className="bg-white text-[#99BDE5] text-lg font-medium px-6 py-2 rounded-full shadow-sm hover:shadow-md transition">
//           Submit
//         </button>
//       </motion.div>
//     </motion.div>

//           <div
//             ref={imageComContainerRef}
           
//             className="absolute inset-0 z-0 flex items-center justify-center  "
           
//           >
      
//       <div
//     className=" object-cover bg-center flex flex-col items-center justify-center px-4 z-0"
//     style={{ backgroundImage: "url('/one (1).png')" }}
//   >
    

//           <div
             
//               className="relative -mt-20 w-full z-10 object-cover">
//             <Image
//               src="/2.png"
//               alt="House"
//               width={1920}
//               height={800}
//               className="w-full h-auto object-cover"
//             />
        
//           </div>
      
      
     
//       </div>
          
//           </div>
          
       
//         </section>
//       </div>

    
//     </>
//   );
// };



// export default HomePage;
import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <section
      className="relative pt-40 flex flex-col items-center justify-center w-full overflow-hidden px-4"
      style={{ backgroundImage: "url('/bg.svg')" }}
    >
      {/* Text & form */}
      <div className="text-white text-center z-10 relative border-2">
        <h1 className="text-xl md:text-7xl lg:text-6xl sm:text-3xl font-semibold lg:leading-[70px] md:leading-[60px] sm:leading-[30px] leading-[30px]">
          Invest With <br />
          <span className="italic font-bold">Confidence</span> For Your <br /> Real Estate Future
        </h1>
        <div className="flex flex-col items-center">
  <p className="mt-4 mb-6">
    Submit your number to receive the best advice from our experts.
  </p>

  <div className="flex flex-col items-center gap-4 backdrop-blur-sm p-2 rounded">
    <input
      type="text"
      placeholder="Phone Number"
      className="px-4 py-2 outline-none border border-white rounded-lg text-black placeholder-white"
    />
    <button className="bg-white text-[#99BDE5] text-lg font-medium px-6 py-2 rounded-full shadow-sm hover:shadow-md transition">
      Submit
    </button>
  </div>
</div>

    
      </div>

      {/* Static background & image */}
      <div className=" inset-0 z-0 flex items-center justify-center pt-40">
        <div
          className="object-cover bg-center flex flex-col items-center justify-center px-4 w-full h-full"
          style={{ backgroundImage: "" }}
        >
          <div className="relative -mt-20 w-full">
            <Image
              src="/2.png"
              alt="House"
              width={1920}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
