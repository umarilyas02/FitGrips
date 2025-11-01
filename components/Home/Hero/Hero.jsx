import React from "react";
import Scroller from "./Scroller";
import HeroImage from "./HeroImage";

const Hero = () => {
  const imageUrl =
    "https://te6fm7preu.ufs.sh/f/wF5K2tezYasEfc4EeCFj9lPdYygW4KJIDvwqa1OVkCeThzUp";
  const imageUrl2 =
    "https://te6fm7preu.ufs.sh/f/wF5K2tezYasEXAYj8oWxGMNXJSHeFQdT3EchYmfaCL7nw8Db";
  return (
    <>
      <div className="w-full overflow-x-hidden">
        <div className="min-w-full relative z-0">
          <main className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full">
            <HeroImage imageUrl={imageUrl} title="FitGrips® - Premium Wrist Wraps, Grips & Belts Designed for Powerlifters" t1="Wrist Wraps" t2="Cotton Straps" />
            <HeroImage imageUrl={imageUrl2} title="Wrist Wraps – Built for your Strength and Stability" t1="S" t2="M" t3="L" t4="XL" />
          </main>
        </div>
      </div>
      <Scroller
      items={[
    "When effort meets the right tools, transformation happens-",
    "Fuel your journey with premium gym gear built for results.",
    "Elevate your performance with FitGrips® equipment.",

  ]} />

    </>
  );
};

export default Hero;
