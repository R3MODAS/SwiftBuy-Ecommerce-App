"use client"

import Loader from "@/components/Loader"
import { addToCart } from "@/utils/store/features/cartSlice"
import { useAppDispatch } from "@/utils/store/hooks"
import Link from "next/link"
import { useEffect, useState } from "react"

const ProductDetails = ({ params }: any) => {
  const { id } = params
  const [productDetails, setProductDetails] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const dispatch = useAppDispatch()

  useEffect(() => {
    fetchProductDetails()
  }, [])

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`)
      const data = await response.json()
      setProductDetails(data)
      setIsLoading(false)
    } catch (err: any) {
      console.log(err.message)
      setIsLoading(false)
    }
  }

  const handleAddToCart = () => {
    dispatch(addToCart(productDetails?.id))
  }

  if (isLoading) return <Loader />

  return (
    <div className="container mx-auto my-24">
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
        <div className="flex justify-center items-center gap-x-10">
          <div className="w-1/2">
            <img className="w-full" src={productDetails?.thumbnail} alt={productDetails?.title} />
          </div>
          <div className="flex flex-col text-left w-1/2">
            <h2 className="text-3xl font-bold">{productDetails?.title}</h2>
            <p className="text-base font-medium py-2">{productDetails?.description}</p>
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