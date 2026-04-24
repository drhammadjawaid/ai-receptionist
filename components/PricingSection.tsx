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

  // 🟢 FINAL CLICK ACTION (WHATSAPP LEAD FUNNEL)
  const handleSelectPlan = (plan: any) => {
    const phone = "92300XXXXXXX"; // 👉 replace with YOUR number
    const message = `Hi, I am interested in the ${plan.name} plan for AI receptionist.`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

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
    <div className="min-h-screen bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* HEADER */}
        <h1 className="text-4xl font-bold mb-3">
          Ready to scale your patient flow?
        </h1>

        <p className="text-gray-300 mb-2">
          AI receptionist that never misses a call
        </p>

        <p className="text-sm text-gray-400 mb-1">
          🎉 <b className="text-white">Free setup (limited time)</b> — Save $149 onboarding fee
        </p>

        <p className="text-red-400 text-xs mb-8">
          ⏳ Offer ends in {formatTime(timeLeft)}
        </p>

        {/* TOGGLE */}
        <div className="flex justify-center items-center gap-3 mb-12">
          <span className={!annual ? "font-semibold text-white" : "text-gray-500"}>
            Monthly
          </span>

          <button
            onClick={() => setAnnual(!annual)}
            className="w-12 h-6 bg-gray-700 rounded-full relative"
          >
            <div
              className={`h-6 w-6 bg-white rounded-full absolute top-0 transition-all ${
                annual ? "left-6" : "left-0"
              }`}
            />
          </button>

          <span className={annual ? "font-semibold text-white" : "text-gray-500"}>
            Annual <span className="text-green-400">(Save 20%)</span>
          </span>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-4 gap-6 items-stretch">

          {basePlans.map((plan, i) => (
            <div
              key={i}
              onClick={() => handleSelectPlan(plan)}
              className={`relative rounded-2xl p-[2px] cursor-pointer transition hover:scale-[1.03] ${
                plan.highlight
                  ? "bg-gradient-to-r from-white/30 via-white/10 to-white/30"
                  : "bg-white/10"
              }`}
            >

              {/* MOST POPULAR */}
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-3 py-1 rounded-full font-semibold">
                  Most Popular
                </div>
              )}

              {/* CARD */}
              <div className="h-full bg-black border border-white/10 rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-xl transition">

                <div>
                  <h2 className="text-lg font-semibold text-white">
                    {plan.name}
                  </h2>

                  <p className="text-sm text-gray-400 mb-4">
                    {plan.description}
                  </p>

                  {/* PRICE */}
                  <div className="mb-4">
                    {plan.original && !annual && (
                      <span className="line-through text-gray-500 mr-2">
                        ${plan.original}
                      </span>
                    )}

                    <span className="text-3xl font-bold text-white">
                      {getPrice(plan)}
                    </span>

                    {!annual && (
                      <span className="text-gray-400 text-sm"> /mo</span>
                    )}
                  </div>

                  {/* FEATURES */}
                  <ul className="text-sm text-gray-300 space-y-2 mb-6 text-left">
                    {plan.features.map((f, idx) => (
                      <li key={idx}>• {f}</li>
                    ))}
                  </ul>
                </div>

                {/* BUTTON */}
                <button
                  onClick={() => handleSelectPlan(plan)}
                  className={`mt-auto w-full py-2 rounded-xl font-medium transition ${
                    plan.highlight
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-white/10 text-white hover:bg-white/20"
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