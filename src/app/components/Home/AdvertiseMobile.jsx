import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Instrument_Sans } from "next/font/google";

const InstrumentSans = Instrument_Sans({
    subsets: ["latin"],
});

const AdvertiseMobile = () => {
    const [step, setStep] = useState(0); // Track step for animations
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    // Trigger the animation only once when the section comes into view
    useEffect(() => {
        if (isInView && step === 0) {
            setStep(1); // Start the animation on first view
        }
    }, [isInView, step]);

    // Advance steps on a timer
    useEffect(() => {
        let timers = [];

        if (step === 1) {
            timers.push(window.setTimeout(() => setStep(2), 1000));
        } else if (step === 2) {
            timers.push(window.setTimeout(() => setStep(3), 1000));
        }

        return () => timers.forEach(clearTimeout);
    }, [step]);

    return (
        <div ref={ref} className={InstrumentSans.className}>
            {/* Mobile View Only */}
            <div className="flex flex-col items-start justify-start px-8 py-20 w-full max-w-md mx-auto overflow-hidden h-[640px]">
                <div className="flex flex-col">
                    <AnimatePresence>
                        {/* Static Heading and Paragraph */}
                        {step > 0 && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, y: -20 }} // Fade out when it leaves
                                transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                            >
                                <h2 className="text-[28px] text-[#292929] font-semibold italic leading-8">
                                    Stay <em>Informed</em>,<br />
                                    Stay <em>Inspired</em>
                                </h2>
                                <p className="text-[#3D3D3D] text-[14px] mt-2 font-sans w-[70%]">
                                    Join our community for the latest market insights, property
                                    showcases, and expert advice.
                                </p>
                            </motion.div>
                        )}

                        {/* Instagram Row */}
                        {step >= 1 && (
                            <motion.div
                                className="flex justify-between items-start"
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -40 }} // Fade out when it leaves
                                transition={{ duration: 1, delay: 0.4 }}
                            >
                                <div className="w-2/3">
                                    <h3 className="text-[16px] font-semibold mt-6 leading-5 tracking-normal text-[#292929]">
                                        Instagram
                                    </h3>
                                    <p className="text-[#3D3D3D] text-sm mt-3 font-sans leading-[20px]">
                                        Follow us on Instagram for a daily dose of stunning
                                        properties, expert advice, and real estate inspiration.
                                    </p>
                                    <div className="text-2xl font-normal mt-2 text-[#292929]" style={{ fontSize: "24px", lineHeight: "24px", letterSpacing: "0%" }}>
                                        139K+
                                    </div>
                                    <div className="text-[10px] text-[#292929] ml-1">
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
                        {step >= 2 && (
                            <motion.div
                                className="flex flex-col gap-4"
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, y: 40 }} // Fade out when it leaves
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <h3 className="text-[16px] font-semibold mt-6 leading-5 tracking-normal text-[#292929]">
                                    YouTube
                                </h3>
                                <p className="font-sans text-[#3D3D3D] -mt-1 text-sm leading-[20px] w-[70%]">
                                    Subscribe to our YouTube channel, Nek Punjabi Estate, for
                                    in-depth property tours, informative guides, and expert
                                    analyses of the real estate market.
                                </p>
                                <div className="flex gap-6 mt-2">
                                    <div className="text-left">
                                        <div className="text-2xl text-[#292929] font-normal" style={{ fontSize: "24px", lineHeight: "24px", letterSpacing: "0%" }}>
                                            100k+
                                        </div>
                                        <div className="text-[10px] text-[#292929] ml-1">
                                            Subscribers
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        <div className="text-2xl text-[#292929] font-normal" style={{ fontSize: "24px", lineHeight: "24px", letterSpacing: "0%" }}>
                                            139K+
                                        </div>
                                        <div className="text-[10px] text-[#292929] ml-1">
                                            View
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div >
    );
};

export default AdvertiseMobile;
