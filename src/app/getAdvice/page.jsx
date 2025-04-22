// // pages/index.js
// import Image from 'next/image';

// export default function Home() {
//   return (
//     <div className="relative w-screen h-screen overflow-hidden ">
//       {/* Sky background image */}
//       <Image
//         src="/one.png"
//         alt="Sky Background"
//         fill
//         className="object-cover z-0"
//         priority
//       />

//       {/* House image */}
//       <div className="absolute bottom-0 left-0 w-full z-10">
//         <Image
//           src="/2.png"
//           alt="House"
//           width={1920}
//           height={800}
//           className="w-full h-auto object-cover"
//         />
//       </div>

//       {/* Contact Form */}
//       <div className="absolute inset-0 z-20 flex items-center justify-end p-6 md:p-12">
//         <div className="w-full max-w-md bg-white bg-opacity-90 rounded-xl shadow-lg p-8 space-y-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get in Touch</h2>
//           <p className="text-gray-600 text-sm">
//             If you’d like to know more information about us and any of our
//             services, please get in touch with the below details or the contact
//             form provided.
//           </p>
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Yashika"
//               className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none"
//             />
//             <input
//               type="text"
//               placeholder="9876x-xxxxx"
//               className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none"
//             />
//             <input
//               type="text"
//               placeholder="Ludhiana"
//               className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none"
//             />
//             <button
//               type="submit"
//               className="w-full py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
//             >
//               Send message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
// import Image from 'next/image';

// export default function Home() {
//   return (
//     <div className="relative w-screen overflow-hidden ">
//       {/* Sky Section */}
//       <div className="relative w-full">
//         <Image
//           src="/one.png"
//           alt="Sky Background"
//           width={1920}
//           height={1080}
//           className="w-full h-auto object-cover"
//           priority
//         />
//       </div>

//       {/* House Section - overlapping the bottom of sky */}
//       <div className="relative -mt-20 w-full z-10">
//         <Image
//           src="/2.png"
//           alt="House"
//           width={1920}
//           height={800}
//           className="w-full h-auto object-cover"
//         />
//       </div>

//       {/* Contact Form Floating on Top */}
//       <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-20 p-6 md:p-12">
//         <div className="w-full max-w-md bg-white bg-opacity-90 rounded-xl shadow-lg p-8 space-y-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get in Touch</h2>
//           <p className="text-gray-600 text-sm">
//             If you’d like to know more information about us and any of our
//             services, please get in touch with the below details or the contact
//             form provided.
//           </p>
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Yashika"
//               className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none"
//             />
//             <input
//               type="text"
//               placeholder="9876x-xxxxx"
//               className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none"
//             />
//             <input
//               type="text"
//               placeholder="Ludhiana"
//               className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none"
//             />
//             <button
//               type="submit"
//               className="w-full py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
//             >
//               Send message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-screen overflow-hidden bg-white">
      {/* Sky Section with Form */}
      <div className="relative w-full">
        {/* Sky Image */}
        <Image
          src="/bg.svg"
          alt="Sky Background"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />

        {/* Form Positioned on top of Sky */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-20 p-6 md:p-12">
          <div className="w-full max-w-md bg-white bg-opacity-90 rounded-xl shadow-lg p-8 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get in Touch</h2>
            <p className="text-gray-600 text-sm">
              If you’d like to know more information about us and any of our
              services, please get in touch with the below details or the contact
              form provided.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Yashika"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none"
              />
              <input
                type="text"
                placeholder="9876x-xxxxx"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Ludhiana"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* House Image Overlapping from bottom */}
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
  );
}
////////


// import Image from 'next/image';

// export default function ContactPage() {
//   return (
//     <div className="w-screen overflow-hidden bg-white">
//       {/* First Section - Contact Form */}
//       <div className="min-h-screen bg-[url('/bg.svg')] bg-cover bg-center flex items-center justify-center relative z-10">
//         <div className="max-w-6xl w-full px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center backdrop-blur-sm rounded-lg p-10">
//           {/* Left Section */}
//           <div>
//             <h1 className="text-5xl font-bold text-white mb-4">Get in Touch</h1>
//             <p className="text-white text-sm">
//               If you'd like to know more information about us and any of our services, please get in touch with the below details or the contact form provided.
//             </p>
//           </div>

//           {/* Right Section - Form */}
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Yashika"
//               className="w-full p-3 rounded-lg border border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
//             />
//             <input
//               type="text"
//               placeholder="9876x-xxxxx"
//               className="w-full p-3 rounded-lg border border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
//             />
//             <input
//               type="text"
//               placeholder="Ludhiana"
//               className="w-full p-3 rounded-lg border border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
//             />
//             <button
//               type="submit"
//               className="w-full p-3 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-100 transition"
//             >
//               Send message
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Second Section - Sky + House Overlapping */}
//       <div className="w-full overflow-hidden bg-white relative min-h-screen z-30 -mt-32">
//         {/* Sky Image */}
//         <Image
//           src="/one.png"
//           alt="Sky Background"
//           fill
//           className="object-cover"
//           priority
//         />

//         {/* House Image Overlapping from bottom */}
//         <div className="absolute bottom-0 left-0 w-full z-40">
//           <Image
//             src="/2.png"
//             alt="House"
//             width={1920}
//             height={800}
//             className="w-full h-auto object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
