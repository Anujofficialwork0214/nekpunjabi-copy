import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const Advertise = () => {
  const [step, setStep] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      setStep(0);
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
    <div ref={ref}>
      {/* ✅ Mobile View */}
      <div className="block lg:hidden">
        <div className="flex flex-col items-start justify-start px-4 py-20 w-full max-w-md mx-auto overflow-hidden">
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

              <p className="text-gray-600 mt-2 font-sans">
                Join our community for the latest market insights, property
                showcases, and expert advice.
              </p>
            </motion.div>

            {/* Instagram Row */}
            {step >= 1 && (
              <motion.div
                className="flex justify-between items-start"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="w-2/3">
                  <h3
                    className="text-lg font-semibold mt-6 leading-5 tracking-normal"
                    // style={{ fontFamily: "Instrument Sans" }}
                  >
                    Instagram{" "}
                  </h3>

                  <p className="text-gray-600 text-sm mt-1 font-sans">
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
                    style={{  fontSize: "16px" }}
                  >
                    Followers
                  </div>
                </div>
                <img
                  src="/LeftImg.png"
                  alt="Instagram"
                  className="w-[100px] h-auto ml-2 rounded-xl"
                />
              </motion.div>
            )}

            {/* YouTube Row */}
            {step >= 2 && (
              <motion.div
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h3
                  className="text-lg font-semibold mt-6 leading-5 tracking-normal"
                  // style={{ fontFamily: "Instrument Sans" }}
                >
                  {" "}
                  YouTube
                </h3>
                <p className=" font-sans text-gray-600 text-sm ">
                  Subscribe to our YouTube channel, Nek Punjabi Estate, for
                  in-depth property tours, informative guides, and expert
                  analyses of the real estate market.
                </p>
                <div className="flex gap-6 mt-2">
                  <div className="text-center">
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
                  <div className="text-center">
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
          {step <= 2 && (
            <motion.div
              key="desktop"
              className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-7xl px-4 py-20 mx-auto"
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
                <img
                  src="/imageLeft.png"
                  className="w-full h-full relative z-10"
                />
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

              {/* Text */}
              <motion.div
                className="text-center max-w-xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40, transition: { duration: 1 } }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-4xl font-semibold font-sans">
                  Stay <em>Informed</em>,<br />
                  Stay <em>Inspired</em>
                </h2>
                <p className="text-gray-600 mt-4 font-sans">
                  Join our community for the latest market insights,
                  <br />
                  property showcases, and expert advice.
                </p>
                <h3 className="text-xl font-semibold  font-sans mt-6">Instagram </h3>
                <p className="text-gray-600 font-sans">
                  Follow us on Instagram for <br/> daily stunning properties and
                  expert tips.
                </p>
                <div className="text-3xl font-semibold font-sans mt-10">139K+</div>
                <div className="text-sm text-gray-400 mt-2">Followers</div>
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
                  className="w-full h-full relative z-10"
                />
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

          {/* Desktop YouTube section */}
          {step >= 3 && (
            <motion.div
              key="youtube"
              className="flex flex-col items-center justify-center align-center w-full max-w-7xl mx-30 mt-20 px-4 py-20 mx-auto"
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
                  className="w-[300px] h-auto rounded-xl translate-y-[-95px]"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                />

                <motion.p
                  className="text-gray-600 mb-6 text-center font-sans"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  Subscribe to our YouTube channel, Nek Punjabi Estate, <br />
                  for in-depth property tours, informative guides, <br />
                  and expert analyses of <br />
                  the real estate market.
                  <div className="text-3xl font-semibold font-sans mt-4">100k+</div>
                  <div className="text-sm text-gray-500 font-sans">Subscribers</div>
                  <div className="text-3xl font-bold mt-4  font-semibold font-sans">139k+</div>
                  <div className="text-sm text-gray-500 font-sans">View</div>
                </motion.p>

                <motion.img
                  src="/YoutubeRight.png"
                  className="w-[300px] h-auto rounded-xl translate-y-[-95px]"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Advertise;
