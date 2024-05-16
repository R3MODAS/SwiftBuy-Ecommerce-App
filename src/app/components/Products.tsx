"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdStars, MdClose } from "react-icons/md";
import { categories } from "../utils/categories";

const Products = () => {
  const [Products, setProducts] = useState<any[]>([])
  const [FilteredProducts, setFilteredProducts] = useState<any[]>([])
  const [Loading, setLoading] = useState<Boolean>(false)

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
        setProducts(data)
        setFilteredProducts(data)
      }
    } catch (err: any) {
      console.log(err.message)
    } finally {
      setLoading(false)
    }
  }

  const truncateString = (str: string) => {
    return str?.length >= 50 ? str.slice(0, 50) + "...." : str
  }

  const handleFilterProduct = (e: any) => {

    if(!e.target.classList.contains("active")){
      e.target.classList.add("active")
      const categoryName = e.target.innerText.toLowerCase()
      const filtered = Products?.filter((product) =>
        product?.category !== categoryName
      )
      console.log(filtered)
    }
    else{
      e.target.classList.remove("active")
    }
  }

  return (
    <>
      <h2 className="text-center font-bold text-4xl">New Arrival</h2>
      <div className="flex items-center justify-center gap-x-7 mt-11" onClick={handleFilterProduct}>
        {
          categories?.map((item) => (
            <button className="category-btn" key={item?.id}>
              {item?.category}
              <span className="text-xl pl-2 hidden"><MdClose /></span>
            </button>
          ))
        }
      </div>

      <ul className="product-container">
        {
          Loading ? <div className="loader"></div> :
            <>
              {
                FilteredProducts?.map((product: any) => (
                  <Link href={`/product/${product?.id}`} key={product?.id} className="w-64 h-72 cursor-pointer">
                    <div className="w-full h-44 mb-3">
                      <img src={product?.image} alt={product?.title} className="w-full h-full object-contain" loading="lazy" />
                    </div>
                    <div className="leading-5">
                      <h3 className="text-base font-bold">{truncateString(product?.title)}</h3>
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
    </>
  )
}

export default Products