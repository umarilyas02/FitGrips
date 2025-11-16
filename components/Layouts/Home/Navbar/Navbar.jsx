import React from "react";
import Link from "next/link";
import { Search, ShoppingCart, } from "lucide-react";
import Image from "next/image";
import ToggleNav from "./ToggleNav";
const Navbar = () => {
  
  return (
    <header className="flex flex-col">
      {/* ===== REFER PART =====*/}
      <div
        className="w-full h-8 py-4 text-center
        sm:h-8 sm:px-8 sm:py-4 bg-gray-100 border border-gray-200 text-gray-600
        sm:justify-between flex justify-center items-center text-sm font-semibold"
      >
        <span>
          Refer & Earn with FitGrips! -{" "}
          <Link
            href="/refer"
            className="hover:underline focus:text-purple-600 sm:text-purple-600"
          >
            Learn More
          </Link>
        </span>
        <span className="hidden gap-4 sm:block">
          <a
            className="mr-6 hover:text-purple-600"
            href="mailto: support@fitgrips.com "
          >
            Mail Us
          </a>

          <Link href="/contact-us" className="hover:text-purple-600">
            Contact Us
          </Link>
        </span>
      </div>

      {/*  ====== MID NAV =====*/}
      <nav className=" bg-white px-4 py-2 top-0">
        <div className="flex items-center justify-between">
          <ToggleNav />

          <div className="flex items-center gap-6 pl-5 py-3">
            <div className="hidden md:block min-w-[100px]">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="FitGrips Logo"
                  width={100}
                  height={100}
                  loading="eager"
                  className="h-auto w-auto"
                />
              </Link>
            </div>
            <div className=" md:hidden">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="FitGrips Logo"
                  width={100}
                  height={100}
                  loading="eager"
                  className="h-auto w-auto"
                />
              </Link>
            </div>

            <span className="hidden md:block ">
              <Link href="/shop" className="hover:text-purple-600">
                Explore
              </Link>
            </span>
            <span className="hidden md:block">
              <Link href="/shop" className="hover:text-purple-600">
                Products
              </Link>
            </span>
          </div>
          {/*============ SEARCH START=============  */}
          <div className="hidden md:grow md:flex md:items-center md:justify-between flex-1 mx-4 ">
            <div className="h-14 w-full min-w-0 border rounded-full flex bg-gray-100 border-gray-400 p-2">
              <div className="flex flex-col flex-1 pl-3 ">
                <div className="text-xs">Searching For</div>
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Wrist Wraps..."
                  className="w-full outline-none"
                  inputMode="disabled"
                />
              </div>
              <div className="flex items-center px-1 ">
                <Search className="cursor-pointer" color="gray" />
              </div>
            </div>
          </div>

          {/*============ SEARCH END=============  */}
          

          <div className="flex items-center gap-6 pr-5 py-3">
            <div className="hidden md:block">
              <button className="h-10 px-4 border cursor-pointer text-white bg-black rounded-full no-underline">
                <Link href="/shop">Buy Now</Link>
              </button>
            </div>
            <div className="hidden md:block">
              <button className="h-10 px-4 border cursor-pointer text-black bg-white border-black rounded-full no-underline">
                <Link href="/auth">Signup</Link>
              </button>
            </div>

            <button className="relative">
              <ShoppingCart strokeWidth={2} fontSize={100} size={30} />
              <span className="absolute -top-2 -right-2 bg-gray-100 border-[0.2] text-purple-900 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/*. ===== END NAV ===== */}

      <div className="bg-gray-50 border border-gray-200 py-2 px-4 hidden md:block ">
        <div className=" flex items center justify-start px-4">
          <nav className="flex items-center justify-between gap-6 text-gray-800 text-sm ">
            <Link
              href="/shop"
              className="hover:text-purple-600 hover:font-bold"
            >
              All Products
            </Link>
            <Link
              href="/refer"
              className="hover:text-purple-600 hover:font-bold"
            >
              Refer & Earn
            </Link>
            <Link
              href="/blogs"
              className="hover:text-purple-600 hover:font-bold"
            >
              Blogs
            </Link>
            <Link
              href="/contact-us"
              className="hover:text-purple-600 hover:font-bold"
            >
              Contact Us
            </Link>
            <Link
              href="/about-us"
              className="hover:text-purple-600 hover:font-bold"
            >
              About Us
            </Link>
          </nav>
        </div>
      </div>

                      {/* ============ MOBILE SEARCH START ============ */}
      <div className=" md:hidden flex-1 mx-4 mb-4">
            <div className="h-14 w-full min-w-0 border rounded-full flex bg-gray-100 border-gray-400 p-2">
              <div className="flex flex-col flex-1 pl-3 ">
                <div className="text-xs">Searching For</div>
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Wrist Wraps..."
                  className="w-full outline-none"
                  inputMode="disabled"
                />
              </div>
              <div className="flex items-center px-1 ">
                <Search className="cursor-pointer" color="gray" />
              </div>
            </div>
          </div>
 {/* ============ MOBILE SEARCH END ============ */}
    </header>
  );
};

export default Navbar;
