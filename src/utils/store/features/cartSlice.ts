import { createSlice } from '@reduxjs/toolkit'

export interface CartState {
  items: object[];
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload)
    }
  },
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer