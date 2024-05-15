"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MdStars } from "react-icons/md";

export default function Home() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState<Boolean>(false)

  useEffect(() => {
    fetchProductData()
  }, [])

  const fetchProductData = async () => {
    try {
      setLoading(true)
      const response = await fetch(`https://fakestoreapi.com/products`)
      if (!response.ok) {
        const err: any = response.status
        throw new Error(err.message)
      }
      else {
        const data = await response.json()
        console.log(data)
        setProducts(data)
      }
    } catch (err: any) {
      console.log(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto my-24">
      <h2 className="text-3xl text-center my-10 font-bold">Featured Products</h2>
      <ul className="flex flex-wrap items-center gap-20 justify-center">
        {
          loading ? <div className="loader"></div> :
            <>
              {
                products?.map((product: any) => (
                  <Link href={`/product/${product?.id}`} key={product?.id} className="w-64 h-72 cursor-pointer">
                    <div className="w-full h-44 mb-3">
                      <img src={product?.image} alt={product?.title} className="w-full h-full object-contain" loading="lazy" />
                    </div>
                    <div className="leading-5">
                      <h3 className="text-base font-bold">{product?.title}</h3>
                      <p className="text-base my-1 flex items-center gap-1 tracking-tight">
                        <span className="text-xl text-purple-600"><MdStars /></span>
                        <span className="text-gray-500 font-medium">{product?.rating?.rate} ({product?.rating?.count})</span>
                      </p>
                      <p className="text-base font-semibold">${product?.price}</p>
                    </div>
                  </Link>
                ))
              }
            </>
        }
      </ul>
    </div>
  );
}
