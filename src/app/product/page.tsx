"use client"

import Link from "next/link"
import { MdStars } from "react-icons/md";
import { useEffect, useState } from "react"
import { categories } from "@/utils/categories";
import { Products } from "@/utils/types";

const Product = () => {
  const [Products, setProducts] = useState<Products[]>([])
  const [FilteredProducts, setFilteredProducts] = useState<Products[]>([])
  const [SearchProduct, setSearchProduct] = useState<string>("")
  const [ErrorMessage, setErrorMessage] = useState<string>("")

  // ============== Fetch the Products ==============
  useEffect(() => {
    fetchAllProducts()
  }, [])

  const fetchAllProducts = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products`)
      const data = await response.json()
      setProducts(data?.products)
      setFilteredProducts(data?.products)
    } catch (err: any) {
      console.log(err.message)
    }
  }

  // ============== Filter Functionality ==============
  const handleFilterProduct = (categoryName: string) => {
    setFilteredProducts(Products?.filter(product => product?.category !== categoryName))
  }

  const handleResetFilter = () => {
    setFilteredProducts(Products)
  }

  // ============== Search Functionality ==============
  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearchProduct()
    }, 800)

    return () => {
      clearTimeout(timer)
    }
  }, [SearchProduct])

  const handleSearchProduct = () => {
    if (SearchProduct !== "") {
      const filteredProducts = Products?.filter(product => product?.title?.toLowerCase()?.includes(SearchProduct?.toLowerCase()))
      setFilteredProducts(filteredProducts)
      setErrorMessage("")

      if (filteredProducts?.length === 0) {
        setErrorMessage(`Sorry, we couldn't find any results for "${SearchProduct}"`)
      }
    }
    else {
      setErrorMessage("")
      setFilteredProducts(Products)
    }
  }

  const handleResetSearch = () => {
    setFilteredProducts(Products)
    setSearchProduct("")
  }

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-center font-bold text-4xl pt-5 pb-16">Obsessed? We Are Too! Shop Now</h2>

      {/* Filter Products */}
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-x-7">
          {
            categories?.map((item) => (
              <button className="category-btn"
                key={item?.id} onClick={() => handleFilterProduct(item?.category)}>
                {item?.category}
              </button>
            ))
          }
          <button className="category-btn" onClick={handleResetFilter}>
            Reset Filters
          </button>
        </div>
        <div className="w-96 relative">
          <input value={SearchProduct} onChange={e => setSearchProduct(e.target.value)} type="text" placeholder="Search for Products..." className="border border-gray-300 placeholder:text-gray-500 px-4 py-3 w-full relative" />
          {
            SearchProduct && <button onClick={handleResetSearch} className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-purple-600 cursor-pointer">Cancel</button>
          }
        </div>
      </div>

      <div className="product-container">
        {ErrorMessage && <h3 className="text-2xl font-bold tracking-tight">{ErrorMessage}</h3>}
        {
          Products && Products.length > 0 ?
            FilteredProducts?.map((product: any) => (
              <Link href={`/product/${product?.id}`} key={product?.id} className="product-card">
                <div className="w-full h-44 mb-4">
                  <img src={product?.images[0]} alt={product?.title} className="w-full h-full object-cover object-top rounded-xl" loading="lazy" />
                </div>
                <div className="leading-5">
                  <h3 className="text-base font-bold capitalize">{product?.title}</h3>
                  <p className="text-base my-2 flex items-center gap-1 tracking-tight">
                    <span className="text-xl text-purple-600"><MdStars /></span>
                    <span className="text-gray-500 font-medium">{product?.rating} ({product?.stock})</span>
                  </p>
                  <p className="text-base font-semibold">${product?.price}</p>
                </div>
              </Link>
            ))
            : <h2 className="font-bold text-xl">No Products are found !!!</h2>
        }
      </div>
    </div>
  )
}

export default Product