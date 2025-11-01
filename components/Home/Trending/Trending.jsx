import React from 'react'
import HeroImage from '../Hero/HeroImage'

const Trending = () => {
    const liverbelts = 'https://ts1xw1iyvq.ufs.sh/f/vW3Htblq8C7mOtg1sGudMswyicePf8nZbCmTqvFArGVJXjYL'
    const dropSetPins = 'https://ts1xw1iyvq.ufs.sh/f/vW3Htblq8C7mlwrtonFCqIFQMpjBxuG2f07zHKZt6kOeR9bW'
    const seeCollection = 'https://te6fm7preu.ufs.sh/f/wF5K2tezYasEJs1SuBjAcOLl2tkwud4mHaBS8MIDyRXvU5sp'
  return (
    <>
    <section className='w-full'>
    <div className="flex flex-col gap-2 px-2 sm:px-4 lg:px-6 py-12">
            <h1 className='text-xl md:text-3xl font-extrabold'>Trending Now</h1>
            <p className='text-sm text-gray-600 max-w-2xl'>Level up your performance with FitGrips Premium Fitness Gears designed for ultimate support and lasting comfort.</p>
          </div>

          <div className='flex flex-col md:flex-row gap-1'>
          
          <HeroImage title='Liver Belts' imageUrl={liverbelts} />
          <HeroImage title='Drop Set Pins' imageUrl={dropSetPins} />
          <HeroImage title='See Collection' imageUrl={seeCollection} />
          </div>
    </section>
    </>
 )
}

export default Trending