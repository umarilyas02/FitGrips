'use client'

import { useDispatch } from 'react-redux'
import { addToCart } from '@/components/Redux/features/Cart/cartSlice'
import { useState } from 'react'

export default function AddToCartButton({ product }) {
  const dispatch = useDispatch()
  const [isAdding, setIsAdding] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    if (!product) return

    setIsAdding(true)
    
    // Dispatch the add to cart action
    dispatch(addToCart({
      id: product.id || product.slug,
      slug: product.slug,
      product_name: product.product_name,
      price: product.price,
      sale_price: product.sale_price,
      product_img: product.product_img,
    }))

    setIsAdding(false)
    setAdded(true)
    
    // Reset the "added" state after 2 seconds
    setTimeout(() => {
      setAdded(false)
    }, 2000)
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className={`mt-4 w-full py-4 px-6 rounded-full font-semibold transition-all ${
        added
          ? 'bg-green-600 text-white'
          : 'bg-black text-white hover:bg-gray-800'
      } ${isAdding ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {isAdding ? 'Adding...' : added ? '✓ Added to Cart!' : 'Add to Cart'}
    </button>
  )
}


