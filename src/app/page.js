"use client";
import Service from "./Components/Home/Service";
import Demo from "./Components/Home/demo";

import InvestAnimation from "./Components/Animation/InvestAnimation";

import TrustAnimation from "./Components/Animation/TrustAnimation";
export default function Home() {
  return (
    <>
  
    <div
      className="w-screen h-screen  bg-center bg-no-repeat flex flex-col items-center justify-center px-4"
      style={{ backgroundImage: "url('/one.png')" }}
    >
      <h1 className="text-white text-5xl md:text-6xl text-center font-light">
        Invest With <span className="italic font-bold">Confidence</span> <br />
        For Your <br /> Real Estate Future
      </h1>

      <p className="text-white mt-4 mb-6 text-center">
        Submit your number to receive the best advice from our experts.
      </p>

      <div className="flex items-center gap-2  backdrop-blur-sm p-2 rounded">
        <input
          type="text"
          placeholder="Phone Number"
          className="px-4 py-2 rounded outline-none bg-white/80 text-black"
        />
        <button className="bg-white text-blue-500 px-4 py-2 rounded">
          Submit
        </button>
      </div>
      </div>
      <Service />
      <Demo />
      <InvestAnimation/>
      {/* <Invest /> */}
      <TrustAnimation/>
    </>
  );
}

