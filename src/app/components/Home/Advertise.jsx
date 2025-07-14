// import React, { useEffect, useState, useRef } from "react";
// import { motion, AnimatePresence, useInView } from "framer-motion";

// const Advertise = () => {
//   const [step, setStep] = useState(0);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { amount: 0.5 });

//   useEffect(() => {
//     if (isInView) {
//       setStep(0);
//     }
//   }, [isInView]);

//   useEffect(() => {
//     let timers = [];

//     if (step === 0) {
//       timers.push(setTimeout(() => setStep(1), 2000));
//     } else if (step === 1) {
//       timers.push(setTimeout(() => setStep(2), 1000));
//     } else if (step === 2) {
//       timers.push(setTimeout(() => setStep(3), 1000));
//     }

//     return () => timers.forEach(clearTimeout);
//   }, [step]);

//   return (
//     <div ref={ref}>
//       {/* ✅ Mobile View */}
//       <div className="block lg:hidden">
//         <div className="flex flex-col items-start justify-start px-8 py-20 w-full max-w-md mx-auto overflow-hidden">
//           <div className="flex flex-col gap-8">
//             {/* Static Heading and Paragraph */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//             >
//               <h2
//                 className="text-3xl font-semibold italic "
//               // style={{ fontFamily: "Instrument Sans" }}
//               >
//                 Stay <em>Informed</em>,<br />
//                 Stay <em>Inspired</em>
//               </h2>

//               <p className="text-gray-600 mt-2 font-sans w-[70%]">
//                 Join our community for the latest market insights, property
//                 showcases, and expert advice.
//               </p>
//             </motion.div>

//             {/* Instagram Row */}
//             {step >= 1 && (
//               <motion.div
//                 className="flex justify-between items-start"
//                 initial={{ opacity: 0, x: 40 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 1 }}
//               >
//                 <div className="w-2/3">
//                   <h3
//                     className="text-lg font-semibold mt-6 leading-5 tracking-normal text-[#292929]"
//                   // style={{ fontFamily: "Instrument Sans" }}
//                   >
//                     Instagram{" "}
//                   </h3>

//                   <p className="text-gray-600 text-sm mt-1 font-sans leading-[20px]">
//                     Follow us on Instagram for a daily dose of stunning
//                     properties, expert advice, and real estate inspiration.
//                   </p>
//                   <div
//                     className="text-2xl font-normal mt-4"
//                     style={{
//                       // fontFamily: "Instrument Sans",
//                       fontSize: "24px",
//                       lineHeight: "24px",
//                       letterSpacing: "0%",
//                     }}
//                   >
//                     139K+
//                   </div>
//                   <div
//                     className="text-sm text-gray-500"
//                     style={{ fontSize: "16px" }}
//                   >
//                     Followers
//                   </div>
//                 </div>
//                 <img
//                   src="/LeftImg.png"
//                   alt="Instagram"
//                   className="w-[100px] h-auto ml-2 rounded-xl"
//                   draggable="false"
//                 />
//               </motion.div>
//             )}

//             {/* YouTube Row */}
//             {step >= 2 && (
//               <motion.div
//                 className="flex flex-col gap-4"
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1 }}
//               >
//                 <h3
//                   className="text-lg font-semibold mt-6 leading-5 tracking-normal text-[#292929]"
//                 // style={{ fontFamily: "Instrument Sans" }}
//                 >
//                   {" "}
//                   YouTube
//                 </h3>
//                 <p className="font-sans text-gray-600 text-sm leading-[20px] w-[70%]">
//                   Subscribe to our YouTube channel, Nek Punjabi Estate, for
//                   in-depth property tours, informative guides, and expert
//                   analyses of the real estate market.
//                 </p>
//                 <div className="flex gap-6 mt-2">
//                   <div className="text-left">
//                     <div
//                       className="text-2xl font-normal mt-4"
//                       style={{
//                         // fontFamily: "Instrument Sans",
//                         fontSize: "24px",
//                         lineHeight: "24px",
//                         letterSpacing: "0%",
//                       }}
//                     >
//                       100k+
//                     </div>
//                     <div
//                       className="text-sm text-gray-500"
//                       style={{
//                         // fontFamily: "Instrument Sans",
//                         fontSize: "16px",
//                       }}
//                     >
//                       Subscribers
//                     </div>
//                   </div>
//                   <div className="text-left">
//                     <div
//                       className="text-2xl font-normal mt-4"
//                       style={{
//                         // fontFamily: "Instrument Sans",
//                         fontSize: "24px",
//                         lineHeight: "24px",
//                         letterSpacing: "0%",
//                       }}
//                     >
//                       139K+
//                     </div>
//                     <div
//                       className="text-sm text-gray-500 text-left"
//                       style={{
//                         // fontFamily: "Instrument Sans",
//                         fontSize: "16px",
//                       }}
//                     >
//                       View
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* ✅ Desktop View */}
//       <div className="hidden lg:block">
//         <AnimatePresence mode="wait">
//           {step <= 2 && (
//             <motion.div
//               key="desktop"
//               className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-7xl px-4 py-20 mx-auto"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0, transition: { duration: 1 } }}
//             >
//               {/* Left Image */}
//               <motion.div
//                 className="relative w-[250px] h-[450px] mr-6"
//                 initial={{ opacity: 0, x: -100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 1 }}
//               >
//                 <img
//                   src="/imageLeft.png"
//                   className="h-80 w-70 relative z-10"
//                   draggable="false"
//                 />
//                 {step >= 2 && (
//                   <motion.img
//                     src="/bgLeftImg.png"
//                     className="absolute top-4 left-4 w-70 h-80 z-20"
//                     draggable="false"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 1 }}
//                   />
//                 )}
//               </motion.div>

