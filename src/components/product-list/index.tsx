"use client"

import Link from "next/link"
import { MdStars } from "react-icons/md";

const ProductList = ({ productList }: any) => {

    return (
        <div className="container mx-auto">
            <div>
                <input type="text" />
            </div>

            <div className="product-container">
                {
                    productList && productList.length > 0 ?
                        productList?.map((product: any) => (
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
                        : null
                }
            </div>
        </div>
    )
}

export default ProductList

