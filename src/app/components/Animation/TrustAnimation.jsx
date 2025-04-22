import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TrustSection from '../Home/TrustSection';
gsap.registerPlugin(ScrollTrigger);


const SHRINK_START_TRIGGER = 'top top';
const SHRINK_END_TRIGGER = '+=100vh';
const SHRINK_TARGET_SCALE = 0.75; 

const SHRINK_TARGET_Y = -300;      
const SHRINK_TARGET_OPACITY = 1; 


// Renamed component for clarity
const FullWidthUniformShrinkingSection = () => {
    const sectionRef = useRef(null); 

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
            {/* Spacer div above */}
          

         
            <section
                ref={sectionRef}
                className="w-full bg-gradient-to-b from-purple-300 to-purple-400 overflow-hidden" 
                style={{ willChange: 'transform, opacity' }}
            >
               
              <TrustSection/>

            </section>
           
        </>
    );
};


export default FullWidthUniformShrinkingSection;