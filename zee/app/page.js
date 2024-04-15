"use client"

import About from "@/components/About";
import Blur from "@/components/Blur";
import Services from "@/components/Services";
import useMediaQuery from "@/components/useMediaQuery";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
import { ReactLenis } from '@studio-freight/react-lenis'
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NewProjects from "@/components/NewProjects";
import Link from "next/link";

export default function Home() {

  const isMobile= useMediaQuery('(max-width:769px)');
 const [isHover,setIsHover] = useState(false)
 
  
  return (
    <>
    
    <ReactLenis root>
      <div id="home" className="p-10 sm:p-0">
        <div className="text-white    px-0 sm:px-20 mt-20 m-auto  max-w-[1400px]   flex items-center gap-0 sm:gap-[200px] justify-between">
          <div className="relative  ">
           </div>
          <div className=" ">
            <span className="bg-gradient bg-clip-text text-transparent font-bold inline-block text-xl mb-5">
              Web Developer | Programmer | Freelancer
            </span>
            <h1 className="mb-5 text-4xl leading-normal font-bold">
              Unleashing Full-Stack Prowess for Exceptional Web Development
              Services
            </h1>
            <p className="mb-5 text-xl">
              Transforming your ideas into remarkable digital solutions.
            </p>
            <button className={`mb-5 px-5 p-3   text-green font-bold rounded-full flex items-center justify-between gap-5
            hover:bg-button-hover bg-button  transition-all duration-300`}>
               <Link href={"https://wa.me/923357870507"}> Lets Collaborate </Link> 
              <IoLogoWhatsapp size={"30px"} color="#18ffb0"   />
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMobile ? "hidden" : "block"} absolute -top-[8%] -left-[13%] right-auto bottom-auto`}>
        <Blur height="h-[20rem]" width="w-[20rem]" />
      </div>
      <div className={`${isMobile ? "hidden" : "block"} absolute top-[0%] bottom-auto right-[0%] left-auto mt-[10rem]`}>
        <Blur height="h-[20rem]" width="w-[20rem]" />
      </div>

      <div className="mt-20 sm:mt-[250px]">
        <About/>
      </div>
      <div className="mt-20 sm:mt-[250px] ">
        <Services/>
      </div>
      <div className="divBg   h-[150px]">
         
      </div>
      <div className="   ">
        <NewProjects/>
      </div>
      <div className="mt-20 sm:mt-[250px]   "  >
        <Contact/>
      </div>
      </ReactLenis>
    </>
  );
}
