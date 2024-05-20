"use client"

import { addToCart } from "@/utils/store/features/cartSlice"
import { useAppDispatch, useAppSelector } from "@/utils/store/hooks"
import { Products } from "@/utils/types"
import Link from "next/link"
import { useEffect, useState } from "react"
import toast from 'react-hot-toast';

const ProductDetails = ({ params }: any) => {
  const { id } = params
  const [productDetails, setProductDetails] = useState<Products | null>(null)
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(store => store.cart.items)

  useEffect(() => {
    fetchProductDetails()
  }, [])

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`)
      const data = await response.json()
      setProductDetails(data)
    } catch (err: any) {
      console.log(err.message)
    }
  }

  const handleAddToCart = () => {
    const isItemInCart = cartItems?.some((item: Products) => item?.id === productDetails?.id)
    if (isItemInCart) {
      toast.error("Already added to the Cart")
    } else {
      dispatch(addToCart({ ...productDetails, quantity: 1 }))
      toast.success("Added to the Cart")
    }

  }

  return (
    <div className="container mx-auto my-24 px-3">
      {/* Breadcrumbs */}
      <div className="flex text-sm" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link href="/" className="inline-flex items-center font-medium hover:text-purple-600 text-purple-500 capitalize">
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-purple-500 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                href={`/product/${productDetails?.id}`}
                className="ms-1 font-medium hover:text-purple-600 text-purple-500 capitalize">
                {productDetails?.title}
              </Link>
            </div>
          </li>
        </ol>
      </div>

      {/* Product Details Section */}
      <section className="mt-10">
        <div className="flex md:flex-row flex-col justify-center items-center md:gap-10 gap-8">
          <div className="md:w-1/2 w-full">
            <img className="md:w-full mx-auto" src={productDetails?.thumbnail} alt={productDetails?.title} />
          </div>
          <div className="flex flex-col text-center md:text-left md:w-1/2">
            <h2 className="md:text-3xl text-2xl font-bold">{productDetails?.title}</h2>
            <p className="md:text-base text-sm md:w-auto md:mx-0 mx-auto font-medium md:py-2 py-1">{productDetails?.description}</p>
            <p className="font-bold text-2xl pb-3">${productDetails?.price}</p>
            <div>
              <button onClick={handleAddToCart} className="common-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetails