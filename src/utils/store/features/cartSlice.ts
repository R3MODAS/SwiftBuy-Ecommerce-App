import { createSlice } from '@reduxjs/toolkit'

interface CartState {
  items: object[];
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
      state.items = [...state.items, action.payload]
      state.total = action.payload.price
    }
  },
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer