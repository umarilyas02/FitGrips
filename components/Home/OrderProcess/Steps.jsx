import React from 'react'

const Steps = ({ stepNumber, stepTitle, stepDescription, stepImage , cclass='bg-white text-black'}) => {
  return (
    <div className={`flex flex-col items-start gap-4 p-4 border rounded-3xl shadow-md w-[60vw] sm:w-[66vw] md:w-auto shrink-0 snap-start ${cclass} mb-4`}>
      <div className="shrink-0">
        {stepImage}
      </div>
      
        <h2 className="text-lg font-semibold">{stepTitle}</h2>
        <p>{stepDescription}</p>
        <div className='flex items-end w-full justify-end mt-6'>
          <span className="text-7xl font-bold">{stepNumber}</span>
        </div>
        
    </div>
  )
}

export default Steps