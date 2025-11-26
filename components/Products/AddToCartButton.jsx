'use client'

import { useDispatch } from 'react-redux'
import { addToCart } from '@/components/Redux/features/Cart/cartSlice'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { ShoppingCart, Minus, Plus } from 'lucide-react'

export default function AddToCartButton({ product }) {
  const dispatch = useDispatch()
  const [isAdding, setIsAdding] = useState(false)
  const [added, setAdded] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  const handleAddToCart = () => {
    if (!product) return

    setIsAdding(true)
    
    // Dispatch the add to cart action multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart({
        id: product.id || product.slug,
        slug: product.slug,
        product_name: product.product_name,
        price: product.price,
        sale_price: product.sale_price,
        product_img: product.product_img,
      }))
    }

    // Show success toast
    toast.success(`${quantity} x ${product.product_name} added to cart!`)

    setIsAdding(false)
    setAdded(true)
    
    // Reset the "added" state and quantity after 2 seconds
    setTimeout(() => {
      setAdded(false)
      setQuantity(1)
    }, 2000)
  }

  return (
    <div className="flex items-center gap-3 mt-4">
      {/* Quantity Selector */}
      <div className="flex items-center border border-black rounded-full">
        <button
          onClick={decreaseQuantity}
          disabled={quantity <= 1}
          className="p-0.5 hover:bg-gray-100 rounded-l-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Decrease quantity"
        >
          <Minus className="w-8 h-8 bg-black text-white rounded-full p-2" />
        </button>
        <span className="px-4 py-2 min-w-12 text-center font-semibold">
          {quantity}
        </span>
        <button
          onClick={increaseQuantity}
          className="p-0.5 hover:bg-gray-100 rounded-r-full transition-colors"
          aria-label="Increase quantity"
        >
          <Plus className="w-8 h-8 bg-black text-white rounded-full p-2" />
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className={`flex-1 py-4 px-6 rounded-full font-semibold transition-all ${
          added
            ? 'bg-green-600 text-white'
            : 'bg-black text-white hover:bg-gray-800'
        } ${isAdding ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isAdding ? 'Adding...' : added ? '✓ Added!' : (
          <span className="flex items-center justify-center">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </span>
        )}
      </button>
    </div>
  )
}


