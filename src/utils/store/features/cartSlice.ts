import { createSlice, current } from '@reduxjs/toolkit'

interface CartItem {
  id: number;
  quantity: number;
  price: number;
}

interface CartState {
  items: CartItem[];
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
    },
    increaseItemQuantity: (state, action) => {
      const itemId = action.payload;
      const index = state.items.findIndex((item: any) => item.id === itemId);

      if (index !== -1) {
        state.items[index] = {
          ...state.items[index],
          quantity: state.items[index].quantity + 1,
          price: state.items[index].price * (state.items[index].quantity + 1)
        };
        console.log(state.items[index])
      }
    },
    decreaseItemQuantity: (state, action) => {
      const itemId = action.payload
      const findItem: any = state.items?.find((item: any) => item?.id === itemId)
      if (findItem?.quantity >= 1) {
        findItem!.quantity--
        console.log(current(findItem))
      }
      else if (findItem?.quantity < 1) {
        console.log("Limit")
      }
    }
  },
})

export const { addToCart, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions
export default cartSlice.reducer