"use client"

import { Product } from "@/app/utils/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductId = () => {
  const [ProductDetails, setProductDetails] = useState<Product | null>(null)
  const { productId } = useParams();

  useEffect(() => {
    fetchProductDetails()
  }, [productId])

  const fetchProductDetails = async () => {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      setProductDetails(data)
    } catch (err: any) {
      console.log(err.message)
    }
  }

  return (
    <div className="container mx-auto mt-24">
      {/* Breadcrumbs */}
      <div className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium hover:text-gray-500 text-gray-400 capitalize">
              {ProductDetails?.category}
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
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
                href={`/product/${productId}`}
                className="ms-1 text-sm font-medium hover:text-gray-500 text-gray-400 capitalize">
                {ProductDetails?.title}
              </Link>
            </div>
          </li>
        </ol>
      </div>

      {/* Product Details Section */}
      <section className="mt-10">
        <div className="grid grid-cols-2 justify-center items-start">
          <div className="mx-auto">
            <img src={ProductDetails?.image} alt={ProductDetails?.title} className="h-[700px] mix-blend-multiply" />
          </div>
          <div className="flex flex-col justify-center h-full w-3/4">
            <h2 className="text-4xl font-bold">{ProductDetails?.title}</h2>
            <p className="py-5 text-base font-medium">{ProductDetails?.description}</p>
            <p className="font-bold text-2xl pb-6">${ProductDetails?.price}</p>
            <div className="flex flex-wrap gap-x-5 ">
              <button className="common-btn">Buy Now</button>
              <button className="common-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductId