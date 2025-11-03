"use client";
import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const Faqs = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How can I place an order?",
      answer:
        "Ordering from FitGrips is simple! Browse our products, select the item, size, and quantity you need, and click 'Add to Cart.' When you're ready, proceed to checkout and follow the on-screen instructions to enter your shipping and payment information.",
    },
    {
      id: 2,
      question: "Who do I contact for support or questions?",
      answer:
        "Our customer support team is here to help! For any questions about our products, your order, or custom branding, please email us at info@fitgrips.com or call/WhatsApp us at +92 328 8528563. We aim to respond within 24 business hours.",
    },
    {
      id: 3,
      question: "What are your weightlifting products made from?",
      answer:
        "We use only premium, heavy-duty materials designed for strength and longevity. This includes reinforced stitching, high-grade cotton elastics for wraps, genuine leather for our belts, and industrial-strength velcro and metal buckles to ensure our gear can handle your toughest workouts."
    },
    {
      id: 4,
      question: "Do you offer custom branding for gyms?",
      answer:
        "Yes, we offer custom branding options for gyms and fitness centers. Please contact our support team to discuss your requirements and get a quote.",
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <>
      <section className="w-full overflow-hidden mt-12 mb-4 md:mb-8 md:mt-16">
        <div className="flex flex-col md:flex-row gap-4 px-2 md:px-4">
          <div className="flex flex-col gap-4 items-start justify-center">
            <h1 className="text-2xl md:text-3xl font-bold">
              Your Questions Answered — About FitGrips Premium Fitness Gear
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Explore everything you need to know about FitGrips Wrist Grips,
              Lifting Straps, and Knee Wraps. Designed for athletes who demand
              support, durability, and performance FitGrips products are trusted
              in gyms around the world. Find the right gear to power your
              strength journey.
            </p>
            <button className="h-10 w-30 md:h-10 md:w-40 md:text-sm text-xs font-bold whitespace-nowrap flex items-center justify-center px-4 border border-gray-400 cursor-pointer text-white bg-black rounded-full no-underline">
              Create Account
            </button>
          </div>
          <div className="flex flex-col gap-4 overflow-y-auto max-h-[70vh] md:max-h-[80vh] pr-2">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="flex flex-col bg-gray-100 p-4 rounded-3xl transition-all duration-300"
              >
                <div
                  className={`flex items-center justify-between cursor-pointer border-b-2 ${
                    openFaq === faq.id 
                      ? "border-gray-400 mb-3" 
                      : "border-transparent delay-300"
                  } transition-all duration-300`}
                  onClick={() => toggleFaq(faq.id)}
                >
                  <h2 className="text-md md:text-xl font-semibold">
                    {faq.question}
                  </h2>
                  <button className="shrink-0 ml-4 transition-transform duration-1000 bg-black rounded-full p-2">
                    {openFaq === faq.id ? (
                      <X
                        size={20}
                        className="text-white rotate-90 transition-transform duration-1000 ease-in-out"
                      />
                    ) : (
                      <Plus size={20} className="text-white transition-transform duration-1000 ease-in-out" />
                    )}
                  </button>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === faq.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-xs md:text-base text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
