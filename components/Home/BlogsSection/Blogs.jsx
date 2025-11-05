'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Blogs = () => {

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    async function fetchBlogs() {
      try {
        let response = await fetch(process.env.NEXT_PUBLIC_BLOG_API);
        let data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }

    fetchBlogs();
  }, [blogs.blog_id]);
  return (
   
      <div className='flex gap-2 overflow-x-scroll md:overflow-x-hidden snap-x snap-mandatory px-2 md:mx-0 md:px-0 overflow-visible'>
        {

          blogs.map((blog) => (
            <div key={blog.blog_id} className='flex flex-col items-start gap-2 sm:gap-4 w-[60vw] sm:w-[55vw] md:w-[17vw] shrink-0 snap-start rounded-3xl p-4'>
              <Image
                src={blog.blog_img}
                width={250}
                height={250}
                sizes="(max-width: 640px) 70vw, (max-width: 768px) 66vw, 33vw"
                alt={blog.blog_title}
                className='h-60 md:h-[60vh] w-full object-cover rounded-3xl'
              />
              <h1 className='text-lg font-semibold line-clamp-3 md:line-clamp-2'>{blog.blog_title}</h1>
              <p className='line-clamp-1 md:line-clamp-3 text-gray-600 text-sm'>{blog.short_desc}</p>
              <Link href={`/blogs/${blog.blog_id}`}>
              <span className='text-sm text-blue-400 font-semibold hover:underline '>
                read more
              </span>
              </Link>
              

            </div>
          ))
        }
      </div>
   
  )
}

export default Blogs