// import { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// const services = [
//   {
//     title: 'Real Estate Consulting & Advisory',
//     description:
//       'Navigate the market with confidence. We provide expert guidance tailored to your unique goals, ensuring informed decisions and optimal outcomes.',
//   },
//   {
//     title: 'Market Analysis and Property Valuation',
//     description:
//       'Navigate the market with confidence. We provide expert guidance tailored to your unique goals, ensuring informed decisions and optimal outcomes.',
//   },
//   {
//     title: 'Property Management Solutions',
//     description:
//       'Navigate the market with confidence. We provide expert guidance tailored to your unique goals, ensuring informed decisions and optimal outcomes.',
//     disabled: true,
//   },
// ]

// const RealEstateServices = () => {
//   const sectionRef = useRef(null)

//   useEffect(() => {
//     const elements = sectionRef.current.querySelectorAll('.fade-up')
//     gsap.fromTo(
//       elements,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         stagger: 0.3,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top 80%',
//         },
//       }
//     )
//   }, [])

//   return (
//     <div
//       ref={sectionRef}
//       className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-100 px-8 md:px-20 py-24 flex flex-col justify-center"
//     >
//       <div className="text-sm font-semibold text-white mb-2 tracking-widest flex items-center gap-2">
//         <div className="w-3 h-3 bg-orange-500 rounded-full" />
//         SERVICES
//       </div>
//       <h2 className="text-4xl font-bold text-white fade-up">Unlock Your Real Estate Potential</h2>
//       <p className="text-white mt-4 max-w-2xl fade-up">
//         From groundbreaking investments to crafting your dream home, we’re with you every step of the way.
//       </p>

//       <div className="mt-10 border-l-2 border-white pl-6">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className={`mb-10 relative fade-up ${service.disabled ? 'opacity-30 italic' : ''}`}
//           >
//             <div className="absolute -left-3 top-1 w-3 h-3 bg-white rotate-45" />
//             <h3 className="text-white font-semibold text-xl">{service.title}</h3>
//             <p className="text-white text-sm mt-1 max-w-xl">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default RealEstateServices
////
// import { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// const services = [
//   {
//     title: 'Real Estate Consulting & Advisory',
//     description:
//       'Navigate the market with confidence. We provide expert guidance tailored to your unique goals.',
//   },
//   {
//     title: 'Market Analysis and Property Valuation',
//     description:
//       'Understand market trends and accurate property valuations tailored to your needs.',
//   },
//   {
//     title: 'Property Management Solutions',
//     description:
//       'Let us handle the day-to-day operations, so you can enjoy peace of mind.',
//   },
//   {
//     title: 'Investment Portfolio Optimization',
//     description:
//       'Strategically diversify and grow your assets with real estate investment planning.',
//   },
//   {
//     title: 'Legal and Regulatory Compliance',
//     description:
//       'Stay compliant and secure with our legal expertise throughout your journey.',
//   },
// ]

// const RealEstateServices = () => {
//   const sectionRef = useRef(null)
//   const itemRefs = useRef([])

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top top',
//           end: `+=${services.length * 1000}`,
//           scrub: true,
//           pin: true,
//         },
//       })

//       services.forEach((_, i) => {
//         const curr = itemRefs.current[i]
//         const prev = itemRefs.current[i - 1]

//         // Entry animation
//         tl.fromTo(
//           curr,
//           { opacity: 0, y: 50 },
//           { opacity: 1, y: 0, duration: 1 }
//         )

//         // Exit previous
//         if (prev) {
//           tl.to(prev, { opacity: 0, y: -50, duration: 1 }, '-=0.5')
//         }
//       })
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-gradient-to-b from-blue-300 to-blue-100 px-8 md:px-20 py-24 h-screen flex flex-col justify-center relative overflow-hidden"
//     >
//       <div className="text-sm font-semibold text-white mb-2 tracking-widest flex items-center gap-2">
//         <div className="w-3 h-3 bg-orange-500 rounded-full" />
//         SERVICES
//       </div>

