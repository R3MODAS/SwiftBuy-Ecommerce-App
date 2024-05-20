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
      state.items = [...state.items, action.payload]
      state.total = action.payload.price * action.payload.quantity
    },
    increaseItemQuantity: (state, action) => {
      const itemId = action.payload;
      const index = state.items.findIndex((item: any) => item.id === itemId);

      if (index !== -1) {
        state.items[index] = {
          ...state.items[index],
          quantity: state.items[index].quantity + 1
        };
        state.total = state.items[index].price * (state.items[index].quantity + 1)
      }
    },
    decreaseItemQuantity: (state, action) => {
      const itemId = action.payload;
      const index = state.items.findIndex((item: any) => item.id === itemId);

      if (index !== -1) {
        const item = state.items[index];
        if (item.quantity > 1) {

        }
        else {
          state.items.splice(index, 1);
        }
      }
    }
  },
})

export const { addToCart, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions
export default cartSlice.reducer