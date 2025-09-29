'use client'

import { productType } from "@/types"
import { productsPageSearchParamsType } from "./page"
import ProductsSidebar from "@/components/products/ProductsSidebar"
import { useProductsContext } from "@/context/ProductsPageContextProvider"
import { useEffect, useState } from "react"
import ProductCard from "@/components/products/ProductCard"














export default function ProductsPageClient() {

    const { products: initialProducts, searchParams } = useProductsContext()

    const [products, setProducts] = useState<productType[]>(initialProducts)

    useEffect(() => {
        let filteredProducts: productType[] = [...initialProducts]

        if (searchParams?.category) {
            filteredProducts = filteredProducts.filter((p) => p.category == searchParams.category)
        }

        if (searchParams?.minPrice) {
            const minPrice = parseFloat(searchParams.minPrice) 

            if (!isNaN(minPrice)) {
                filteredProducts = filteredProducts.filter((p) => p.price >= minPrice)
            }
        }

        if (searchParams?.maxPrice) {
            const maxPrice = parseFloat(searchParams.maxPrice) 

            if (!isNaN(maxPrice)) {
                filteredProducts = filteredProducts.filter((p) => p.price <= maxPrice)
            }
        }

        if (searchParams?.priceOrder) {
            const priceOrder = searchParams.priceOrder

            if (priceOrder == 'asc' || priceOrder == 'desc') {
                filteredProducts = filteredProducts.sort((a, b) => priceOrder == 'asc' ? a.price - b.price : b.price - a.price)
            }
        }

        setProducts(filteredProducts)

    }, [searchParams, initialProducts])
    return (
        <div
        className="flex flex-row items-start gap-4 container mx-auto"
        >
            <ProductsSidebar/>
            <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            >
                {products.map((product) => {

                    return (
                        <div
                        key={product.id}
                        className="p-4"
                        >
                            <ProductCard
                            product={product}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}