//       <h2 className="text-4xl font-bold text-white mb-4">
//         Unlock Your Real Estate Potential
//       </h2>
//       <p className="text-white max-w-2xl mb-16">
//         From groundbreaking investments to crafting your dream home, we’re with
//         you every step of the way.
//       </p>

//       <div className="relative min-h-[250px]">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             ref={(el) => (itemRefs.current[index] = el)}
//             className="absolute top-0 left-0 w-full opacity-0"
//           >
//             <div className="relative border-l-2 border-white pl-8">
//               <div className="absolute -left-[19px] top-1 w-3 h-3 bg-white rotate-45" />
//               <h3 className="text-white font-semibold text-2xl mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-white text-base max-w-xl">
//                 {service.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default RealEstateServices

// import { useRef, useEffect } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// const services = [
//   {
//     title: 'Real Estate Consulting & Advisory',
//     description:
//       'Navigate the market with confidence. We provide expert guidance tailored to your unique goals, ensuring informed decisions and optimal outcomes.',
//   },
//   {
//     title: 'Market Analysis and Property Valuation',
//     description:
//       'Understand market trends and accurate property valuations tailored to your needs.',
//   },
//   {
//     title: 'Property Management Solutions',
//     description:
//       'Let us handle the day-to-day operations, so you can enjoy peace of mind.',
//   },
//   {
//     title: 'Investment Portfolio Optimization',
//     description:
//       'Strategically diversify and grow your assets with real estate investment planning.',
//   },
//   {
//     title: 'Legal and Regulatory Compliance',
//     description:
//       'Stay compliant and secure with our legal expertise throughout your journey.',
//   },
// ]

// const RealEstateServices = () => {
//   const containerRef = useRef(null)
//   const itemsRef = useRef([])

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: 'top top',
//           end: `+=${services.length * 200}`, // adjust based on content height
//           scrub: true,
//           pin: true,
//         },
//       })

//       for (let i = 0; i < services.length - 1; i++) {
//         tl.to(
//           itemsRef.current[i],
//           { y: -100, opacity: 0, duration: 0.5 },
//           i
//         ).to(
//           itemsRef.current[i + 1],
//           { y: 0, opacity: 1, duration: 0.5 },
//           i
//         )
//       }
//     }, containerRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <section
//       ref={containerRef}
//       className="relative h-screen bg-gradient-to-b from-blue-300 to-blue-100 px-6 md:px-20 flex flex-col justify-center overflow-hidden"
//     >
//       <div className="mb-10">
//         <div className="text-sm font-semibold text-white mb-2 tracking-widest flex items-center gap-2">
//           <div className="w-3 h-3 bg-orange-500 rounded-full" />
//           SERVICES
//         </div>
//         <h2 className="text-4xl font-bold text-white mb-4">
//           Unlock Your Real Estate Potential
//         </h2>
//         <p className="text-white max-w-2xl">
//           From groundbreaking investments to crafting your dream home, we’re
//           with you every step of the way.
//         </p>
//       </div>

//       <div className="relative pl-10">
//         {/* Vertical line */}
//         <div className="absolute top-0 left-4 h-full w-[2px] bg-white opacity-50 z-0" />

//         {/* Service Items */}
//         <div className="relative h-[300px]">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               ref={(el) => (itemsRef.current[index] = el)}
//               className="absolute top-0 left-0 transition-all duration-500 opacity-0 transform translate-y-10"
//               style={{
//                 opacity: index === 0 ? 1 : 0,
//                 transform: index === 0 ? 'translateY(0)' : 'translateY(10px)',
//               }}
//             >
//               {/* Diamond Marker */}
//               <div className="absolute -left-[23px] top-2 w-4 h-4 bg-white rotate-45 z-10" />

