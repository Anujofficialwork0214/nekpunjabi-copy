"use client";
import { useState } from "react";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import SuccessPopup from "../components/SuccessPopup";

export default function ContactSection() {
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
    <section   className="relative pt-30"
    style={{
      backgroundImage:
        'linear-gradient(to right top, #7d91a9, #849bb8, #8ba5c7, #92b0d6, #99bae5)',
    }}
      
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/contact-bg.jpg"
          layout="fill"
          objectFit="cover"
          alt="Contact background"
          priority
        />
        <div className="absolute inset-0 bg-blue-300 opacity-40"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto py-16 flex flex-col lg:flex-row items-center lg:items-start px-6 lg:px-20">
        {/* Text Section */}
        
        <div className="w-full lg:w-1/2 text-white lg:pr-12 space-y-6 text-center lg:text-left">
        <h2 className="text-5xl lg:text-[70px] xl:text-[80px] font-medium">Get in Touch</h2>

  <p className="text-base max-w-md mx-auto lg:mx-0">
    If you'd like to know more information about us and any of our
    services, please get in touch with the below details or the contact
    form provided.
  </p>
</div>


        {/* Form Section */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          {message && <p className="text-gray-800 text-sm mb-2">{message}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
          <input
  type="text"
  placeholder=" Name"
  value={name}
  onChange={(e) => {
    const input = e.target.value;
    if (input === "" || /^[A-Za-z\s]*$/.test(input)) {
      setName(input.replace(/^\s+/, "")); // disallow leading spaces
    }
  }}
  onBlur={() => setName((prev) => prev.trim())} // remove trailing/extra spaces on blur
  className="w-full rounded-lg border border-white bg-transparent px-4 py-3 placeholder-white focus:placeholder-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
/>

<input
  type="text"
  placeholder="Phone Number"
  value={phone}
  onChange={(e) => {
    const input = e.target.value;
    if (/^\d*$/.test(input)) { // allow only digits
      setPhone(input);
    }
  }}
  maxLength={10}
  className="w-full rounded-lg border border-white bg-transparent px-4 py-3 placeholder-white focus:placeholder-transparent text-white focus:outline-none focus:ring-2 focus:ring-white "
/>

<input
  type="text"
  placeholder="City"
  value={location}
  onChange={(e) => {
    const input = e.target.value;
    if (input === "" || /^[A-Za-z\s]*$/.test(input)) {
      setLocation(input.replace(/^\s+/, "")); // disallow leading spaces
    }
  }}
  onBlur={() => setLocation((prev) => prev.trim())}
  className="w-full rounded-lg border border-white bg-transparent px-4 py-3 placeholder-white focus:placeholder-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <select
  value={investmentSize}
  onChange={(e) => setInvestmentSize(e.target.value)}
  className="w-full rounded-lg border border-white bg-transparent px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white"
>
  <option value="" disabled hidden>Select Investment Size</option>
  <option value="< 1cr" className="text-black">&lt; 1cr</option>
  <option value="1 - 3 cr" className="text-black">1 - 3 cr</option>
  <option value="3 - 5 cr" className="text-black">3 - 5 cr</option>
  <option value="> 5 cr" className="text-black">&gt; 5 cr</option>
</select>



            {/* reCAPTCHA */}
            <div className="flex justify-center mb-4">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={(token) => setCaptchaToken(token)}
                onExpired={() => setCaptchaToken(null)}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-white text-blue-400 font-semibold hover:bg-blue-500 hover:text-black transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send message"}
            </button>
            {showPopup && <SuccessPopup onClose={() => setShowPopup(false)} />}
          </form>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="relative -mt-20 w-full z-10">
        <Image
          src="/2.png"
          alt="House"
          width={1920}
          height={800}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}

