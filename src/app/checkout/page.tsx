"use client"

import { useAppSelector } from "@/utils/store/hooks"

const Checkout = () => {

  const cartItems = useAppSelector(store => store.cart.items)

  return (
    <div className="my-24 container mx-auto flex flex-col justify-center items-center min-h-screen">
      <div className="min-w-80 min-h-3 bg-white shadow-lg px-8 rounded-md">
        {
          cartItems?.map((item: any) => (
            <div key={item?.id} className="flex justify-center p-5 items-start gap-x-5">
              <div className="w-24 h-20 flex-2">
                <img className="w-full h-full object-cover rounded-lg" src={item?.thumbnail} alt={item?.title} />
              </div>
              <div className="flex-1">
                <h3>{item?.title}</h3>
              </div>
              <div className="flex-3">
                <p>${item?.price}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Checkout