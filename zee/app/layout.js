 "use client"
 
 import Navbar from "@/components/Navbar";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import Footer from "@/components/Footer";
import { useState, useEffect} from "react";
 

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Clear timeout if component unmounts
    return () => clearTimeout(timer);
  }, []);


  return (
    <html lang="en">

      <body className="bg-[#080705]" >
      {loading ? (
         <p> Loading</p>
      ) : (
        <>
         <Navbar/>

<SmoothScrolling>{children}</SmoothScrolling>

<Footer/>
        </>

            )}
        </body>
    </html>
  );
}
