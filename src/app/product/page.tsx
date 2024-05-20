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
  useEffect(() => {
    handleSearchProduct()
  }, [searchText])

  const handleSearchProduct = () => {
    if (searchText !== "") {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      )
      setFilteredProducts(filtered)
      setErrorMessage("")

      if (filtered?.length === 0) {
        setErrorMessage(`Sorry, we couldn't find any results for "${searchText}"`)
      }
    } else {
      setFilteredProducts(products)
      setErrorMessage("")
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
    <div className="container mx-auto mt-10 xl-px-2 px-5">
      <h2 className="lg:text-left text-center font-bold text-2xl lg:text-3xl">Obsessed? We Are Too! Shop Now</h2>

      {/* Filter Products */}
      <div className="flex flex-wrap items-center justify-center xl:justify-between xl:gap-0 gap-5 xl:mt-10 mb-10 mt-6">
        <div className="flex flex-wrap items-center justify-center lg:gap-7 gap-2">
          {
            categories?.map((item) => (
              <button key={item?.id} onClick={() => handleFilterProduct(item?.category)} className="flex items-center justify-center capitalize lg:text-base text-sm font-normal">
                <div className="rounded-3xl px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-purple-600 text-purple-600">
                  <span className="absolute w-64 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-20 bg-purple-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease" />
                  <span className="relative text-purple-600 transition duration-500 group-hover:text-white ease">{item?.category}</span>
                </div>
              </button>
            ))
          }
          <button className="flex items-center justify-center capitalize lg:text-base text-sm font-normal" onClick={handleResetFilter}>
            <div className="rounded-3xl px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-purple-600 text-purple-600">
              <span className="absolute w-64 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-20 bg-purple-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease" />
              <span className="relative text-purple-600 transition duration-500 group-hover:text-white ease">Reset Filters</span>
            </div>
          </button>
        </div>
        <div className="w-[350px] relative text-sm sm:px-0 px-2">
          <input value={searchText} onChange={e => {
            setSearchText(e.target.value)
          }} type="text" placeholder="Search for Products..." className="border border-purple-600 placeholder:text-gray-500 px-4 py-3 w-full relative rounded-3xl focus:border-purple-600 active:border-purple-600" />
          {
            searchText && <button onClick={handleResetSearch} className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-purple-600 cursor-pointer">Cancel</button>
          }
        </div>
      </div>

      <div className={`product-container ${filteredProducts?.length === 0 ? "min-h-80" : "h-auto"}`}>
        {errorMessage && <h3 className="text-2xl font-bold tracking-tight">{errorMessage}</h3>}
        {
          (products && products?.length > 0) ?
            filteredProducts?.map((product) => (
              <Link href={`/product/${product?.id}`} key={product?.id} className="product-card">
                <div className="w-full h-36 lg:h-52 lg:mb-4 mb-2">
                  <img src={product?.images[0]} alt={product?.title} className="w-full h-full object-cover object-top rounded-xl" loading="lazy" />
                </div>
                <div className="leading-5">
                  <h3 className="text-base font-bold capitalize">{product?.title}</h3>
                  <p className="text-base mt-1 mb-2 flex items-center gap-1 tracking-tight">
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