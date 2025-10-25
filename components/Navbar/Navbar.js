import React from "react";
import Link from "next/link";
import { Search, ShoppingCart, TextAlignStart } from "lucide-react";
import Image from "next/image";
const Navbar = () => {
  return (
    <header className="flex flex-col">
      {/* ===== REFER PART =====*/}
      <div
        className="w-screen h-8 py-4 text-center
        sm:h-8 sm:px-8 sm:py-4 bg-gray-100 border border-gray-200 text-gray-600
        sm:justify-between flex justify-center items-center text-sm font-semibold"
      >
        <span>
          Refer & Earn with FitGrips! -{" "}
          <Link
            href="/refer"
            className="hover:underline focus:text-[#990FFA] sm:text-[#990FFA]"
          >
            Learn More
          </Link>
        </span>
        <span className="hidden gap-4 sm:block">
          <a
            className="mr-6 hover:text-[#990FFA]"
            href="mailto: support@fitgrips.com "
          >
            Mail Us
          </a>

          <Link href="/contact-us" className="hover:text-[#990FFA]">
            Contact Us
          </Link>
        </span>
      </div>

      {/*  ====== MID NAV =====*/}
      <nav className=" bg-white p-4 top-0">
        <div className="flex items-center justify-between">
          <button className="md:hidden font-extrabold">
            <TextAlignStart width={25} height={25} strokeWidth={2.5} />
          </button>

          <div className="flex items-center gap-6 pl-5 py-3">
            <div className="hidden md:block min-w-[100px]">
              <Image
                src="/logo.png"
                alt="FitGrips Logo"
                width={150}
                height={150}
              />
            </div>
            <div className=" md:hidden">
              <Image
                src="/logo.png"
                alt="FitGrips Logo"
                width={100}
                height={100}
              />
            </div>

            <span className="hidden md:block ">
              <Link href="/shop" className="hover:text-[#990FFA]">
                Explore
              </Link>
            </span>
            <span className="hidden md:block">
              <Link href="/shop" className="hover:text-[#990FFA]">
                Products
              </Link>
            </span>
          </div>
            {/*============ SEARCH START=============  */}
          <div className="hidden md:grow md:flex md:items-center md:justify-between flex-1 mx-4 ">

              <div className="h-14 w-full min-w-0 border rounded-full flex bg-gray-100 border-gray-400 p-2" >
                

                
                <div className="flex flex-col flex-1 pl-3 ">
                  <div className="text-xs">
                    Searching For
                  </div>
                  <input type="search" name="" id="" placeholder="Wrist Wraps..." className="w-full outline-none" inputMode="disabled"/>

                </div>
                <div className="flex items-center px-1 ">
                  <Search className="cursor-pointer" color="gray"/>
                </div>
                
              </div>

          </div>

            {/*============ SEARCH END=============  */}

          <div className="flex items-center gap-6 pr-5 py-3">
            <button className="h-10 px-4 border cursor-pointer text-white bg-black rounded-full no-underline">
              <Link href="/shop">Buy Now</Link>
            </button>
            <button className="h-10 px-4 border cursor-pointer text-black bg-white border-black rounded-full no-underline">
              <Link href="/auth">Signup</Link>
            </button>

            <button className="relative">
              <ShoppingCart strokeWidth={2} fontSize={100} size={30} />
              <span className="absolute -top-2 -right-2 bg-gray-100 border-[0.2] text-purple-900 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
