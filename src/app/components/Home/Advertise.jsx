import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Advertise = () => {
  const textControls = useAnimation();
  const extraImgControls = useAnimation();

  useEffect(() => {
    const animateSequence = async () => {
      // Animate text first
      await textControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      });

      // Wait 2 seconds before starting image animation
      setTimeout(() => {
        extraImgControls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.8 },
        });
      }, 2000); // 2 seconds
    };

    animateSequence();
  }, [textControls, extraImgControls]);

  return (
    <div className=" flex flex-col items-center justify-center px-4 py-20">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-7xl">

        {/* Left Image */}
        <div className="relative w-[250px] h-[450px]">
          <img
            src="/imageLeft.png"
            alt="Left Banner"
            className="w-full h-full  relative z-10"
          />

          {/* Extra BG Image (on top after text) */}
          <motion.img
            src="/bgLeftImg.png"
            alt="Background Left Layer"
            className="absolute top-4 left-4 w-full h-full   z-20"
            initial={{ opacity: 0, y: 30 }}
            animate={extraImgControls}
          />
        </div>

        {/* Center Text */}
        <motion.div
          className="text-center max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={textControls}
        >
          <h2 className="text-4xl font-semibold">
            Stay <em>Informed</em>,<br />Stay <em>Inspired</em>
          </h2>
          <p className="text-gray-600 mt-4">
            Join our community for the latest market insights,<br />
            property showcases, and expert advice.
          </p>
          <h3 className="text-xl font-semibold mt-6">
            Instagram <span>↗</span>
          </h3>
          <p className="text-gray-600">
            Follow us on Instagram for a daily dose of stunning properties, expert advice, and real estate inspiration.
          </p>
          <div className="text-3xl font-bold mt-4">139K+</div>
          <div className="text-sm text-gray-500">Followers</div>
        </motion.div>

        {/* Right Image */}
        <div className="relative w-[250px] h-[450px]">
          <img
            src="/LeftImg.png"
            alt="Right Banner"
            className="w-full h-full  relative z-10"
          />

          {/* Extra BG Image (on top after text) */}
          <motion.img
            src="/bgRightImg..png"
            alt="Background Right Layer"
            className="absolute top-4 right-4 w-full h-full  z-20"
            initial={{ opacity: 0, y: 30 }}
            animate={extraImgControls}
          />
        </div>

      </div>
    </div>
  );
};

export default Advertise;
