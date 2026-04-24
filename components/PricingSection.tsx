"use client";

import React, { useState, useEffect } from "react";

const basePlans = [
  {
    name: "Essential Reception",
    monthly: 199,
    original: 249,
    description: "Perfect for solo clinics getting started",
    features: [
      "500 minutes/month",
      "Appointment booking, cancellation & rescheduling",
      "Basic call handling",
      "Email notifications",
      "Google Calendar integration",
      "Google Sheets dashboard",
    ],
    cta: "Get Started",
  },
  {
    name: "Smart Front Desk",
    monthly: 299,
    original: 399,
    description: "Best for growing clinics",
    features: [
      "1,000 minutes/month",
      "Multi-doctor scheduling",
      "Everything in Essential",
      "Custom analytics (missed vs booked)",
    ],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "AI Front Desk Pro",
    monthly: 449,
    original: 599,
    description: "For high-volume clinics",
    features: [
      "2,000 minutes/month",
      "Everything in Growth",
      "WhatsApp integration",
      "Peak hour optimization",
      "Priority support",
    ],
    cta: "Go Pro",
  },
  {
    name: "Custom Enterprise",
    monthly: null,
    description: "Tailored for large clinics",
    features: [
      "Unlimited minutes",
      "Custom workflows",
      "CRM integrations",
      "Dedicated support",
      "Custom analytics dashboard",
    ],
    cta: "Contact Sales",
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3 * 24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs: number) => {
    const d = Math.floor(secs / (24 * 3600));
    const h = Math.floor((secs % (24 * 3600)) / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${d}d ${h}h ${m}m ${s}s`;
  };

  const getPrice = (plan: any) => {
    if (!plan.monthly) return "Custom";

    if (annual) {
      const discounted = plan.monthly * 12 * 0.8;
      return `$${Math.round(discounted)}/yr`;
    }

    return `$${plan.monthly}`;
  };

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* HEADER */}
        <h1 className="text-4xl font-bold mb-3">
          Ready to scale your patient flow?
        </h1>

        <p className="text-gray-500 mb-2">
          AI receptionist that never misses a call
        </p>

        <p className="text-sm text-gray-600 mb-1">
          🎉 <b>Free setup (limited time)</b> — Save $149 onboarding fee
        </p>

        <p className="text-red-500 text-xs mb-8">
          ⏳ Offer ends in {formatTime(timeLeft)}
        </p>

        {/* TOGGLE */}
        <div className="flex justify-center items-center gap-3 mb-12">
          <span className={!annual ? "font-semibold" : "text-gray-400"}>
            Monthly
          </span>

          <button
            onClick={() => setAnnual(!annual)}
            className="w-12 h-6 bg-gray-200 rounded-full relative"
          >
            <div
              className={`h-6 w-6 bg-black rounded-full absolute top-0 transition-all ${
                annual ? "left-6" : "left-0"
              }`}
            />
          </button>

          <span className={annual ? "font-semibold" : "text-gray-400"}>
            Annual <span className="text-green-600">(Save 20%)</span>
          </span>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-4 gap-6 items-stretch">

          {basePlans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-[2px] ${
                plan.highlight
                  ? "bg-gradient-to-r from-black via-gray-500 to-black"
                  : "bg-gray-200"
              }`}
            >

              {/* MOST POPULAR */}
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              {/* CARD */}
              <div className="h-full bg-white rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-md transition">

                <div>
                  <h2 className="text-lg font-semibold">{plan.name}</h2>
                  <p className="text-sm text-gray-500 mb-4">
                    {plan.description}
                  </p>

                  {/* PRICE */}
                  <div className="mb-4">
                    {plan.original && !annual && (
                      <span className="line-through text-gray-400 mr-2">
                        ${plan.original}
                      </span>
                    )}

                    <span className="text-3xl font-bold">
                      {getPrice(plan)}
                    </span>

                    {!annual && (
                      <span className="text-gray-400 text-sm"> /mo</span>
                    )}
                  </div>

                  {/* FEATURES */}
                  <ul className="text-sm text-gray-600 space-y-2 mb-6 text-left">
                    {plan.features.map((f, idx) => (
                      <li key={idx}>• {f}</li>
                    ))}
                  </ul>
                </div>

                {/* BUTTON */}
                <button
                  className={`mt-auto w-full py-2 rounded-xl font-medium ${
                    plan.highlight
                      ? "bg-black text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-12 text-sm text-gray-500">
          Extra minutes: $0.20/min • Annual plan saves 20%
        </div>

      </div>
    </div>
  );
}