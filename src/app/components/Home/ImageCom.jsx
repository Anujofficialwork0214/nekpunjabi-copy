// import React from 'react'
// import Image from 'next/image';
// const ImageCom = () => {
//   return (
//        <div className="w-screen overflow-hidden bg-white">
//           {/* Sky Section with Form */}
       
    
//           {/* House Image Overlapping from bottom */}
//           <div className="relative -mt-20 w-full z-10">
//             <Image
//               src="/2.png"
//               alt="House"
//               width={1920}
//               height={800}
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         </div>
//   )
// }

// export default ImageCom


import Image from 'next/image';
import { useRef, useEffect } from 'react';
const ImageCom = (ref) => {

  // useEffect(() => {
  //   const el = containerRef.current;

  //   const trigger = ScrollTrigger.create({
  //     id: "services-pin",
  //     trigger: el,
  //     start: "top top",
  //     end: "+=500", // adjust as needed
  //     pin: true,
  //     pinSpacing: false,
  //     scrub: true,
  //     onUpdate: (self) => {
  //       if (self.direction === -1 && self.progress < 0.01) {
  //         // Kill ScrollTrigger
  //         const existingTrigger = ScrollTrigger.getById("services-pin");
  //         if (existingTrigger) {
  //           existingTrigger.kill(true);

  //           // Unwrap pin-spacer if present
  //           const spacer = existingTrigger.pin?.parentElement;
  //           if (spacer?.classList.contains("pin-spacer")) {
  //             spacer.replaceWith(el);
  //           }

  //           // Reset all styles
  //           gsap.set(el, {
  //             clearProps: "all",
  //             height: "auto",
  //             overflow: "visible",
  //           });

  //           ScrollTrigger.refresh();
  //         }
  //       }
  //     },
  //   });

  //   return () => {
  //     trigger.kill();
  //   };
  // }, []);
  return (
    <div
    className="w-screen h-screen object-cover bg-center flex flex-col items-center justify-center px-4 z-0"
    style={{ backgroundImage: "url('/one.png')" }}
  >
    

          <div
             
              className="relative -mt-20 w-full z-10 object-cover">
            <Image
              src="/2.png"
              alt="House"
              width={1920}
              height={800}
              className="w-full h-auto object-cover"
            />
        
          </div>
      
      
     
      </div> 
  )
}

export default ImageCom

   