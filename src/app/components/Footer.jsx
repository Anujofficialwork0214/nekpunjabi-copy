// import {
//   FaFacebookF,
//   FaInstagram,
//   FaXTwitter,
//   FaLinkedinIn,
//   FaYoutube
// } from 'react-icons/fa6';

// export default function Footer() {
//   return (
//     <footer className="bg-[#1e1e1e] text-white px-4 md:px-16 py-10 -mt-40">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6  mt-40">
//         {/* Logo */}
//         <div className="mb-4 md:mb-0">
//           <img src="/neklogo.png" alt="Nek Punjab Estate" className="w-24" />
//         </div>

//         {/* Links */}
//         <div className="flex space-x-6 text-sm text-gray-300">
//           <a href="/#about" className="hover:text-white">About Us</a>
//           <a href="/#services" className="hover:text-white">Services</a>
//           <a href="/getAdvice" className="hover:text-white">Contact Us</a>
//         </div>

//         {/* Social Icons */}
//         <div className="flex space-x-4 text-gray-300">
//           <a href="#"><FaFacebookF className="hover:text-white" /></a>
//           <a href="#"><FaInstagram className="hover:text-white" /></a>
//           <a href="#"><FaXTwitter className="hover:text-white" /></a>
//           <a href="#"><FaLinkedinIn className="hover:text-white" /></a>
//           <a href="#"><FaYoutube className="hover:text-white" /></a>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="border-t border-gray-700 my-6" />

//       {/* Bottom Text */}
//       <div className="text-center text-xs text-gray-400">
//         <p>© 2025 Nek Punjabi. All rights reserved. &nbsp; | &nbsp;
//           <a href="#" className="hover:text-white">Terms of Service</a>
//         </p>
//       </div>
//     </footer>
//   );
// }


"use client"

import { motion } from 'framer-motion'
import { Instrument_Sans } from 'next/font/google';
import Image from 'next/image'
import { usePathname } from 'next/navigation';

const InstrumentSans = Instrument_Sans({
  subsets: ["latin"],
});
export default function Footer() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  }
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <motion.footer
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={2}
      className={`bg-[#292929] text-white px-4  md:px-16 py-10  -mt-20 md:-mt-37 ${InstrumentSans.className}  -z-50`}
    >
      <div className=" mx-auto flex flex-col md:flex-row items-center justify-between  gap-6 md:gap-0 mt-10 md:mt-31">
        {/* Logo */}
        <a href="/"> <img src="/neklogo.png" alt="Nek Punjabi Estate" className="w-[63px] h-[33.5px] md:w-[78px] md:h-[40.5px] lg:w-[98px] lg:h-[50.5px]" draggable="false" /></a>

        {/* Links */}
        <nav className="flex space-x-6 font-[500] text-sm text-gray-300">
          {
            isHome ? <a href="#about" className="text-[#CCCCCC] hover:text-white">
              About Us
            </a> :
              <a href="/" className="text-[#CCCCCC] hover:text-white">
                About Us
              </a>
          }
          {isHome ? <a href="#services" className="hidden  md:block text-[#CCCCCC] hover:text-white ">
            Services
          </a> : <a href="/" className="hidden  md:block text-[#CCCCCC] hover:text-white ">
            Services
          </a>}
          <a href="/getAdvice" className=" text-[#CCCCCC] hover:text-white">
            Contact Us
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4 text-gray-300">
          <a href="#" className="hover:text-white">
            <Image src="/facebookFooter.svg" alt="Facebook"
              width={20} height={20} className=' w-[16px] h-[16px] md:w-[18px] md:h-[18px] lg:w-[20px] lg:h-[20px]' draggable="false" />

          </a>
          <a href="#" className="hover:text-white">
            <Image src="/InstagramFooter.svg" alt="instagram"
              width={20} height={20} className=' w-[16px] h-[16px] md:w-[18px] md:h-[18px] lg:w-[20px] lg:h-[20px]' draggable="false" />
          </a>
          <a href="#" className="hover:text-white pt-1">
            <Image src="/x.svg" alt="x"
              width={16} height={14} className=' w-[12px] h-[10px] md:w-[14px] md:h-[12px] lg:w-[16px] lg:h-[14px]' draggable="false" />
          </a>
          <a href="#" className="hover:text-white">
            <Image src="/LinkedIn.svg" alt="linkedin"
              width={20} height={20} className=' w-[16px] h-[16px] md:w-[18px] md:h-[18px] lg:w-[20px] lg:h-[20px]' draggable="false" />
          </a>

          <a href="#" className="hover:text-white">
            <Image src="/Youtube.svg" alt="youtube"
              width={20} height={20} className=' w-[16px] h-[16px] md:w-[18px] md:h-[18px] lg:w-[20px] lg:h-[20px]' draggable="false" />
          </a>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 my-6  md:my-14" />

      {/* Bottom Text */}
      <span className=" flex  flex-col md:flex-row  justify-center items-center space-y-2 md:space-y-0  text-[12px] md:text-sm text-[#CCCCCC]">
        <p>© 2025 Nek Punjabi. All rights reserved.</p>
        <a href="#" className="hover:text-white pl-0 md:pl-4">
          Terms of Service
        </a>
      </span>
    </motion.footer>
  )
}
