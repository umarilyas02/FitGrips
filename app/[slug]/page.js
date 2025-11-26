'use client'
import Image from 'next/image';
import AddToCartButton from '@/components/Products/AddToCartButton';
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import axios from 'axios';

export default function ProductPage({ params }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [productImages, setProductImages] = useState([]);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { slug } = await params;
        const apiUrl = `${process.env.NEXT_PUBLIC_PRODUCTS_API_SLUG}${slug}`;
        const res = await axios.get(apiUrl);
        const productData = res.data;
        const productItem = Array.isArray(productData) && productData.length > 0 ? productData[0] : null;
        
        if (productItem) {
          setProduct(productItem);
          
          // Parse product images
          try {
            if (productItem.product_img && typeof productItem.product_img === 'string') {
              const parsed = JSON.parse(productItem.product_img);
              if (Array.isArray(parsed)) {
                setProductImages(parsed);
              }
            }
          } catch (e) {
            console.error('Failed to parse product images:', e);
          }
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchProduct();
  }, [params]);

  useEffect(() => {
    if (productImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [productImages.length]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentImageIndex < productImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
    if (isRightSwipe && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <p className="text-lg text-gray-600">Loading product...</p>
      </div>
    );
  }

  // Handle case where API returns no product for the slug
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">404 | Product Not Found</h1>
        <p className="text-gray-600">The product you&apos;re looking for doesn&apos;t exist or has been removed permanently.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Image Carousel - order-1 on mobile (appears first) */}
          <div className="w-full lg:w-[60%] order-1 lg:order-1">
            {/* Carousel Container with padding */}
            <div className="bg-white p-4 rounded-2xl">
              <div 
                className="relative aspect-square w-full rounded-xl overflow-hidden bg-gray-100"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {productImages.length > 0 && productImages[currentImageIndex]?.img ? (
                  <Image
                    src={productImages[currentImageIndex].img}
                    alt={product.product_name || 'Product'}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    quality={95}
                    className="object-cover transition-opacity duration-500"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">No image available</p>
                  </div>
                )}
                
                {/* Navigation arrows */}
                {productImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all"
                      aria-label="Previous image"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all"
                      aria-label="Next image"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
                
                {/* Image indicators */}
                {productImages.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {productImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? 'bg-white w-6'
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
              
              {/* Image counter below carousel */}
              {productImages.length > 1 && (
                <div className="mt-3 text-center text-sm text-gray-600 font-medium">
                  Image {currentImageIndex + 1} of {productImages.length}
                </div>
              )}
            </div>
          </div>

          {/* Product Details - order-2 on mobile (appears second), sticky on desktop right side */}
          <div className="w-full lg:w-[40%] order-2 lg:order-2">
            <div className="lg:sticky lg:top-8 flex flex-col gap-4">
              <h1 className="text-3xl md:text-4xl font-bold">{product.product_name}</h1>
              
              {/* Ratings */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(4.0)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3">
                {product.price && (
                  <span className="text-lg text-gray-500 line-through">
                    PKR {Number(product.price).toFixed(2)}
                  </span>
                )}
                {product.sale_price && (
                  <span className="text-2xl md:text-3xl font-bold text-green-600">
                    PKR {Number(product.sale_price).toFixed(2)}
                  </span>
                )}
              </div>

              {/* Savings Badge */}
              {product.price && product.sale_price && (
                <div className="inline-block bg-yellow-400 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold w-fit">
                  Save PKR {(product.price - product.sale_price).toFixed(2)}
                </div>
              )}

              {/* Short Description */}
              <div className="border-t border-b py-4 my-2">
                <p className="text-gray-700 leading-relaxed">{product.short_desc || product.description}</p>
              </div>

              {/* Add to Cart Button */}
              <AddToCartButton product={product} />

              {/* Additional Info */}
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p>✓ Free shipping on orders over PKR 5,000</p>
                <p>✓ Cash on delivery available</p>
                <p>✓ Easy returns within 7 days</p>
              </div>
            </div>
          </div>

        </div>

        {/* Long Description - order-3 on mobile (appears third), below everything */}
        {product.long_desc && (
          <div className="mt-8 bg-gray-50 p-6 rounded-2xl order-3">
            <h2 className="text-2xl font-bold mb-4">Product Details</h2>
            <div 
              className="prose prose-sm max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: product.long_desc }} 
            />
          </div>
        )}
      </div>
    </div>
  );
}