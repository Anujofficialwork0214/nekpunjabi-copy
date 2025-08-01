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
    <section className="relative pt-30 mb-15 md:mb-20 "
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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* <Image
          src="/images/contact-bg.jpg"
          layout="fill"
          objectFit="cover"
          alt="Contact background"
          priority
        /> */}
        <div className="absolute inset-0 bg-blue-300 opacity-40"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto py-16 flex flex-col lg:flex-row items-center lg:items-start px-6 lg:px-6 xl:px-6 2xl:px-6 ">
        {/* Text Section */}

        <div className="w-full lg:w-1/2 text-white lg:pr-12 space-y-6 text-center lg:text-left">
          <h2 className="text-5xl lg:text-[70px] xl:text-[80px] 2xl:text-[92px] font-medium">Get in Touch</h2>


          <snap className="text-base  2xl:text-xl max-w-md mx-auto lg:mx-0 px-2">
            <p>If you'd like to know more information about us and any of our</p>
            <p>
              services, please get in touch with the below details or the </p>
            <p>contact
              form provided.</p>

          </snap>
        </div>
        {/* Form Section */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0  px-2 lg:px-1 xl:px-1 2xl:px-1 ">
          {message && <p className="text-gray-800 text-sm mb-2">{message}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              placeholder=" Name"
              value={name}
              onChange={(e) => {
                const input = e.target.value;
                if (input === "" || /^[A-Za-z\s]*$/.test(input)) {
                  setName(input.replace(/^\s+/, ""));
                }
              }}
              onBlur={() => setName((prev) => prev.trim())}
              className="w-full rounded-lg border border-white bg-transparent px-4 py-3  placeholder-[#FFFFFFA3] focus:placeholder-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
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
              className="w-full rounded-lg border border-white bg-transparent px-4 py-3  placeholder-[#FFFFFFA3] focus:placeholder-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
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
              className="w-full rounded-lg border border-white bg-transparent px-4 py-3 placeholder-[#FFFFFFA3] focus:placeholder-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <div className="text-white">
              <p className="mb-2 2xl:text-xl">Select Investment size</p>
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
                    className={`rounded-xl border px-4 py-3 text-center transition-all duration-200 ${investmentSize === option.value
                      ? "bg-white text-black font-semibold"
                      : "border-[#FFFFFFA3] text-[#FFFFFFA3] hover:border-white hover:text-white"
                      }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
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
              className="w-full py-3 rounded-lg bg-white text-[#AECAEA] font-semibold hover:bg-blue-500 hover:text-black transition cursor-pointer"
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
          width={2000}
          height={800}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}











