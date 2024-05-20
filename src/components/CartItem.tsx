"use client"

import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

const CartItem = (item: any) => {
  console.log(item)

  return (
    <div className="flex items-center gap-5 mb-5">
      <div className="w-40 h-24">
        <img className="w-full h-full object-cover rounded-lg" src={item?.thumbnail} alt={item?.title} />
      </div>
      <div className="flex-1">
        <h3 className="font-bold">{item?.title}</h3>
        <span className="text-sm">${item?.price}</span>
      </div>
      <div className="text-xl flex items-center gap-2">
        <button>
          <FiMinusCircle />
        </button>
        <button>
          {item?.quantity}
        </button>
        <button>
          <FiPlusCircle />
        </button>
      </div>
    </div>
  )
}

export default CartItem