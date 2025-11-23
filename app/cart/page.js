'use client'

import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'
import { 
  selectCartItems, 
  selectCartTotalAmount,
  removeFromCart,
  updateQuantity 
} from '@/components/Redux/features/Cart/cartSlice'
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'

export default function CartPage() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const totalAmount = useSelector(selectCartTotalAmount)

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId))
  }

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(itemId)
    } else {
      dispatch(updateQuantity({ id: itemId, quantity: newQuantity }))
    }
  }

  const handleDecrease = (item) => {
    handleQuantityChange(item.id, item.quantity - 1)
  }

  const handleIncrease = (item) => {
    handleQuantityChange(item.id, item.quantity + 1)
  }

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <ShoppingBag className="w-24 h-24 text-gray-300" strokeWidth={1} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven&apos;t added anything to your cart yet.</p>
          <Link 
            href="/shop"
            className="inline-block bg-black text-white py-4 px-8 rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6 flex flex-col sm:flex-row gap-4 hover:shadow-lg transition-shadow"
              >
                {/* Product Image */}
                <Link href={`/${item.slug}`} className="shrink-0">
                  <div className="relative w-full sm:w-32 h-32 rounded-xl overflow-hidden bg-gray-100">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 128px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ShoppingBag className="w-12 h-12 text-gray-300" />
                      </div>
                    )}
                  </div>
                </Link>

                {/* Product Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <Link href={`/${item.slug}`}>
                      <h3 className="text-lg md:text-xl font-semibold mb-2 hover:text-purple-600 transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xl font-bold text-green-600">
                        PKR {Number(item.price).toFixed(2)}
                      </span>
                      {item.originalPrice && item.originalPrice > item.price && (
                        <span className="text-sm text-gray-500 line-through">
                          PKR {Number(item.originalPrice).toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-600">Quantity:</span>
                      <div className="flex items-center border border-black rounded-full">
                        <button
                          onClick={() => handleDecrease(item)}
                          className="p-0.5 hover:bg-gray-100 rounded-l-full transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-8 h-8 bg-black text-white rounded-full p-2" />
                        </button>
                        <span className="px-4 py-2 min-w-12 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleIncrease(item)}
                          className="p-0.5 hover:bg-gray-100 rounded-r-full transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-8 h-8 bg-black text-white rounded-full p-2" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-lg font-bold">
                        PKR {Number(item.totalPrice).toFixed(2)}
                      </span>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-4">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span className="font-semibold">PKR {Number(totalAmount).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold">Calculated at checkout</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-green-600">PKR {Number(totalAmount).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-black text-white py-4 px-6 rounded-full font-semibold hover:bg-gray-800 transition-colors mb-4">
                Proceed to Checkout
              </button>
              
              <Link
                href="/shop"
                className="block w-full text-center text-gray-600 hover:text-purple-600 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
