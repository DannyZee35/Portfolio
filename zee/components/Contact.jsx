


import Link from 'next/link';
import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram,FaGithub,FaLinkedin  } from "react-icons/fa";

const Contact = () => {
  return (
    <>
     <div id='contact' className=' max-w-[1100px] m-auto mb-10 borderBtm pb-20 sm:p-10 p-5' >
      <div className=' flex sm:flex-row flex-col gap-5    items-center justify-between'>
      <h1 className='sm:text-left  text-center text-5xl sm:text-7xl text-white'>Lets Collaborate</h1>
        <button className=" transition-all duration-300 hover:bg-button-hover sm:w-[200px] sm:h-[200px] sm:p-10 w-full h-auto p-4 text-lg  bg-button text-green font-bold rounded-full ">
           <Link href={"https://wa.me/923357870507"}>
           Get In Touch
           </Link> 
            </button>

      </div>
       
            <div className='  hidden text-white sm:flex items-center  justify-center mt-[100px]     rounded-full'> 
         <Link href={"/"}  className='px-[100px] p-5 borderRight rounded-l-full hover:bg-[#0C4848] hover:rounded-l-full '>Instagram</Link>
         <Link href={"https://github.com/DannyZee35"} className='px-[100px] p-5  border2 border-l-0 hover:bg-[#0C4848]  '>Github</Link>
          <Link href={"/"} className='px-[100px] p-5   border2 border-l-0  rounded-r-full hover:rounded-r-full hover:bg-[#0C4848]'>LinkedIn</Link>
 
        </div>

        <div className='flex items-center justify-center gap-20 sm:hidden mt-20'>
          <Link href={"/"}>
          <FaInstagram size={"30px"} color='white'/>
          </Link>
          <Link href={"https://github.com/DannyZee35"}>
          <FaGithub size={"30px"} color='white'/>
          </Link>
          <Link href={"/"}>
          <FaLinkedin size={"30px"} color='white'/>
          </Link>
          
         
        

     
        </div>
    </div>
        
    </>
   
  )
}

export default Contact