"use client"

import Link from "next/link"
import { MdStars } from "react-icons/md";
import { useEffect, useState } from "react"
import { categories } from "@/utils/categories";
import { Products } from "@/utils/types";
import Loader from "@/components/Loader";

const Product = () => {
  const [products, setProducts] = useState<Products[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([])
  const [searchText, setSearchText] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(true)

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
      setIsLoading(false)
    } catch (err: any) {
      console.log(err.message)
      setErrorMessage("Failed to load products.")
      setIsLoading(false)
    }
  }

  // ============== Filter Functionality ==============
  const handleFilterProduct = (categoryName: string) => {
    const filtered = products?.filter(product => product?.category?.toLowerCase() === categoryName?.toLowerCase())
    setFilteredProducts(filtered)
  }

  const handleResetFilter = () => {
    setFilteredProducts(products)
  }

  // ============== Search Functionality ==============
  const handleSearchProduct = () => {
    if (searchText) {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredProducts(filtered);
      setErrorMessage(filtered.length ? "" : `Sorry, we couldn't find any results for "${searchText}"`);
    } else {
      setFilteredProducts(products);
      setErrorMessage("");
    }
  }

  const handleResetSearch = () => {
    setFilteredProducts(products)
    setSearchText("")
    setErrorMessage("")
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="container mx-auto mt-10">
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
          <input value={searchText} onChange={e => {
            setSearchText(e.target.value)
            handleSearchProduct()
          }} type="text" placeholder="Search for Products..." className="border border-gray-300 placeholder:text-gray-500 px-4 py-3 w-full relative" />
          {
            searchText && <button onClick={handleResetSearch} className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-purple-600 cursor-pointer">Cancel</button>
          }
        </div>
      </div>

      <div className={`product-container grid gap-y-10 place-items-center my-20 ${filteredProducts?.length === 0 ? "min-h-64" : "h-auto"}`}>
        {errorMessage && <h3 className="text-2xl font-bold tracking-tight">{errorMessage}</h3>}
        {
          (products && products?.length > 0) ?
            filteredProducts?.map((product) => (
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