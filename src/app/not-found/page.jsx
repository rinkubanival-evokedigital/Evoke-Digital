"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';


export default function TermsPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* Full-screen width Navbar */}
      <Navbar />
   <div className="flex flex-col lg:flex-row min-h-screen items-center justify-center bg-white px-6 py-12">
      <div className="flex w-full max-w-5xl flex-col items-center justify-between gap-12 lg:flex-row">
        
        {/* Left Side: Disconnected Plug Illustration */}
        <div className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80 lg:h-[400px] lg:w-[400px]">
          {/* Background Circle */}
          <div className="absolute inset-0 rounded-full bg-gray-50 opacity-80" />
          
          <svg
            viewBox="0 0 240 240"
            fill="none"
            className="relative z-10 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Top Cord and Plug */}
            <path
              d="M180 20 H120 V80"
              stroke="#FF7518"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <rect x="105" y="80" width="30" height="35" rx="4" fill="#FF7518" />
            <rect x="110" y="115" width="6" height="12" rx="2" fill="#FF7518" />
            <rect x="124" y="115" width="6" height="12" rx="2" fill="#FF7518" />

            {/* Bottom Cord and Plug */}
            <path
              d="M60 220 H120 V160"
              stroke="#FF7518"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <rect x="105" y="125" width="30" height="35" rx="4" fill="#FF7518" />
            
            {/* "Spark" lines */}
            <line x1="85" y1="110" x2="70" y2="105" stroke="#FF7518" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
            <line x1="85" y1="130" x2="70" y2="135" stroke="#FF7518" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
            <line x1="155" y1="110" x2="170" y2="105" stroke="#FF7518" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
            <line x1="155" y1="130" x2="170" y2="135" stroke="#FF7518" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
          </svg>
        </div>

        {/* Right Side: Text Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-8xl font-bold tracking-tighter text-[#FF7518] sm:text-9xl">
            404
          </h1>
          <h2 className="mt-2 text-3xl font-bold text-gray-800 sm:text-4xl">
            Page Not Found
          </h2>
          <p className="mt-4 max-w-md text-lg text-gray-400">
            We're sorry, the page you requested could not be found! 
            Please go back to the homepage.
          </p>
          
          <div className="mt-10">
            <Link
              href="/"
              className="inline-block rounded-full bg-[#FF7518] px-10 py-3 text-sm font-bold uppercase tracking-widest text-white transition-transform hover:scale-105 active:scale-95"
            >
              Go Home
            </Link>
          </div>
        </div>

      </div>
    </div>

     
      <Footer />
    </div>
  );
}


    
