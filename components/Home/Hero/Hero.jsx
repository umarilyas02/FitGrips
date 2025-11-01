import React from "react";
import Carousel from "./Carousel";

const Hero = () => {
  const imageUrl =
    "https://te6fm7preu.ufs.sh/f/wF5K2tezYasEfc4EeCFj9lPdYygW4KJIDvwqa1OVkCeThzUp";
  const imageUrl2 =
    "https://te6fm7preu.ufs.sh/f/wF5K2tezYasEXAYj8oWxGMNXJSHeFQdT3EchYmfaCL7nw8Db";
  return (
    <>
      <div className="w-full">
        <div className="min-w-full relative z-0">
          <main className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full">
            <div
              className={`bg-cover bg-center bg-no-repeat min-h-[500px] md:min-h-[600px] w-full shadow-lg relative`}
              style={{ backgroundImage: `url(${imageUrl})` }}
            >
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="absolute inset-0 flex items-end justify-between px-4">
                <div className="flex flex-col gap-5 mb-10">
                  <h1 className="text-white text-3xl font-bold">
                    FitGrips® - Premium Wrist Wraps, Grips & Belts Designed for
                    Powerlifters
                  </h1>
                  <div className="flex gap-2 z-10 items-center">
                    <div className="text-white rounded-full ">
                      <span className="text-white border rounded-3xl p-3">
                        Wrist Wraps
                      </span>
                    </div>
                    <div className="text-white rounded-full ">
                      <span className="text-white border rounded-3xl p-3">
                        Cotton Straps
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <button className="text-white px-6 py-2 font-semibold hover:bg-gray-200 transition mb-15 md:mb-20 whitespace-nowrap">
                    Shop now &nbsp;{"  >"}
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`bg-cover bg-center bg-no-repeat min-h-[500px] md:min-h-[600px] w-full shadow-lg relative`}
              style={{ backgroundImage: `url(${imageUrl2})` }}
            >
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="absolute inset-0 flex items-end mb-10 justify-between px-4">
                <div className="flex flex-col gap-2">
                  <h1 className="text-white text-3xl font-bold">
                    Wrist Wraps – Built for Strength and Stability
                  </h1>
                  <div className="flex gap-1 items-center">
                    <div className="text-white p-2 rounded-full ">
                      <span className="text-white border rounded-3xl p-3">
                        S
                      </span>
                    </div>
                    <div className="text-white p-2 rounded-full ">
                      <span className="text-white border rounded-3xl p-3">
                        M
                      </span>
                    </div>
                    <div className="text-white p-2 rounded-full ">
                      <span className="text-white border rounded-3xl p-3">
                        L
                      </span>
                    </div>
                    <div className="text-white p-2 rounded-full ">
                      <span className="text-white border rounded-3xl p-3">
                        XL
                      </span>
                    </div>
                  </div>
                </div>
                <div className="">
                  <button className=" text-white px-6 py-2 font-semibold hover:bg-gray-200 transition mb-15 md:mb-10 whitespace-nowrap">
                    Shop now &nbsp; {"  >"}
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Carousel />
      
    </>
  );
};

export default Hero;
