"use client";
import Image from 'next/image';

const ImageCom = () => {
  return (
    <div
      className="w-screen h-screen bg-center flex flex-col items-center justify-center relative overflow-hidden z-0 bg-no-repeat bg-cover bg-cente"

      // style={{
      //   backgroundImage: "linear-gradient(180deg, #99BAE5 100%, #99BAE5 100%, #99BAE5 100%), url('/one (1).png')"
      // }}

      style={{
        backgroundImage: `
      linear-gradient(180deg, rgba(153, 186, 229, 0.8), rgba(153, 186, 229, 0.8)),
      // url('/one%20(1).png')
    `,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}



    >
      {/* Orange gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 165, 0, 0) 60%, rgb(250, 123, 38) 90%)'
        }}
      />

<div className="relative w-[1920px]  4xl:w-[2400px]  max-lg:w-[1024px] z-10 mx-auto mt-50
                ">
  <Image
    src="/2.png"
    alt="House"
    width={1920}
    height={800}
    className="w-[1920px] max-lg:w-[1024px]  4xl:w-[2400px]
"
    draggable="false"
  />
</div>



    </div>
  )
}

export default ImageCom;
