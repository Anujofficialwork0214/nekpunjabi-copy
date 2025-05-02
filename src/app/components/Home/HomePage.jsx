"use client";
import React, { useRef,useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageCom from "./ImageCom";
import { motion } from "framer-motion";
import SuccessPopup from "../SuccessPopup";

gsap.registerPlugin(ScrollTrigger);



const HomePage = () => {
  const containerRef = useRef(null);
  const firstSectionRef = useRef(null);
  const textRef = useRef(null);
  const imageComContainerRef = useRef(null);
  const [phone, setPhone] = useState('');
  const [placeholder, setPlaceholder] = useState("Phone Number");
  const [errorMessage, setErrorMessage] = useState("");

  const [showSuccessPopup, setShowSuccessPopup] = useState(false); 

  const handleChange = (e) => {
    const cleaned = e.target.value.replace(/\D/g, ''); 
    setPhone(cleaned);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault(); // Prevent form reload
  
  //   if (!phone) {
  //     console.log("Please enter a valid phone number.");
  //     return;
  //   }
  
  //   setShowSuccessPopup(false); // Reset success popup state
  
  //   try {
  //     const res = await fetch("/api/sendEmail", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         phone: phone, // Send the phone number
  //       }),
  //     });
  
  //     const data = await res.json();
  
  //     if (data.success) {
  //       console.log("Phone number submitted successfully!");
  //       setShowSuccessPopup(true); // Show success popup
  //     } else {
  //       console.log("Failed to submit phone number.");
  //     }
  //   } catch (error) {
  //     console.error("An error occurred while submitting the phone number:", error);
  //   } finally {
  //     setPhone(''); // Clear input field
  //     setShowSuccessPopup(true); 
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload
  
    if (phone.length !== 10) {
      setErrorMessage("Please enter a valid 10-digit phone number.");
      return;
    }
  
    setErrorMessage(""); // Clear any previous error
    setShowSuccessPopup(false); // Reset success popup state
  
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone }),
      });
  
      const data = await res.json();
  
      if (data.success) {
        console.log("Phone number submitted successfully!");
        setShowSuccessPopup(true);
      } else {
        console.log("Failed to submit phone number.");
      }
    } catch (error) {
      console.error("An error occurred while submitting the phone number:", error);
    } finally {
      setPhone('');
      setShowSuccessPopup(true);
    }
  };
  
 useGSAP(() => {
    
    const imageElement = imageComContainerRef.current?.querySelector('img') || imageComContainerRef.current;

    if (!firstSectionRef.current || !textRef.current || !imageElement) {
      console.warn("GSAP target elements not found for HomePage animation.");
      return;
    }


    gsap.set(textRef.current, { opacity: 1, yPercent: 0 });
    gsap.set(imageComContainerRef.current, { opacity: 0, yPercent: 100 });
   const tl = gsap.timeline({
      scrollTrigger: {
        trigger: firstSectionRef.current,
        start: "top top",
        end: "+=150%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
     
          
      },
   });
   tl.to(
      textRef.current,
      {
        opacity: 0,
        yPercent: -20,
        ease: "power1.in",
      },
      0
    );

  
    tl.to(
      imageComContainerRef.current,
      {
        yPercent: 0,
        opacity: 1,
        ease: "power2.out",
      },
      0
    );

  }, { scope: containerRef });

  return (
    <>
    
      <div ref={containerRef}>
     
        <section
          ref={firstSectionRef}
          className="relative h-[100vh] flex flex-col items-center justify-center w-full overflow-hidden px-4"
 
           style={{ backgroundImage: "url('/bg.svg')" }}
        >
          
        
            <motion.div
      ref={textRef}
      className="text-white text-center z-10 relative"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.3, // delay between each child
          },
        },
      }}
    >
      <motion.h1
        className="text-xl md:text-7xl lg:text-[80px] sm:text-3xl font-medium lg:leading-[88px] md:leading-[60px] sm:leading-[30px] leading-[30px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Invest With <br /> <span className="italic font-bold">Confidence </span> 
         For Your <br /> Real Estate Future
      </motion.h1>

      <motion.p
        className="mt-4 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Submit your number to receive the best advice from our experts.
      </motion.p>

      <motion.div
        className="flex items-center justify-center gap-2 backdrop-blur-sm p-2 rounded"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
                      {/* <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder={placeholder}
        value={phone}
        onChange={handleChange}
        onFocus={() => setPlaceholder("")}
        onBlur={() => !phone && setPlaceholder("Phone Number")}
        maxLength={10}
        className="px-4 py-2 outline-none border-2 border-white rounded-lg text-black placeholder-white"
        />
       <button
        type="submit"
        className="bg-white text-[#99BDE5] text-lg font-medium px-6 py-2 rounded-[16px] shadow-sm hover:shadow-md transition ml-4"
      >
        Submit
      </button>
    </form> */}
              <form onSubmit={handleSubmit}>

              <input
  type="text"
  placeholder={placeholder}
  value={phone}
  onChange={handleChange}
  onFocus={() => setPlaceholder("")}
  onBlur={() => !phone && setPlaceholder("Phone Number")}
  maxLength={10}
  className="px-16 py-2 outline-none border-2 border-white rounded-lg text-white placeholder-white text-left placeholder:translate-x-[-40px]"
  
/>


  <button
    type="submit"
    className="bg-white text-[#99BDE5] text-lg font-medium px-6 py-2 rounded-[16px] shadow-sm hover:shadow-md transition ml-4"
  >
    Submit
                </button>
                {errorMessage && (
    <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
  )}
</form>

      </motion.div>
    </motion.div>

          <div
            ref={imageComContainerRef}
           
            className="absolute inset-0 z-0 flex items-center justify-center  "
           
          >
      
            <ImageCom />
          
          </div>
          
       
        </section>
        {showSuccessPopup && <SuccessPopup onClose={() => setShowSuccessPopup(false)} />}
      </div>

    
    </>
  );
};



export default HomePage;
