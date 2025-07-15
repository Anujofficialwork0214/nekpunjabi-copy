"use client";
import React, { useRef,useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageCom from "./ImageCom";
import { motion } from "framer-motion";
import SuccessPopup from "../SuccessPopup";
import ReCAPTCHA from "react-google-recaptcha";

gsap.registerPlugin(ScrollTrigger);



const HomePage = () => {
  const containerRef = useRef(null);
  const firstSectionRef = useRef(null);
  const textRef = useRef(null);
  const imageComContainerRef = useRef(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [investmentSize, setInvestmentSize] = useState("");

  const [captchaToken, setCaptchaToken] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const capitalizeName = (str) =>
    str
      .trim()
      .split(" ")
      .filter(Boolean)
      .map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(" ");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedLocation = location.trim();

    const nameRegex = /^[A-Za-z\s]+$/;
    const hasLetter = /[A-Za-z]/;

    if (!trimmedName || !nameRegex.test(trimmedName) || !hasLetter.test(trimmedName)) {
      setMessage("Please enter a valid name (letters only, not just spaces).");
      return;
    }

    const formattedName = capitalizeName(trimmedName);

    const phoneRegex = /^\d{10}$/;
    if (!trimmedPhone || !phoneRegex.test(trimmedPhone)) {
      setMessage("Please enter a valid phone number (10 digits).");
      return;
    }

    if (!trimmedLocation) {
      setMessage("Please enter a valid location.");
      return;
    }
    if (!investmentSize) {
      setMessage("Please select an investment size.");
      return;
    }
    

    if (!captchaToken) {
      setMessage("Please complete the reCAPTCHA.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formattedName,
          phone: trimmedPhone,
          location: trimmedLocation,
          investmentSize,
          recaptchaToken: captchaToken,
        }),
      });

      const data = await res.json();

      if (data.success) {
        // setMessage("Message sent successfully!");
        setShowPopup(true);
        setName("");
        setPhone("");
        setLocation("");
        setInvestmentSize("");
      } else {
        setMessage("Failed to send message.");
      }
    } catch (error) {
      setMessage("An error occurred while sending the message.");
    } finally {
      setLoading(false);
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
          className="relative h-[100vh] flex flex-col items-center justify-center w-full overflow-hidden  bg-no-repeat bg-cover bg-center"
 
          //  style={{ backgroundImage: "url('/bg.svg')" }}
         
     style={{
  backgroundImage: `
    linear-gradient(180deg, #99BAE5 100%, #99BAE5 100%, #99BAE5 100%),
    url('/bg.svg')
  `,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
}}

        >
          
        
  <motion.div
  ref={textRef}
  className="text-white z-10 relative pt-40 px-4"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }}
>
 <div className="flex flex-col md:flex-row items-start justify-between gap-5 2xl:gap-20 max-w-8xl mx-auto">

    {/* Left Section - Heading */}
    <motion.div
      className="w-full md:w-1/2 text-center  md:text-left mt-20 lg:px-5 xl:px-4 2xl:px-4 "
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-xl md:text-5xl lg:text-[64px] font-medium leading-tight">
        Invest With <span className="italic font-bold">Confidence </span>
        For Your Real Estate Future
      </h1>
 
    </motion.div>

    {/* Right Section - Form */}
    <motion.div
      className="w-full md:w-1/2  lg:px-4   xl:px-4 2xl:px-3 !font-[500] "
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
              >
                     <motion.p
        className="mt-4 mb-6 text-base"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Submit your number to receive the best advice from our experts.
      </motion.p>
      {message && <p className="text-[#FFFFFFA3] text-sm mb-2">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4 ">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            const input = e.target.value;
            if (input === "" || /^[A-Za-z\s]*$/.test(input)) {
              setName(input.replace(/^\s+/, ""));
            }
          }}
          onBlur={() => setName((prev) => prev.trim())}
          className="w-full rounded-2xl border border-white bg-transparent px-4 py-4 placeholder-[#FFFFFFA3] focus:placeholder-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => {
            const input = e.target.value;
            if (/^\d*$/.test(input)) {
              setPhone(input);
            }
          }}
          maxLength={10}
           className="w-full rounded-2xl border border-white bg-transparent px-4 py-4 placeholder-[#FFFFFFA3] focus:placeholder-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
        />

        <input
          type="text"
          placeholder="City"
          value={location}
          onChange={(e) => {
            const input = e.target.value;
            if (input === "" || /^[A-Za-z\s]*$/.test(input)) {
              setLocation(input.replace(/^\s+/, ""));
            }
          }}
          onBlur={() => setLocation((prev) => prev.trim())}
           className="w-full rounded-2xl border border-white bg-transparent px-4 py-4 placeholder-[#FFFFFFA3] focus:placeholder-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
        />


<div className="text-white ">
  <p className="mb-2">Select Investment size</p>
<div className="grid grid-cols-2 gap-3">
  {[
    { label: "<1 Cr", value: "< 1cr" },
    { label: "1 - 3 Cr", value: "1 - 3 cr" },
    { label: "3 - 5 Cr", value: "3 - 5 cr" },
    { label: ">5 Cr", value: "> 5 cr" },
  ].map((option) => (
    <button
      key={option.value}
      onClick={() => setInvestmentSize(option.value)}
      className={`rounded-xl border-2 px-4 py-4 text-center transition-all duration-200 ${
        investmentSize === option.value
          ? "bg-white text-black font-semibold"
          : "border-[#FFFFFFA3] text-[#FFFFFFA3] hover:border-white hover:text-white"
      }`}
    >
      {option.label}
    </button>
  ))}
</div>


</div>

        <div className="col-span-1 md:col-span-2 flex justify-center mb-2">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={(token) => setCaptchaToken(token)}
            onExpired={() => setCaptchaToken(null)}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-2xl bg-white font-[500] font-medium hover:bg-blue-500 hover:text-black text-[#AECAEA] transition"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send message"}
        </button>
      </form>
    </motion.div>
  </div>
</motion.div>


          <div
            ref={imageComContainerRef}
           
            className="absolute inset-0 z-0 flex items-center justify-center  "
           
          >
      
            <ImageCom />
          
          </div>
          
       
        </section>
     {showPopup && <SuccessPopup onClose={() => setShowPopup(false)} />}
      </div>

    
    </>
  );
};



export default HomePage;