//               <h3 className="text-white font-semibold text-xl mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-white max-w-xl">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default RealEstateServices
//////////////good but try
// import { useRef, useEffect } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// const services = [
//   {
//     title: 'Real Estate Consulting & Advisory',
//     description: 'Navigate the market with confidence. We provide expert guidance tailored to your unique goals, ensuring informed decisions and optimal outcomes.',
//   },
//   {
//     title: 'Market Analysis and Property Valuation',
//     description: 'Understand market trends and accurate property valuations tailored to your needs.',
//   },
//   {
//     title: 'Property Management Solutions',
//     description: 'Let us handle the day-to-day operations, so you can enjoy peace of mind.',
//   },
//   {
//     title: 'Investment Portfolio Optimization',
//     description: 'Strategically diversify and grow your assets with real estate investment planning.',
//   },
//   {
//     title: 'Legal and Regulatory Compliance',
//     description: 'Stay compliant and secure with our legal expertise throughout your journey.',
//   },
// ]

// const RealEstateServices = () => {
//   const containerRef = useRef(null)
//   const itemsRef = useRef([])

//   useEffect(() => {
//     itemsRef.current.forEach((item, index) => {
//       gsap.fromTo(
//         item,
//         {
//           opacity: 0.2,
//           y: 50,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           scrollTrigger: {
//             trigger: item,
//             start: 'center bottom-=100',
//             end: 'center center',
//             scrub: true,
//           },
//         }
//       )

//       gsap.to(item, {
//         opacity: 0.2,
//         y: -50,
//         scrollTrigger: {
//           trigger: item,
//           start: 'center center',
//           end: 'center top+=100',
//           scrub: true,
//         },
//       })
//     })
//   }, [])

//   return (
//     <section
//       ref={containerRef}
//       className="relative min-h-screen bg-gradient-to-b from-blue-300 to-blue-100 px-6 md:px-20 py-20 overflow-hidden"
//     >
//       <div className="mb-16">
//         <div className="text-sm font-semibold text-white mb-2 tracking-widest flex items-center gap-2">
//           <div className="w-3 h-3 bg-orange-500 rounded-full" />
//           SERVICES
//         </div>
//         <h2 className="text-4xl font-bold text-white mb-4">
//           Unlock Your Real Estate Potential
//         </h2>
//         <p className="text-white max-w-2xl">
//           From groundbreaking investments to crafting your dream home, we’re with you every step of the way.
//         </p>
//       </div>

//       <div className="relative pl-10">
//         <div className="absolute top-0 left-4 h-full w-[2px] bg-white opacity-50 z-0" />

//         <div className="relative space-y-16">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               ref={(el) => (itemsRef.current[index] = el)}
//               className="transition-all duration-500 opacity-20"
//             >
//               {/* Diamond Marker */}
//               <div className="absolute -left-[23px] top-2 w-4 h-4 bg-white rotate-45 z-10" />

//               <h3 className="text-white font-semibold text-xl mb-2">{service.title}</h3>
//               <p className="text-white max-w-xl">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default RealEstateServices
// import { useRef, useEffect } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// const services = [
//   {
//     title: 'Real Estate Consulting & Advisory',
//     description: 'Navigate the market with confidence. We provide expert guidance tailored to your unique goals, ensuring informed decisions and optimal outcomes.',
//   },
//   {
//     title: 'Market Analysis and Property Valuation',
//     description: 'Understand market trends and accurate property valuations tailored to your needs.',
//   },
//   {
//     title: 'Property Management Solutions',
//     description: 'Let us handle the day-to-day operations, so you can enjoy peace of mind.',
//   },
//   {
//     title: 'Investment Portfolio Optimization',
//     description: 'Strategically diversify and grow your assets with real estate investment planning.',
//   },
//   {
//     title: 'Legal and Regulatory Compliance',
//     description: 'Stay compliant and secure with our legal expertise throughout your journey.',
//   },
// ]

// const RealEstateServices = () => {
//   const containerRef = useRef(null)
//   const itemsRef = useRef([])

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: 'top top',
//           end: `+=${services.length * 300}`,
//           scrub: true,
//           pin: true,
//         },
//       })

