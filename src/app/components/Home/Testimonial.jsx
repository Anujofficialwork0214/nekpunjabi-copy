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
    <div className="px-4 py-8 overflow-hidden">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 0 }}
        className="text-left mb-10"
      >
        <h2 className="text-4xl font-bold text-gray-800 px-4">
          What <span className="text-orange-500 font-extrabold">OUR</span> Client says
        </h2>
      </motion.div>

      {/* Desktop View Testimonials */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row justify-between gap-6 mb-10">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.3 }}
                className="flex-1 bg-white p-6"
              >
                <div className="flex mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-lg text-gray-800 mb-4">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-black">{t.name}</p>
                  <p className="text-gray-600">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Mobile View Animated Single Testimonial Slider */}
      {isMobile && (
             <div className="relative h-auto min-h-[320px] mb-10">
             <div className="absolute top-0 left-0 right-0 p-6">
               <div className="flex mb-4 text-yellow-400">
                 {[...Array(5)].map((_, i) => (
                   <FaStar key={i} />
                 ))}
               </div>
               <p className="text-lg text-gray-800 mb-4">"{testimonials[currentIndex].text}"</p>
               <div>
                 <p className="font-semibold text-black">{testimonials[currentIndex].name}</p>
                 <p className="text-gray-600">{testimonials[currentIndex].location}</p>
               </div>
             </div>
           </div>
      )}

   {/* Image with motion text & button inside */}
<motion.div
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 2, delay: 4 }}
  className="relative w-full max-w-5xl mx-auto rounded-lg overflow-hidden"
>
  <img
    src="/contactCard.png"
    alt="Contact Card"
    className="w-full h-auto object-cover"
  />

  {/* Overlay content */}
  <div className="absolute inset-0 flex flex-col justify-center items-end p-4 sm:p-8 md:p-12">
    <motion.h2
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, delay: 4.2 }}
      className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-right leading-tight mb-4"
    >
      Let’s find the <span className="italic font-semibold">best<br />investment</span> for you
    </motion.h2>
            <Link href="/getAdvice">
  <motion.button
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.5, delay: 4.5 }}
    className="bg-white text-[#99BDE5] font-semibold px-6 py-2 rounded-[12px] shadow-md"
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
