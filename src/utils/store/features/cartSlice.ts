import { createSlice, current } from '@reduxjs/toolkit'

interface CartItem {
  id: number;
  quantity: number;
  price: number;
}

interface CartState {
  items: CartItem[];
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
      const newItem = action.payload;
      state.items.push(newItem)
      state.total = calculateTotal(state.items);
    },
    increaseItemQuantity: (state, action) => {
      const itemId = action.payload;
      const index = state.items.findIndex((item: any) => item.id === itemId);

      if (index !== -1) {
        state.items[index].quantity++
      }

      state.total = calculateTotal(state.items)
    },
    decreaseItemQuantity: (state, action) => {
      const itemId = action.payload;
      const index = state.items.findIndex((item: any) => item.id === itemId);

      if (index !== -1) {
        const item = state.items[index];
        if (item.quantity > 1) {
          item.quantity--;
        }
        else {
          state.items.splice(index, 1);
        }
      }

      state.total = calculateTotal(state.items);
    },
    clearCart: (state) => {
      state.items.length = 0
      state.total = 0
    },
    deleteItemFromCart: (state, action) => {
      const itemId = action.payload
      state.items = state.items.filter((item: any) => item.id !== itemId)
      state.total = calculateTotal(state.items);
    }
  },
})

const calculateTotal = (cartItems: CartItem[]) => {
  let total = 0
  for (const item of cartItems) {
    total += item.price * item.quantity
  }
  return total
}

export const { addToCart, increaseItemQuantity, decreaseItemQuantity, clearCart, deleteItemFromCart } = cartSlice.actions
export default cartSlice.reducer