//       services.forEach((_, i) => {
//         if (i < services.length - 1) {
//           tl.to(
//             itemsRef.current[i],
//             { y: -100, opacity: 0, duration: 0.5 },
//             i
//           ).fromTo(
//             itemsRef.current[i + 1],
//             { y: 100, opacity: 0 },
//             { y: 0, opacity: 1, duration: 0.5 },
//             i
//           )
//         }
//       })
//     }, containerRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <section
//       ref={containerRef}
//       className="relative h-screen bg-gradient-to-b from-blue-300 to-blue-100 px-6 md:px-20 py-20 overflow-hidden"
//     >
//       <div className="mb-16">
//         <div className="text-sm font-semibold text-white mb-2 tracking-widest flex items-center gap-2">
//           <div className="w-3 h-3 bg-orange-500 rounded-full" />
//           SERVICES
//         </div>
//         <h2 className="text-4xl font-bold text-white mb-4">
//           Unlock Your Real Estate Potential
//         </h2>
//         <p className="text-white max-w-2xl">
//           From groundbreaking investments to crafting your dream home, we’re with you every step of the way.
//         </p>
//       </div>

//       {/* Service Cards Area */}
//       <div className="relative h-[300px] mt-10 border-2">
//         {/* Vertical line */}
//         <div className="absolute top-0 left-4 h-full w-[2px] bg-white opacity-50 z-0" />

//         {services.map((service, index) => (
//           <div
//             key={index}
//             ref={(el) => (itemsRef.current[index] = el)}
//             className="absolute top-0 left-0 w-full transition-all duration-500 opacity-0 transform translate-y-10"
//             style={{
//               opacity: index === 0 ? 1 : 0,
//               transform: index === 0 ? 'translateY(0)' : 'translateY(10px)',
//             }}
//           >
//             <div className="absolute -left-[23px] top-2 w-4 h-4 bg-white rotate-45 z-10" />
//             <h3 className="text-white font-semibold text-xl mb-2">{service.title}</h3>
//             <p className="text-white max-w-xl">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default RealEstateServices
// import { useRef, useEffect } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// const services = [
//   {
//     title: 'Real Estate Consulting & Advisory',
//     description: 'Navigate the market with confidence. We provide expert guidance tailored to your unique goals, ensuring informed decisions and optimal outcomes.',
//   },
//   {
//     title: 'Market Analysis and Property Valuation',
//     description: 'Understand market trends and accurate property valuations tailored to your needs.',
//   },
//   {
//     title: 'Property Management Solutions',
//     description: 'Let us handle the day-to-day operations, so you can enjoy peace of mind.',
//   },
//   {
//     title: 'Investment Portfolio Optimization',
//     description: 'Strategically diversify and grow your assets with real estate investment planning.',
//   },
//   {
//     title: 'Legal and Regulatory Compliance',
//     description: 'Stay compliant and secure with our legal expertise throughout your journey.',
//   },
// ]

// const RealEstateServices = () => {
//   const containerRef = useRef(null)
//   const itemsRef = useRef([])

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: 'top top',
//           end: `+=${services.length * 300}`,
//           scrub: true,
//           pin: true,
//         },
//       })

//       services.forEach((_, i) => {
//         if (i < services.length - 1) {
//           tl.to(
//             itemsRef.current[i],
//             { y: -100, opacity: 0, duration: 0.5 },
//             i
//           ).fromTo(
//             itemsRef.current[i + 1],
//             { y: 100, opacity: 0 },
//             { y: 0, opacity: 1, duration: 0.5 },
//             i
//           )
//         }
//       })
//     }, containerRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <section
//       ref={containerRef}
//       className="relative h-screen bg-gradient-to-b from-blue-300 to-blue-100 px-6 md:px-20 py-20 overflow-hidden"
//     >
//       <div className="mb-16">
//         <div className="text-sm font-semibold text-white mb-2 tracking-widest flex items-center gap-2">
//           <div className="w-3 h-3 bg-orange-500 rounded-full" />
//           SERVICES
//         </div>
//         <h2 className="text-4xl font-bold text-white mb-4">
//           Unlock Your Real Estate Potential
//         </h2>
//         <p className="text-white max-w-2xl">
//           From groundbreaking investments to crafting your dream home, we’re with you every step of the way.
//         </p>
//       </div>

