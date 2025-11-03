'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {useEffect , useState} from 'react'
import axios from 'axios'
import { Flame } from 'lucide-react'


const ProductsDisplay = (props) => {

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6); // Default to 6 for mobile

useEffect(() => {
  async function fetchproducts() {
    try {
      let response = await axios.get(process.env.NEXT_PUBLIC_PRODUCTS_API);
      let filteredResponse = response.data.filter(item => Number(item.category_id) === Number(props.category_id));
      setProducts(filteredResponse);
      // Reset to first page when data/category changes
      setPage(1);
    } catch (error) {
      console.error("Error fetching products:", error)

      
    }
  }

  
    fetchproducts();

}, [props.category_id]);

  // Handle responsive page size based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setPageSize(3);
      } else {
        setPageSize(6);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.max(1, Math.ceil(products.length / pageSize));
  const startIndex = (page - 1) * pageSize;
  const visibleProducts = products.slice(startIndex, startIndex + pageSize);

  return (
    <section>
      <div className="w-full  mx-auto px-2 sm:px-4 lg:px-6 py-12">
        <div className='flex flex-col sm:flex-row gap-2 md:gap-4 sm:items-center sm:justify-between'>
          <div className="flex flex-col gap-2">
            <h1 className='text-xl md:text-3xl font-extrabold'>{props.title}</h1>
            <p className='text-sm text-gray-600 max-w-2xl'>{props.desc}</p>
          </div>
          {props.button && (
            <Link href='/shop'>
              <button className='h-10 w-24 md:h-10 md:w-30 md:text-sm text-xs font-bold whitespace-nowrap flex items-center justify-center px-4 border border-gray-400 cursor-pointer text-black bg-white rounded-full no-underline'>
                {props.button}
              </button>
            </Link>
          )}
        </div>

        {/* Responsive product grid (max 3 items per page, larger on desktop) */}
        <div className= {`grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8`}>
          {visibleProducts
            .map((product) => {
              let imgSrc;
              try {
                // Check if product_img is a non-empty string
                if (product.product_img && typeof product.product_img === 'string') {
                  
                  const imagesArray = JSON.parse(product.product_img);
                  
                  //Check if the array is valid
                  if (Array.isArray(imagesArray) && imagesArray.length > 0) {
                  
                   imgSrc = imagesArray[0].img;
                  }
                }
              } catch (e) {
                console.error("Failed to parse image JSON:", product.product_img, e);
               
              }

              return (
                <div key={product.product_id || product.product_id} className="flex flex-col gap-1">
                  {/* Image wrapper keeps aspect ratio and prevents upscaling blur */}
                  <div className='relative w-full aspect-square overflow-hidden rounded-2xl sm:rounded-3xl'>
                    {imgSrc && (
                      <Image
                        src={imgSrc}
                        alt={product.product_name || product.name || 'Product image'}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={90}
                        className="object-cover rounded-2xl sm:rounded-3xl border border-gray-200 hover:scale-110 transition-transform duration-300 ease-in-out"
                      />
                    )}
                    <div className='absolute sm:top-4 sm:left-4 flex items-center left-2 top-3 animate-pulse bg-yellow-400 text-xs font-medium px-4 rounded-full text-gray-700'>
                      <Flame className="w-4 h-4 text-gray-700 bg-transparent" fill='none' />
                      <p className='m-2 text-xs whitespace-nowrap'>Save Rs {product.price - product.sale_price}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 py-2">Delivery: 1-2 business days</p>
                  </div>
                  <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 line-clamp-2">{product.product_name}</h2>
                  <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 mt-auto">
                    <span className="text-sm sm:text-base lg:text-lg text-gray-600 font-semibold line-through">PKR {(product.price).toFixed(2)}</span>
                    <span className="text-base sm:text-lg lg:text-xl font-bold text-green-500">PKR {(product.sale_price).toFixed(2)}</span>
                  </div>
                </div>
              )
            })}
        </div>

        {/* Pagination controls */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              className="px-3 py-1 rounded-full border border-gray-300 text-sm disabled:opacity-50"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Prev
            </button>

            {/* Simple page indicators; keep minimal to avoid clutter when many pages */}
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }).slice(0, 5).map((_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    className={`w-8 h-8 rounded-full text-sm border ${page === pageNum ? 'bg-black text-white border-black' : 'border-gray-300'}`}
                    onClick={() => setPage(pageNum)}
                  >
                    {pageNum}
                  </button>
                );
              })}
              {totalPages > 5 && <span className="px-2">…</span>}
            </div>

            <button
              className="px-3 py-1 rounded-full border border-gray-300 text-sm disabled:opacity-50"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductsDisplay