import React from 'react'

const Scroller = ({items}) => {

  return (
    <div className="w-full h-15 sm:h-20 flex items-center bg-black">
      {/* Outer container to clip the content.
        whitespace-nowrap is critical.
      */}
      <div className="w-full overflow-hidden whitespace-nowrap">
        {/* Inner container that gets animated.
          We apply our new 'animate-scroll' class here.
        */}
        <div className="inline-block animate-scroll hover:pause-animation">
          
          {/* === CONTENT BLOCK 1 (Original) === */}
          {items.map((text, index) => (
            <span key={index} className="mx-2 text-lg sm:text-2xl font-semibold text-white">
              {text}
            </span>
          ))}

          {/* === CONTENT BLOCK 2 (Duplicate) === */}
          {/* This second block is what makes the loop seamless */}
          {items.map((text, index) => (
            <span key={`dup-${index}`} className="mx-2 text-lg sm:text-2xl font-semibold text-white">
              {text}
            </span>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Scroller