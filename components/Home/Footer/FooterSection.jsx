"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

const FooterSection = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full py-2 border-b border-gray-700 sm:border-none sm:transition-all ease-in-out">
      
      <button
        type="button"
        className="w-full flex justify-between items-center text-left transition ease-in-out "
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-white">{title}</h3>

        <span className="sm:hidden">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>

      <ul className={`mt-4 space-y-3 ${isOpen ? 'block' : 'hidden'} sm:block transition ease-in-out` }>
        {items.map((item, index) => (
          <li key={index}>
           <Link 
              href={item.href}
              className="text-gray-400 hover:text-white text-sm hover:underline"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;