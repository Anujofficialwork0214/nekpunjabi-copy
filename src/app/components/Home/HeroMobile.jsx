'use client';
import React, {useState } from "react";
import Image from "next/image";
import SuccessPopup from "../SuccessPopup";

import ReCAPTCHA from "react-google-recaptcha";
const HeroMobile = () => {
  // const [phone, setPhone] = useState('');
  //   const [placeholder, setPlaceholder] = useState("Phone Number");
  //   const [errorMessage, setErrorMessage] = useState("");
  
  //   const [showSuccessPopup, setShowSuccessPopup] = useState(false); 

  //   const handleChange = (e) => {
  //     const cleaned = e.target.value.replace(/\D/g, ''); 
  //     setPhone(cleaned);
  //   };
  //   const handleSubmit = async (e) => {
  //     e.preventDefault(); // Prevent form reload
    
  //     if (phone.length !== 10) {
  //       setErrorMessage("Please enter a valid 10-digit phone number.");
  //       return;
  //     }
    
  //     setErrorMessage(""); // Clear any previous error
  //     setShowSuccessPopup(false); // Reset success popup state
    
  //     try {
  //       const res = await fetch("/api/sendEmail", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ phone }),
  //       });
    
  //       const data = await res.json();
    
  //       if (data.success) {
  //         console.log("Phone number submitted successfully!");
  //         setShowSuccessPopup(true);
  //       } else {
  //         console.log("Failed to submit phone number.");
  //       }
  //     } catch (error) {
  //       console.error("An error occurred while submitting the phone number:", error);
  //     } finally {
  //       setPhone('');
  //       setShowSuccessPopup(true);
  //     }
  //   };
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
    
  return (
 
<section
  className="relative pt-30 flex flex-col items-center justify-center w-full overflow-hidden"

  style={{
  backgroundImage: `
   linear-gradient(180deg, rgba(255, 255, 255, 0.00) -32.49%, rgba(125, 145, 168, 0.45) 28.16%, #7DA7DE 100%),
    url('/bg.svg')
  `,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
}}
>
      {/* Text & form */}
      <div className="text-white text-center z-10 relative ">
        <h1 className="text-[40px] font-semibold leading-[44px] px-4">
          Invest With <br />
          <span className="italic font-bold">Confidence <br /></span> For Your Real Estate Future
        </h1>
        <div className="flex flex-col items-center">
          <p className="mt-4 mb-6 px-8">
            Submit your number to receive the best advice from our experts.
          </p>

          <div className="flex flex-col items-center gap-4 backdrop-blur-sm p-2 rounded">

            
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
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
           className="px-4 py-2 outline-none border border-white rounded-lg  placeholder-white focus:placeholder-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
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
           className="px-4 py-2 outline-none border border-white rounded-lg  placeholder-white focus:placeholder-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
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
           className="px-4 py-2 outline-none border border-white rounded-lg  placeholder-white focus:placeholder-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
        />

<div className="text-white">
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
        className={`rounded-xl border px-4 py-3 text-center transition-all duration-200 ${
          investmentSize === option.value
            ? "bg-white text-black font-semibold"
            : "border-white text-white hover:bg-white/20"
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
          className="w-full py-3  rounded-lg bg-white text-[#AECAEA] font-semibold hover:bg-blue-500 hover:text-black transition"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send message"}
        </button>
      </form>
</div>

        </div>
      </div>

      {/* Static background & image */}
      <div
        className="bg-center w-full flex flex-col items-center object-cover justify-center relative overflow-hidden z-0 pt-40   "
        style={{ backgroundImage: "url('/one (1).png')" }}
      >
        {/* Orange gradient overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255, 165, 0, 0) 60%, rgb(250, 123, 38) 90%)',
          }}
        />

        {/* House Image */}
        <div className="relative -mt-20 w-full z-10">
          <Image
            src="/2.png"
            alt="House"
            width={1920}
            height={800}
            className="w-full h-auto object-cover"
             draggable="false"
          />
        </div>
      </div>
    
           {showPopup && <SuccessPopup onClose={() => setShowPopup(false)} />}
    </section>
  );
};

export default HeroMobile;
