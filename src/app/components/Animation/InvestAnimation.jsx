import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Invest from "../Home/Invest"; 


gsap.registerPlugin(ScrollTrigger);

const SHRINK_START_TRIGGER = 'top top';
const SHRINK_END_TRIGGER = '+=100vh';

const SHRINK_TARGET_SCALE = 0.75; 

const SHRINK_TARGET_Y = -300;      
const SHRINK_TARGET_OPACITY = 1;  

const FullWidthUniformShrinkingSection = () => {
    const sectionRef = useRef(null); 

    useEffect(() => {
       
        if (!sectionRef.current) {
            console.warn("GSAP setup skipped: Section ref not ready.");
            return;
        }
        const ctx = gsap.context(() => {
            gsap.to(sectionRef.current, {
                
                scale: SHRINK_TARGET_SCALE,
                y: SHRINK_TARGET_Y,
                opacity: SHRINK_TARGET_OPACITY,
                ease: 'none',
              
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: SHRINK_START_TRIGGER,
                    end: SHRINK_END_TRIGGER,
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
                className="w-full bg-gradient-to-b from-purple-300 to-purple-400 overflow-hidden" // Background still applies to the container
                
                style={{ willChange: 'transform, opacity' }}
            >
               
                 <Invest />

            </section>

           
        </>
    );
};


export default FullWidthUniformShrinkingSection;