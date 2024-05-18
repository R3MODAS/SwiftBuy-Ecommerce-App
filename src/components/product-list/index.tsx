import Product from "@/app/product/page"

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

const ProductList = async () => {
    const productList = await fetchAllProducts()
    return (
        <Product productList={productList} />
    )
}

export default ProductList