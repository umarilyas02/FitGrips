import React from "react";
import Features from "./Features";
import Steps from "./Steps";
import { Package, Paintbrush, ShoppingBag, Truck } from "lucide-react";
import Scroller from "../Hero/Scroller";

const OrderProcess = () => {
  let image1 = <ShoppingBag width={32} height={32} />,
    image2 = <Package width={32} height={32} />,
    image3 = <Truck width={32} height={32} />,
    image4 = <Paintbrush width={32} height={32} />;

  return (
    <>
    <section className="w-full mt-12 h-[80vh] sm:h-screen">
      <div className="flex flex-col items-center justify-center gap-4 mx-2 sm:mx-4 lg:mx-6">
        <h1 className="text-2xl sm:text-5xl font-extrabold">
          How to Order - Simple Steps
        </h1>
        <p className="text-sm text-gray-600">
          We make it easy for gyms and clubs to get custom-branded wrist and
          knee wraps. Follow these simple steps to create high-quality,
          personalized gear that represents your brand.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8 w-full overflow-x-hidden">
          <Features
            title="6.5k+"
            description="More than 6.5K custom wraps sold"
          />
          <Features
            title="200+"
            description="Trusted gym and club partners worldwide"
          />
          <Features
            title="99%

"
            description="Customer satisfaction rate"
          />
          <Features
            title="24/7"
            description="Dedicated support for bulk orders"
          />
        </div>
        <div className="mt-8 w-full flex gap-4 overflow-x-auto snap-x snap-mandatory px-2 -mx-2 md:mx-0 md:px-0 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:snap-none">
          <Steps
            stepNumber={1}
            stepTitle="Choose Your Product"
            stepDescription="Browse and select the item that fits your preference."
            stepImage={image1}
            cclass="bg-black text-white"
          />
          <Steps
            stepNumber={2}
            stepTitle="Verify Product Information"
            stepDescription="Review product specs and ensure it meets your requirements."
            stepImage={image2}
          />
          <Steps
            stepNumber={3}
            stepTitle="Enter Shipping Details"
            stepDescription="Provide accurate delivery information for timely dispatch."
            stepImage={image3}
          />
          <Steps
            stepNumber={4}
            stepTitle="Complete Purchase"
            stepDescription="Proceed to checkout and receive instant confirmation."
            stepImage={image4}
          />
        </div>
       
       
      </div>
       <Scroller
          items={[
            "Push your past limits." ,
            "Our wrist grips give you the support and confidence to crush every lift with power.",
          ]}
        />
    </section>
    </>
  );
};

export default OrderProcess;
