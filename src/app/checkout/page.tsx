"use client"

import CartItem from "@/components/CartItem"
import { clearCart } from "@/utils/store/features/cartSlice"
import { useAppDispatch, useAppSelector } from "@/utils/store/hooks"
import { Item } from "@/utils/types"
import Link from "next/link"

const Checkout = () => {
  const { items, total } = useAppSelector(store => store.cart)
  const dispatch = useAppDispatch()

  return (
    <section className='w-[90vw] mx-auto max-w-3xl my-20'>
      {
        (items && items?.length !== 0) ?
          <div className="mt-7">
            <h2 className="text-center text-2xl font-bold">Cart Items</h2>
            <div className="py-5">
            {items.map((item: Item) => {
              return <CartItem key={item.id} {...item} />
            })}
            </div>
            <hr />
            <div className="text-center pt-5">
              <div className="text-xl mb-3">
                <p className="font-medium">Total: <span className="font-bold">${total?.toFixed(2)}</span></p>
              </div>
              <div className="flex items-center justify-center gap-x-5">
              <button onClick={() => dispatch(clearCart())} className="common-btn">Clear Cart</button>
              <button className="common-btn">Buy Now</button>
              </div>
            </div>
          </div> :
          <div className="text-center flex flex-col justify-center items-center">
            <img className="h-72 mx-auto" src="./assets/empty-cart.gif" alt="empty-cart" />
            <h2 className="text-xl font-bold mt-3">Your cart is empty</h2>
            <p className="text-sm md:pt-1 pt-0.5 lg:mb-8 mb-5">You can go to home page to view more products</p>
            <div>
              <Link href="/" className="common-btn">Home</Link>
            </div>
          </div>
      }

    </section>
  )
}

export default Checkout