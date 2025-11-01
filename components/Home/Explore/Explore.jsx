import Image from 'next/image'
import React from 'react'

const Explore = () => {
  return (
    <>
    <section className='w-full bg-black px-4 py-12 mx-auto mt-2 mb-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl ml-4'>
            <div className='relative h-[300px] sm:h-[500px] overflow-hidden w-full mt-4 aspect-3/4 flex items-center justify-center'>
               <Image 
                  src="https://ts1xw1iyvq.ufs.sh/f/vW3Htblq8C7mTbB384mL87DwK3cWSsxtA41UpZQIRY2yGurz"
                  alt="FitGrips APP"
                  
                 sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                 width={200}
                 height={200}
                  className='absolute h-auto w-auto md:rounded-3xl rounded-2xl md:object-fill top-0 md:w-300 md:h-300'
               />
            </div>
            <div className='flex flex-col items-start justify-center gap-4 md:gap-12 text-white mt-4 '>
                <h1 className='text-xl md:text-5xl font-extrabold'>
                    Power Your Performance with FitGrips
                </h1>
                <p className='text-sm'>
                    FitGrips delivers premium fitness gear designed for serious lifters — from Wrist Grips and Knee Wraps to Lifting Straps and more.
                </p>
                <p className='text-sm'>
                    Built for strength, comfort, and durability, our gear helps you train harder, lift heavier, and stay protected during every workout.
                </p>
                <button className='py-2 px-4 rounded-full bg-yellow-300 text-black hover:bg-white transition-all duration-300 ease-in-out font-bold cursor-pointer'>
                    Explore the Collection
                </button>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Explore