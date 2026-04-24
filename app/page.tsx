"use client";

import React from "react";
import PricingSection from "@/components/PricingSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      
        {/* 🌑 MINIMAL APPLE-STYLE BACKGROUND */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          
          {/* BASE DARK */}
          <div className="absolute inset-0 bg-[#050505]" />

          {/* VERY SUBTLE CENTER LIGHT */}
          <div className="absolute inset-0 
            bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.06),transparent_60%)]" 
          />

          {/* SOFT BLUE DEPTH (VERY LOW OPACITY) */}
          <div className="absolute 
            top-[-150px] left-1/2 -translate-x-1/2 
            w-[600px] h-[600px] 
            bg-blue-500/10 
            blur-[140px] 
            rounded-full" 
          />
        </div>
      
    
      
        {/* NAV */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-4 px-6 sm:px-10 py-6">

        <h1 className="text-xl font-semibold tracking-tight">
          JAW - Virtual Dental Receptionist
        </h1>

        <div className="flex gap-3 w-full sm:w-auto justify-center sm:justify-end flex-wrap">

          <a
            href="mailto:drhammadjawaid@gmail.com?subject=Book Free Demo - Dental Receptionist&body=Hi, I want a demo."
            className="px-4 py-2 rounded-xl bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
          >
            Book Free Demo
          </a>

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
          Meet Jaw, the warm and reliable voice of your practice that greets every patient by name and settles their nerves 24/7.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

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
          { title: "Auto Booking", desc: "Handles appointments instantly." },
          { title: "Never Miss Calls", desc: "Answers every call 24/7." },
          { title: "Smart Scheduling", desc: "Syncs with calendar in real-time." }
        ].map((f, i) => (
          <div
            key={i}
            className="relative p-6 rounded-2xl 
            bg-white/5 backdrop-blur-2xl 
            border border-white/10 
            shadow-[0_8px_32px_rgba(0,0,0,0.3)] 
            transition-all duration-300 
            hover:bg-white/10 
            hover:border-white/20 
            hover:shadow-[0_10px_40px_rgba(139,92,246,0.25)]"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />

            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="text-gray-300 mt-2 text-sm">{f.desc}</p>
          </div>
        ))}

      </div>

      {/* 🔥 HOW IT WORKS (FLOW STYLE) */}
      <div className="relative z-10 text-center mt-28 px-6">

        <h2 className="text-3xl font-semibold mb-12">How it works</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">

          {[
            "Patient Calls",
            "AI Answers",
            "Understands Request",
            "Books Appointment",
            "Confirmation Sent"
          ].map((step, i) => (
            <React.Fragment key={i}>
              <div className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl text-sm">
                {step}
              </div>

              {i !== 4 && (
                <div className="text-gray-500 text-xl hidden md:block">→</div>
              )}
            </React.Fragment>
          ))}

        </div>

      </div>

      {/* PRICING */}
      <div id="pricing" className="relative z-10 mt-20 sm:mt-28">
        <PricingSection />
      </div>

      {/* FOOTER */}
      <div className="relative z-10 text-center text-gray-500 text-xs mt-32 pb-10">
        © 2026 JAW - Dental Receptionist
      </div>

    </div>
  );
}
