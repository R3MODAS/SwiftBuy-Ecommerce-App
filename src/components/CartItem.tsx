"use client"

import { increaseItemQuantity, decreaseItemQuantity, deleteItemFromCart } from "@/utils/store/features/cartSlice";
import { useAppDispatch } from "@/utils/store/hooks";
import { Item } from "@/utils/types";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";

const CartItem = (item: Item) => {
  const dispatch = useAppDispatch()

  const handleIncreaseItemQuantity = (id: number) => {
    dispatch(increaseItemQuantity(id))
  }

  const handleDecreaseItemQuantity = (id: number) => {
    dispatch(decreaseItemQuantity(id))
  }

  const handleDeleteItem = (id: number) => {
    dispatch(deleteItemFromCart(id))
  }

  return (
    <div className="flex items-center sm:justify-normal justify-center gap-5 sm:gap-10 mb-5">
      <div className="w-40 h-24 sm:block hidden">
        <img className="w-full h-full object-cover rounded-lg" src={item?.thumbnail} alt={item?.title} />
      </div>
      <div className="flex-1">
        <h3 className="font-medium sm:text-base text-sm">{item?.title}</h3>
        <p className="text-base font-bold">${item?.price}</p>
        <button onClick={() => handleDeleteItem(item?.id)} className="text-xl text-red-600"><IoTrashOutline /></button>
      </div>
      <div className="text-xl flex items-center gap-2">
        <button onClick={() => handleDecreaseItemQuantity(item?.id)}>
          <FiMinusCircle />
        </button>
        <button>
          {item?.quantity}
        </button>
        <button onClick={() => handleIncreaseItemQuantity(item?.id)}>
          <FiPlusCircle />
        </button>
      </div>
    </div>
  )
}

export default CartItem