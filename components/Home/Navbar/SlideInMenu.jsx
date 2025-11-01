"use client";
import Link from "next/link";
import { X } from "lucide-react";
import Image from "next/image";

const SlideInMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`h-screen w-screen fixed inset-0 bg-opacity-50 z-40 md:hidden  overflow-x-hidden${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed top-0 left-0 rounded-r-2xl min-h-full w-90 bg-white z-50 p-6 shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end mb-6">
          <button onClick={onClose} className="text-2xl font-bold">
            <div className="bg-gray-100 p-2 relative rounded-full w-15 h-8 flex items-center justify-center">
              <X className="w-4 h-4" width={4} height={4} />
            </div>
          </button>
        </div>

        {/* ===== Mobile Nav Links ===== */}
        <nav className="flex flex-col gap-6">
          <Link
            href="/shop"
            onClick={onClose}
            className=" text-xl text-gray-600 font-semibold hover:text-purple-600"
          >
            All Products
          </Link>
          <Link
            href="/refer"
            onClick={onClose}
            className="text-xl text-gray-600 font-semibold hover:text-purple-600"
          >
            Refer & Earn
          </Link>
          <Link
            href="/blogs"
            onClick={onClose}
            className="text-xl text-gray-600 font-semibold hover:text-purple-600"
          >
            Blogs
          </Link>
          <Link
            href="/contact-us"
            onClick={onClose}
            className="text-xl text-gray-600 font-semibold hover:text-purple-600"
          >
            Contact Us
          </Link>
          <Link
            href="/about-us"
            onClick={onClose}
            className="text-xl text-gray-600 font-semibold hover:text-purple-600"
          >
            About Us
          </Link>
          <a
            href="mailto:info@fitgrips.com"
            onClick={onClose}
            className=" text-shadow-black
                 font-semibold hover:text-purple-600"
          >
            Help Center
          </a>
          <Link
            href="/contact-us"
            onClick={onClose}
            className="text-s text-shadow-black font-semibold hover:text-purple-600"
          >
            Contact Us
          </Link>

          <Link
            href="/auth"
            onClick={onClose}
            className=" text-black font-semibold w-full rounded-full text-center p-2 hover:text-purple-600 border"
          >
            Signup
          </Link>

          <Image
            src="https://te6fm7preu.ufs.sh/f/wF5K2tezYasEcq6OMfhBmQ3vZGiCJkA0M54qKnub7pW9hlPY"
            alt="picture"
            height={250}
            width={450}
            className=" w-full h-auto rounded-3xl"
          />
        </nav>
      </div>
    </div>
  );
};

export default SlideInMenu;
