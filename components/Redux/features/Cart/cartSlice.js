import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [], // Array of cart items
  totalQuantity: 0,
  totalAmount: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const existingItem = state.items.find(
        (item) => item.id === product.id || item.slug === product.slug
      )

      if (existingItem) {
        // If item already exists, increase quantity
        existingItem.quantity += 1
        existingItem.totalPrice = existingItem.quantity * existingItem.price
      } else {
        // Add new item to cart
        // Use sale_price if available, otherwise use regular price
        const price = product.sale_price || product.price || 0
        const originalPrice = product.price || 0
        
        // Safely parse product image
        let productImage = null
        if (product.product_img) {
          try {
            if (typeof product.product_img === 'string') {
              const parsed = JSON.parse(product.product_img)
              productImage = Array.isArray(parsed) && parsed[0]?.img ? parsed[0].img : null
            } else if (Array.isArray(product.product_img) && product.product_img[0]?.img) {
              productImage = product.product_img[0].img
            }
          } catch (e) {
            console.error('Failed to parse product image:', e)
          }
        }
        
        state.items.push({
          id: product.id || product.slug,
          slug: product.slug,
          name: product.product_name,
          price: price, // Current price (sale price if available)
          originalPrice: originalPrice, // Original price before discount
          image: productImage,
          quantity: 1,
          totalPrice: price,
        })
      }

      // Update totals
      state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0)
      state.totalAmount = state.items.reduce((sum, item) => sum + item.totalPrice, 0)
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload
      const existingItem = state.items.find((item) => item.id === itemId)

      if (existingItem) {
        if (existingItem.quantity === 1) {
          // Remove item completely if quantity is 1
          state.items = state.items.filter((item) => item.id !== itemId)
        } else {
          // Decrease quantity
          existingItem.quantity -= 1
          existingItem.totalPrice = existingItem.quantity * existingItem.price
        }

        // Update totals
        state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0)
        state.totalAmount = state.items.reduce((sum, item) => sum + item.totalPrice, 0)
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const existingItem = state.items.find((item) => item.id === id)

      if (existingItem && quantity > 0) {
        existingItem.quantity = quantity
        existingItem.totalPrice = existingItem.quantity * existingItem.price

        // Update totals
        state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0)
        state.totalAmount = state.items.reduce((sum, item) => sum + item.totalPrice, 0)
      }
    },
    clearCart: (state) => {
      state.items = []
      state.totalQuantity = 0
      state.totalAmount = 0
    },
  },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions

// Selectors
export const selectCartItems = (state) => state.cart.items
export const selectCartTotalQuantity = (state) => state.cart.totalQuantity
export const selectCartTotalAmount = (state) => state.cart.totalAmount
export const selectCartItemById = (id) => (state) => 
  state.cart.items.find((item) => item.id === id)

export default cartSlice.reducer
