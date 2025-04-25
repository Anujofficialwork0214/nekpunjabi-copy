import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const Advertise = () => {
  const [step, setStep] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      setStep(0); // Restart animation every time it comes into view
    }
  }, [isInView]);

  useEffect(() => {
    let timers = [];

    if (step === 0) {
      timers.push(setTimeout(() => setStep(1), 2000));
    } else if (step === 1) {
      timers.push(setTimeout(() => setStep(2), 1000));
    } else if (step === 2) {
      timers.push(setTimeout(() => setStep(3), 1000));
    }

    return () => timers.forEach(clearTimeout);
  }, [step]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center px-4 py-20 w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {step <= 2 && (
          <motion.div
            key="instagram"
            className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-7xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            {/* Left Image */}
            <motion.div
              className="relative w-[250px] h-[450px]"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src="/imageLeft.png" className="w-full h-full relative z-10" />
              {step >= 2 && (
                <motion.img
                  src="/bgLeftImg.png"
                  className="absolute top-4 left-4 w-full h-full z-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />
              )}
            </motion.div>

            {/* Text Section */}
            <motion.div
              className="text-center max-w-xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40, transition: { duration: 1 } }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl font-semibold">
                Stay <em>Informed</em>,<br />Stay <em>Inspired</em>
              </h2>
              <p className="text-gray-600 mt-4">
                Join our community for the latest market insights,<br />
                property showcases, and expert advice.
              </p>
              <h3 className="text-xl font-semibold mt-6">Instagram ↗</h3>
              <p className="text-gray-600">
                Follow us on Instagram for daily stunning properties and expert tips.
              </p>
              <div className="text-3xl font-bold mt-4">139K+</div>
              <div className="text-sm text-gray-500">Followers</div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative w-[250px] h-[450px]"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src="/LeftImg.png" className="w-full h-full relative z-10" />
              {step >= 2 && (
                <motion.img
                  src="/bgRightImg..png"
                  className="absolute top-4 right-4 w-full h-full z-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />
              )}
            </motion.div>
          </motion.div>
        )}

        {step >= 3 && (
          <motion.div
            key="youtube"
            className="flex flex-col items-center justify-center w-full max-w-7xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h2
              className="text-3xl font-semibold mb-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              YouTube ↗
            </motion.h2>

            <div className="flex gap-8 flex-wrap justify-center">
              <motion.img
                src="/YoutubeLeft.png"
                className="w-[300px] h-auto rounded-xl "
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              />

              <motion.p
                className="text-gray-600 mb-6 text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Subscribe to our YouTube channel, Nek Punjabi Estate, <br />
                for in-depth property tours, informative guides, <br />
                and expert analyses of <br />
                the real estate market.
              </motion.p>

              <motion.img
                src="/YoutubeRight.png"
                className="w-[300px] h-auto rounded-xl"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              />
            </div>

            <motion.div
              className="-mt-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="text-3xl font-semibold">100K+</div>
              <div className="text-sm text-gray-500">Subscribers</div>
              <div className="text-3xl font-semibold mt-2">139K+</div>
              <div className="text-sm text-gray-500">Views</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Advertise;
