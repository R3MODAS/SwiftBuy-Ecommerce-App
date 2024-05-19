import { createSlice } from '@reduxjs/toolkit'

interface CartState {
  items: object[]
}

const initialState: CartState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload]
    }
  },
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer