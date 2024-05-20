"use client"

import CartItem from "@/components/CartItem"
import { useAppSelector } from "@/utils/store/hooks"

const Checkout = () => {

  const { items, quantity, total } = useAppSelector(store => store.cart)

  return (
    <section className='w-[90vw] mx-auto max-w-3xl my-24'>
      <h2 className="text-center text-3xl font-bold">Cart Items</h2>
      {
        (items && items?.length !== 0) ?
          <>
            <div>
              {items.map((item: any) => {
                return <CartItem key={item.id} {...item} />;
              })}
            </div>
            <footer>
              <hr />
              <div className='cart-total'>
                {
                  total ?
                    <h4>
                      total <span>${total.toFixed(2)}</span>
                    </h4> :
                    <h4>
                      total <span>${total}</span>
                    </h4>
                }
              </div>
              <button className='btn clear-btn'>
                clear cart
              </button>
            </footer>
          </> :
          <div className="my-10">
              <h2 className="text-center">Cart is Empty</h2>
          </div>
      }

    </section>
  )
}

export default Checkout