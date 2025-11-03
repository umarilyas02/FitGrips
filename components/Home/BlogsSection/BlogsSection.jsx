import React from 'react'
import Blogs from './Blogs'

const BlogsSection = () => {
  return (
    <section className='w-full bg-gray-200 py-8 md:py-12'>
      <div className='flex flex-col items-center justify-center gap-6 md:gap-8'>
        <div className='flex flex-col items-center justify-center gap-4'>
            <h1 className='text-xl md:text-3xl'>Read Our Blogs & Research</h1>
            <p className='text-xs sm:text-sm text-gray-700 text-center'>Unwrap our Brand Stories and read insights from industry experts</p>
        </div>
        <div className='w-full overflow-hidden'>
                <Blogs />
        </div>
        <button className='h-10 w-24 md:h-10 md:w-30 md:text-sm text-xs font-bold whitespace-nowrap flex items-center justify-center px-4 border border-gray-400 cursor-pointer text-white bg-black rounded-full no-underline'>
                Explore More
        </button>
      </div>
    </section>
  )
}

export default BlogsSection