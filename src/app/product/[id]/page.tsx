import ProductDetailsItem from "@/components/product-details"

const fetchProductDetails = async (id: string) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await response.json()
    return data
  } catch (err: any) {
    console.log(err.message)
    throw new Error(err.message)
  }
}

const ProductDetails = async ({ params }: any) => {
  const productDetails = await fetchProductDetails(params?.id)
  return <ProductDetailsItem productDetails={productDetails} />
}

export default ProductDetails