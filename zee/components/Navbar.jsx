import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useMediaQuery from "./useMediaQuery";
import { Pivot as Hamburger } from "hamburger-react";

const Navbar = () => {
  const isMobile = useMediaQuery("(min-width: 768px)");
  const [isOpen, setOpen] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  const container = useRef();

  useEffect(() => {
    if (!isMobile) return; // Do not apply GSAP for mobile
  
    const nav = container.current.querySelector(".nav");
  
    gsap.to(nav, {
      scrollTrigger: {
        trigger: nav,
        start: "top top",
        endTrigger: ".content", // Change this to the appropriate end trigger selector
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        onUpdate: ({ progress, direction, isActive }) => {
          if (isActive) {
            const marginTop =  100; // Adjust the multiplier to change the margin
            nav.style.marginTop = `${marginTop}px`;
          }
        },
      },
      top: -50,
    });
  }, [isMobile]);
  

  return (
    <>
      {isMobile ? (
        <div className="flex items-center justify-center " ref={container}>
          <nav className="customBg box customBorder p-5 z-50 px-10 w-full max-w-[800px] m-auto rounded-full   gap-10 text-white flex items-start justify-between mt-20 nav">
            <Link href={"#home"} className="px-3 hover:text-[#AFFFFF]">
              Home
            </Link>
            <div className="w-[1px] h-[1.5rem] customDivider"></div>
            <Link href={"#about"} className="px-3 hover:text-[#AFFFFF]">
              About Me
            </Link>
            <div className="w-[1px] h-[1.5rem] customDivider"></div>
            <Link href={"#projects"} className="px-3 hover:text-[#AFFFFF]">
              Work
            </Link>
            <div className="w-[1px] h-[1.5rem] customDivider"></div>
            <Link href={"#services"} className="px-3 hover:text-[#AFFFFF]">
              Services
            </Link>
            <div className="w-[1px] h-[1.5rem] customDivider"></div>
            <Link href={"#contact"} className="px-3 hover:text-[#AFFFFF]">
              Contact
            </Link>
          </nav>
        </div>
      ) : (
        <>
          <div className="flex  items-center justify-between customBg px-10 p-3 fixed w-full z-50"  >
            <h1 className="text-white">Zee</h1>
            <Hamburger
              color="white"
              toggled={isOpen}
              toggle={setOpen}
              duration={0.8}
            />
          </div>
          {isOpen && (
            <div className="fixed top-[70px] w-screen h-screen bg-black z-50"  >
              <nav className="z-50 w-full max-w-[800px] m-auto rounded-full gap-2 text-white font-bold flex items-center justify-center flex-col mt-[150px]">
                <Link href={"#home"} className="px-3 hover:text-[#AFFFFF]" onClick={()=>setOpen(!isOpen)}>
                  Home
                </Link>
                <div className="w-[1px] h-[1.5rem] customDivider"></div>
                <Link href={"#about"} className="px-3 hover:text-[#AFFFFF]" onClick={()=>setOpen(!isOpen)}>
                  About Me
                </Link>
                <div className="w-[1px] h-[1.5rem] customDivider"></div>
                <Link href={"#projects"} className="px-3 hover:text-[#AFFFFF]" onClick={()=>setOpen(!isOpen)}>
                  Work
                </Link>
                <div className="w-[1px] h-[1.5rem] customDivider"></div>
                <Link href={"#services"} className="px-3 hover:text-[#AFFFFF]" onClick={()=>setOpen(!isOpen)}>
                  Services
                </Link>
                <div className="w-[1px] h-[1.5rem] customDivider"></div>
                <Link href={"#contact"} className="px-3 hover:text-[#AFFFFF]" onClick={()=>setOpen(!isOpen)}>
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Navbar;
