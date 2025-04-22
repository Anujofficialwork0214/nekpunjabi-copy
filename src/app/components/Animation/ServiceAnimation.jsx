import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Service from "../Home/Service"; 

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// --- Configuration ---
const SHRINK_START_TRIGGER = 'top top';
const SHRINK_END_TRIGGER = '+=75vh';

// Define target overall scale (0.0 to 1.0)
// If you want it to end up 75% of its original size:
const SHRINK_TARGET_SCALE = 0.75; // This will shrink both width AND height

const SHRINK_TARGET_Y = -300;      // How far the section moves up (negative value)
const SHRINK_TARGET_OPACITY = 1;   // Keep it fully opaque, or change for fade (e.g., 0.5)
// --------------------

// Renamed component for clarity
const FullWidthUniformShrinkingSection = () => {
    const sectionRef = useRef(null); // Ref for the outer section that shrinks

    useEffect(() => {
        // GSAP setup targeting the sectionRef
        if (!sectionRef.current) {
            console.warn("GSAP setup skipped: Section ref not ready.");
            return;
        }
        const ctx = gsap.context(() => {
            gsap.to(sectionRef.current, {
                // Use scale for uniform shrinking (X and Y)
                scale: SHRINK_TARGET_SCALE,
                y: SHRINK_TARGET_Y,
                opacity: SHRINK_TARGET_OPACITY,
                ease: 'none',
                // transformOrigin: 'center center', // Default is center, so usually not needed explicitly
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: SHRINK_START_TRIGGER,
                    end: SHRINK_END_TRIGGER,
                    scrub: 1,
                   // markers: true,
                    invalidateOnRefresh: true,
                },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <>
        

            {/* The Full Width Section that Shrinks Uniformly & Centered */}
            <section
                ref={sectionRef}
                className="w-full bg-gradient-to-b from-purple-300 to-purple-400 overflow-hidden" // Background still applies to the container
                // Ensure will-change includes transform
                style={{ willChange: 'transform, opacity' }}
            >
                 {/* The Invest component renders directly within the scaled section */}
                 {/* All its contents will visually shrink due to the parent's scale */}
               <Service/>

            </section>

            {/* Spacer div below */}
            <div className="h-screen bg-gray-800 flex items-center justify-center">
                 <p className="text-center text-3xl font-bold text-white">Content After Section</p>
            </div>
        </>
    );
};


export default FullWidthUniformShrinkingSection;