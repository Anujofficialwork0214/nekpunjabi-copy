'use client';
import React, {useState } from "react";
import Image from "next/image";

const HeroMobile = () => {
    const [phone, setPhone] = useState('');
  
    const handleChange = (e) => {
      // Remove all non-digit characters
      const cleaned = e.target.value.replace(/\D/g, '');
      setPhone(cleaned);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent form reload
      console.log('Submitted Phone Number:', phone);
      setPhone(''); // Clear input field
    };
  return (
    <section
      className="relative pt-40 flex flex-col items-center justify-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/bg.svg')" }}
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

          {/* <div className="flex flex-col items-center gap-4 backdrop-blur-sm p-2 rounded">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={handleChange}
                maxLength={10}
              className="px-4 py-2 outline-none border border-white rounded-lg text-black placeholder-white"
            />
              <button 
                type="submit"
                className="bg-white text-[#99BDE5] w-full text-lg font-medium px-6 py-2 rounded-lg shadow-sm hover:shadow-md transition">
              Submit
              </button>
              </form>
          </div> */}
          <div className="flex flex-col items-center gap-4 backdrop-blur-sm p-2 rounded">
  <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
    <input
      type="text"
      placeholder="Phone Number"
      value={phone}
      onChange={handleChange}
      maxLength={10}
      className="px-4 py-2 outline-none border border-white rounded-lg text-black placeholder-white"
    />
    <button 
      type="submit"
      className="bg-white text-[#99BDE5] w-full text-lg font-medium px-6 py-2 rounded-lg shadow-sm hover:shadow-md transition">
      Submit
    </button>
  </form>
</div>

        </div>
      </div>

      {/* Static background & image */}
      <div
        className="bg-center w-full flex flex-col items-center object-cover justify-center px-4 relative overflow-hidden z-0 pt-40 "
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
          />
        </div>
      </div>
    </section>
  );
};

export default HeroMobile;
