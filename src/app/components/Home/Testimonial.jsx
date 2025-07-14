import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';


const testimonials = [
  {
    text: "Investing with Nek Punjabi Estate was the best decision I made. The guaranteed 15% return on my investment was exactly as promised. Their team's expertise and transparency made the entire process smooth and stress-free.",
    name: "Rajiv Sharma",
    location: "Ludhiana, Punjab"
  },
  {
    text: "I was impressed with the professionalism and service I received from Nek Punjabi Estate. They took the time to understand my needs and find the perfect property. Their team's dedication is commendable.",
    name: "Jasleen Kaur",
    location: "Mumbai, India"
  }
];

const Demo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <div className="px-4 py-8 overflow-hidden  ">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 4 }}
        className="relative w-full  lg:max-w-[1200px]  mx-auto  rounded-[12px] md:rounded-[20px] overflow-hidden"
      >
        <img
          src="/contactCard.png"
          alt="Contact Card"
          className=" h-[224px]  w-full  md:h-[400px] lg:h-[500px]   md:object-cover"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col  items-end  top-6 right-10 md:top-14 md:right-13 ">
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 4.2 }}
            className="text-white text-2xl  md:text-4xl lg:text-5xl font-bold text-right leading-tight mb-4"
          >
            Let’s find the <span className="italic font-semibold">best<br />investment</span> for you
          </motion.h2>
          <Link href="/getAdvice">
            <motion.button
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 4.5 }}
              className="bg-white text-[#99BDE5]  font-[500] px-6 py-2 rounded-[16px] border-[0.25px] md:border-[2px] text-[14px] md:text-[20px]"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Demo;
