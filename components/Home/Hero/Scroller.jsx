import React from 'react'

const Scroller = ({items}) => {

  return (
    <div className="w-full h-15 sm:h-20 flex items-center bg-black">

      <div className="w-full overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-scroll hover:pause-animation">
          
          {items.map((text, index) => (
            <span key={index} className="mx-2 text-lg sm:text-2xl font-semibold text-white">
              {text}
            </span>
          ))}

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