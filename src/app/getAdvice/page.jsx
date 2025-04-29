"use client";
import { useState } from "react";
import Image from 'next/image';
import ReCAPTCHA from "react-google-recaptcha";
import SuccessPopup from '../components/SuccessPopup'

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   if (!name || !phone || !location) {
  //     setMessage("All fields are required!");
  //     return;
  //   }
  
  //   if (!captchaToken) {
  //     setMessage("Please complete the reCAPTCHA.");
  //     return;
  //   }
  
  //   setLoading(true);
  
  //   try {
  //     const res = await fetch("/api/sendEmail", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name,
  //         phone,
  //         location,
  //         recaptchaToken: captchaToken,
  //       }),
  //     });
  
  //     const data = await res.json();
  
  //     if (data.success) {
  //       setMessage("Message sent successfully!");
  //       // Clear input fields after successful submission
  //       setName("");
  //       setPhone("");
  //       setLocation("");
  //     } else {
  //       setMessage("Failed to send message.");
  //     }
  //   } catch (error) {
  //     setMessage("An error occurred while sending the message.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Name Validation: Only letters and spaces allowed
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name || !nameRegex.test(name)) {
      setMessage("Please enter a valid name (letters only).");
      return;
    }
  
    // Phone Validation: Only 10 digits allowed
    const phoneRegex = /^\d{10}$/;
    if (!phone || !phoneRegex.test(phone)) {
      setMessage("Please enter a valid phone number (10 digits).");
      return;
    }
  
    // Location Validation: Ensure location is not empty
    if (!location) {
      setMessage("Please enter a valid location.");
      return;
    }
  
    // reCAPTCHA Validation
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
          name,
          phone,
          location,
          recaptchaToken: captchaToken,
        }),
      });
  
      const data = await res.json();
  
      if (data.success) {
        setMessage("Message sent successfully!");
        setShowPopup(true);
        // Clear input fields after successful submission
        setName("");
        setPhone("");
        setLocation("");
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
    <section className="relative bg-[#99BAE5] pt-30">
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-white lg:pr-12 space-y-6">
          <h2 className="text-5xl font-bold">Get in Touch</h2>
          <p className="text-base max-w-md">
            If you'd like to know more information about us and any of our services, please get in touch with the below details or the contact form provided.
          </p>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
       
              {message && <p className="text-gray-800 text-sm">{message}</p>}

<form onSubmit={handleSubmit} className="space-y-4">
  <input
    type="text"
    placeholder="Your Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="w-full rounded-full border border-white bg-transparent px-4 py-3 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
  />
  <input
    type="text"
    placeholder="Your Phone"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
className="w-full rounded-full border border-white bg-transparent px-4 py-3 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
  />
  <input
    type="text"
    placeholder="City"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
   className="w-full rounded-full border border-white bg-transparent px-4 py-3 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
  />

  {/* ReCAPTCHA */}
            <div className="flex justify-center mb-4">
            <ReCAPTCHA
sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
onChange={(token) => setCaptchaToken(token)}
onExpired={() => setCaptchaToken(null)}
/>
</div>



  <button
    type="submit"
    className="w-full py-3 rounded-full bg-white text-blue-400 font-semibold hover:bg-blue-500 hover:text-black transition"
    disabled={loading}
  >
    {loading ? "Sending..." : "Send message"}
            </button>
            {showPopup && <SuccessPopup onClose={() => setShowPopup(false)} />}
</form>
        </div>
      </div>
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







// "use client";
// import { useState } from "react";
// import Image from 'next/image';
// import ReCAPTCHA from "react-google-recaptcha";

// export default function Home() {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [location, setLocation] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [captchaToken, setCaptchaToken] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !phone || !location) {
//       setMessage("All fields are required!");
//       return;
//     }

//     if (!captchaToken) {
//       setMessage("Please complete the reCAPTCHA.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const res = await fetch("/api/sendEmail", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           phone,
//           location,
//           recaptchaToken: captchaToken,
//         }),
//       });

//       const data = await res.json();

//       if (data.success) {
//         setMessage("Message sent successfully!");
//       } else {
//         setMessage("Failed to send message.");
//       }
//     } catch (error) {
//       setMessage("An error occurred while sending the message.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-screen overflow-hidden bg-white">
//       <div className="relative w-full">
//         <Image
//           src="/bg.svg"
//           alt="Sky Background"
//           width={1920}
//           height={1080}
//           className="w-full h-auto object-cover"
//           priority
//         />

//         <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-20 p-6 md:p-12">
//           <div className="w-full max-w-md bg-white bg-opacity-90 rounded-xl shadow-lg p-8 space-y-6">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get in Touch</h2>
//             <p className="text-gray-600 text-sm">
//               If you’d like to know more information about us and any of our services, please get in touch with the below details or the contact form provided.
//             </p>

//             {message && <p className="text-gray-800 text-sm">{message}</p>}

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none"
//               />
//               <input
//                 type="text"
//                 placeholder="Your Phone"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none"
//               />
//               <input
//                 type="text"
//                 placeholder="Your Location"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//                 className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none"
//               />

//               {/* ReCAPTCHA */}
       
//               <ReCAPTCHA
//    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
//   onChange={(token) => setCaptchaToken(token)}
//   onExpired={() => setCaptchaToken(null)}
// />


//               <button
//                 type="submit"
//                 className="w-full py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
//                 disabled={loading}
//               >
//                 {loading ? "Sending..." : "Send message"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <div className="relative -mt-20 w-full z-10">
//         <Image
//           src="/2.png"
//           alt="House"
//           width={1920}
//           height={800}
//           className="w-full h-auto object-cover"
//         />
//       </div>
//     </div>
//   );
// }