//               {/* Text */}
//               <motion.div
//                 className="text-center max-w-xl"
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -40, transition: { duration: 1 } }}
//                 transition={{ duration: 1 }}
//               >
//                 <h2 className="text-6xl font-semibold font-sans">
//                   Stay <em>Informed</em>,<br />
//                   Stay <em>Inspired</em>
//                 </h2>
//                 <p className="text-gray-900 mt-4 font-sans">
//                   Join our community for the latest market insights,
//                   <br />
//                   property showcases, and expert advice.
//                 </p>
//                 <h3 className="text-3xl font-semibold font-sans mt-6 ml-30 flex items-center mt-20 ">
//                   Instagram
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
//                     stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <line x1="7" y1="17" x2="17" y2="7" />
//                     <polyline points="7 7 17 7 17 17" />
//                   </svg>
//                 </h3>

//                 <p className="text-gray-900 font-sans mt-2 ">
//                   Follow us on Instagram for a daily dose of stunning <br />properties, expert advice, and real estate inspiration.
//                 </p>
//                 <div className="text-5xl  font-sans mt-10">139K+</div>
//                 <div className="text-sm text-gray-900 mt-2">Followers</div>
//               </motion.div>

//               {/* Right Image */}
//               <motion.div
//                 className="relative w-[250px] h-[450px] ml-6"
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 1 }}
//               >
//                 <img
//                   src="/LeftImg.png"
//                   className="w-70 h-80 relative z-10"
//                   draggable="false"
//                 />
//                 {step >= 2 && (
//                   <motion.img
//                     src="/bgRightImg..png"
//                     className="absolute top-4 right-4 w-70 h-80 z-20"
//                     draggable="false"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 1 }}
//                   />
//                 )}
//               </motion.div>
//             </motion.div>
//           )}

//           {/* Desktop YouTube section */}
//           {step >= 3 && (
//             <motion.div
//               key="youtube"
//               className="flex flex-col items-center justify-center align-center w-full max-w-7xl  mt-20 px-4 py-20 mx-auto"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 1 }}
//             >
//               <motion.h2
//                 className="text-4xl font-sans font-semibold mb-6 flex items-center justify-start"
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1 }}
//               >
//                 YouTube
//                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
//                   <path d="M2 2H18M18 2V18M18 2L2 18" stroke="#292929" strokeWidth="2.4" stroke-linecap="round" stroke-linejoin="round" />
//                 </svg>
//               </motion.h2>

//               <div className="flex gap-12 flex-wrap justify-center">
//                 <motion.div
//                   className="w-[300px] h-[300px] max-h-[300px] rounded-xl overflow-hidden -mt-20"
//                   initial={{ opacity: 0, x: -100 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 1, delay: 0.6 }}
//                 >
//                   <motion.img
//                     src="/YoutubeLeft.png"
//                     className="w-80 h-70 "
//                     draggable="false"
//                   />
//                 </motion.div>

//                 <motion.p
//                   className="text-gray-900 mb-6 text-center font-sans"
//                   initial={{ opacity: 0, y: 40 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1, delay: 0.3 }}
//                 >
//                   Subscribe to our YouTube channel, <br /> Nek Punjabi Estate,
//                   for in-depth property tours,<br /> informative guides,
//                   and expert analyses of <br />
//                   the real estate market.
//                   <div className="text-6xl font-sans mt-10">100k+</div>
//                   <div className="text-10px text-gray-900 font-sans">Subscribers</div>
//                   <div className="text-6xl mt-10 font-sans">139k+</div>
//                   <div className="text-10px text-gray-900 font-sans">View</div>
//                 </motion.p>

