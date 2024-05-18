import ProductList from "@/components/product-list"

const fetchAllProducts = async () => {
  try {
    const response = await fetch(`https://dummyjson.com/products`)
    const data = await response.json()
    return data?.products
  } catch (err: any) {
    console.log(err.message)
    throw new Error(err.message)
  }
}

const Product = async () => {
  const productList = await fetchAllProducts()
  return (
    <ProductList productList={productList} />
  )
}

export default Product