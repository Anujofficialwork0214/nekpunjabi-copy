"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (menuOpen) {
      gsap.from("#mobile-menu a", {
        y: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
      });
    }
  }, [menuOpen]);

 
  useEffect(() => {
    let lastScrollY = window.scrollY;
  
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }
      setMenuOpen(false); 
      lastScrollY = window.scrollY;
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`fixed top-0 left-0 w-full px-6 py-4 backdrop-blur-lg bg-white/30  shadow-md z-50 font-poppins rounded-b-3xl transition-transform duration-500 ${
        hideNavbar ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="max-w-[1600px] mx-auto flex justify-between items-center">
  
        <div id="logo" className="w-[100px] sm:w-[120px]">
  <Link href="/">
    <Image
      src="/neklogo.png"
      alt="nekPunjabi"
      width={0}
      height={0}
      sizes="100vw"
      className="w-full h-auto"
    />
  </Link>
</div>


<div id="nav-links" className="hidden md:flex space-x-6 font-medium text-lg">
  {[
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
  ].map(({ path, label }) => (
    <Link
      key={path}
      href={path}
      className={`px-3 py-1 rounded-full ${
        pathname === path
          ? "text-black border-2 font-semibold"
          : "text-white hover:text-black"
      }`}
    >
      {label}
    </Link>
  ))}
  <Link href="/getAdvice">
    <button
      id="contact-button"
      className={`bg-white text-[#99BDE5] text-lg font-medium px-6 py-2  rounded-[16px] shadow-sm hover:shadow-md transition ${
        pathname === "/getAdvice" ? "text-black" : "hover:text-black"
      }`}
    >
      Get advice
    </button>
  </Link>
</div>

 <Link href="/getAdvice" className="block sm:block md:hidden">
  <button
    id="contact-button"
    className={`bg-white text-[#99BDE5] text-[12px] font-medium px-4 py-2 rounded-[12px] shadow-sm hover:shadow-md transition ${
      pathname === "/getAdvice" ? "text-black" : "hover:text-black"
    }`}
  >
    Get advice
  </button>
</Link>

      </nav>
    </header>
  );
};

export default Navbar;