//                 <motion.div
//                   className="w-[300px] h-[300px] max-h-[300px] rounded-xl overflow-hidden -mt-20"
//                   initial={{ opacity: 0, x: 100 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 1, delay: 0.6 }}
//                 >
//                   <motion.img
//                     src="/YoutubeRight.png"
//                     className="w-80 h-70 "
//                     draggable="false"
//                   />
//                   {step >= 3 && (
//                     <motion.img
//                       src="/YoutubeRight2.png"
//                       className="absolute top-60 right-22 w-[400px] h-[232px]  z-20 -rotate-4"
//                       draggable="false"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       transition={{ duration: 1 }}

//                     />
//                   )}
//                 </motion.div>
//               </div>
//             </motion.div>
//           )}

//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default Advertise;



import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Instrument_Sans } from "next/font/google";

const InstrumentSans = Instrument_Sans({
  subsets: ["latin"],
});
const Advertise = () => {
const [step, setStep] = useState(-1);
const ref = useRef(null);
const isInView = useInView(ref, { amount: 0.5 });
const wasInView = useRef(false); // Tracks if it has been in view before

useEffect(() => {
  let timers = [];

  if (isInView ) {
    //wasInView.current = true;

    setStep(0); // Start from Instagram again

    // Advance to YouTube after 0.5 second
    timers.push(setTimeout(() => {
      setStep(1);
    }, 4000));
  }

  // if (!isInView && wasInView.current) {
  //  // wasInView.current = false;

  //   // ❗ Reset state for re-triggering animation
  //   setStep(-1); // Or null, if you prefer
  // }

  // return () => {
  //   timers.forEach(clearTimeout);
  // };
}, [isInView]);

console.log(isInView)

  return (
    <div ref={ref} className={`${InstrumentSans.className}`}>
      {/* ✅ Mobile View */}
      <div className="block lg:hidden">
        <div className="flex flex-col items-start justify-start px-8 py-20 w-full max-w-md mx-auto overflow-hidden">
          <div className="flex flex-col gap-8">
            {/* Static Heading and Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2
                className="text-3xl font-semibold italic "
              // style={{ fontFamily: "Instrument Sans" }}
              >
                Stay <em>Informed</em>,<br />
                Stay <em>Inspired</em>
              </h2>

              <p className="text-gray-600 mt-2 font-sans w-[70%]">
                Join our community for the latest market insights, property
                showcases, and expert advice.
              </p>
            </motion.div>

            {/* Instagram Row */}
            {step ===0 && (
              <motion.div
                className="flex justify-between items-start"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="w-2/3">
                  <h3
                    className="text-lg font-semibold mt-6 leading-5 tracking-normal text-[#292929]"
                  // style={{ fontFamily: "Instrument Sans" }}
                  >
                    Instagram{" "}
                  </h3>

                  <p className="text-gray-600 text-sm mt-1 font-sans leading-[20px]">
                    Follow us on Instagram for a daily dose of stunning
                    properties, expert advice, and real estate inspiration.
                  </p>
                  <div
                    className="text-2xl font-normal mt-4"
                    style={{
                      // fontFamily: "Instrument Sans",
                      fontSize: "24px",
                      lineHeight: "24px",
                      letterSpacing: "0%",
                    }}
                  >
                    139K+
                  </div>
                  <div
                    className="text-sm text-gray-500"
                    style={{ fontSize: "16px" }}
                  >
                    Followers
                  </div>
                </div>
                <img
                  src="/LeftImg.png"
                  alt="Instagram"
                  className="w-[100px] h-auto ml-2 rounded-xl"
                  draggable="false"
                />
              </motion.div>
            )}

            {/* YouTube Row */}
            {step === 1 && (
              <motion.div
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h3
                  className="text-lg font-semibold mt-6 leading-5 tracking-normal text-[#292929]"
                // style={{ fontFamily: "Instrument Sans" }}
                >
                  {" "}
                  YouTube
                </h3>
                <p className="font-sans text-gray-600 text-sm leading-[20px] w-[70%]">
                  Subscribe to our YouTube channel, Nek Punjabi Estate, for
                  in-depth property tours, informative guides, and expert
                  analyses of the real estate market.
                </p>
                <div className="flex gap-6 mt-2">
                  <div className="text-left">
                    <div
                      className="text-2xl font-normal mt-4"
                      style={{
                        // fontFamily: "Instrument Sans",
                        fontSize: "24px",
                        lineHeight: "24px",
                        letterSpacing: "0%",
                      }}
                    >
                      100k+
                    </div>
                    <div
                      className="text-sm text-gray-500"
                      style={{
                        // fontFamily: "Instrument Sans",
                        fontSize: "16px",
                      }}
                    >
                      Subscribers
                    </div>
                  </div>
                  <div className="text-left">
                    <div
                      className="text-2xl font-normal mt-4"
                      style={{
                        // fontFamily: "Instrument Sans",
                        fontSize: "24px",
                        lineHeight: "24px",
                        letterSpacing: "0%",
                      }}
                    >
                      139K+
                    </div>
                    <div
                      className="text-sm text-gray-500 text-left"
                      style={{
                        // fontFamily: "Instrument Sans",
                        fontSize: "16px",
                      }}
                    >
                      View
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* ✅ Desktop View */}
      <div className="hidden lg:block">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="desktop"
              className="flex flex-col lg:flex-row items-center justify-evenly gap-12 w-full max-w-7xl px-4 py-20 mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              {/* Left Image */}
              <motion.div
                className="relative w-[250px] h-[450px] "
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}

              >
                <img
                  src="/imageLeft.png"
                  className="h-92 w-70 relative z-10"
                  draggable="false"
                />
                {step === 0 && (
                  <motion.img
                    src="/bgLeftImg.png"
                    className="absolute top-4 left-4 w-70 h-92 z-20 rotate-2"
                    draggable="false"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                )}
              </motion.div>

              {/* Text */}
              <motion.div
                className="text-center max-w-xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40, transition: { duration: 1 } }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-5xl lg:text-6xl xl:text-7xl font-semibold ">
                  Stay <em>Informed</em>,<br />
                  Stay <em>Inspired</em>
                </h2>
                <span className="text-[#292929]  text-[16px] lg:text-lg mt-4">
                  <p>Join our community for the latest market insights,</p>
                  <p>property showcases, and expert advice.</p>

                </span>
                <h3 className="text-[28px] xl:text-[32px] font-semibold  mt-6  flex items-center justify-center ">
                  Instagram
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                    stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </h3>

                <span className="text-[#292929]  text-[16px] lg:text-lg mt-2 ">
                  <p> Follow us on Instagram for a daily dose of stunning</p>
                  <p>properties, expert advice, and real estate inspiration.</p>
                </span>
                <div className="text-5xl xl:text-6xl   mt-10">139K+</div>
                <div className="text-sm xl:text-[16px] text-[#292929] mt-2">Followers</div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                className="relative w-[250px] h-[450px]"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <img
                  src="/LeftImg.png"
                  className="w-70 h-92 relative z-10"
                  draggable="false"

                />
                {step ===0 && (
                  <motion.img
                    src="/bgRightImg..png"
                    className="absolute top-4 right-4 w-70 h-92 z-20 -rotate-2"
                    draggable="false"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                )}
              </motion.div>
            </motion.div>
          )}

          {/* Desktop YouTube section */}
          {step === 1 && (
            <motion.div
              key="youtube"
              className="flex flex-col items-center justify-evenly w-full mt-20 px-4 py-20 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h2
                className="text-[32px] font-semibold mb-6 flex items-center justify-start"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                YouTube
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2"
                >
                  <path
                    d="M2 2H18M18 2V18M18 2L2 18"
                    stroke="#292929"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.h2>

              <div className="flex w-full justify-evenly ">
                <motion.div
                  className=" relative w-[430px] h-[250px] max-h-[300px] rounded-xl -mt-20"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <motion.img
                    src="/YoutubeRight.png"
                    className="w-[400px] h-[232px] mt-20 "
                    draggable="false"
                  />
                  {step === 1 && (
                    <motion.img
                      src="/Youtubeleft1.png"
                      className="absolute top-24 left-2 w-[400px] h-[232px] z-20 rotate-4"
                      draggable="false"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 2 }}
                    />
                  )}
                </motion.div>

                <motion.span
                  className="text-[#292929] mb-6 text-center"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <span className="text-[#292929] text-sm lg:text-[16px]  mt-4">
                    <p>Subscribe to our YouTube channel, Nek</p>
                    <p>Punjabi Estate, for in-depth property tours,</p>
                    <p>informative guides, and expert analyses of</p>
                    <p>the real estate market.</p>
                  </span>


                  <div className="text-5xl xl:text-6xl text-[#292929] mt-10">100k+</div>
                  <div className=" text-sm xl:text-[16px] text-[#292929]">Subscribers</div>
                  <div className=" text-5xl xl:text-6xl mt-10 text-[#292929]">139k+</div>
                  <div className=" text-sm xl:text-[16px] text-[#292929]">View</div>
                </motion.span>

                <motion.div
                  className=" relative w-[430px] h-[250px] max-h-[300px] rounded-xl  -mt-20"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <motion.img
                    src="/Youtubeleft.png"
                    className="w-[420px] h-[232px] mt-20  "
                    draggable="false"
                  />
                  {step ===1 && (
                    <motion.img
                      src="/YoutubeRight2.png"
                      className="absolute top-24 right-4 w-[400px] h-[232px]  z-20 -rotate-4"
                      draggable="false"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1, delay: 2 }}

                    />
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}


        </AnimatePresence>
      </div>
    </div>
  );
};

export default Advertise;
