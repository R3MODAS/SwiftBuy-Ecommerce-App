"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MdStars } from "react-icons/md";
import { categories } from "../utils/categories";
import { Product } from "../utils/types";

const Products = () => {
  const [Products, setProducts] = useState<Product[]>([])
  const [FilteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [Loading, setLoading] = useState<boolean>(false)
  const [SearchProduct, setSearchProduct] = useState<string>("")
  const [ErrorMessage, setErrorMessage] = useState<string>("")

  // ============== Fetch the Products ==============
  useEffect(() => {
    fetchProductData()
  }, [])

  const fetchProductData = async () => {
    try {
      setLoading(true)
      const response = await fetch(`https://fakestoreapi.com/products`)
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      else {
        const data: Product[] = await response.json()
        setProducts(data)
        setFilteredProducts(data)
      }
    } catch (err: any) {
      console.error(err.message);
    } finally {
      setLoading(false)
    }
  }

  // ============== Truncate the String ==============
  const truncateString = (str: string) => {
    return str?.length > 50 ? str.slice(0, 50) + "...." : str
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

      if (filteredProducts.length === 0) {
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
    <section id="shop">
      <div className="container mx-auto py-10">
        <h2 className="text-center font-bold text-4xl pt-5 pb-16">Obsessed? We Are Too! Shop Now</h2>

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

        <ul className="product-container">
          {
            Loading ? <div className="loader"></div> :
              <>
                {ErrorMessage && <h3 className="text-2xl font-bold tracking-tight">{ErrorMessage}</h3>}
                {
                  FilteredProducts?.map((product: any) => (
                    <Link href={`/product/${product?.id}`} key={product?.id} className="product-card">
                      <div className="w-full h-44 mb-4">
                        <img src={product?.image} alt={product?.title} className="w-full h-full object-contain mix-blend-multiply" loading="lazy" />
                      </div>
                      <div className="leading-5">
                        <h3 className="text-base font-bold">{truncateString(product?.title)}</h3>
                        <p className="text-base my-2 flex items-center gap-1 tracking-tight">
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
    </section>
  )
}

export default Products