//       {/* Service Cards Area */}
//       <div className="relative h-[300px] mt-10 ">
       
//         <div className="absolute top-0 -left-[16px] h-full w-[2px] bg-white opacity-50 z-0" />

//         {services.map((service, index) => (
//           <div
//             key={index}
//             ref={(el) => (itemsRef.current[index] = el)}
//             className="absolute top-0 left-0 w-full transition-all duration-500 opacity-0 transform translate-y-10"
//             style={{
//               opacity: index === 0 ? 1 : 0,
//               transform: index === 0 ? 'translateY(0)' : 'translateY(10px)',
//             }}
//           >
//             <div className="absolute -left-[23px] top-2 w-4 h-4 bg-white rotate-45 z-10" />
//             <h3 className="text-white font-semibold text-xl mb-2">{service.title}</h3>
//             <p className="text-white max-w-xl">{service.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Bottom Right Image */}
//       <img
//         src="/nek2.png" // <-- Replace this path with your image file
//         alt="Real Estate"
//         className="absolute bottom-0 right-0 w-1/2 h-auto  opacity-90"
//       />
//     </section>
//   )
// }

// export default RealEstateServices


// mjkjbdgj
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: 'Real Estate Consulting & Advisory',
    description: 'Navigate the market with confidence. We provide expert guidance tailored to your unique goals, ensuring informed decisions and optimal outcomes.',
  },
  {
    title: 'Market Analysis and Property Valuation',
    description: 'Understand market trends and accurate property valuations tailored to your needs.',
  },
  {
    title: 'Property Management Solutions',
    description: 'Let us handle the day-to-day operations, so you can enjoy peace of mind.',
  },
  {
    title: 'Investment Portfolio Optimization',
    description: 'Strategically diversify and grow your assets with real estate investment planning.',
  },
  {
    title: 'Legal and Regulatory Compliance',
    description: 'Stay compliant and secure with our legal expertise throughout your journey.',
  },
  {
    title: 'Legal and Regulatory Compliance',
    description: 'Stay compliant and secure with our legal expertise throughout your journey.',
  },
]

const RealEstateServices = () => {
  const containerRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${services.length * 300}`,
          scrub: true,
          pin: true,
        },
      })

      services.forEach((_, i) => {
        if (i < services.length - 1) {
          tl.to(
            itemsRef.current[i],
            { y: -100, opacity: 0, duration: 0.5 },
            i
          ).fromTo(
            itemsRef.current[i + 1],
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 },
            i
          )
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative h-screen bg-gradient-to-b from-blue-300 to-blue-100 px-6 md:px-20 py-20 overflow-hidden"
    >
      <div className="mb-16">
        <div className="text-sm font-semibold text-white mb-2 tracking-widest flex items-center gap-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full" />
          SERVICES
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">
          Unlock Your Real Estate Potential
        </h2>
        <p className="text-white max-w-2xl">
          From groundbreaking investments to crafting your dream home, we’re with you every step of the way.
        </p>
      </div>

      {/* Service Cards Area */}
      <div className="relative h-[300px] mt-10 border-2 ">
       
        <div className="absolute top-0 -left-[16px] h-full w-[2px] bg-white opacity-50 z-0" />

        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className="absolute top-0 left-0 w-full transition-all duration-500 opacity-0 transform translate-y-10"
            style={{
              opacity: index === 0 ? 1 : 0,
              transform: index === 0 ? 'translateY(0)' : 'translateY(10px)',
            }}
          >
            <div className="absolute -left-[23px] top-2 w-4 h-4 bg-white rotate-45 z-10" />
            <h3 className="text-white font-semibold text-xl mb-2">{service.title}</h3>
            <p className="text-white max-w-xl">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Bottom Right Image */}
      <img
        src="/nek2.png" // <-- Replace this path with your image file
        alt="Real Estate"
        className="absolute bottom-0 right-0 w-[75%] h-auto  opacity-90"
      />
    </section>
  )
}

export default RealEstateServices

