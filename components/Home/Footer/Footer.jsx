import React from "react";
import Image from "next/image";
import FooterSection from "@/components/Home/Footer/FooterSection.jsx";
import { InstagramIcon, LucideFacebook, LucideInstagram, LucideLinkedin } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  about: [
    { name: "Fitgrips", href: "/" },
    { name: "Refer & Earn", href: "/refer" },
  ],
  products: [
    { name: "Wrist Wraps", href: "/#" },
    { name: "Knee Wraps", href: "/#" },
    { name: "Elbow Wraps", href: "/#" },
    { name: "Lifting Wraps", href: "/#" },
  ],
  policies: [
    { name: "Terms of Use", href: "/#" },
    { name: "Privacy Policy", href: "/#" },
    { name: "Cookie Policy", href: "/#" },
    { name: "Return & Refund Policy", href: "/#" },
  ],
  account: [
    { name: "My Orders", href: "/#" },
    { name: "My Profile", href: "/#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-4 sm:mt-0">
      {/* ====== LINKS ====== */}
      <div className="max-w mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-12">
          <div
            className="lg:col-span-7 xl:col-span-8 
                          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
                          gap-x-6 gap-y-0 sm:gap-y-8"
          >
            <FooterSection title="About Us" items={footerLinks.about} />
            <FooterSection title="Products" items={footerLinks.products} />
            <FooterSection title="Policies" items={footerLinks.policies} />
            <FooterSection title="My Account" items={footerLinks.account} />
          </div>

          <div className="lg:col-span-5 xl:col-span-4 space-y-8">
            <div className="w-full bg-gray-700 border border-gray-600 rounded-3xl flex items-center space-x-3">
              <Image
                src="/FitGrips-qr.png"
                alt="FitGrips QR"
                width={100}
                height={100}
                className="pl-4 py-4 rounded-xl"
              />
              <p className="text-sm text-gray-400">
                Certify your Gym Gears with our eco alliance badge.
              </p>
            </div>
            <div className="flex space-x-4">
              <Image
                src="/Google_Play_Store_badge.svg"
                alt="Google Play Store Download"
                height={120}
                width={120}
                className="rounded-sm h-auto w-auto"
              />
              <Image
                src="/Download_on_the_App_Store_Badge.svg"
                alt="App Store Download"
                height={120}
                width={120}
                className="rounded-sm h-auto w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ====== Center Footer ====== */}

      <div className="flex flex-col md:flex-row md:items-center mx-4 lg:mx-8 py-8 border-t border-b overflow-x-hidden">
        <div className="flex flex-col gap-2 justify-between lg:text-2xl w-full">
          <h1 className="font-bold ">
            Join us! Tips, tricks and more.{" "}
            <span className="text-gray-400">#NoSpam</span>
            <span className="text-gray-400">#JustInspo</span>
          </h1>
          <p className="text-xs lg:text-sm mb-4 font-extralight">
            By subscribing you will receive marketing from FitGrips. See our
            Cookie Policy.
          </p>
        </div>

        <div className="flex flex-row gap-2 w-full h-full justify-end">
          <input
            type="email"
            name="email"
            id="email"
            className="border rounded-full text-xs sm:max-w-[50%] flex-1 px-4 sm:px-4"
            placeholder="hi@thisismyemail.com"
          />
          <button className="py-2 px-4 rounded-full bg-white text-gray-700 font-bold cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>

      {/* ====== Bottom Footer ====== */}

      <div className="flex flex-col md:flex-row mx-4 lg:mx-8 py-8 justify-between gap-6 md:relative h-40 ">
        <div className="text-xs text-center md:justify-start md:font-bold md:text-sm">
              © 2025 FitGrips All Rights Reserved
        </div>
        <div className="flex items-center justify-center gap-4 md:justify-end md:absolute right-0 bottom-14 ">
         <LucideInstagram href="instagram.com/umarilyas02" height={15} width={15} />
          <LucideFacebook href="facebook.com/umarilyas02" height={15} width={15} fill="white" />
          <LucideLinkedin href="linkedin.com/umarilyas02" height={15} width={15} fill="white"/>
          
        </div>

      </div>
    </footer>
  );
};

export default Footer;
