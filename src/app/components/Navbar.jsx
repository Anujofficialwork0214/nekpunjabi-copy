// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import Image from "next/image";
// import { RiMenu2Fill } from "react-icons/ri";
// import { FaXmark } from "react-icons/fa6";
// import gsap from "gsap";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [hideNavbar, setHideNavbar] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     if (menuOpen) {
//       gsap.from("#mobile-menu a", {
//         y: -30,
//         opacity: 0,
//         duration: 0.5,
//         stagger: 0.2,
//       });
//     }
//   }, [menuOpen]);

//   // Hide/show navbar on scroll
//   useEffect(() => {
//     let lastScrollY = window.scrollY;

//     const handleScroll = () => {
//       if (window.scrollY > lastScrollY) {
//         setHideNavbar(true);
//       } else {
//         setHideNavbar(false);
//       }
//       setMenuOpen(false); // Close mobile menu on scroll
//       lastScrollY = window.scrollY;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Custom scroll or redirect handler
//   const handleNavClick = (e, path) => {
//     if (pathname === "/" && path.startsWith("/#")) {
//       e.preventDefault();
//       const id = path.replace("/#", "");
//       const section = document.getElementById(id);
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//       }
//     } else {
//       router.push(path);
//     }
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full px-6 py-4 backdrop-blur-lg bg-white/30 shadow-md z-50 font-poppins rounded-b-3xl transition-transform duration-500 ${hideNavbar ? "-translate-y-full" : "translate-y-0"
//         }`}
//     >
//       <nav className="max-w-[1920px] mx-auto flex justify-between items-center">
//         <div id="logo" className="w-[100px] sm:w-[120px]">
//           <Link href="/">
//             <Image
//               src="/neklogo.png"
//               alt="nekPunjabi"
//               width={0}
//               height={0}
//               sizes="100vw"
//               className="w-full h-auto"
//             />
//           </Link>
//         </div>

//         <div id="nav-links" className="hidden md:flex space-x-6 font-medium text-lg">
//           {[
//             { path: "/#about", label: "About" },
//             { path: "/#services", label: "Services" },
//           ].map(({ path, label }) => (
//             <a
//               key={path}
//               href={path}
//               onClick={(e) => handleNavClick(e, path)}
//               className={`px-3 py-1 rounded-full ${pathname === path
//                 ? "text-black border-2 font-semibold"
//                 : "text-white hover:text-black"
//                 }`}
//             >
//               {label}
//             </a>
//           ))}

//           <Link href="/getAdvice">
//             <button
//               id="contact-button"
//               className={`bg-white text-[#99BDE5] text-lg font-medium px-6 py-2 rounded-[16px] shadow-sm hover:shadow-md transition ${pathname === "/getAdvice" ? "text-black" : "hover:text-black"
//                 }`}
//             >
//               Get advice
//             </button>
//           </Link>
//         </div>

//         <Link href="/getAdvice" className="block sm:block md:hidden">
//           <button
//             id="contact-button"
//             className={`bg-white text-[#99BDE5] text-[12px] font-medium px-4 py-2 rounded-[12px] shadow-sm hover:shadow-md transition ${pathname === "/getAdvice" ? "text-black" : "hover:text-black"
//               }`}
//           >
//             Get advice
//           </button>
//         </Link>
//       </nav>


//     </header>
//   );
// };

// export default Navbar;



"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { RiMenu2Fill } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // useEffect(() => {
  //   if (menuOpen) {
  //     // Optional animation
  //   }
  // }, [menuOpen]);

  // ✅ Stable scroll behavior across all browsers
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setHideNavbar(true);
          } else {
            setHideNavbar(false);
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, path) => {
    if (pathname === "/" && path.startsWith("/#")) {
      e.preventDefault();
      const id = path.replace("/#", "");
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(path);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 max-w-[1920px] mx-auto right-0 z-50 w-full px-6 py-4 transition-transform duration-300 ease-in-out ${hideNavbar ? "-translate-y-full" : "translate-y-0"
        } bg-white/30 backdrop-blur-lg shadow-md`}
      style={{
        willChange: "transform",
        transform: hideNavbar ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      <nav className="relative z-10 max-w-[1920px] mx-auto flex justify-between items-center">
        <div className="w-[100px] sm:w-[120px]">
          <Link href="/">
            <Image
              src="/neklogo.png"
              alt="nekPunjabi"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              draggable={false}
            />
          </Link>
        </div>

        <div className="hidden md:flex space-x-6 font-medium text-lg">
          {[
            { path: "/#about", label: "About" },
            { path: "/#services", label: "Services" },
          ].map(({ path, label }) => (
            <a
              key={path}
              href={path}
              onClick={(e) => handleNavClick(e, path)}
              className={`px-3 py-1 rounded-full ${pathname === path
                ? "text-black border-2 font-semibold"
                : "text-white hover:text-black"
                }`}
            >
              {label}
            </a>
          ))}
          <Link href="/getAdvice">
            <button
              className={`bg-white text-[#759DD1] hover:text-[#94B3DB] text-lg font-medium px-6 py-2 rounded-[16px] shadow-sm hover:shadow-md transition cursor-pointer 
                `}
            >
              Get advice
            </button>
          </Link>
        </div>

        <Link href="/getAdvice" className="block sm:block md:hidden">
          <button
            className={`bg-white text-[#759DD1] hover:text-[#94B3DB] text-[12px] font-medium px-4 py-2 rounded-[12px] shadow-sm hover:shadow-md cursor-pointer transition `}
          >
            Get advice
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
