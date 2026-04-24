"use client";

import React from "react";
import PricingSection from "@/components/PricingSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-black">

      {/* 🔥 PREMIUM VIBRANT BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        
        {/* BASE */}
        <div className="absolute inset-0 bg-[#020204]" />

        {/* PURPLE CORE LIGHT */}
        <div className="absolute 
        top-[10%] left-1/2 -translate-x-1/2 
        w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] 
        bg-purple-600/40 
        blur-[120px] sm:blur-[160px] 
        rounded-full" 
      />

        {/* BLUE SIDE LIGHT */}
        <div className="absolute 
        bottom-[0%] right-[10%] 
        w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] 
        bg-blue-500/30 
        blur-[100px] sm:blur-[140px] 
        rounded-full" 
      />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />

      </div>


      {/* NAV */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-4 px-6 sm:px-10 py-6">

        <h1 className="text-lg sm:text-xl font-semibold tracking-tight text-white/90">
          JAW — Virtual Dental Receptionist
        </h1>

        <div className="flex gap-3 flex-wrap justify-center">

          {/* EMAIL */}
          <a
            href="mailto:drhammadjawaid@gmail.com"
            className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium 
            hover:bg-[#e5e5e7] transition shadow-md"
          >
            Book Free Demo
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/923062233194"
            target="_blank"
            className="px-4 py-2 rounded-full bg-[#1d1d1f] text-white text-sm font-medium 
            border border-white/10 hover:bg-white/10 transition"
          >
            WhatsApp
          </a>

        </div>
      </div>

      {/* HERO */}
      <div className="relative z-10 text-center mt-24 px-6">

        <h2 className="text-3xl font-semibold mb-12">
          Ready to scale your patient flow?
        </h2>

        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          Meet Jaw, the warm and reliable voice of your practice that greets every patient by name and settles their nerves 24/7. It’s like having a dedicated teammate who never misses a call, perfectly balancing your schedule so you can focus entirely on the patient in your chair.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <button
            onClick={() => {
              const el = document.getElementById("pricing");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 rounded-full bg-white text-black font-medium 
            hover:bg-[#e5e5e7] transition"
          >
            Start Now
          </button>

          <a
            href="https://your-video-link.com"
            target="_blank"
            className="px-6 py-3 rounded-full border border-white/20 text-white 
            hover:bg-white/10 transition"
          >
            Watch Demo
          </a>

        </div>
      </div>

      {/* FEATURES */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-28 px-6">

        {[
          { title: "Auto Booking", desc: "Books, cancels, reschedules instantly." },
          { title: "Always Available", desc: "Answers every call, even after hours." },
          { title: "Smart Sync", desc: "Updates your calendar in real time." }
        ].map((f, i) => (
          <div
            key={i}
            className="relative p-6 rounded-2xl 
            bg-white/[0.04] backdrop-blur-xl 
            border border-white/10 
            hover:bg-white/[0.08] transition"
          >
            <h3 className="text-white font-medium">{f.title}</h3>
            <p className="text-gray-400 mt-2 text-sm">{f.desc}</p>
          </div>
        ))}

      </div>
      
      {/* 🔄 HOW IT WORKS */}
      <div className="relative z-10 text-center mt-28 px-6">
        
        <h2 className="text-3xl font-semibold mb-12">
          How it works
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">

        {[
          "Patient Calls",
          "AI Answers",
          "Understands Intent",
          "Books / Reschedules",
          "Confirmation Sent"
        ].map((step, i) => (
          <React.Fragment key={i}>
            
            {/* STEP */}
            <div className="px-5 py-3 rounded-xl 
              bg-white/5 backdrop-blur-xl 
              border border-white/10 
              text-sm text-gray-200 
              min-w-[140px] text-center"
            >
              {step}
            </div>

            {/* ARROW */}
            {i !== 4 && (
              <div className="text-gray-500 text-xl">
                →
              </div>
            )}
            
          </React.Fragment>
        ))}
      
      </div>
  
    </div>




      {/* PRICING */}
      <div id="pricing" className="relative z-10 mt-28">
        <PricingSection />
      </div>

      {/* FOOTER */}
      <div className="relative z-10 text-center text-gray-500 text-xs mt-32 pb-10">
        © 2026 JAW
      </div>

    </div>
  );
}