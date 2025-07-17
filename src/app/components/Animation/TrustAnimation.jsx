// "use client";
// import { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import TrustSection from '../Home/TrustSection';
// gsap.registerPlugin(ScrollTrigger);


// // const SHRINK_START_TRIGGER = 'top top';
// // const SHRINK_END_TRIGGER = '+=100vh';
// // const SHRINK_START_TRIGGER = 'bottom bottom';
// // const SHRINK_END_TRIGGER = '+=100';
// const SHRINK_START_TRIGGER = 'bottom bottom';
// // const SHRINK_END_TRIGGER = '+=100';
// const SHRINK_END_TRIGGER = 'bottom+=500 bottom';
// const SHRINK_TARGET_SCALE = 0.75; 

// const SHRINK_TARGET_Y = -300;      
// const SHRINK_TARGET_OPACITY = 1; 



// const FullWidthUniformShrinkingSection = () => {
//     const sectionRef = useRef(null); 

//     useEffect(() => {

//         if (!sectionRef.current) {
//             console.warn("GSAP setup skipped: Section ref not ready.");
//             return;
//         }
//         const ctx = gsap.context(() => {
//             gsap.to(sectionRef.current, {

//                 scale: SHRINK_TARGET_SCALE,
//                 y: SHRINK_TARGET_Y,
//                 opacity: SHRINK_TARGET_OPACITY,
//                 ease: 'none',

//                 scrollTrigger: {
//                     trigger: sectionRef.current,
//                     start: SHRINK_START_TRIGGER,
//                     end: SHRINK_END_TRIGGER,
//                     scrub: 1,
//                    // markers: true,
//                     invalidateOnRefresh: true,
//                 },
//             });
//         }, sectionRef);
//         return () => ctx.revert();
//     }, []);

//     return (
//         <>
//            <section
//                 ref={sectionRef}
//                 className="w-full overflow-hidden relative rounded-b-2xl" 
//                 style={{ willChange: 'transform, opacity' }}
//             >

//               <TrustSection/>

//             </section>

//         </>
//     );
// };


// export default FullWidthUniformShrinkingSection;




"use client";
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TrustSection from '../Home/TrustSection';
gsap.registerPlugin(ScrollTrigger);

// --- Animation Constants ---
const SHRINK_START_TRIGGER = 'bottom bottom';
const SHRINK_END_TRIGGER = 'bottom+=500 bottom';
const SHRINK_TARGET_SCALE = 0.75;
const SHRINK_TARGET_Y = -300;
// const SHRINK_TARGET_OPACITY = 1;


const END_BG_COLOR = '#1F1F1F';   // e.g., black

const FullWidthUniformShrinkingSection = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null); // Ref for the background container

    useEffect(() => {
        if (!sectionRef.current || !containerRef.current) {
            console.warn("GSAP setup skipped: Refs not ready.");
            return;
        }

        const ctx = gsap.context(() => {

            gsap.to(containerRef.current, {
                backgroundColor: END_BG_COLOR,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: SHRINK_START_TRIGGER,
                    end: SHRINK_END_TRIGGER,
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });

            // Original animation for the shrinking section
            gsap.to(sectionRef.current, {
                scale: SHRINK_TARGET_SCALE,
                y: SHRINK_TARGET_Y,
                // opacity: SHRINK_TARGET_OPACITY,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: SHRINK_START_TRIGGER,
                    end: SHRINK_END_TRIGGER,
                    scrub: 1,
                    // markers: true,
                },
            });
        }, sectionRef); // Scoping to the main component ref

        return () => ctx.revert();
    }, []);

    return (
        // This container's background will change color
        <div
            ref={containerRef}
            className="relative w-full"
            style={{ backgroundColor: END_BG_COLOR }}
        >
            <section
                ref={sectionRef}
                className="w-full overflow-hidden relative rounded-b-2xl bg-transparent"
                style={{ willChange: 'transform, opacity' }}
            >
                <TrustSection />
            </section>
        </div>
    );
};

export default FullWidthUniformShrinkingSection;