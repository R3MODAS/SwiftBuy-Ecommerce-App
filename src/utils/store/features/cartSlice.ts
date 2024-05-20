import { Item } from '@/utils/types';
import { createSlice } from '@reduxjs/toolkit'

interface CartState {
  items: Item[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload
      state.items.push(newItem)
      state.total = calculateTotal(state.items)
    },
    increaseItemQuantity: (state, action) => {
      const itemId = action.payload
      const itemIndex = state.items.findIndex((item: Item) => item.id === itemId)

      if (itemIndex !== -1) {
        state.items[itemIndex].quantity++
      }

      state.total = calculateTotal(state.items)
    },
    decreaseItemQuantity: (state, action) => {
      const itemId = action.payload
      const itemIndex = state.items.findIndex((item: Item) => item.id === itemId)

      if (itemIndex !== -1) {
        const item = state.items[itemIndex]

        if (item.quantity > 1) {
          item.quantity--
        }
        else {
          state.items.splice(itemIndex, 1)
        }
      }

      state.total = calculateTotal(state.items)
    },
    clearCart: (state) => {
      state.items.length = 0
      state.total = 0
    },
    deleteItemFromCart: (state, action) => {
      const itemId = action.payload
      state.items = state.items.filter((item: Item) => item.id !== itemId)
      state.total = calculateTotal(state.items)
    }
  },
})

const calculateTotal = (cartItems: Item[]) => {
  let total = 0
  for (let item of cartItems) {
    total += item.price * item.quantity
  }
  return total
}

export const { addToCart, increaseItemQuantity, decreaseItemQuantity, clearCart, deleteItemFromCart } = cartSlice.actions
export default cartSlice.reducer