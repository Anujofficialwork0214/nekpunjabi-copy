// "use client";
// import { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Invest from "../Home/Invest";


// gsap.registerPlugin(ScrollTrigger);

// // const SHRINK_START_TRIGGER = 'top top';
// // const SHRINK_END_TRIGGER = '+=100vh';
// const SHRINK_START_TRIGGER = 'bottom bottom';
// // const SHRINK_END_TRIGGER = '+=100';
// const SHRINK_END_TRIGGER = 'bottom+=500 bottom';


// const SHRINK_TARGET_SCALE = 0.75;

// const SHRINK_TARGET_Y = -300;
// const SHRINK_TARGET_OPACITY = 1;

// const InvestAnimation = () => {
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

//                     invalidateOnRefresh: true,
//                 },
//             });
//         }, sectionRef);
//         return () => ctx.revert();
//     }, []);

//     return (
//         <>
//             <section
//                 ref={sectionRef}
//                 className="w-full overflow-hidden relative rounded-b-2xl"

//                 style={{ willChange: 'transform, opacity' }}
//             >

//                 <Invest />

//             </section>


//         </>
//     );
// };


// export default InvestAnimation;








"use client";
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Invest from "../Home/Invest";

gsap.registerPlugin(ScrollTrigger);

// Define breakpoints for mobile and tablet views
const BREAKPOINT_MOBILE = 768; // Mobile breakpoint (below 768px)
const BREAKPOINT_TABLET = 1024; // Tablet breakpoint (between 768px and 1024px)

// Define common animation properties
const SHRINK_TARGET_SCALE_DESKTOP = 0.75;
const SHRINK_TARGET_Y_DESKTOP = -300;
const SHRINK_TARGET_OPACITY = 1;

// Function to get the screen width
const getScreenWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

const InvestAnimation = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) {
            console.warn("GSAP setup skipped: Section ref not ready.");
            return;
        }

        const ctx = gsap.context(() => {
            // Default animation values for desktop
            let SHRINK_TARGET_SCALE = SHRINK_TARGET_SCALE_DESKTOP;
            let SHRINK_TARGET_Y = SHRINK_TARGET_Y_DESKTOP;

            // Check screen size and adjust the animation properties
            if (getScreenWidth() < BREAKPOINT_MOBILE) {
                SHRINK_TARGET_SCALE = 0.9; // Adjust scale for mobile
                SHRINK_TARGET_Y = -50; // Adjust Y position for mobile
            } else if (getScreenWidth() < BREAKPOINT_TABLET) {
                SHRINK_TARGET_SCALE = 0.85; // Adjust scale for tablet
                SHRINK_TARGET_Y = -200; // Adjust Y position for tablet
            }

            gsap.to(sectionRef.current, {
                scale: SHRINK_TARGET_SCALE,
                y: SHRINK_TARGET_Y,
                opacity: SHRINK_TARGET_OPACITY,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'bottom bottom',
                    end: 'bottom+=500 bottom',
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section
                ref={sectionRef}
                className="w-full overflow-hidden relative md:rounded-b-2xl"
                style={{ willChange: 'transform, opacity' }}
            >
                <Invest />
            </section>
        </>
    );
};

export default InvestAnimation;
