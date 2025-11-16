"use client";
import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const FaqsDisplay = ({ title, desc, button, faqsData }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <>
      <section className="w-full md:w-[90vw] overflow-hidden mt-12 mb-4 md:mb-8 md:mt-16">
        <div className="flex flex-col md:flex-row px-2 md:px-4 gap-4">
          <div className="flex flex-col gap-4 items-start justify-center px-4 md:ml-16">
            <h1 className="text-2xl md:text-3xl font-bold">
             {title}
            </h1>
            <p className="text-xs md:text-base text-gray-600 max-w-lg md:max-w-md">
            {desc}
            </p>
            <button className="h-10 w-30 md:h-10 md:w-40 md:text-sm text-xs font-bold whitespace-nowrap flex items-center justify-center px-4 border border-gray-400 cursor-pointer text-white bg-black rounded-full no-underline">
              {button}
            </button>
          </div>
          <div className="flex flex-col gap-4 overflow-y-auto max-h-[70vh] md:max-h-[80vh] pr-2 max-w-lg md:max-w-2xl">
            {faqsData.map((faq) => (
              <div
                key={faq.id}
                className="flex flex-col bg-gray-100 p-4 rounded-3xl transition-all duration-300"
              >
                <div
                  className={`flex items-center justify-between cursor-pointer border-b pb-2 ${
                    openFaq === faq.id
                      ? "border-gray-300 my-3"
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

export default FaqsDisplay;
