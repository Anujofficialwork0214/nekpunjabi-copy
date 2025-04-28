"use client";
import Image from 'next/image';

const ImageCom = () => {
  return (
    <div
      className="w-screen h-screen bg-center flex flex-col items-center justify-center px-4 relative overflow-hidden z-0"
      style={{ backgroundImage: "url('/one (1).png')" }}
    >
      {/* Orange gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 165, 0, 0) 60%, rgb(250, 123, 38) 90%)'
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
  )
}

export default ImageCom;
