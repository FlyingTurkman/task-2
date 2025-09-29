'use client'

import { productType } from "@/types"
import { productsPageSearchParamsType } from "./page"
import ProductsSidebar from "@/components/products/ProductsSidebar"
import { useProductsContext } from "@/context/ProductsPageContextProvider"














export default function ProductsPageClient() {

    const { searchParams } = useProductsContext()

    return (
        <div
        className="flex flex-row items-start gap-4"
        >
            <ProductsSidebar/>
        </div>
    )
}