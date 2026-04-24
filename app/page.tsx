"use client";

import React from "react";
import PricingSection from "@/components/PricingSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* BACKGROUND (RESPONSIVE + PREMIUM) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* BASE GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050507] via-[#0a0a12] to-black" />

        {/* TOP PURPLE GLOW */}
        <div className="absolute 
          top-[-120px] sm:top-[-180px] 
          left-1/2 -translate-x-1/2 
          w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] 
          bg-purple-600/60 
          blur-[90px] sm:blur-[130px] 
          rounded-full
        " />

        {/* BOTTOM BLUE GLOW */}
        <div className="absolute 
          bottom-[-120px] sm:bottom-[-180px] 
          right-[-60px] sm:right-[-120px] 
          w-[300px] h-[300px] sm:w-[550px] sm:h-[550px] 
          bg-blue-500/50 
          blur-[90px] sm:blur-[130px] 
          rounded-full 
        " />

      </div>

      {/* NAV */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-4 px-6 sm:px-10 py-6">

        {/* LEFT BRAND */}
        <h1 className="text-xl font-semibold tracking-tight">
          JAW - Virtual Dental Receptionist
        </h1>

        {/* RIGHT BUTTONS */}
        <div className="flex gap-3 w-full sm:w-auto justify-center sm:justify-end flex-wrap">

          {/* EMAIL */}
          <a
            href="mailto:drhammadjawaid@gmail.com?subject=Book Free Demo - Dental Receptionist&body=Hi, I want a demo."
            className="px-4 py-2 rounded-xl bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
          >
            Book Free Demo
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/923062233194?text=Hi, I want a demo of your Virtual Dental Receptionist"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-green-500 text-black text-sm font-medium hover:bg-green-400 transition"
          >
            WhatsApp
          </a>

        </div>
      </div>

      {/* HERO */}
      <div className="relative z-10 text-center mt-20 sm:mt-24 px-6">

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Ready to scale your patient flow?
        </h2>

        <p className="text-gray-300 mt-6 text-base sm:text-lg max-w-2xl mx-auto">
          Meet Jaw, the warm and reliable voice of your practice that greets every patient by name and settles their nerves 24/7. It’s like having a dedicated teammate who never misses a call, perfectly balancing your schedule so you can focus entirely on the patient in your chair.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 flex-wrap">

          <button
            onClick={() => {
              const el = document.getElementById("pricing");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 border border-white/20 rounded-xl text-white hover:bg-white/10 transition"
          >
            Start Now
          </button>

          <a
            href="https://your-video-link.com"
            target="_blank"
            className="px-6 py-3 border border-white/20 rounded-xl text-white hover:bg-white/10 transition"
          >
            Watch How It Works
          </a>

        </div>
      </div>

      {/* FEATURES */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-24 px-6">

        {[
          {
            title: "Auto Appointment Booking",
            desc: "AI handles booking, rescheduling, and cancellations instantly."
          },
          {
            title: "Never Miss Calls",
            desc: "Every call is answered even after clinic hours."
          },
          {
            title: "Smart Scheduling",
            desc: "Syncs directly with Google Calendar in real-time."
          }
        ].map((f, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl
            bg-white/5 backdrop-blur-2xl
            border border-white/10
            shadow-[0_8px_32px_rgba(0,0,0,0.3)]
            transition-all duration-300
            hover:bg-white/10
            hover:border-white/20
            hover:shadow-[0_10px_40px_rgba(139,92,246,0.25)]" 
          >
            {/* GLASS REFLECTION */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
            
            <h3 className="text-lg font-semibold text-white">{f.title}</h3>
            <p className="text-gray-300 mt-2 text-sm">{f.desc}</p>
          </div>
        ))}

      </div>

      {/* HOW IT WORKS */}
      <div className="relative z-10 text-center mt-28 px-6">
        <h2 className="text-3xl font-semibold">How it works</h2>

        <div className="mt-10 max-w-3xl mx-auto text-gray-300 space-y-3 text-sm">
          <p>1. Patient calls your clinic number</p>
          <p>2. AI answers instantly (no missed calls)</p>
          <p>3. Detects intent (book / cancel / reschedule)</p>
          <p>4. Updates Google Calendar automatically</p>
          <p>5. Sends confirmation to patient</p>
        </div>
      </div>

      {/* PRICING */}
      <div id="pricing" className="relative z-10 mt-20 sm:mt-28">
        <PricingSection />
      </div>

      {/* FOOTER */}
      <div className="relative z-10 text-center text-gray-500 text-xs mt-32 pb-10">
        © 2026 JAW - Dental Receptionist. All rights reserved.
      </div>

    </div>
  );
}